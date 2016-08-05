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
import TestInterfaces = require("./interfaces/TestInterfaces");
import TfsCoreInterfaces = require("./interfaces/CoreInterfaces");

export interface ITestApi extends basem.ClientApiBase {
    getActionResults(project: string, runId: number, testCaseResultId: number, iterationId: number, actionPath?: string): Promise<TestInterfaces.TestActionResultModel[]>;
    createTestIterationResultAttachment(attachmentRequestModel: TestInterfaces.TestAttachmentRequestModel, project: string, runId: number, testCaseResultId: number, iterationId: number, actionPath?: string): Promise<TestInterfaces.TestAttachmentReference>;
    createTestResultAttachment(attachmentRequestModel: TestInterfaces.TestAttachmentRequestModel, project: string, runId: number, testCaseResultId: number): Promise<TestInterfaces.TestAttachmentReference>;
    getTestResultAttachmentContent(project: string, runId: number, testCaseResultId: number, attachmentId: number): Promise<NodeJS.ReadableStream>;
    getTestResultAttachments(project: string, runId: number, testCaseResultId: number): Promise<TestInterfaces.TestAttachment[]>;
    getTestResultAttachmentZip(project: string, runId: number, testCaseResultId: number, attachmentId: number): Promise<NodeJS.ReadableStream>;
    createTestRunAttachment(attachmentRequestModel: TestInterfaces.TestAttachmentRequestModel, project: string, runId: number): Promise<TestInterfaces.TestAttachmentReference>;
    getTestRunAttachmentContent(project: string, runId: number, attachmentId: number): Promise<NodeJS.ReadableStream>;
    getTestRunAttachments(project: string, runId: number): Promise<TestInterfaces.TestAttachment[]>;
    getTestRunAttachmentZip(project: string, runId: number, attachmentId: number): Promise<NodeJS.ReadableStream>;
    getBugsLinkedToTestResult(project: string, runId: number, testCaseResultId: number): Promise<TestInterfaces.WorkItemReference[]>;
    getCloneInformation(project: string, cloneOperationId: number, includeDetails?: boolean): Promise<TestInterfaces.CloneOperationInformation>;
    cloneTestPlan(cloneRequestBody: TestInterfaces.TestPlanCloneRequest, project: string, planId: number): Promise<TestInterfaces.CloneOperationInformation>;
    cloneTestSuite(cloneRequestBody: TestInterfaces.TestSuiteCloneRequest, project: string, planId: number, sourceSuiteId: number): Promise<TestInterfaces.CloneOperationInformation>;
    getBuildCodeCoverage(project: string, buildId: number, flags: number): Promise<TestInterfaces.BuildCoverage[]>;
    getCodeCoverageSummary(project: string, buildId: number, deltaBuildId?: number): Promise<TestInterfaces.CodeCoverageSummary>;
    updateCodeCoverageSummary(coverageData: TestInterfaces.CodeCoverageData, project: string, buildId: number): Promise<void>;
    getTestRunCodeCoverage(project: string, runId: number, flags: number): Promise<TestInterfaces.TestRunCoverage[]>;
    createTestConfiguration(testConfiguration: TestInterfaces.TestConfiguration, project: string): Promise<TestInterfaces.TestConfiguration>;
    deleteTestConfiguration(project: string, testConfigurationId: number): Promise<void>;
    getTestConfigurationById(project: string, testConfigurationId: number): Promise<TestInterfaces.TestConfiguration>;
    getTestConfigurations(project: string, skip?: number, top?: number, includeAllProperties?: boolean): Promise<TestInterfaces.TestConfiguration[]>;
    updateTestConfiguration(testConfiguration: TestInterfaces.TestConfiguration, project: string, testConfigurationId: number): Promise<TestInterfaces.TestConfiguration>;
    addCustomFields(newFields: TestInterfaces.CustomTestFieldDefinition[], project: string): Promise<TestInterfaces.CustomTestFieldDefinition[]>;
    queryCustomFields(project: string, scopeFilter: TestInterfaces.CustomTestFieldScope): Promise<TestInterfaces.CustomTestFieldDefinition[]>;
    queryTestResultHistory(filter: TestInterfaces.ResultsFilter, project: string): Promise<TestInterfaces.TestResultHistory>;
    getTestIteration(project: string, runId: number, testCaseResultId: number, iterationId: number, includeActionResults?: boolean): Promise<TestInterfaces.TestIterationDetailsModel>;
    getTestIterations(project: string, runId: number, testCaseResultId: number, includeActionResults?: boolean): Promise<TestInterfaces.TestIterationDetailsModel[]>;
    getTestRunLogs(project: string, runId: number): Promise<TestInterfaces.TestMessageLogDetails[]>;
    getResultParameters(project: string, runId: number, testCaseResultId: number, iterationId: number, paramName?: string): Promise<TestInterfaces.TestResultParameterModel[]>;
    createTestPlan(testPlan: TestInterfaces.PlanUpdateModel, project: string): Promise<TestInterfaces.TestPlan>;
    deleteTestPlan(project: string, planId: number): Promise<void>;
    getPlanById(project: string, planId: number): Promise<TestInterfaces.TestPlan>;
    getPlans(project: string, owner?: string, skip?: number, top?: number, includePlanDetails?: boolean, filterActivePlans?: boolean): Promise<TestInterfaces.TestPlan[]>;
    updateTestPlan(planUpdateModel: TestInterfaces.PlanUpdateModel, project: string, planId: number): Promise<TestInterfaces.TestPlan>;
    getPoint(project: string, planId: number, suiteId: number, pointIds: number, witFields?: string): Promise<TestInterfaces.TestPoint>;
    getPoints(project: string, planId: number, suiteId: number, witFields?: string, configurationId?: string, testCaseId?: string, testPointIds?: string, includePointDetails?: boolean, skip?: number, top?: number): Promise<TestInterfaces.TestPoint[]>;
    updateTestPoints(pointUpdateModel: TestInterfaces.PointUpdateModel, project: string, planId: number, suiteId: number, pointIds: string): Promise<TestInterfaces.TestPoint[]>;
    getTestResultDetailsForBuild(project: string, buildId: number, publishContext?: string, groupBy?: string, filter?: string, orderby?: string): Promise<TestInterfaces.TestResultsDetails>;
    getTestResultDetailsForRelease(project: string, releaseId: number, releaseEnvId: number, publishContext?: string, groupBy?: string, filter?: string, orderby?: string): Promise<TestInterfaces.TestResultsDetails>;
    getResultRetentionSettings(project: string): Promise<TestInterfaces.ResultRetentionSettings>;
    updateResultRetentionSettings(retentionSettings: TestInterfaces.ResultRetentionSettings, project: string): Promise<TestInterfaces.ResultRetentionSettings>;
    addTestResultsToTestRun(results: TestInterfaces.TestCaseResult[], project: string, runId: number): Promise<TestInterfaces.TestCaseResult[]>;
    getTestResultById(project: string, runId: number, testCaseResultId: number, detailsToInclude?: TestInterfaces.ResultDetails): Promise<TestInterfaces.TestCaseResult>;
    getTestResults(project: string, runId: number, detailsToInclude?: TestInterfaces.ResultDetails, skip?: number, top?: number): Promise<TestInterfaces.TestCaseResult[]>;
    updateTestResults(results: TestInterfaces.TestCaseResult[], project: string, runId: number): Promise<TestInterfaces.TestCaseResult[]>;
    getTestResultsByQuery(query: TestInterfaces.TestResultsQuery, project: string): Promise<TestInterfaces.TestResultsQuery>;
    queryTestResultsReportForBuild(project: string, buildId: number, publishContext?: string, includeFailureDetails?: boolean, buildToCompare?: TestInterfaces.BuildReference): Promise<TestInterfaces.TestResultSummary>;
    queryTestResultsReportForRelease(project: string, releaseId: number, releaseEnvId: number, publishContext?: string, includeFailureDetails?: boolean, releaseToCompare?: TestInterfaces.ReleaseReference): Promise<TestInterfaces.TestResultSummary>;
    queryTestResultsSummaryForReleases(releases: TestInterfaces.ReleaseReference[], project: string): Promise<TestInterfaces.TestResultSummary[]>;
    queryTestSummaryByRequirement(resultsContext: TestInterfaces.TestResultsContext, project: string, workItemIds?: number[]): Promise<TestInterfaces.TestSummaryForWorkItem[]>;
    queryResultTrendForBuild(filter: TestInterfaces.TestResultTrendFilter, project: string): Promise<TestInterfaces.AggregatedDataForResultTrend[]>;
    getTestRunStatistics(project: string, runId: number): Promise<TestInterfaces.TestRunStatistic>;
    createTestRun(testRun: TestInterfaces.RunCreateModel, project: string): Promise<TestInterfaces.TestRun>;
    deleteTestRun(project: string, runId: number): Promise<void>;
    getTestRunById(project: string, runId: number): Promise<TestInterfaces.TestRun>;
    getTestRuns(project: string, buildUri?: string, owner?: string, tmiRunId?: string, planId?: number, includeRunDetails?: boolean, automated?: boolean, skip?: number, top?: number): Promise<TestInterfaces.TestRun[]>;
    updateTestRun(runUpdateModel: TestInterfaces.RunUpdateModel, project: string, runId: number): Promise<TestInterfaces.TestRun>;
    createTestSession(testSession: TestInterfaces.TestSession, teamContext: TfsCoreInterfaces.TeamContext): Promise<TestInterfaces.TestSession>;
    getTestSessions(teamContext: TfsCoreInterfaces.TeamContext, period?: number, allSessions?: boolean, includeAllProperties?: boolean, source?: TestInterfaces.TestSessionSource, includeOnlyCompletedSessions?: boolean): Promise<TestInterfaces.TestSession[]>;
    updateTestSession(testSession: TestInterfaces.TestSession, teamContext: TfsCoreInterfaces.TeamContext): Promise<TestInterfaces.TestSession>;
    getSuiteEntries(project: string, suiteId: number): Promise<TestInterfaces.SuiteEntry[]>;
    reorderSuiteEntries(suiteEntries: TestInterfaces.SuiteEntryUpdateModel[], project: string, suiteId: number): Promise<TestInterfaces.SuiteEntry[]>;
    addTestCasesToSuite(project: string, planId: number, suiteId: number, testCaseIds: string): Promise<TestInterfaces.SuiteTestCase[]>;
    getTestCaseById(project: string, planId: number, suiteId: number, testCaseIds: number): Promise<TestInterfaces.SuiteTestCase>;
    getTestCases(project: string, planId: number, suiteId: number): Promise<TestInterfaces.SuiteTestCase[]>;
    removeTestCasesFromSuiteUrl(project: string, planId: number, suiteId: number, testCaseIds: string): Promise<void>;
    createTestSuite(testSuite: TestInterfaces.SuiteCreateModel, project: string, planId: number, suiteId: number): Promise<TestInterfaces.TestSuite[]>;
    deleteTestSuite(project: string, planId: number, suiteId: number): Promise<void>;
    getTestSuiteById(project: string, planId: number, suiteId: number, includeChildSuites?: boolean): Promise<TestInterfaces.TestSuite>;
    getTestSuitesForPlan(project: string, planId: number, includeSuites?: boolean, skip?: number, top?: number, asTreeView?: boolean): Promise<TestInterfaces.TestSuite[]>;
    updateTestSuite(suiteUpdateModel: TestInterfaces.SuiteUpdateModel, project: string, planId: number, suiteId: number): Promise<TestInterfaces.TestSuite>;
    getSuitesByTestCaseId(testCaseId: number): Promise<TestInterfaces.TestSuite[]>;
    createTestSettings(testSettings: TestInterfaces.TestSettings, project: string): Promise<number>;
    deleteTestSettings(project: string, testSettingsId: number): Promise<void>;
    getTestSettingsById(project: string, testSettingsId: number): Promise<TestInterfaces.TestSettings>;
    createTestVariable(testVariable: TestInterfaces.TestVariable, project: string): Promise<TestInterfaces.TestVariable>;
    deleteTestVariable(project: string, testVariableId: number): Promise<void>;
    getTestVariableById(project: string, testVariableId: number): Promise<TestInterfaces.TestVariable>;
    getTestVariables(project: string, skip?: number, top?: number): Promise<TestInterfaces.TestVariable[]>;
    updateTestVariable(testVariable: TestInterfaces.TestVariable, project: string, testVariableId: number): Promise<TestInterfaces.TestVariable>;
    addWorkItemToTestLinks(workItemToTestLinks: TestInterfaces.WorkItemToTestLinks, project: string): Promise<TestInterfaces.WorkItemToTestLinks>;
    deleteTestMethodToWorkItemLink(project: string, testName: string, workItemId: number): Promise<boolean>;
    queryTestMethodLinkedWorkItems(project: string, testName: string): Promise<TestInterfaces.TestToWorkItemLinks>;
    queryTestResultWorkItems(project: string, workItemCategory: string, automatedTestName?: string, testCaseId?: number, maxCompleteDate?: Date, days?: number, workItemCount?: number): Promise<TestInterfaces.WorkItemReference[]>;
}

export class TestApi extends basem.ClientApiBase implements ITestApi {
    constructor(baseUrl: string, handlers: VsoBaseInterfaces.IRequestHandler[]) {
        super(baseUrl, handlers, 'node-Test-api');
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
        ): Promise<TestInterfaces.TestActionResultModel[]> {
    
        let deferred = Q.defer<TestInterfaces.TestActionResultModel[]>();

        let onResult = (err: any, statusCode: number, ActionResults: TestInterfaces.TestActionResultModel[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(ActionResults);
            }
        };

        let routeValues: any = {
            project: project,
            runId: runId,
            testCaseResultId: testCaseResultId,
            iterationId: iterationId,
            actionPath: actionPath
        };

        this.vsoClient.getVersioningData("3.0-preview.3", "Test", "eaf40c31-ff84-4062-aafd-d5664be11a37", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = {  responseTypeMetadata: TestInterfaces.TypeInfo.TestActionResultModel, responseIsCollection: true };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
    }

    /**
    * @param {TestInterfaces.TestAttachmentRequestModel} attachmentRequestModel
    * @param {string} project - Project ID or project name
    * @param {number} runId
    * @param {number} testCaseResultId
    * @param {number} iterationId
    * @param {string} actionPath
    */
    public createTestIterationResultAttachment(
        attachmentRequestModel: TestInterfaces.TestAttachmentRequestModel,
        project: string,
        runId: number,
        testCaseResultId: number,
        iterationId: number,
        actionPath?: string
        ): Promise<TestInterfaces.TestAttachmentReference> {
    
        let deferred = Q.defer<TestInterfaces.TestAttachmentReference>();

        let onResult = (err: any, statusCode: number, Attachment: TestInterfaces.TestAttachmentReference) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(Attachment);
            }
        };

        let routeValues: any = {
            project: project,
            runId: runId,
            testCaseResultId: testCaseResultId
        };

        let queryValues: any = {
            iterationId: iterationId,
            actionPath: actionPath,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.1", "Test", "2bffebe9-2f0f-4639-9af8-56129e9fed2d", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = {  responseIsCollection: false };
                
                this.restClient.create(url, apiVersion, attachmentRequestModel, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
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
        ): Promise<TestInterfaces.TestAttachmentReference> {
    
        let deferred = Q.defer<TestInterfaces.TestAttachmentReference>();

        let onResult = (err: any, statusCode: number, Attachment: TestInterfaces.TestAttachmentReference) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(Attachment);
            }
        };

        let routeValues: any = {
            project: project,
            runId: runId,
            testCaseResultId: testCaseResultId
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "Test", "2bffebe9-2f0f-4639-9af8-56129e9fed2d", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = {  responseIsCollection: false };
                
                this.restClient.create(url, apiVersion, attachmentRequestModel, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
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
        ): Promise<NodeJS.ReadableStream> {
    
        let deferred = Q.defer<NodeJS.ReadableStream>();

        let onResult = (err: any, statusCode: number, Attachment: NodeJS.ReadableStream) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(Attachment);
            }
        };

        let routeValues: any = {
            project: project,
            runId: runId,
            testCaseResultId: testCaseResultId,
            attachmentId: attachmentId
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "Test", "2bffebe9-2f0f-4639-9af8-56129e9fed2d", routeValues)
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
    * Returns attachment references for test result.
    * 
    * @param {string} project - Project ID or project name
    * @param {number} runId
    * @param {number} testCaseResultId
    */
    public getTestResultAttachments(
        project: string,
        runId: number,
        testCaseResultId: number
        ): Promise<TestInterfaces.TestAttachment[]> {
    
        let deferred = Q.defer<TestInterfaces.TestAttachment[]>();

        let onResult = (err: any, statusCode: number, Attachments: TestInterfaces.TestAttachment[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(Attachments);
            }
        };

        let routeValues: any = {
            project: project,
            runId: runId,
            testCaseResultId: testCaseResultId
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "Test", "2bffebe9-2f0f-4639-9af8-56129e9fed2d", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = {  responseTypeMetadata: TestInterfaces.TypeInfo.TestAttachment, responseIsCollection: true };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
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
        ): Promise<NodeJS.ReadableStream> {
    
        let deferred = Q.defer<NodeJS.ReadableStream>();

        let onResult = (err: any, statusCode: number, Attachment: NodeJS.ReadableStream) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(Attachment);
            }
        };

        let routeValues: any = {
            project: project,
            runId: runId,
            testCaseResultId: testCaseResultId,
            attachmentId: attachmentId
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "Test", "2bffebe9-2f0f-4639-9af8-56129e9fed2d", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = {  responseIsCollection: false };
                
                this.httpClient.getStream(url, apiVersion, "application/zip", onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
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
        ): Promise<TestInterfaces.TestAttachmentReference> {
    
        let deferred = Q.defer<TestInterfaces.TestAttachmentReference>();

        let onResult = (err: any, statusCode: number, Attachment: TestInterfaces.TestAttachmentReference) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(Attachment);
            }
        };

        let routeValues: any = {
            project: project,
            runId: runId
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "Test", "4f004af4-a507-489c-9b13-cb62060beb11", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = {  responseIsCollection: false };
                
                this.restClient.create(url, apiVersion, attachmentRequestModel, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
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
        ): Promise<NodeJS.ReadableStream> {
    
        let deferred = Q.defer<NodeJS.ReadableStream>();

        let onResult = (err: any, statusCode: number, Attachment: NodeJS.ReadableStream) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(Attachment);
            }
        };

        let routeValues: any = {
            project: project,
            runId: runId,
            attachmentId: attachmentId
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "Test", "4f004af4-a507-489c-9b13-cb62060beb11", routeValues)
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
    * Returns attachment references for test run.
    * 
    * @param {string} project - Project ID or project name
    * @param {number} runId
    */
    public getTestRunAttachments(
        project: string,
        runId: number
        ): Promise<TestInterfaces.TestAttachment[]> {
    
        let deferred = Q.defer<TestInterfaces.TestAttachment[]>();

        let onResult = (err: any, statusCode: number, Attachments: TestInterfaces.TestAttachment[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(Attachments);
            }
        };

        let routeValues: any = {
            project: project,
            runId: runId
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "Test", "4f004af4-a507-489c-9b13-cb62060beb11", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = {  responseTypeMetadata: TestInterfaces.TypeInfo.TestAttachment, responseIsCollection: true };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
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
        ): Promise<NodeJS.ReadableStream> {
    
        let deferred = Q.defer<NodeJS.ReadableStream>();

        let onResult = (err: any, statusCode: number, Attachment: NodeJS.ReadableStream) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(Attachment);
            }
        };

        let routeValues: any = {
            project: project,
            runId: runId,
            attachmentId: attachmentId
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "Test", "4f004af4-a507-489c-9b13-cb62060beb11", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = {  responseIsCollection: false };
                
                this.httpClient.getStream(url, apiVersion, "application/zip", onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
    }

    /**
    * @param {string} project - Project ID or project name
    * @param {number} runId
    * @param {number} testCaseResultId
    */
    public getBugsLinkedToTestResult(
        project: string,
        runId: number,
        testCaseResultId: number
        ): Promise<TestInterfaces.WorkItemReference[]> {
    
        let deferred = Q.defer<TestInterfaces.WorkItemReference[]>();

        let onResult = (err: any, statusCode: number, Bugs: TestInterfaces.WorkItemReference[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(Bugs);
            }
        };

        let routeValues: any = {
            project: project,
            runId: runId,
            testCaseResultId: testCaseResultId
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "Test", "6de20ca2-67de-4faf-97fa-38c5d585eb00", routeValues)
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
    * @param {string} project - Project ID or project name
    * @param {number} cloneOperationId
    * @param {boolean} includeDetails
    */
    public getCloneInformation(
        project: string,
        cloneOperationId: number,
        includeDetails?: boolean
        ): Promise<TestInterfaces.CloneOperationInformation> {
    
        let deferred = Q.defer<TestInterfaces.CloneOperationInformation>();

        let onResult = (err: any, statusCode: number, CloneOperation: TestInterfaces.CloneOperationInformation) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(CloneOperation);
            }
        };

        let routeValues: any = {
            project: project,
            cloneOperationId: cloneOperationId
        };

        let queryValues: any = {
            '$includeDetails': includeDetails,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.2", "Test", "5b9d6320-abed-47a5-a151-cd6dc3798be6", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = {  responseTypeMetadata: TestInterfaces.TypeInfo.CloneOperationInformation, responseIsCollection: false };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
    }

    /**
    * @param {TestInterfaces.TestPlanCloneRequest} cloneRequestBody
    * @param {string} project - Project ID or project name
    * @param {number} planId
    */
    public cloneTestPlan(
        cloneRequestBody: TestInterfaces.TestPlanCloneRequest,
        project: string,
        planId: number
        ): Promise<TestInterfaces.CloneOperationInformation> {
    
        let deferred = Q.defer<TestInterfaces.CloneOperationInformation>();

        let onResult = (err: any, statusCode: number, CloneOperation: TestInterfaces.CloneOperationInformation) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(CloneOperation);
            }
        };

        let routeValues: any = {
            project: project,
            planId: planId
        };

        this.vsoClient.getVersioningData("3.0-preview.2", "Test", "edc3ef4b-8460-4e86-86fa-8e4f5e9be831", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = { requestTypeMetadata: TestInterfaces.TypeInfo.TestPlanCloneRequest, responseTypeMetadata: TestInterfaces.TypeInfo.CloneOperationInformation, responseIsCollection: false };
                
                this.restClient.create(url, apiVersion, cloneRequestBody, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
    }

    /**
    * @param {TestInterfaces.TestSuiteCloneRequest} cloneRequestBody
    * @param {string} project - Project ID or project name
    * @param {number} planId
    * @param {number} sourceSuiteId
    */
    public cloneTestSuite(
        cloneRequestBody: TestInterfaces.TestSuiteCloneRequest,
        project: string,
        planId: number,
        sourceSuiteId: number
        ): Promise<TestInterfaces.CloneOperationInformation> {
    
        let deferred = Q.defer<TestInterfaces.CloneOperationInformation>();

        let onResult = (err: any, statusCode: number, CloneOperation: TestInterfaces.CloneOperationInformation) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(CloneOperation);
            }
        };

        let routeValues: any = {
            project: project,
            planId: planId,
            sourceSuiteId: sourceSuiteId
        };

        this.vsoClient.getVersioningData("3.0-preview.2", "Test", "751e4ab5-5bf6-4fb5-9d5d-19ef347662dd", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = {  responseTypeMetadata: TestInterfaces.TypeInfo.CloneOperationInformation, responseIsCollection: false };
                
                this.restClient.create(url, apiVersion, cloneRequestBody, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
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
        ): Promise<TestInterfaces.BuildCoverage[]> {
    
        let deferred = Q.defer<TestInterfaces.BuildCoverage[]>();

        let onResult = (err: any, statusCode: number, CodeCoverage: TestInterfaces.BuildCoverage[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(CodeCoverage);
            }
        };

        let routeValues: any = {
            project: project
        };

        let queryValues: any = {
            buildId: buildId,
            flags: flags,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.1", "Test", "77560e8a-4e8c-4d59-894e-a5f264c24444", routeValues, queryValues)
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
    * @param {string} project - Project ID or project name
    * @param {number} buildId
    * @param {number} deltaBuildId
    */
    public getCodeCoverageSummary(
        project: string,
        buildId: number,
        deltaBuildId?: number
        ): Promise<TestInterfaces.CodeCoverageSummary> {
    
        let deferred = Q.defer<TestInterfaces.CodeCoverageSummary>();

        let onResult = (err: any, statusCode: number, CodeCoverage: TestInterfaces.CodeCoverageSummary) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(CodeCoverage);
            }
        };

        let routeValues: any = {
            project: project
        };

        let queryValues: any = {
            buildId: buildId,
            deltaBuildId: deltaBuildId,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.1", "Test", "77560e8a-4e8c-4d59-894e-a5f264c24444", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = {  responseIsCollection: false };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
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
            project: project
        };

        let queryValues: any = {
            buildId: buildId,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.1", "Test", "77560e8a-4e8c-4d59-894e-a5f264c24444", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = {  responseIsCollection: false };
                
                this.restClient.create(url, apiVersion, coverageData, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode);
            });

        return deferred.promise;
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
        ): Promise<TestInterfaces.TestRunCoverage[]> {
    
        let deferred = Q.defer<TestInterfaces.TestRunCoverage[]>();

        let onResult = (err: any, statusCode: number, CodeCoverage: TestInterfaces.TestRunCoverage[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(CodeCoverage);
            }
        };

        let routeValues: any = {
            project: project,
            runId: runId
        };

        let queryValues: any = {
            flags: flags,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.1", "Test", "9629116f-3b89-4ed8-b358-d4694efda160", routeValues, queryValues)
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
    * @param {TestInterfaces.TestConfiguration} testConfiguration
    * @param {string} project - Project ID or project name
    */
    public createTestConfiguration(
        testConfiguration: TestInterfaces.TestConfiguration,
        project: string
        ): Promise<TestInterfaces.TestConfiguration> {
    
        let deferred = Q.defer<TestInterfaces.TestConfiguration>();

        let onResult = (err: any, statusCode: number, Configuration: TestInterfaces.TestConfiguration) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(Configuration);
            }
        };

        let routeValues: any = {
            project: project
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "Test", "d667591b-b9fd-4263-997a-9a084cca848f", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = { requestTypeMetadata: TestInterfaces.TypeInfo.TestConfiguration, responseTypeMetadata: TestInterfaces.TypeInfo.TestConfiguration, responseIsCollection: false };
                
                this.restClient.create(url, apiVersion, testConfiguration, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
    }

    /**
    * @param {string} project - Project ID or project name
    * @param {number} testConfigurationId
    */
    public deleteTestConfiguration(
        project: string,
        testConfigurationId: number
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
            project: project,
            testConfigurationId: testConfigurationId
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "Test", "d667591b-b9fd-4263-997a-9a084cca848f", routeValues)
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
    * @param {string} project - Project ID or project name
    * @param {number} testConfigurationId
    */
    public getTestConfigurationById(
        project: string,
        testConfigurationId: number
        ): Promise<TestInterfaces.TestConfiguration> {
    
        let deferred = Q.defer<TestInterfaces.TestConfiguration>();

        let onResult = (err: any, statusCode: number, Configuration: TestInterfaces.TestConfiguration) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(Configuration);
            }
        };

        let routeValues: any = {
            project: project,
            testConfigurationId: testConfigurationId
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "Test", "d667591b-b9fd-4263-997a-9a084cca848f", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = {  responseTypeMetadata: TestInterfaces.TypeInfo.TestConfiguration, responseIsCollection: false };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
    }

    /**
    * @param {string} project - Project ID or project name
    * @param {number} skip
    * @param {number} top
    * @param {boolean} includeAllProperties
    */
    public getTestConfigurations(
        project: string,
        skip?: number,
        top?: number,
        includeAllProperties?: boolean
        ): Promise<TestInterfaces.TestConfiguration[]> {
    
        let deferred = Q.defer<TestInterfaces.TestConfiguration[]>();

        let onResult = (err: any, statusCode: number, Configurations: TestInterfaces.TestConfiguration[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(Configurations);
            }
        };

        let routeValues: any = {
            project: project
        };

        let queryValues: any = {
            '$skip': skip,
            '$top': top,
            includeAllProperties: includeAllProperties,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.1", "Test", "d667591b-b9fd-4263-997a-9a084cca848f", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = {  responseTypeMetadata: TestInterfaces.TypeInfo.TestConfiguration, responseIsCollection: true };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
    }

    /**
    * @param {TestInterfaces.TestConfiguration} testConfiguration
    * @param {string} project - Project ID or project name
    * @param {number} testConfigurationId
    */
    public updateTestConfiguration(
        testConfiguration: TestInterfaces.TestConfiguration,
        project: string,
        testConfigurationId: number
        ): Promise<TestInterfaces.TestConfiguration> {
    
        let deferred = Q.defer<TestInterfaces.TestConfiguration>();

        let onResult = (err: any, statusCode: number, Configuration: TestInterfaces.TestConfiguration) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(Configuration);
            }
        };

        let routeValues: any = {
            project: project,
            testConfigurationId: testConfigurationId
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "Test", "d667591b-b9fd-4263-997a-9a084cca848f", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = { requestTypeMetadata: TestInterfaces.TypeInfo.TestConfiguration, responseTypeMetadata: TestInterfaces.TypeInfo.TestConfiguration, responseIsCollection: false };
                
                this.restClient.update(url, apiVersion, testConfiguration, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
    }

    /**
    * @param {TestInterfaces.CustomTestFieldDefinition[]} newFields
    * @param {string} project - Project ID or project name
    */
    public addCustomFields(
        newFields: TestInterfaces.CustomTestFieldDefinition[],
        project: string
        ): Promise<TestInterfaces.CustomTestFieldDefinition[]> {
    
        let deferred = Q.defer<TestInterfaces.CustomTestFieldDefinition[]>();

        let onResult = (err: any, statusCode: number, ExtensionFields: TestInterfaces.CustomTestFieldDefinition[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(ExtensionFields);
            }
        };

        let routeValues: any = {
            project: project
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "Test", "8ce1923b-f4c7-4e22-b93b-f6284e525ec2", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = { requestTypeMetadata: TestInterfaces.TypeInfo.CustomTestFieldDefinition, responseTypeMetadata: TestInterfaces.TypeInfo.CustomTestFieldDefinition, responseIsCollection: true };
                
                this.restClient.create(url, apiVersion, newFields, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
    }

    /**
    * @param {string} project - Project ID or project name
    * @param {TestInterfaces.CustomTestFieldScope} scopeFilter
    */
    public queryCustomFields(
        project: string,
        scopeFilter: TestInterfaces.CustomTestFieldScope
        ): Promise<TestInterfaces.CustomTestFieldDefinition[]> {
    
        let deferred = Q.defer<TestInterfaces.CustomTestFieldDefinition[]>();

        let onResult = (err: any, statusCode: number, ExtensionFields: TestInterfaces.CustomTestFieldDefinition[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(ExtensionFields);
            }
        };

        let routeValues: any = {
            project: project
        };

        let queryValues: any = {
            scopeFilter: scopeFilter,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.1", "Test", "8ce1923b-f4c7-4e22-b93b-f6284e525ec2", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = {  responseTypeMetadata: TestInterfaces.TypeInfo.CustomTestFieldDefinition, responseIsCollection: true };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
    }

    /**
    * @param {TestInterfaces.ResultsFilter} filter
    * @param {string} project - Project ID or project name
    */
    public queryTestResultHistory(
        filter: TestInterfaces.ResultsFilter,
        project: string
        ): Promise<TestInterfaces.TestResultHistory> {
    
        let deferred = Q.defer<TestInterfaces.TestResultHistory>();

        let onResult = (err: any, statusCode: number, History: TestInterfaces.TestResultHistory) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(History);
            }
        };

        let routeValues: any = {
            project: project
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "Test", "234616f5-429c-4e7b-9192-affd76731dfd", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = { requestTypeMetadata: TestInterfaces.TypeInfo.ResultsFilter, responseTypeMetadata: TestInterfaces.TypeInfo.TestResultHistory, responseIsCollection: false };
                
                this.restClient.create(url, apiVersion, filter, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
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
        ): Promise<TestInterfaces.TestIterationDetailsModel> {
    
        let deferred = Q.defer<TestInterfaces.TestIterationDetailsModel>();

        let onResult = (err: any, statusCode: number, Iteration: TestInterfaces.TestIterationDetailsModel) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(Iteration);
            }
        };

        let routeValues: any = {
            project: project,
            runId: runId,
            testCaseResultId: testCaseResultId,
            iterationId: iterationId
        };

        let queryValues: any = {
            includeActionResults: includeActionResults,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.3", "Test", "73eb9074-3446-4c44-8296-2f811950ff8d", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = {  responseTypeMetadata: TestInterfaces.TypeInfo.TestIterationDetailsModel, responseIsCollection: false };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
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
        ): Promise<TestInterfaces.TestIterationDetailsModel[]> {
    
        let deferred = Q.defer<TestInterfaces.TestIterationDetailsModel[]>();

        let onResult = (err: any, statusCode: number, Iterations: TestInterfaces.TestIterationDetailsModel[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(Iterations);
            }
        };

        let routeValues: any = {
            project: project,
            runId: runId,
            testCaseResultId: testCaseResultId
        };

        let queryValues: any = {
            includeActionResults: includeActionResults,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.3", "Test", "73eb9074-3446-4c44-8296-2f811950ff8d", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = {  responseTypeMetadata: TestInterfaces.TypeInfo.TestIterationDetailsModel, responseIsCollection: true };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
    }

    /**
    * @param {string} project - Project ID or project name
    * @param {number} runId
    */
    public getTestRunLogs(
        project: string,
        runId: number
        ): Promise<TestInterfaces.TestMessageLogDetails[]> {
    
        let deferred = Q.defer<TestInterfaces.TestMessageLogDetails[]>();

        let onResult = (err: any, statusCode: number, MessageLogs: TestInterfaces.TestMessageLogDetails[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(MessageLogs);
            }
        };

        let routeValues: any = {
            project: project,
            runId: runId
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "Test", "a1e55200-637e-42e9-a7c0-7e5bfdedb1b3", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = {  responseTypeMetadata: TestInterfaces.TypeInfo.TestMessageLogDetails, responseIsCollection: true };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
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
        ): Promise<TestInterfaces.TestResultParameterModel[]> {
    
        let deferred = Q.defer<TestInterfaces.TestResultParameterModel[]>();

        let onResult = (err: any, statusCode: number, ParameterResults: TestInterfaces.TestResultParameterModel[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(ParameterResults);
            }
        };

        let routeValues: any = {
            project: project,
            runId: runId,
            testCaseResultId: testCaseResultId,
            iterationId: iterationId
        };

        let queryValues: any = {
            paramName: paramName,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.3", "Test", "7c69810d-3354-4af3-844a-180bd25db08a", routeValues, queryValues)
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
    * @param {TestInterfaces.PlanUpdateModel} testPlan
    * @param {string} project - Project ID or project name
    */
    public createTestPlan(
        testPlan: TestInterfaces.PlanUpdateModel,
        project: string
        ): Promise<TestInterfaces.TestPlan> {
    
        let deferred = Q.defer<TestInterfaces.TestPlan>();

        let onResult = (err: any, statusCode: number, Plan: TestInterfaces.TestPlan) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(Plan);
            }
        };

        let routeValues: any = {
            project: project
        };

        this.vsoClient.getVersioningData("3.0-preview.2", "Test", "51712106-7278-4208-8563-1c96f40cf5e4", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = {  responseTypeMetadata: TestInterfaces.TypeInfo.TestPlan, responseIsCollection: false };
                
                this.restClient.create(url, apiVersion, testPlan, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
    }

    /**
    * @param {string} project - Project ID or project name
    * @param {number} planId
    */
    public deleteTestPlan(
        project: string,
        planId: number
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
            project: project,
            planId: planId
        };

        this.vsoClient.getVersioningData("3.0-preview.2", "Test", "51712106-7278-4208-8563-1c96f40cf5e4", routeValues)
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
    * @param {string} project - Project ID or project name
    * @param {number} planId
    */
    public getPlanById(
        project: string,
        planId: number
        ): Promise<TestInterfaces.TestPlan> {
    
        let deferred = Q.defer<TestInterfaces.TestPlan>();

        let onResult = (err: any, statusCode: number, Plan: TestInterfaces.TestPlan) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(Plan);
            }
        };

        let routeValues: any = {
            project: project,
            planId: planId
        };

        this.vsoClient.getVersioningData("3.0-preview.2", "Test", "51712106-7278-4208-8563-1c96f40cf5e4", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = {  responseTypeMetadata: TestInterfaces.TypeInfo.TestPlan, responseIsCollection: false };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
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
        ): Promise<TestInterfaces.TestPlan[]> {
    
        let deferred = Q.defer<TestInterfaces.TestPlan[]>();

        let onResult = (err: any, statusCode: number, Plans: TestInterfaces.TestPlan[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(Plans);
            }
        };

        let routeValues: any = {
            project: project
        };

        let queryValues: any = {
            owner: owner,
            '$skip': skip,
            '$top': top,
            includePlanDetails: includePlanDetails,
            filterActivePlans: filterActivePlans,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.2", "Test", "51712106-7278-4208-8563-1c96f40cf5e4", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = {  responseTypeMetadata: TestInterfaces.TypeInfo.TestPlan, responseIsCollection: true };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
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
        ): Promise<TestInterfaces.TestPlan> {
    
        let deferred = Q.defer<TestInterfaces.TestPlan>();

        let onResult = (err: any, statusCode: number, Plan: TestInterfaces.TestPlan) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(Plan);
            }
        };

        let routeValues: any = {
            project: project,
            planId: planId
        };

        this.vsoClient.getVersioningData("3.0-preview.2", "Test", "51712106-7278-4208-8563-1c96f40cf5e4", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = {  responseTypeMetadata: TestInterfaces.TypeInfo.TestPlan, responseIsCollection: false };
                
                this.restClient.update(url, apiVersion, planUpdateModel, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
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
        ): Promise<TestInterfaces.TestPoint> {
    
        let deferred = Q.defer<TestInterfaces.TestPoint>();

        let onResult = (err: any, statusCode: number, Point: TestInterfaces.TestPoint) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(Point);
            }
        };

        let routeValues: any = {
            project: project,
            planId: planId,
            suiteId: suiteId,
            pointIds: pointIds
        };

        let queryValues: any = {
            witFields: witFields,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.2", "Test", "3bcfd5c8-be62-488e-b1da-b8289ce9299c", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = {  responseTypeMetadata: TestInterfaces.TypeInfo.TestPoint, responseIsCollection: false };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
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
        ): Promise<TestInterfaces.TestPoint[]> {
    
        let deferred = Q.defer<TestInterfaces.TestPoint[]>();

        let onResult = (err: any, statusCode: number, Points: TestInterfaces.TestPoint[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(Points);
            }
        };

        let routeValues: any = {
            project: project,
            planId: planId,
            suiteId: suiteId
        };

        let queryValues: any = {
            witFields: witFields,
            configurationId: configurationId,
            testCaseId: testCaseId,
            testPointIds: testPointIds,
            includePointDetails: includePointDetails,
            '$skip': skip,
            '$top': top,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.2", "Test", "3bcfd5c8-be62-488e-b1da-b8289ce9299c", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = {  responseTypeMetadata: TestInterfaces.TypeInfo.TestPoint, responseIsCollection: true };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
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
        ): Promise<TestInterfaces.TestPoint[]> {
    
        let deferred = Q.defer<TestInterfaces.TestPoint[]>();

        let onResult = (err: any, statusCode: number, Point: TestInterfaces.TestPoint[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(Point);
            }
        };

        let routeValues: any = {
            project: project,
            planId: planId,
            suiteId: suiteId,
            pointIds: pointIds
        };

        this.vsoClient.getVersioningData("3.0-preview.2", "Test", "3bcfd5c8-be62-488e-b1da-b8289ce9299c", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = {  responseTypeMetadata: TestInterfaces.TypeInfo.TestPoint, responseIsCollection: true };
                
                this.restClient.update(url, apiVersion, pointUpdateModel, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
    }

    /**
    * @param {string} project - Project ID or project name
    * @param {number} buildId
    * @param {string} publishContext
    * @param {string} groupBy
    * @param {string} filter
    * @param {string} orderby
    */
    public getTestResultDetailsForBuild(
        project: string,
        buildId: number,
        publishContext?: string,
        groupBy?: string,
        filter?: string,
        orderby?: string
        ): Promise<TestInterfaces.TestResultsDetails> {
    
        let deferred = Q.defer<TestInterfaces.TestResultsDetails>();

        let onResult = (err: any, statusCode: number, ResultDetailsByBuild: TestInterfaces.TestResultsDetails) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(ResultDetailsByBuild);
            }
        };

        let routeValues: any = {
            project: project
        };

        let queryValues: any = {
            buildId: buildId,
            publishContext: publishContext,
            groupBy: groupBy,
            '$filter': filter,
            '$orderby': orderby,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.1", "Test", "efb387b0-10d5-42e7-be40-95e06ee9430f", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = {  responseTypeMetadata: TestInterfaces.TypeInfo.TestResultsDetails, responseIsCollection: false };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
    }

    /**
    * @param {string} project - Project ID or project name
    * @param {number} releaseId
    * @param {number} releaseEnvId
    * @param {string} publishContext
    * @param {string} groupBy
    * @param {string} filter
    * @param {string} orderby
    */
    public getTestResultDetailsForRelease(
        project: string,
        releaseId: number,
        releaseEnvId: number,
        publishContext?: string,
        groupBy?: string,
        filter?: string,
        orderby?: string
        ): Promise<TestInterfaces.TestResultsDetails> {
    
        let deferred = Q.defer<TestInterfaces.TestResultsDetails>();

        let onResult = (err: any, statusCode: number, ResultDetailsByRelease: TestInterfaces.TestResultsDetails) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(ResultDetailsByRelease);
            }
        };

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
        };
        
        this.vsoClient.getVersioningData("3.0-preview.1", "Test", "b834ec7e-35bb-450f-a3c8-802e70ca40dd", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = {  responseTypeMetadata: TestInterfaces.TypeInfo.TestResultsDetails, responseIsCollection: false };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
    }

    /**
    * @param {string} project - Project ID or project name
    */
    public getResultRetentionSettings(
        project: string
        ): Promise<TestInterfaces.ResultRetentionSettings> {
    
        let deferred = Q.defer<TestInterfaces.ResultRetentionSettings>();

        let onResult = (err: any, statusCode: number, ResultRetentionSetting: TestInterfaces.ResultRetentionSettings) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(ResultRetentionSetting);
            }
        };

        let routeValues: any = {
            project: project
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "Test", "a3206d9e-fa8d-42d3-88cb-f75c51e69cde", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = {  responseTypeMetadata: TestInterfaces.TypeInfo.ResultRetentionSettings, responseIsCollection: false };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
    }

    /**
    * @param {TestInterfaces.ResultRetentionSettings} retentionSettings
    * @param {string} project - Project ID or project name
    */
    public updateResultRetentionSettings(
        retentionSettings: TestInterfaces.ResultRetentionSettings,
        project: string
        ): Promise<TestInterfaces.ResultRetentionSettings> {
    
        let deferred = Q.defer<TestInterfaces.ResultRetentionSettings>();

        let onResult = (err: any, statusCode: number, ResultRetentionSetting: TestInterfaces.ResultRetentionSettings) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(ResultRetentionSetting);
            }
        };

        let routeValues: any = {
            project: project
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "Test", "a3206d9e-fa8d-42d3-88cb-f75c51e69cde", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = { requestTypeMetadata: TestInterfaces.TypeInfo.ResultRetentionSettings, responseTypeMetadata: TestInterfaces.TypeInfo.ResultRetentionSettings, responseIsCollection: false };
                
                this.restClient.update(url, apiVersion, retentionSettings, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
    }

    /**
    * @param {TestInterfaces.TestCaseResult[]} results
    * @param {string} project - Project ID or project name
    * @param {number} runId
    */
    public addTestResultsToTestRun(
        results: TestInterfaces.TestCaseResult[],
        project: string,
        runId: number
        ): Promise<TestInterfaces.TestCaseResult[]> {
    
        let deferred = Q.defer<TestInterfaces.TestCaseResult[]>();

        let onResult = (err: any, statusCode: number, Results: TestInterfaces.TestCaseResult[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(Results);
            }
        };

        let routeValues: any = {
            project: project,
            runId: runId
        };

        this.vsoClient.getVersioningData("3.0-preview.4", "Test", "4637d869-3a76-4468-8057-0bb02aa385cf", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = { requestTypeMetadata: TestInterfaces.TypeInfo.TestCaseResult, responseTypeMetadata: TestInterfaces.TypeInfo.TestCaseResult, responseIsCollection: true };
                
                this.restClient.create(url, apiVersion, results, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
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
        ): Promise<TestInterfaces.TestCaseResult> {
    
        let deferred = Q.defer<TestInterfaces.TestCaseResult>();

        let onResult = (err: any, statusCode: number, Result: TestInterfaces.TestCaseResult) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(Result);
            }
        };

        let routeValues: any = {
            project: project,
            runId: runId,
            testCaseResultId: testCaseResultId
        };

        let queryValues: any = {
            detailsToInclude: detailsToInclude,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.4", "Test", "4637d869-3a76-4468-8057-0bb02aa385cf", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = {  responseTypeMetadata: TestInterfaces.TypeInfo.TestCaseResult, responseIsCollection: false };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
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
        ): Promise<TestInterfaces.TestCaseResult[]> {
    
        let deferred = Q.defer<TestInterfaces.TestCaseResult[]>();

        let onResult = (err: any, statusCode: number, Results: TestInterfaces.TestCaseResult[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(Results);
            }
        };

        let routeValues: any = {
            project: project,
            runId: runId
        };

        let queryValues: any = {
            detailsToInclude: detailsToInclude,
            '$skip': skip,
            '$top': top,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.4", "Test", "4637d869-3a76-4468-8057-0bb02aa385cf", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = {  responseTypeMetadata: TestInterfaces.TypeInfo.TestCaseResult, responseIsCollection: true };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
    }

    /**
    * @param {TestInterfaces.TestCaseResult[]} results
    * @param {string} project - Project ID or project name
    * @param {number} runId
    */
    public updateTestResults(
        results: TestInterfaces.TestCaseResult[],
        project: string,
        runId: number
        ): Promise<TestInterfaces.TestCaseResult[]> {
    
        let deferred = Q.defer<TestInterfaces.TestCaseResult[]>();

        let onResult = (err: any, statusCode: number, Results: TestInterfaces.TestCaseResult[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(Results);
            }
        };

        let routeValues: any = {
            project: project,
            runId: runId
        };

        this.vsoClient.getVersioningData("3.0-preview.4", "Test", "4637d869-3a76-4468-8057-0bb02aa385cf", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = { requestTypeMetadata: TestInterfaces.TypeInfo.TestCaseResult, responseTypeMetadata: TestInterfaces.TypeInfo.TestCaseResult, responseIsCollection: true };
                
                this.restClient.update(url, apiVersion, results, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
    }

    /**
    * @param {TestInterfaces.TestResultsQuery} query
    * @param {string} project - Project ID or project name
    */
    public getTestResultsByQuery(
        query: TestInterfaces.TestResultsQuery,
        project: string
        ): Promise<TestInterfaces.TestResultsQuery> {
    
        let deferred = Q.defer<TestInterfaces.TestResultsQuery>();

        let onResult = (err: any, statusCode: number, Result: TestInterfaces.TestResultsQuery) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(Result);
            }
        };

        let routeValues: any = {
            project: project
        };

        this.vsoClient.getVersioningData("3.0-preview.4", "Test", "6711da49-8e6f-4d35-9f73-cef7a3c81a5b", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = { requestTypeMetadata: TestInterfaces.TypeInfo.TestResultsQuery, responseTypeMetadata: TestInterfaces.TypeInfo.TestResultsQuery, responseIsCollection: false };
                
                this.restClient.create(url, apiVersion, query, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
    }

    /**
    * @param {string} project - Project ID or project name
    * @param {number} buildId
    * @param {string} publishContext
    * @param {boolean} includeFailureDetails
    * @param {TestInterfaces.BuildReference} buildToCompare
    */
    public queryTestResultsReportForBuild(
        project: string,
        buildId: number,
        publishContext?: string,
        includeFailureDetails?: boolean,
        buildToCompare?: TestInterfaces.BuildReference
        ): Promise<TestInterfaces.TestResultSummary> {
    
        let deferred = Q.defer<TestInterfaces.TestResultSummary>();

        let onResult = (err: any, statusCode: number, ResultSummaryByBuild: TestInterfaces.TestResultSummary) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(ResultSummaryByBuild);
            }
        };

        let routeValues: any = {
            project: project
        };

        let queryValues: any = {
            buildId: buildId,
            publishContext: publishContext,
            includeFailureDetails: includeFailureDetails,
            buildToCompare: buildToCompare,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.1", "Test", "000ef77b-fea2-498d-a10d-ad1a037f559f", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = {  responseTypeMetadata: TestInterfaces.TypeInfo.TestResultSummary, responseIsCollection: false };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
    }

    /**
    * @param {string} project - Project ID or project name
    * @param {number} releaseId
    * @param {number} releaseEnvId
    * @param {string} publishContext
    * @param {boolean} includeFailureDetails
    * @param {TestInterfaces.ReleaseReference} releaseToCompare
    */
    public queryTestResultsReportForRelease(
        project: string,
        releaseId: number,
        releaseEnvId: number,
        publishContext?: string,
        includeFailureDetails?: boolean,
        releaseToCompare?: TestInterfaces.ReleaseReference
        ): Promise<TestInterfaces.TestResultSummary> {
    
        let deferred = Q.defer<TestInterfaces.TestResultSummary>();

        let onResult = (err: any, statusCode: number, ResultSummaryByRelease: TestInterfaces.TestResultSummary) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(ResultSummaryByRelease);
            }
        };

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
        
        this.vsoClient.getVersioningData("3.0-preview.1", "Test", "85765790-ac68-494e-b268-af36c3929744", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = {  responseTypeMetadata: TestInterfaces.TypeInfo.TestResultSummary, responseIsCollection: false };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
    }

    /**
    * @param {TestInterfaces.ReleaseReference[]} releases
    * @param {string} project - Project ID or project name
    */
    public queryTestResultsSummaryForReleases(
        releases: TestInterfaces.ReleaseReference[],
        project: string
        ): Promise<TestInterfaces.TestResultSummary[]> {
    
        let deferred = Q.defer<TestInterfaces.TestResultSummary[]>();

        let onResult = (err: any, statusCode: number, ResultSummaryByRelease: TestInterfaces.TestResultSummary[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(ResultSummaryByRelease);
            }
        };

        let routeValues: any = {
            project: project
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "Test", "85765790-ac68-494e-b268-af36c3929744", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = {  responseTypeMetadata: TestInterfaces.TypeInfo.TestResultSummary, responseIsCollection: true };
                
                this.restClient.create(url, apiVersion, releases, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
    }

    /**
    * @param {TestInterfaces.TestResultsContext} resultsContext
    * @param {string} project - Project ID or project name
    * @param {number[]} workItemIds
    */
    public queryTestSummaryByRequirement(
        resultsContext: TestInterfaces.TestResultsContext,
        project: string,
        workItemIds?: number[]
        ): Promise<TestInterfaces.TestSummaryForWorkItem[]> {
    
        let deferred = Q.defer<TestInterfaces.TestSummaryForWorkItem[]>();

        let onResult = (err: any, statusCode: number, ResultSummaryByRequirement: TestInterfaces.TestSummaryForWorkItem[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(ResultSummaryByRequirement);
            }
        };

        let routeValues: any = {
            project: project
        };

        let queryValues: any = {
            workItemIds: workItemIds && workItemIds.join(","),
        };
        
        this.vsoClient.getVersioningData("3.0-preview.1", "Test", "cd08294e-308d-4460-a46e-4cfdefba0b4b", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = { requestTypeMetadata: TestInterfaces.TypeInfo.TestResultsContext, responseTypeMetadata: TestInterfaces.TypeInfo.TestSummaryForWorkItem, responseIsCollection: true };
                
                this.restClient.create(url, apiVersion, resultsContext, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
    }

    /**
    * @param {TestInterfaces.TestResultTrendFilter} filter
    * @param {string} project - Project ID or project name
    */
    public queryResultTrendForBuild(
        filter: TestInterfaces.TestResultTrendFilter,
        project: string
        ): Promise<TestInterfaces.AggregatedDataForResultTrend[]> {
    
        let deferred = Q.defer<TestInterfaces.AggregatedDataForResultTrend[]>();

        let onResult = (err: any, statusCode: number, ResultTrendByBuild: TestInterfaces.AggregatedDataForResultTrend[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(ResultTrendByBuild);
            }
        };

        let routeValues: any = {
            project: project
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "Test", "fbc82a85-0786-4442-88bb-eb0fda6b01b0", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = { requestTypeMetadata: TestInterfaces.TypeInfo.TestResultTrendFilter, responseTypeMetadata: TestInterfaces.TypeInfo.AggregatedDataForResultTrend, responseIsCollection: true };
                
                this.restClient.create(url, apiVersion, filter, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
    }

    /**
    * @param {string} project - Project ID or project name
    * @param {number} runId
    */
    public getTestRunStatistics(
        project: string,
        runId: number
        ): Promise<TestInterfaces.TestRunStatistic> {
    
        let deferred = Q.defer<TestInterfaces.TestRunStatistic>();

        let onResult = (err: any, statusCode: number, Run: TestInterfaces.TestRunStatistic) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(Run);
            }
        };

        let routeValues: any = {
            project: project,
            runId: runId
        };

        this.vsoClient.getVersioningData("3.0-preview.2", "Test", "0a42c424-d764-4a16-a2d5-5c85f87d0ae8", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = {  responseIsCollection: false };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
    }

    /**
    * @param {TestInterfaces.RunCreateModel} testRun
    * @param {string} project - Project ID or project name
    */
    public createTestRun(
        testRun: TestInterfaces.RunCreateModel,
        project: string
        ): Promise<TestInterfaces.TestRun> {
    
        let deferred = Q.defer<TestInterfaces.TestRun>();

        let onResult = (err: any, statusCode: number, Run: TestInterfaces.TestRun) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(Run);
            }
        };

        let routeValues: any = {
            project: project
        };

        this.vsoClient.getVersioningData("3.0-preview.2", "Test", "cadb3810-d47d-4a3c-a234-fe5f3be50138", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = {  responseTypeMetadata: TestInterfaces.TypeInfo.TestRun, responseIsCollection: false };
                
                this.restClient.create(url, apiVersion, testRun, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
    }

    /**
    * @param {string} project - Project ID or project name
    * @param {number} runId
    */
    public deleteTestRun(
        project: string,
        runId: number
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
            project: project,
            runId: runId
        };

        this.vsoClient.getVersioningData("3.0-preview.2", "Test", "cadb3810-d47d-4a3c-a234-fe5f3be50138", routeValues)
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
    * @param {string} project - Project ID or project name
    * @param {number} runId
    */
    public getTestRunById(
        project: string,
        runId: number
        ): Promise<TestInterfaces.TestRun> {
    
        let deferred = Q.defer<TestInterfaces.TestRun>();

        let onResult = (err: any, statusCode: number, Run: TestInterfaces.TestRun) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(Run);
            }
        };

        let routeValues: any = {
            project: project,
            runId: runId
        };

        this.vsoClient.getVersioningData("3.0-preview.2", "Test", "cadb3810-d47d-4a3c-a234-fe5f3be50138", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = {  responseTypeMetadata: TestInterfaces.TypeInfo.TestRun, responseIsCollection: false };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
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
        ): Promise<TestInterfaces.TestRun[]> {
    
        let deferred = Q.defer<TestInterfaces.TestRun[]>();

        let onResult = (err: any, statusCode: number, Runs: TestInterfaces.TestRun[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(Runs);
            }
        };

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
        
        this.vsoClient.getVersioningData("3.0-preview.2", "Test", "cadb3810-d47d-4a3c-a234-fe5f3be50138", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = {  responseTypeMetadata: TestInterfaces.TypeInfo.TestRun, responseIsCollection: true };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
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
        ): Promise<TestInterfaces.TestRun> {
    
        let deferred = Q.defer<TestInterfaces.TestRun>();

        let onResult = (err: any, statusCode: number, Run: TestInterfaces.TestRun) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(Run);
            }
        };

        let routeValues: any = {
            project: project,
            runId: runId
        };

        this.vsoClient.getVersioningData("3.0-preview.2", "Test", "cadb3810-d47d-4a3c-a234-fe5f3be50138", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = { requestTypeMetadata: TestInterfaces.TypeInfo.RunUpdateModel, responseTypeMetadata: TestInterfaces.TypeInfo.TestRun, responseIsCollection: false };
                
                this.restClient.update(url, apiVersion, runUpdateModel, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
    }

    /**
    * @param {TestInterfaces.TestSession} testSession
    * @param {TfsCoreInterfaces.TeamContext} teamContext - The team context for the operation
    */
    public createTestSession(
        testSession: TestInterfaces.TestSession,
        teamContext: TfsCoreInterfaces.TeamContext
        ): Promise<TestInterfaces.TestSession> {
    
        let deferred = Q.defer<TestInterfaces.TestSession>();

        let onResult = (err: any, statusCode: number, Session: TestInterfaces.TestSession) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(Session);
            }
        };

        let project = teamContext.projectId || teamContext.project;
        let team = teamContext.teamId || teamContext.team;

        let routeValues: any = {
            project: project,
            team: team
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "Test", "1500b4b4-6c69-4ca6-9b18-35e9e97fe2ac", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = { requestTypeMetadata: TestInterfaces.TypeInfo.TestSession, responseTypeMetadata: TestInterfaces.TypeInfo.TestSession, responseIsCollection: false };
                
                this.restClient.create(url, apiVersion, testSession, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
    }

    /**
    * @param {TfsCoreInterfaces.TeamContext} teamContext - The team context for the operation
    * @param {number} period
    * @param {boolean} allSessions
    * @param {boolean} includeAllProperties
    * @param {TestInterfaces.TestSessionSource} source
    * @param {boolean} includeOnlyCompletedSessions
    */
    public getTestSessions(
        teamContext: TfsCoreInterfaces.TeamContext,
        period?: number,
        allSessions?: boolean,
        includeAllProperties?: boolean,
        source?: TestInterfaces.TestSessionSource,
        includeOnlyCompletedSessions?: boolean
        ): Promise<TestInterfaces.TestSession[]> {
    
        let deferred = Q.defer<TestInterfaces.TestSession[]>();

        let onResult = (err: any, statusCode: number, Session: TestInterfaces.TestSession[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(Session);
            }
        };

        let project = teamContext.projectId || teamContext.project;
        let team = teamContext.teamId || teamContext.team;

        let routeValues: any = {
            project: project,
            team: team
        };

        let queryValues: any = {
            period: period,
            allSessions: allSessions,
            includeAllProperties: includeAllProperties,
            source: source,
            includeOnlyCompletedSessions: includeOnlyCompletedSessions,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.1", "Test", "1500b4b4-6c69-4ca6-9b18-35e9e97fe2ac", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = {  responseTypeMetadata: TestInterfaces.TypeInfo.TestSession, responseIsCollection: true };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
    }

    /**
    * @param {TestInterfaces.TestSession} testSession
    * @param {TfsCoreInterfaces.TeamContext} teamContext - The team context for the operation
    */
    public updateTestSession(
        testSession: TestInterfaces.TestSession,
        teamContext: TfsCoreInterfaces.TeamContext
        ): Promise<TestInterfaces.TestSession> {
    
        let deferred = Q.defer<TestInterfaces.TestSession>();

        let onResult = (err: any, statusCode: number, Session: TestInterfaces.TestSession) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(Session);
            }
        };

        let project = teamContext.projectId || teamContext.project;
        let team = teamContext.teamId || teamContext.team;

        let routeValues: any = {
            project: project,
            team: team
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "Test", "1500b4b4-6c69-4ca6-9b18-35e9e97fe2ac", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = { requestTypeMetadata: TestInterfaces.TypeInfo.TestSession, responseTypeMetadata: TestInterfaces.TypeInfo.TestSession, responseIsCollection: false };
                
                this.restClient.update(url, apiVersion, testSession, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
    }

    /**
    * @param {string} project - Project ID or project name
    * @param {number} suiteId
    */
    public getSuiteEntries(
        project: string,
        suiteId: number
        ): Promise<TestInterfaces.SuiteEntry[]> {
    
        let deferred = Q.defer<TestInterfaces.SuiteEntry[]>();

        let onResult = (err: any, statusCode: number, SuiteEntry: TestInterfaces.SuiteEntry[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(SuiteEntry);
            }
        };

        let routeValues: any = {
            project: project,
            suiteId: suiteId
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "Test", "bf8b7f78-0c1f-49cb-89e9-d1a17bcaaad3", routeValues)
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
    * @param {TestInterfaces.SuiteEntryUpdateModel[]} suiteEntries
    * @param {string} project - Project ID or project name
    * @param {number} suiteId
    */
    public reorderSuiteEntries(
        suiteEntries: TestInterfaces.SuiteEntryUpdateModel[],
        project: string,
        suiteId: number
        ): Promise<TestInterfaces.SuiteEntry[]> {
    
        let deferred = Q.defer<TestInterfaces.SuiteEntry[]>();

        let onResult = (err: any, statusCode: number, SuiteEntry: TestInterfaces.SuiteEntry[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(SuiteEntry);
            }
        };

        let routeValues: any = {
            project: project,
            suiteId: suiteId
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "Test", "bf8b7f78-0c1f-49cb-89e9-d1a17bcaaad3", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = {  responseIsCollection: true };
                
                this.restClient.update(url, apiVersion, suiteEntries, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
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
        ): Promise<TestInterfaces.SuiteTestCase[]> {
    
        let deferred = Q.defer<TestInterfaces.SuiteTestCase[]>();

        let onResult = (err: any, statusCode: number, Suites: TestInterfaces.SuiteTestCase[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(Suites);
            }
        };

        let routeValues: any = {
            project: project,
            planId: planId,
            suiteId: suiteId,
            testCaseIds: testCaseIds
        };

        this.vsoClient.getVersioningData("3.0-preview.2", "Test", "a4a1ec1c-b03f-41ca-8857-704594ecf58e", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = {  responseIsCollection: true };
                
                this.restClient.create(url, apiVersion, null, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
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
        ): Promise<TestInterfaces.SuiteTestCase> {
    
        let deferred = Q.defer<TestInterfaces.SuiteTestCase>();

        let onResult = (err: any, statusCode: number, Suite: TestInterfaces.SuiteTestCase) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(Suite);
            }
        };

        let routeValues: any = {
            project: project,
            planId: planId,
            suiteId: suiteId,
            testCaseIds: testCaseIds
        };

        this.vsoClient.getVersioningData("3.0-preview.2", "Test", "a4a1ec1c-b03f-41ca-8857-704594ecf58e", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = {  responseIsCollection: false };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
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
        ): Promise<TestInterfaces.SuiteTestCase[]> {
    
        let deferred = Q.defer<TestInterfaces.SuiteTestCase[]>();

        let onResult = (err: any, statusCode: number, Suites: TestInterfaces.SuiteTestCase[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(Suites);
            }
        };

        let routeValues: any = {
            project: project,
            planId: planId,
            suiteId: suiteId
        };

        this.vsoClient.getVersioningData("3.0-preview.2", "Test", "a4a1ec1c-b03f-41ca-8857-704594ecf58e", routeValues)
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
            project: project,
            planId: planId,
            suiteId: suiteId,
            testCaseIds: testCaseIds
        };

        this.vsoClient.getVersioningData("3.0-preview.2", "Test", "a4a1ec1c-b03f-41ca-8857-704594ecf58e", routeValues)
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
        ): Promise<TestInterfaces.TestSuite[]> {
    
        let deferred = Q.defer<TestInterfaces.TestSuite[]>();

        let onResult = (err: any, statusCode: number, Suite: TestInterfaces.TestSuite[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(Suite);
            }
        };

        let routeValues: any = {
            project: project,
            planId: planId,
            suiteId: suiteId
        };

        this.vsoClient.getVersioningData("3.0-preview.2", "Test", "7b7619a0-cb54-4ab3-bf22-194056f45dd1", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = {  responseTypeMetadata: TestInterfaces.TypeInfo.TestSuite, responseIsCollection: true };
                
                this.restClient.create(url, apiVersion, testSuite, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
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
            project: project,
            planId: planId,
            suiteId: suiteId
        };

        this.vsoClient.getVersioningData("3.0-preview.2", "Test", "7b7619a0-cb54-4ab3-bf22-194056f45dd1", routeValues)
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
        ): Promise<TestInterfaces.TestSuite> {
    
        let deferred = Q.defer<TestInterfaces.TestSuite>();

        let onResult = (err: any, statusCode: number, Suite: TestInterfaces.TestSuite) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(Suite);
            }
        };

        let routeValues: any = {
            project: project,
            planId: planId,
            suiteId: suiteId
        };

        let queryValues: any = {
            includeChildSuites: includeChildSuites,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.2", "Test", "7b7619a0-cb54-4ab3-bf22-194056f45dd1", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = {  responseTypeMetadata: TestInterfaces.TypeInfo.TestSuite, responseIsCollection: false };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
    }

    /**
    * @param {string} project - Project ID or project name
    * @param {number} planId
    * @param {boolean} includeSuites
    * @param {number} skip
    * @param {number} top
    * @param {boolean} asTreeView
    */
    public getTestSuitesForPlan(
        project: string,
        planId: number,
        includeSuites?: boolean,
        skip?: number,
        top?: number,
        asTreeView?: boolean
        ): Promise<TestInterfaces.TestSuite[]> {
    
        let deferred = Q.defer<TestInterfaces.TestSuite[]>();

        let onResult = (err: any, statusCode: number, Suites: TestInterfaces.TestSuite[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(Suites);
            }
        };

        let routeValues: any = {
            project: project,
            planId: planId
        };

        let queryValues: any = {
            includeSuites: includeSuites,
            '$skip': skip,
            '$top': top,
            '$asTreeView': asTreeView,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.2", "Test", "7b7619a0-cb54-4ab3-bf22-194056f45dd1", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = {  responseTypeMetadata: TestInterfaces.TypeInfo.TestSuite, responseIsCollection: true };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
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
        ): Promise<TestInterfaces.TestSuite> {
    
        let deferred = Q.defer<TestInterfaces.TestSuite>();

        let onResult = (err: any, statusCode: number, Suite: TestInterfaces.TestSuite) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(Suite);
            }
        };

        let routeValues: any = {
            project: project,
            planId: planId,
            suiteId: suiteId
        };

        this.vsoClient.getVersioningData("3.0-preview.2", "Test", "7b7619a0-cb54-4ab3-bf22-194056f45dd1", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = {  responseTypeMetadata: TestInterfaces.TypeInfo.TestSuite, responseIsCollection: false };
                
                this.restClient.update(url, apiVersion, suiteUpdateModel, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
    }

    /**
    * @param {number} testCaseId
    */
    public getSuitesByTestCaseId(
        testCaseId: number
        ): Promise<TestInterfaces.TestSuite[]> {
    
        let deferred = Q.defer<TestInterfaces.TestSuite[]>();

        let onResult = (err: any, statusCode: number, Suites: TestInterfaces.TestSuite[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(Suites);
            }
        };

        let routeValues: any = {
        };

        let queryValues: any = {
            testCaseId: testCaseId,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.1", "Test", "09a6167b-e969-4775-9247-b94cf3819caf", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = {  responseTypeMetadata: TestInterfaces.TypeInfo.TestSuite, responseIsCollection: true };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
    }

    /**
    * @param {TestInterfaces.TestSettings} testSettings
    * @param {string} project - Project ID or project name
    */
    public createTestSettings(
        testSettings: TestInterfaces.TestSettings,
        project: string
        ): Promise<number> {
    
        let deferred = Q.defer<number>();

        let onResult = (err: any, statusCode: number, TestSetting: number) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(TestSetting);
            }
        };

        let routeValues: any = {
            project: project
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "Test", "8133ce14-962f-42af-a5f9-6aa9defcb9c8", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = {  responseIsCollection: false };
                
                this.restClient.create(url, apiVersion, testSettings, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
    }

    /**
    * @param {string} project - Project ID or project name
    * @param {number} testSettingsId
    */
    public deleteTestSettings(
        project: string,
        testSettingsId: number
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
            project: project,
            testSettingsId: testSettingsId
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "Test", "8133ce14-962f-42af-a5f9-6aa9defcb9c8", routeValues)
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
    * @param {string} project - Project ID or project name
    * @param {number} testSettingsId
    */
    public getTestSettingsById(
        project: string,
        testSettingsId: number
        ): Promise<TestInterfaces.TestSettings> {
    
        let deferred = Q.defer<TestInterfaces.TestSettings>();

        let onResult = (err: any, statusCode: number, TestSetting: TestInterfaces.TestSettings) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(TestSetting);
            }
        };

        let routeValues: any = {
            project: project,
            testSettingsId: testSettingsId
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "Test", "8133ce14-962f-42af-a5f9-6aa9defcb9c8", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = {  responseIsCollection: false };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
    }

    /**
    * @param {TestInterfaces.TestVariable} testVariable
    * @param {string} project - Project ID or project name
    */
    public createTestVariable(
        testVariable: TestInterfaces.TestVariable,
        project: string
        ): Promise<TestInterfaces.TestVariable> {
    
        let deferred = Q.defer<TestInterfaces.TestVariable>();

        let onResult = (err: any, statusCode: number, Variable: TestInterfaces.TestVariable) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(Variable);
            }
        };

        let routeValues: any = {
            project: project
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "Test", "be3fcb2b-995b-47bf-90e5-ca3cf9980912", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = {  responseIsCollection: false };
                
                this.restClient.create(url, apiVersion, testVariable, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
    }

    /**
    * @param {string} project - Project ID or project name
    * @param {number} testVariableId
    */
    public deleteTestVariable(
        project: string,
        testVariableId: number
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
            project: project,
            testVariableId: testVariableId
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "Test", "be3fcb2b-995b-47bf-90e5-ca3cf9980912", routeValues)
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
    * @param {string} project - Project ID or project name
    * @param {number} testVariableId
    */
    public getTestVariableById(
        project: string,
        testVariableId: number
        ): Promise<TestInterfaces.TestVariable> {
    
        let deferred = Q.defer<TestInterfaces.TestVariable>();

        let onResult = (err: any, statusCode: number, Variable: TestInterfaces.TestVariable) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(Variable);
            }
        };

        let routeValues: any = {
            project: project,
            testVariableId: testVariableId
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "Test", "be3fcb2b-995b-47bf-90e5-ca3cf9980912", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = {  responseIsCollection: false };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
    }

    /**
    * @param {string} project - Project ID or project name
    * @param {number} skip
    * @param {number} top
    */
    public getTestVariables(
        project: string,
        skip?: number,
        top?: number
        ): Promise<TestInterfaces.TestVariable[]> {
    
        let deferred = Q.defer<TestInterfaces.TestVariable[]>();

        let onResult = (err: any, statusCode: number, Variables: TestInterfaces.TestVariable[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(Variables);
            }
        };

        let routeValues: any = {
            project: project
        };

        let queryValues: any = {
            '$skip': skip,
            '$top': top,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.1", "Test", "be3fcb2b-995b-47bf-90e5-ca3cf9980912", routeValues, queryValues)
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
    * @param {TestInterfaces.TestVariable} testVariable
    * @param {string} project - Project ID or project name
    * @param {number} testVariableId
    */
    public updateTestVariable(
        testVariable: TestInterfaces.TestVariable,
        project: string,
        testVariableId: number
        ): Promise<TestInterfaces.TestVariable> {
    
        let deferred = Q.defer<TestInterfaces.TestVariable>();

        let onResult = (err: any, statusCode: number, Variable: TestInterfaces.TestVariable) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(Variable);
            }
        };

        let routeValues: any = {
            project: project,
            testVariableId: testVariableId
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "Test", "be3fcb2b-995b-47bf-90e5-ca3cf9980912", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = {  responseIsCollection: false };
                
                this.restClient.update(url, apiVersion, testVariable, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
    }

    /**
    * @param {TestInterfaces.WorkItemToTestLinks} workItemToTestLinks
    * @param {string} project - Project ID or project name
    */
    public addWorkItemToTestLinks(
        workItemToTestLinks: TestInterfaces.WorkItemToTestLinks,
        project: string
        ): Promise<TestInterfaces.WorkItemToTestLinks> {
    
        let deferred = Q.defer<TestInterfaces.WorkItemToTestLinks>();

        let onResult = (err: any, statusCode: number, WorkItem: TestInterfaces.WorkItemToTestLinks) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(WorkItem);
            }
        };

        let routeValues: any = {
            project: project
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "Test", "371b1655-ce05-412e-a113-64cc77bb78d2", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = {  responseIsCollection: false };
                
                this.restClient.create(url, apiVersion, workItemToTestLinks, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
    }

    /**
    * @param {string} project - Project ID or project name
    * @param {string} testName
    * @param {number} workItemId
    */
    public deleteTestMethodToWorkItemLink(
        project: string,
        testName: string,
        workItemId: number
        ): Promise<boolean> {
    
        let deferred = Q.defer<boolean>();

        let onResult = (err: any, statusCode: number, WorkItem: boolean) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(WorkItem);
            }
        };

        let routeValues: any = {
            project: project
        };

        let queryValues: any = {
            testName: testName,
            workItemId: workItemId,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.1", "Test", "7b0bdee3-a354-47f9-a42c-89018d7808d5", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = {  responseIsCollection: false };
                
                this.restClient.delete(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
    }

    /**
    * @param {string} project - Project ID or project name
    * @param {string} testName
    */
    public queryTestMethodLinkedWorkItems(
        project: string,
        testName: string
        ): Promise<TestInterfaces.TestToWorkItemLinks> {
    
        let deferred = Q.defer<TestInterfaces.TestToWorkItemLinks>();

        let onResult = (err: any, statusCode: number, WorkItem: TestInterfaces.TestToWorkItemLinks) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(WorkItem);
            }
        };

        let routeValues: any = {
            project: project
        };

        let queryValues: any = {
            testName: testName,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.1", "Test", "7b0bdee3-a354-47f9-a42c-89018d7808d5", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = {  responseIsCollection: false };
                
                this.restClient.create(url, apiVersion, null, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
    }

    /**
    * @param {string} project - Project ID or project name
    * @param {string} workItemCategory
    * @param {string} automatedTestName
    * @param {number} testCaseId
    * @param {Date} maxCompleteDate
    * @param {number} days
    * @param {number} workItemCount
    */
    public queryTestResultWorkItems(
        project: string,
        workItemCategory: string,
        automatedTestName?: string,
        testCaseId?: number,
        maxCompleteDate?: Date,
        days?: number,
        workItemCount?: number
        ): Promise<TestInterfaces.WorkItemReference[]> {
    
        let deferred = Q.defer<TestInterfaces.WorkItemReference[]>();

        let onResult = (err: any, statusCode: number, WorkItems: TestInterfaces.WorkItemReference[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(WorkItems);
            }
        };

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
        
        this.vsoClient.getVersioningData("3.0-preview.1", "Test", "926ff5dc-137f-45f0-bd51-9412fa9810ce", routeValues, queryValues)
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

}
