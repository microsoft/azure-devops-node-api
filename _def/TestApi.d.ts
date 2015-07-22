/// <reference path="../../src/api/definitions/node.d.ts" />
/// <reference path="../../src/api/definitions/Q.d.ts" />
import Q = require('q');
import restm = require('./restclient');
import httpm = require('./httpclient');
import vsom = require('./VsoClient');
import VsoBaseInterfaces = require('./interfaces/common/VsoBaseInterfaces');
import TestInterfaces = require("./interfaces/TestInterfaces");
export interface ITestApi {
    baseUrl: string;
    userAgent: string;
    httpClient: VsoBaseInterfaces.IHttpClient;
    restClient: VsoBaseInterfaces.IRestClient;
    vsoClient: vsom.VsoClient;
    connect(onResult: (err: any, statusCode: number, obj: any) => void): void;
    createTestResultAttachment(attachmentRequestModel: TestInterfaces.TestAttachmentRequestModel, project: string, runId: number, testCaseResultId: number, onResult: (err: any, statusCode: number, Attachment: TestInterfaces.TestAttachmentReference) => void): void;
    createTestRunAttachment(attachmentRequestModel: TestInterfaces.TestAttachmentRequestModel, project: string, runId: number, onResult: (err: any, statusCode: number, Attachment: TestInterfaces.TestAttachmentReference) => void): void;
    getBuildCodeCoverage(project: string, buildId: number, flags: number, onResult: (err: any, statusCode: number, CodeCoverage: TestInterfaces.BuildCoverage[]) => void): void;
    getTestRunCodeCoverage(project: string, runId: number, flags: number, onResult: (err: any, statusCode: number, CodeCoverage: TestInterfaces.TestRunCoverage[]) => void): void;
    getTestRunLogs(project: string, runId: number, onResult: (err: any, statusCode: number, MessageLogs: TestInterfaces.TestMessageLogDetails[]) => void): void;
    createTestPlan(testPlan: TestInterfaces.PlanUpdateModel, project: string, onResult: (err: any, statusCode: number, Plan: TestInterfaces.TestPlan) => void): void;
    getPlanById(project: string, planId: number, onResult: (err: any, statusCode: number, Plan: TestInterfaces.TestPlan) => void): void;
    getPlans(project: string, owner: string, skip: number, top: number, includePlanDetails: boolean, filterActivePlans: boolean, onResult: (err: any, statusCode: number, Plans: TestInterfaces.TestPlan[]) => void): void;
    updateTestPlan(planUpdateModel: TestInterfaces.PlanUpdateModel, project: string, planId: number, onResult: (err: any, statusCode: number, Plan: TestInterfaces.TestPlan) => void): void;
    getPoint(project: string, planId: number, suiteId: number, pointIds: number, witFields: string, onResult: (err: any, statusCode: number, Point: TestInterfaces.TestPoint) => void): void;
    getPoints(project: string, planId: number, suiteId: number, witFields: string, configurationId: string, testCaseId: string, testPointIds: string, includePointDetails: boolean, skip: number, top: number, onResult: (err: any, statusCode: number, Points: TestInterfaces.TestPoint[]) => void): void;
    updateTestPoints(pointUpdateModel: TestInterfaces.PointUpdateModel, project: string, planId: number, suiteId: number, pointIds: string, onResult: (err: any, statusCode: number, Point: TestInterfaces.TestPoint[]) => void): void;
    getTestIteration(project: string, runId: number, testCaseResultId: number, iterationId: number, includeActionResults: boolean, onResult: (err: any, statusCode: number, Result: TestInterfaces.TestIterationDetailsModel) => void): void;
    getTestIterations(project: string, runId: number, testCaseResultId: number, includeActionResults: boolean, onResult: (err: any, statusCode: number, Results: TestInterfaces.TestIterationDetailsModel[]) => void): void;
    addTestResultsToTestRun(resultCreateModels: TestInterfaces.TestResultCreateModel[], project: string, runId: number, onResult: (err: any, statusCode: number, Results: TestInterfaces.TestCaseResult[]) => void): void;
    bulkUpdateTestResults(resultUpdateModel: TestInterfaces.TestCaseResultUpdateModel, project: string, runId: number, resultIds: number[], onResult: (err: any, statusCode: number, Result: TestInterfaces.TestCaseResult[]) => void): void;
    getTestCaseResultById(project: string, runId: number, testCaseResultId: number, includeIterationDetails: boolean, onResult: (err: any, statusCode: number, Result: TestInterfaces.TestCaseResult) => void): void;
    getTestCaseResults(project: string, runId: number, includeIterationDetails: boolean, onResult: (err: any, statusCode: number, Results: TestInterfaces.TestCaseResult[]) => void): void;
    updateTestResults(resultUpdateModels: TestInterfaces.TestCaseResultUpdateModel[], project: string, runId: number, onResult: (err: any, statusCode: number, Results: TestInterfaces.TestCaseResult[]) => void): void;
    getActionResults(project: string, runId: number, testCaseResultId: number, iterationId: number, actionPath: string, onResult: (err: any, statusCode: number, Results: TestInterfaces.TestActionResultModel[]) => void): void;
    getResultParameters(project: string, runId: number, testCaseResultId: number, iterationId: number, paramName: string, onResult: (err: any, statusCode: number, Results: TestInterfaces.TestResultParameterModel[]) => void): void;
    getTestResultsByQuery(query: TestInterfaces.QueryModel, project: string, includeResultDetails: boolean, includeIterationDetails: boolean, skip: number, top: number, onResult: (err: any, statusCode: number, Result: TestInterfaces.TestCaseResult[]) => void): void;
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
    createTestSettings(testSettings: TestInterfaces.TestSettings, project: string, onResult: (err: any, statusCode: number, TestSetting: number) => void): void;
    deleteTestSettings(project: string, testSettingsId: number, onResult: (err: any, statusCode: number) => void): void;
    getTestSettingsById(project: string, testSettingsId: number, onResult: (err: any, statusCode: number, TestSetting: TestInterfaces.TestSettings) => void): void;
}
export interface IQTestApi {
    connect(): Q.Promise<void>;
    createTestResultAttachment(attachmentRequestModel: TestInterfaces.TestAttachmentRequestModel, project: string, runId: number, testCaseResultId: number): Q.Promise<TestInterfaces.TestAttachmentReference>;
    createTestRunAttachment(attachmentRequestModel: TestInterfaces.TestAttachmentRequestModel, project: string, runId: number): Q.Promise<TestInterfaces.TestAttachmentReference>;
    getBuildCodeCoverage(project: string, buildId: number, flags: number): Q.Promise<TestInterfaces.BuildCoverage[]>;
    getTestRunCodeCoverage(project: string, runId: number, flags: number): Q.Promise<TestInterfaces.TestRunCoverage[]>;
    getTestRunLogs(project: string, runId: number): Q.Promise<TestInterfaces.TestMessageLogDetails[]>;
    createTestPlan(testPlan: TestInterfaces.PlanUpdateModel, project: string): Q.Promise<TestInterfaces.TestPlan>;
    getPlanById(project: string, planId: number): Q.Promise<TestInterfaces.TestPlan>;
    getPlans(project: string, owner?: string, skip?: number, top?: number, includePlanDetails?: boolean, filterActivePlans?: boolean): Q.Promise<TestInterfaces.TestPlan[]>;
    updateTestPlan(planUpdateModel: TestInterfaces.PlanUpdateModel, project: string, planId: number): Q.Promise<TestInterfaces.TestPlan>;
    getPoint(project: string, planId: number, suiteId: number, pointIds: number, witFields?: string): Q.Promise<TestInterfaces.TestPoint>;
    getPoints(project: string, planId: number, suiteId: number, witFields?: string, configurationId?: string, testCaseId?: string, testPointIds?: string, includePointDetails?: boolean, skip?: number, top?: number): Q.Promise<TestInterfaces.TestPoint[]>;
    updateTestPoints(pointUpdateModel: TestInterfaces.PointUpdateModel, project: string, planId: number, suiteId: number, pointIds: string): Q.Promise<TestInterfaces.TestPoint[]>;
    getTestIteration(project: string, runId: number, testCaseResultId: number, iterationId: number, includeActionResults?: boolean): Q.Promise<TestInterfaces.TestIterationDetailsModel>;
    getTestIterations(project: string, runId: number, testCaseResultId: number, includeActionResults?: boolean): Q.Promise<TestInterfaces.TestIterationDetailsModel[]>;
    addTestResultsToTestRun(resultCreateModels: TestInterfaces.TestResultCreateModel[], project: string, runId: number): Q.Promise<TestInterfaces.TestCaseResult[]>;
    bulkUpdateTestResults(resultUpdateModel: TestInterfaces.TestCaseResultUpdateModel, project: string, runId: number, resultIds: number[]): Q.Promise<TestInterfaces.TestCaseResult[]>;
    getTestCaseResultById(project: string, runId: number, testCaseResultId: number, includeIterationDetails?: boolean): Q.Promise<TestInterfaces.TestCaseResult>;
    getTestCaseResults(project: string, runId: number, includeIterationDetails?: boolean): Q.Promise<TestInterfaces.TestCaseResult[]>;
    updateTestResults(resultUpdateModels: TestInterfaces.TestCaseResultUpdateModel[], project: string, runId: number): Q.Promise<TestInterfaces.TestCaseResult[]>;
    getActionResults(project: string, runId: number, testCaseResultId: number, iterationId: number, actionPath?: string): Q.Promise<TestInterfaces.TestActionResultModel[]>;
    getResultParameters(project: string, runId: number, testCaseResultId: number, iterationId: number, paramName?: string): Q.Promise<TestInterfaces.TestResultParameterModel[]>;
    getTestResultsByQuery(query: TestInterfaces.QueryModel, project: string, includeResultDetails?: boolean, includeIterationDetails?: boolean, skip?: number, top?: number): Q.Promise<TestInterfaces.TestCaseResult[]>;
    getTestRunStatistics(project: string, runId: number): Q.Promise<TestInterfaces.TestRunStatistic>;
    getTestRunsByQuery(query: TestInterfaces.QueryModel, project: string, includeRunDetails?: boolean, skip?: number, top?: number): Q.Promise<TestInterfaces.TestRun[]>;
    createTestRun(testRun: TestInterfaces.RunCreateModel, project: string): Q.Promise<TestInterfaces.TestRun>;
    getTestRunById(project: string, runId: number): Q.Promise<TestInterfaces.TestRun>;
    getTestRuns(project: string, buildUri?: string, owner?: string, tmiRunId?: string, planId?: number, includeRunDetails?: boolean, automated?: boolean, skip?: number, top?: number): Q.Promise<TestInterfaces.TestRun[]>;
    updateTestRun(runUpdateModel: TestInterfaces.RunUpdateModel, project: string, runId: number): Q.Promise<TestInterfaces.TestRun>;
    addTestCasesToSuite(project: string, planId: number, suiteId: number, testCaseIds: string): Q.Promise<TestInterfaces.SuiteTestCase[]>;
    getTestCaseById(project: string, planId: number, suiteId: number, testCaseIds: number): Q.Promise<TestInterfaces.SuiteTestCase>;
    getTestCases(project: string, planId: number, suiteId: number): Q.Promise<TestInterfaces.SuiteTestCase[]>;
    createTestSuite(testSuite: TestInterfaces.SuiteCreateModel, project: string, planId: number, suiteId: number): Q.Promise<TestInterfaces.TestSuite[]>;
    getTestSuiteById(project: string, planId: number, suiteId: number, includeChildSuites?: boolean): Q.Promise<TestInterfaces.TestSuite>;
    getTestSuitesForPlan(project: string, planId: number, includeSuites?: boolean, skip?: number, top?: number): Q.Promise<TestInterfaces.TestSuite[]>;
    updateTestSuite(suiteUpdateModel: TestInterfaces.SuiteUpdateModel, project: string, planId: number, suiteId: number): Q.Promise<TestInterfaces.TestSuite>;
    getSuitesByTestCaseId(testCaseId: number): Q.Promise<TestInterfaces.TestSuite[]>;
    createTestSettings(testSettings: TestInterfaces.TestSettings, project: string): Q.Promise<number>;
    getTestSettingsById(project: string, testSettingsId: number): Q.Promise<TestInterfaces.TestSettings>;
}
export declare class TestApi implements ITestApi {
    baseUrl: string;
    userAgent: string;
    httpClient: httpm.HttpClient;
    restClient: restm.RestClient;
    vsoClient: vsom.VsoClient;
    constructor(baseUrl: string, handlers: VsoBaseInterfaces.IRequestHandler[]);
    setUserAgent(userAgent: string): void;
    connect(onResult: (err: any, statusCode: number, obj: any) => void): void;
    /**
     * @param {TestInterfaces.TestAttachmentRequestModel} attachmentRequestModel
     * @param {string} project - Project ID or project name
     * @param {number} runId
     * @param {number} testCaseResultId
     * @param onResult callback function with the resulting TestInterfaces.TestAttachmentReference
     */
    createTestResultAttachment(attachmentRequestModel: TestInterfaces.TestAttachmentRequestModel, project: string, runId: number, testCaseResultId: number, onResult: (err: any, statusCode: number, Attachment: TestInterfaces.TestAttachmentReference) => void): void;
    /**
     * @param {TestInterfaces.TestAttachmentRequestModel} attachmentRequestModel
     * @param {string} project - Project ID or project name
     * @param {number} runId
     * @param onResult callback function with the resulting TestInterfaces.TestAttachmentReference
     */
    createTestRunAttachment(attachmentRequestModel: TestInterfaces.TestAttachmentRequestModel, project: string, runId: number, onResult: (err: any, statusCode: number, Attachment: TestInterfaces.TestAttachmentReference) => void): void;
    /**
     * @param {string} project - Project ID or project name
     * @param {number} buildId
     * @param {number} flags
     * @param onResult callback function with the resulting TestInterfaces.BuildCoverage[]
     */
    getBuildCodeCoverage(project: string, buildId: number, flags: number, onResult: (err: any, statusCode: number, CodeCoverage: TestInterfaces.BuildCoverage[]) => void): void;
    /**
     * @param {string} project - Project ID or project name
     * @param {number} runId
     * @param {number} flags
     * @param onResult callback function with the resulting TestInterfaces.TestRunCoverage[]
     */
    getTestRunCodeCoverage(project: string, runId: number, flags: number, onResult: (err: any, statusCode: number, CodeCoverage: TestInterfaces.TestRunCoverage[]) => void): void;
    /**
     * @param {string} project - Project ID or project name
     * @param {number} runId
     * @param onResult callback function with the resulting TestInterfaces.TestMessageLogDetails[]
     */
    getTestRunLogs(project: string, runId: number, onResult: (err: any, statusCode: number, MessageLogs: TestInterfaces.TestMessageLogDetails[]) => void): void;
    /**
     * @param {TestInterfaces.PlanUpdateModel} testPlan
     * @param {string} project - Project ID or project name
     * @param onResult callback function with the resulting TestInterfaces.TestPlan
     */
    createTestPlan(testPlan: TestInterfaces.PlanUpdateModel, project: string, onResult: (err: any, statusCode: number, Plan: TestInterfaces.TestPlan) => void): void;
    /**
     * @param {string} project - Project ID or project name
     * @param {number} planId
     * @param onResult callback function with the resulting TestInterfaces.TestPlan
     */
    getPlanById(project: string, planId: number, onResult: (err: any, statusCode: number, Plan: TestInterfaces.TestPlan) => void): void;
    /**
     * @param {string} project - Project ID or project name
     * @param {string} owner
     * @param {number} skip
     * @param {number} top
     * @param {boolean} includePlanDetails
     * @param {boolean} filterActivePlans
     * @param onResult callback function with the resulting TestInterfaces.TestPlan[]
     */
    getPlans(project: string, owner: string, skip: number, top: number, includePlanDetails: boolean, filterActivePlans: boolean, onResult: (err: any, statusCode: number, Plans: TestInterfaces.TestPlan[]) => void): void;
    /**
     * @param {TestInterfaces.PlanUpdateModel} planUpdateModel
     * @param {string} project - Project ID or project name
     * @param {number} planId
     * @param onResult callback function with the resulting TestInterfaces.TestPlan
     */
    updateTestPlan(planUpdateModel: TestInterfaces.PlanUpdateModel, project: string, planId: number, onResult: (err: any, statusCode: number, Plan: TestInterfaces.TestPlan) => void): void;
    /**
     * @param {string} project - Project ID or project name
     * @param {number} planId
     * @param {number} suiteId
     * @param {number} pointIds
     * @param {string} witFields
     * @param onResult callback function with the resulting TestInterfaces.TestPoint
     */
    getPoint(project: string, planId: number, suiteId: number, pointIds: number, witFields: string, onResult: (err: any, statusCode: number, Point: TestInterfaces.TestPoint) => void): void;
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
    getPoints(project: string, planId: number, suiteId: number, witFields: string, configurationId: string, testCaseId: string, testPointIds: string, includePointDetails: boolean, skip: number, top: number, onResult: (err: any, statusCode: number, Points: TestInterfaces.TestPoint[]) => void): void;
    /**
     * @param {TestInterfaces.PointUpdateModel} pointUpdateModel
     * @param {string} project - Project ID or project name
     * @param {number} planId
     * @param {number} suiteId
     * @param {string} pointIds
     * @param onResult callback function with the resulting TestInterfaces.TestPoint[]
     */
    updateTestPoints(pointUpdateModel: TestInterfaces.PointUpdateModel, project: string, planId: number, suiteId: number, pointIds: string, onResult: (err: any, statusCode: number, Point: TestInterfaces.TestPoint[]) => void): void;
    /**
     * @param {string} project - Project ID or project name
     * @param {number} runId
     * @param {number} testCaseResultId
     * @param {number} iterationId
     * @param {boolean} includeActionResults
     * @param onResult callback function with the resulting TestInterfaces.TestIterationDetailsModel
     */
    getTestIteration(project: string, runId: number, testCaseResultId: number, iterationId: number, includeActionResults: boolean, onResult: (err: any, statusCode: number, Result: TestInterfaces.TestIterationDetailsModel) => void): void;
    /**
     * @param {string} project - Project ID or project name
     * @param {number} runId
     * @param {number} testCaseResultId
     * @param {boolean} includeActionResults
     * @param onResult callback function with the resulting TestInterfaces.TestIterationDetailsModel[]
     */
    getTestIterations(project: string, runId: number, testCaseResultId: number, includeActionResults: boolean, onResult: (err: any, statusCode: number, Results: TestInterfaces.TestIterationDetailsModel[]) => void): void;
    /**
     * @param {TestInterfaces.TestResultCreateModel[]} resultCreateModels
     * @param {string} project - Project ID or project name
     * @param {number} runId
     * @param onResult callback function with the resulting TestInterfaces.TestCaseResult[]
     */
    addTestResultsToTestRun(resultCreateModels: TestInterfaces.TestResultCreateModel[], project: string, runId: number, onResult: (err: any, statusCode: number, Results: TestInterfaces.TestCaseResult[]) => void): void;
    /**
     * @param {TestInterfaces.TestCaseResultUpdateModel} resultUpdateModel
     * @param {string} project - Project ID or project name
     * @param {number} runId
     * @param {number[]} resultIds
     * @param onResult callback function with the resulting TestInterfaces.TestCaseResult[]
     */
    bulkUpdateTestResults(resultUpdateModel: TestInterfaces.TestCaseResultUpdateModel, project: string, runId: number, resultIds: number[], onResult: (err: any, statusCode: number, Result: TestInterfaces.TestCaseResult[]) => void): void;
    /**
     * @param {string} project - Project ID or project name
     * @param {number} runId
     * @param {number} testCaseResultId
     * @param {boolean} includeIterationDetails
     * @param onResult callback function with the resulting TestInterfaces.TestCaseResult
     */
    getTestCaseResultById(project: string, runId: number, testCaseResultId: number, includeIterationDetails: boolean, onResult: (err: any, statusCode: number, Result: TestInterfaces.TestCaseResult) => void): void;
    /**
     * @param {string} project - Project ID or project name
     * @param {number} runId
     * @param {boolean} includeIterationDetails
     * @param onResult callback function with the resulting TestInterfaces.TestCaseResult[]
     */
    getTestCaseResults(project: string, runId: number, includeIterationDetails: boolean, onResult: (err: any, statusCode: number, Results: TestInterfaces.TestCaseResult[]) => void): void;
    /**
     * @param {TestInterfaces.TestCaseResultUpdateModel[]} resultUpdateModels
     * @param {string} project - Project ID or project name
     * @param {number} runId
     * @param onResult callback function with the resulting TestInterfaces.TestCaseResult[]
     */
    updateTestResults(resultUpdateModels: TestInterfaces.TestCaseResultUpdateModel[], project: string, runId: number, onResult: (err: any, statusCode: number, Results: TestInterfaces.TestCaseResult[]) => void): void;
    /**
     * @param {string} project - Project ID or project name
     * @param {number} runId
     * @param {number} testCaseResultId
     * @param {number} iterationId
     * @param {string} actionPath
     * @param onResult callback function with the resulting TestInterfaces.TestActionResultModel[]
     */
    getActionResults(project: string, runId: number, testCaseResultId: number, iterationId: number, actionPath: string, onResult: (err: any, statusCode: number, Results: TestInterfaces.TestActionResultModel[]) => void): void;
    /**
     * @param {string} project - Project ID or project name
     * @param {number} runId
     * @param {number} testCaseResultId
     * @param {number} iterationId
     * @param {string} paramName
     * @param onResult callback function with the resulting TestInterfaces.TestResultParameterModel[]
     */
    getResultParameters(project: string, runId: number, testCaseResultId: number, iterationId: number, paramName: string, onResult: (err: any, statusCode: number, Results: TestInterfaces.TestResultParameterModel[]) => void): void;
    /**
     * @param {TestInterfaces.QueryModel} query
     * @param {string} project - Project ID or project name
     * @param {boolean} includeResultDetails
     * @param {boolean} includeIterationDetails
     * @param {number} skip
     * @param {number} top
     * @param onResult callback function with the resulting TestInterfaces.TestCaseResult[]
     */
    getTestResultsByQuery(query: TestInterfaces.QueryModel, project: string, includeResultDetails: boolean, includeIterationDetails: boolean, skip: number, top: number, onResult: (err: any, statusCode: number, Result: TestInterfaces.TestCaseResult[]) => void): void;
    /**
     * @param {string} project - Project ID or project name
     * @param {number} runId
     * @param onResult callback function with the resulting TestInterfaces.TestRunStatistic
     */
    getTestRunStatistics(project: string, runId: number, onResult: (err: any, statusCode: number, Run: TestInterfaces.TestRunStatistic) => void): void;
    /**
     * @param {TestInterfaces.QueryModel} query
     * @param {string} project - Project ID or project name
     * @param {boolean} includeRunDetails
     * @param {number} skip
     * @param {number} top
     * @param onResult callback function with the resulting TestInterfaces.TestRun[]
     */
    getTestRunsByQuery(query: TestInterfaces.QueryModel, project: string, includeRunDetails: boolean, skip: number, top: number, onResult: (err: any, statusCode: number, Run: TestInterfaces.TestRun[]) => void): void;
    /**
     * @param {TestInterfaces.RunCreateModel} testRun
     * @param {string} project - Project ID or project name
     * @param onResult callback function with the resulting TestInterfaces.TestRun
     */
    createTestRun(testRun: TestInterfaces.RunCreateModel, project: string, onResult: (err: any, statusCode: number, Run: TestInterfaces.TestRun) => void): void;
    /**
     * @param {string} project - Project ID or project name
     * @param {number} runId
     * @param onResult callback function
     */
    deleteTestRun(project: string, runId: number, onResult: (err: any, statusCode: number) => void): void;
    /**
     * @param {string} project - Project ID or project name
     * @param {number} runId
     * @param onResult callback function with the resulting TestInterfaces.TestRun
     */
    getTestRunById(project: string, runId: number, onResult: (err: any, statusCode: number, Run: TestInterfaces.TestRun) => void): void;
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
    getTestRuns(project: string, buildUri: string, owner: string, tmiRunId: string, planId: number, includeRunDetails: boolean, automated: boolean, skip: number, top: number, onResult: (err: any, statusCode: number, Runs: TestInterfaces.TestRun[]) => void): void;
    /**
     * @param {TestInterfaces.RunUpdateModel} runUpdateModel
     * @param {string} project - Project ID or project name
     * @param {number} runId
     * @param onResult callback function with the resulting TestInterfaces.TestRun
     */
    updateTestRun(runUpdateModel: TestInterfaces.RunUpdateModel, project: string, runId: number, onResult: (err: any, statusCode: number, Run: TestInterfaces.TestRun) => void): void;
    /**
     * @param {string} project - Project ID or project name
     * @param {number} planId
     * @param {number} suiteId
     * @param {string} testCaseIds
     * @param onResult callback function with the resulting TestInterfaces.SuiteTestCase[]
     */
    addTestCasesToSuite(project: string, planId: number, suiteId: number, testCaseIds: string, onResult: (err: any, statusCode: number, Suites: TestInterfaces.SuiteTestCase[]) => void): void;
    /**
     * @param {string} project - Project ID or project name
     * @param {number} planId
     * @param {number} suiteId
     * @param {number} testCaseIds
     * @param onResult callback function with the resulting TestInterfaces.SuiteTestCase
     */
    getTestCaseById(project: string, planId: number, suiteId: number, testCaseIds: number, onResult: (err: any, statusCode: number, Suite: TestInterfaces.SuiteTestCase) => void): void;
    /**
     * @param {string} project - Project ID or project name
     * @param {number} planId
     * @param {number} suiteId
     * @param onResult callback function with the resulting TestInterfaces.SuiteTestCase[]
     */
    getTestCases(project: string, planId: number, suiteId: number, onResult: (err: any, statusCode: number, Suites: TestInterfaces.SuiteTestCase[]) => void): void;
    /**
     * @param {string} project - Project ID or project name
     * @param {number} planId
     * @param {number} suiteId
     * @param {string} testCaseIds
     * @param onResult callback function
     */
    removeTestCasesFromSuiteUrl(project: string, planId: number, suiteId: number, testCaseIds: string, onResult: (err: any, statusCode: number) => void): void;
    /**
     * @param {TestInterfaces.SuiteCreateModel} testSuite
     * @param {string} project - Project ID or project name
     * @param {number} planId
     * @param {number} suiteId
     * @param onResult callback function with the resulting TestInterfaces.TestSuite[]
     */
    createTestSuite(testSuite: TestInterfaces.SuiteCreateModel, project: string, planId: number, suiteId: number, onResult: (err: any, statusCode: number, Suite: TestInterfaces.TestSuite[]) => void): void;
    /**
     * @param {string} project - Project ID or project name
     * @param {number} planId
     * @param {number} suiteId
     * @param onResult callback function
     */
    deleteTestSuite(project: string, planId: number, suiteId: number, onResult: (err: any, statusCode: number) => void): void;
    /**
     * @param {string} project - Project ID or project name
     * @param {number} planId
     * @param {number} suiteId
     * @param {boolean} includeChildSuites
     * @param onResult callback function with the resulting TestInterfaces.TestSuite
     */
    getTestSuiteById(project: string, planId: number, suiteId: number, includeChildSuites: boolean, onResult: (err: any, statusCode: number, Suite: TestInterfaces.TestSuite) => void): void;
    /**
     * @param {string} project - Project ID or project name
     * @param {number} planId
     * @param {boolean} includeSuites
     * @param {number} skip
     * @param {number} top
     * @param onResult callback function with the resulting TestInterfaces.TestSuite[]
     */
    getTestSuitesForPlan(project: string, planId: number, includeSuites: boolean, skip: number, top: number, onResult: (err: any, statusCode: number, Suites: TestInterfaces.TestSuite[]) => void): void;
    /**
     * @param {TestInterfaces.SuiteUpdateModel} suiteUpdateModel
     * @param {string} project - Project ID or project name
     * @param {number} planId
     * @param {number} suiteId
     * @param onResult callback function with the resulting TestInterfaces.TestSuite
     */
    updateTestSuite(suiteUpdateModel: TestInterfaces.SuiteUpdateModel, project: string, planId: number, suiteId: number, onResult: (err: any, statusCode: number, Suite: TestInterfaces.TestSuite) => void): void;
    /**
     * @param {number} testCaseId
     * @param onResult callback function with the resulting TestInterfaces.TestSuite[]
     */
    getSuitesByTestCaseId(testCaseId: number, onResult: (err: any, statusCode: number, Suites: TestInterfaces.TestSuite[]) => void): void;
    /**
     * @param {TestInterfaces.TestSettings} testSettings
     * @param {string} project - Project ID or project name
     * @param onResult callback function with the resulting number
     */
    createTestSettings(testSettings: TestInterfaces.TestSettings, project: string, onResult: (err: any, statusCode: number, TestSetting: number) => void): void;
    /**
     * @param {string} project - Project ID or project name
     * @param {number} testSettingsId
     * @param onResult callback function
     */
    deleteTestSettings(project: string, testSettingsId: number, onResult: (err: any, statusCode: number) => void): void;
    /**
     * @param {string} project - Project ID or project name
     * @param {number} testSettingsId
     * @param onResult callback function with the resulting TestInterfaces.TestSettings
     */
    getTestSettingsById(project: string, testSettingsId: number, onResult: (err: any, statusCode: number, TestSetting: TestInterfaces.TestSettings) => void): void;
}
export declare class QTestApi implements IQTestApi {
    TestApi: ITestApi;
    constructor(baseUrl: string, handlers: VsoBaseInterfaces.IRequestHandler[]);
    connect(): Q.Promise<any>;
    /**
    * @param {TestInterfaces.TestAttachmentRequestModel} attachmentRequestModel
    * @param {string} project - Project ID or project name
    * @param {number} runId
    * @param {number} testCaseResultId
    */
    createTestResultAttachment(attachmentRequestModel: TestInterfaces.TestAttachmentRequestModel, project: string, runId: number, testCaseResultId: number): Q.Promise<TestInterfaces.TestAttachmentReference>;
    /**
    * @param {TestInterfaces.TestAttachmentRequestModel} attachmentRequestModel
    * @param {string} project - Project ID or project name
    * @param {number} runId
    */
    createTestRunAttachment(attachmentRequestModel: TestInterfaces.TestAttachmentRequestModel, project: string, runId: number): Q.Promise<TestInterfaces.TestAttachmentReference>;
    /**
    * @param {string} project - Project ID or project name
    * @param {number} buildId
    * @param {number} flags
    */
    getBuildCodeCoverage(project: string, buildId: number, flags: number): Q.Promise<TestInterfaces.BuildCoverage[]>;
    /**
    * @param {string} project - Project ID or project name
    * @param {number} runId
    * @param {number} flags
    */
    getTestRunCodeCoverage(project: string, runId: number, flags: number): Q.Promise<TestInterfaces.TestRunCoverage[]>;
    /**
    * @param {string} project - Project ID or project name
    * @param {number} runId
    */
    getTestRunLogs(project: string, runId: number): Q.Promise<TestInterfaces.TestMessageLogDetails[]>;
    /**
    * @param {TestInterfaces.PlanUpdateModel} testPlan
    * @param {string} project - Project ID or project name
    */
    createTestPlan(testPlan: TestInterfaces.PlanUpdateModel, project: string): Q.Promise<TestInterfaces.TestPlan>;
    /**
    * @param {string} project - Project ID or project name
    * @param {number} planId
    */
    getPlanById(project: string, planId: number): Q.Promise<TestInterfaces.TestPlan>;
    /**
    * @param {string} project - Project ID or project name
    * @param {string} owner
    * @param {number} skip
    * @param {number} top
    * @param {boolean} includePlanDetails
    * @param {boolean} filterActivePlans
    */
    getPlans(project: string, owner?: string, skip?: number, top?: number, includePlanDetails?: boolean, filterActivePlans?: boolean): Q.Promise<TestInterfaces.TestPlan[]>;
    /**
    * @param {TestInterfaces.PlanUpdateModel} planUpdateModel
    * @param {string} project - Project ID or project name
    * @param {number} planId
    */
    updateTestPlan(planUpdateModel: TestInterfaces.PlanUpdateModel, project: string, planId: number): Q.Promise<TestInterfaces.TestPlan>;
    /**
    * @param {string} project - Project ID or project name
    * @param {number} planId
    * @param {number} suiteId
    * @param {number} pointIds
    * @param {string} witFields
    */
    getPoint(project: string, planId: number, suiteId: number, pointIds: number, witFields?: string): Q.Promise<TestInterfaces.TestPoint>;
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
    getPoints(project: string, planId: number, suiteId: number, witFields?: string, configurationId?: string, testCaseId?: string, testPointIds?: string, includePointDetails?: boolean, skip?: number, top?: number): Q.Promise<TestInterfaces.TestPoint[]>;
    /**
    * @param {TestInterfaces.PointUpdateModel} pointUpdateModel
    * @param {string} project - Project ID or project name
    * @param {number} planId
    * @param {number} suiteId
    * @param {string} pointIds
    */
    updateTestPoints(pointUpdateModel: TestInterfaces.PointUpdateModel, project: string, planId: number, suiteId: number, pointIds: string): Q.Promise<TestInterfaces.TestPoint[]>;
    /**
    * @param {string} project - Project ID or project name
    * @param {number} runId
    * @param {number} testCaseResultId
    * @param {number} iterationId
    * @param {boolean} includeActionResults
    */
    getTestIteration(project: string, runId: number, testCaseResultId: number, iterationId: number, includeActionResults?: boolean): Q.Promise<TestInterfaces.TestIterationDetailsModel>;
    /**
    * @param {string} project - Project ID or project name
    * @param {number} runId
    * @param {number} testCaseResultId
    * @param {boolean} includeActionResults
    */
    getTestIterations(project: string, runId: number, testCaseResultId: number, includeActionResults?: boolean): Q.Promise<TestInterfaces.TestIterationDetailsModel[]>;
    /**
    * @param {TestInterfaces.TestResultCreateModel[]} resultCreateModels
    * @param {string} project - Project ID or project name
    * @param {number} runId
    */
    addTestResultsToTestRun(resultCreateModels: TestInterfaces.TestResultCreateModel[], project: string, runId: number): Q.Promise<TestInterfaces.TestCaseResult[]>;
    /**
    * @param {TestInterfaces.TestCaseResultUpdateModel} resultUpdateModel
    * @param {string} project - Project ID or project name
    * @param {number} runId
    * @param {number[]} resultIds
    */
    bulkUpdateTestResults(resultUpdateModel: TestInterfaces.TestCaseResultUpdateModel, project: string, runId: number, resultIds: number[]): Q.Promise<TestInterfaces.TestCaseResult[]>;
    /**
    * @param {string} project - Project ID or project name
    * @param {number} runId
    * @param {number} testCaseResultId
    * @param {boolean} includeIterationDetails
    */
    getTestCaseResultById(project: string, runId: number, testCaseResultId: number, includeIterationDetails?: boolean): Q.Promise<TestInterfaces.TestCaseResult>;
    /**
    * @param {string} project - Project ID or project name
    * @param {number} runId
    * @param {boolean} includeIterationDetails
    */
    getTestCaseResults(project: string, runId: number, includeIterationDetails?: boolean): Q.Promise<TestInterfaces.TestCaseResult[]>;
    /**
    * @param {TestInterfaces.TestCaseResultUpdateModel[]} resultUpdateModels
    * @param {string} project - Project ID or project name
    * @param {number} runId
    */
    updateTestResults(resultUpdateModels: TestInterfaces.TestCaseResultUpdateModel[], project: string, runId: number): Q.Promise<TestInterfaces.TestCaseResult[]>;
    /**
    * @param {string} project - Project ID or project name
    * @param {number} runId
    * @param {number} testCaseResultId
    * @param {number} iterationId
    * @param {string} actionPath
    */
    getActionResults(project: string, runId: number, testCaseResultId: number, iterationId: number, actionPath?: string): Q.Promise<TestInterfaces.TestActionResultModel[]>;
    /**
    * @param {string} project - Project ID or project name
    * @param {number} runId
    * @param {number} testCaseResultId
    * @param {number} iterationId
    * @param {string} paramName
    */
    getResultParameters(project: string, runId: number, testCaseResultId: number, iterationId: number, paramName?: string): Q.Promise<TestInterfaces.TestResultParameterModel[]>;
    /**
    * @param {TestInterfaces.QueryModel} query
    * @param {string} project - Project ID or project name
    * @param {boolean} includeResultDetails
    * @param {boolean} includeIterationDetails
    * @param {number} skip
    * @param {number} top
    */
    getTestResultsByQuery(query: TestInterfaces.QueryModel, project: string, includeResultDetails?: boolean, includeIterationDetails?: boolean, skip?: number, top?: number): Q.Promise<TestInterfaces.TestCaseResult[]>;
    /**
    * @param {string} project - Project ID or project name
    * @param {number} runId
    */
    getTestRunStatistics(project: string, runId: number): Q.Promise<TestInterfaces.TestRunStatistic>;
    /**
    * @param {TestInterfaces.QueryModel} query
    * @param {string} project - Project ID or project name
    * @param {boolean} includeRunDetails
    * @param {number} skip
    * @param {number} top
    */
    getTestRunsByQuery(query: TestInterfaces.QueryModel, project: string, includeRunDetails?: boolean, skip?: number, top?: number): Q.Promise<TestInterfaces.TestRun[]>;
    /**
    * @param {TestInterfaces.RunCreateModel} testRun
    * @param {string} project - Project ID or project name
    */
    createTestRun(testRun: TestInterfaces.RunCreateModel, project: string): Q.Promise<TestInterfaces.TestRun>;
    /**
    * @param {string} project - Project ID or project name
    * @param {number} runId
    */
    getTestRunById(project: string, runId: number): Q.Promise<TestInterfaces.TestRun>;
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
    getTestRuns(project: string, buildUri?: string, owner?: string, tmiRunId?: string, planId?: number, includeRunDetails?: boolean, automated?: boolean, skip?: number, top?: number): Q.Promise<TestInterfaces.TestRun[]>;
    /**
    * @param {TestInterfaces.RunUpdateModel} runUpdateModel
    * @param {string} project - Project ID or project name
    * @param {number} runId
    */
    updateTestRun(runUpdateModel: TestInterfaces.RunUpdateModel, project: string, runId: number): Q.Promise<TestInterfaces.TestRun>;
    /**
    * @param {string} project - Project ID or project name
    * @param {number} planId
    * @param {number} suiteId
    * @param {string} testCaseIds
    */
    addTestCasesToSuite(project: string, planId: number, suiteId: number, testCaseIds: string): Q.Promise<TestInterfaces.SuiteTestCase[]>;
    /**
    * @param {string} project - Project ID or project name
    * @param {number} planId
    * @param {number} suiteId
    * @param {number} testCaseIds
    */
    getTestCaseById(project: string, planId: number, suiteId: number, testCaseIds: number): Q.Promise<TestInterfaces.SuiteTestCase>;
    /**
    * @param {string} project - Project ID or project name
    * @param {number} planId
    * @param {number} suiteId
    */
    getTestCases(project: string, planId: number, suiteId: number): Q.Promise<TestInterfaces.SuiteTestCase[]>;
    /**
    * @param {TestInterfaces.SuiteCreateModel} testSuite
    * @param {string} project - Project ID or project name
    * @param {number} planId
    * @param {number} suiteId
    */
    createTestSuite(testSuite: TestInterfaces.SuiteCreateModel, project: string, planId: number, suiteId: number): Q.Promise<TestInterfaces.TestSuite[]>;
    /**
    * @param {string} project - Project ID or project name
    * @param {number} planId
    * @param {number} suiteId
    * @param {boolean} includeChildSuites
    */
    getTestSuiteById(project: string, planId: number, suiteId: number, includeChildSuites?: boolean): Q.Promise<TestInterfaces.TestSuite>;
    /**
    * @param {string} project - Project ID or project name
    * @param {number} planId
    * @param {boolean} includeSuites
    * @param {number} skip
    * @param {number} top
    */
    getTestSuitesForPlan(project: string, planId: number, includeSuites?: boolean, skip?: number, top?: number): Q.Promise<TestInterfaces.TestSuite[]>;
    /**
    * @param {TestInterfaces.SuiteUpdateModel} suiteUpdateModel
    * @param {string} project - Project ID or project name
    * @param {number} planId
    * @param {number} suiteId
    */
    updateTestSuite(suiteUpdateModel: TestInterfaces.SuiteUpdateModel, project: string, planId: number, suiteId: number): Q.Promise<TestInterfaces.TestSuite>;
    /**
    * @param {number} testCaseId
    */
    getSuitesByTestCaseId(testCaseId: number): Q.Promise<TestInterfaces.TestSuite[]>;
    /**
    * @param {TestInterfaces.TestSettings} testSettings
    * @param {string} project - Project ID or project name
    */
    createTestSettings(testSettings: TestInterfaces.TestSettings, project: string): Q.Promise<number>;
    /**
    * @param {string} project - Project ID or project name
    * @param {number} testSettingsId
    */
    getTestSettingsById(project: string, testSettingsId: number): Q.Promise<TestInterfaces.TestSettings>;
}
