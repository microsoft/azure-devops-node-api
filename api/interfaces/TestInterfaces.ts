/*
* ---------------------------------------------------------
* Copyright(C) Microsoft Corporation. All rights reserved.
* ---------------------------------------------------------
* 
* ---------------------------------------------------------
* Generated file, DO NOT EDIT
* ---------------------------------------------------------
*/

"use strict";

import VSSInterfaces = require("../interfaces/common/VSSInterfaces");


export interface AggregatedResultsByPivot {
    count: number;
    duration: any;
    pivot: string;
}

export interface AggregatedTestResults {
    duration: any;
    resultsByPivot: AggregatedResultsByPivot[];
    self: ShallowReference;
    totalTests: number;
}

export enum AttachmentType {
    GeneralAttachment = 0,
    AfnStrip = 1,
    BugFilingData = 2,
    CodeCoverage = 3,
    IntermediateCollectorData = 4,
    RunConfig = 5,
    TestImpactDetails = 6,
    TmiTestRunDeploymentFiles = 7,
    TmiTestRunReverseDeploymentFiles = 8,
    TmiTestResultDetail = 9,
    TmiTestRunSummary = 10,
}

export interface BatchResponse {
    error: string;
    responses: Response[];
    status: string;
}

export interface BuildConfiguration {
    flavor: string;
    id: number;
    platform: string;
    project: ShallowReference;
    uri: string;
}

export interface BuildCoverage {
    codeCoverageFileUrl: string;
    configuration: BuildConfiguration;
    lastError: string;
    modules: ModuleCoverage[];
    state: string;
}

/**
 * Represents the build configuration (platform, flavor) and coverage data for the build
 */
export interface CodeCoverageData {
    /**
     * Flavor of build for which data is retrieved/published
     */
    buildFlavor: string;
    /**
     * Platform of build for which data is retrieved/published
     */
    buildPlatform: string;
    /**
     * List of coverage data for the build
     */
    coverageStats: CodeCoverageStatistics[];
}

/**
 * Represents the code coverage statistics for a particular coverage label (modules, statements, blocks, etc.)
 */
export interface CodeCoverageStatistics {
    /**
     * Covered units
     */
    covered: number;
    /**
     * Delta of coverage
     */
    delta: number;
    /**
     * Is delta valid
     */
    isDeltaAvailable: boolean;
    /**
     * Label of coverage data ("Blocks", "Statements", "Modules", etc.)
     */
    label: string;
    /**
     * Position of label
     */
    position: number;
    /**
     * Total units
     */
    total: number;
}

/**
 * Represents the code coverage summary results Used to publish or retrieve code coverage summary against a build
 */
export interface CodeCoverageSummary {
    /**
     * Uri of build for which data is retrieved/published
     */
    build: ShallowReference;
    /**
     * List of coverage data and details for the build
     */
    coverageData: CodeCoverageData[];
    /**
     * Uri of build against which difference in coverage is computed
     */
    deltaBuild: ShallowReference;
}

export enum CoverageQueryFlags {
    /**
     * If set, the Coverage.Modules property will be populated.
     */
    Modules = 1,
    /**
     * If set, the ModuleCoverage.Functions properties will be populated.
     */
    Functions = 2,
    /**
     * If set, the ModuleCoverage.CoverageData field will be populated.
     */
    BlockData = 4,
}

export interface CoverageStatistics {
    blocksCovered: number;
    blocksNotCovered: number;
    linesCovered: number;
    linesNotCovered: number;
    linesPartiallyCovered: number;
}

export interface CustomTestField {
    fieldName: string;
    value: any;
}

export interface CustomTestFieldDefinition {
    fieldId: number;
    fieldName: string;
    fieldType: CustomTestFieldType;
    scope: CustomTestFieldScope;
}

export enum CustomTestFieldScope {
    None = 0,
    TestRun = 1,
    TestResult = 2,
    System = 4,
    All = 7,
}

export enum CustomTestFieldType {
    Bit = 2,
    Int = 8,
    Float = 6,
    Guid = 14,
    DateTime = 4,
    String = 12,
}

/**
 * This is a temporary class to provide the details for the test run environment.
 */
export interface DtlEnvironmentDetails {
    csmContent: string;
    csmParameters: string;
    subscriptionName: string;
}

export interface FunctionCoverage {
    class: string;
    name: string;
    namespace: string;
    sourceFile: string;
    statistics: CoverageStatistics;
}

export interface ModuleCoverage {
    blockCount: number;
    blockData: number[];
    functions: FunctionCoverage[];
    name: string;
    signature: string;
    signatureAge: number;
    statistics: CoverageStatistics;
}

export interface PlanUpdateModel {
    area: ShallowReference;
    automatedTestEnvironment: TestEnvironment;
    automatedTestSettings: TestSettings;
    build: ShallowReference;
    configurationIds: number[];
    description: string;
    endDate: string;
    iteration: string;
    manualTestEnvironment: TestEnvironment;
    manualTestSettings: TestSettings;
    name: string;
    owner: VSSInterfaces.IdentityRef;
    startDate: string;
    state: string;
    status: string;
}

export interface PointAssignment {
    configuration: ShallowReference;
    tester: VSSInterfaces.IdentityRef;
}

export interface PointUpdateModel {
}

export interface PointWorkItemProperty {
    workItem: { key: string; value: any };
}

export interface QueryModel {
    query: string;
}

export interface Response {
    error: string;
    id: string;
    status: string;
    url: string;
}

export enum ResultOutcome {
    Pass = 1,
    Fail = 2,
    Pending = 3,
}

export interface ResultUpdateRequestModel {
    actionResultDeletes: TestActionResultModel[];
    actionResults: TestActionResultModel[];
    parameterDeletes: TestResultParameterModel[];
    parameters: TestResultParameterModel[];
    testCaseResult: TestCaseResultUpdateModel;
}

export interface ResultUpdateResponseModel {
    revision: number;
}

export interface RunCreateModel {
    additionalTestFields: CustomTestField[];
    automated: boolean;
    build: ShallowReference;
    buildDropLocation: string;
    buildFlavor: string;
    buildPlatform: string;
    comment: string;
    completeDate: string;
    configurationIds: number[];
    controller: string;
    dtlAutEnvironment: ShallowReference;
    dtlTestEnvironment: ShallowReference;
    dueDate: string;
    environmentDetails: DtlEnvironmentDetails;
    errorMessage: string;
    filter: RunFilter;
    iteration: string;
    name: string;
    owner: VSSInterfaces.IdentityRef;
    plan: ShallowReference;
    pointIds: number[];
    releaseEnvironmentUri: string;
    releaseUri: string;
    runTimeout: any;
    startDate: string;
    state: string;
    testConfigurationsMapping: string;
    testEnvironmentId: string;
    testSettings: ShallowReference;
    type: string;
}

/**
 * This class is used to provide the filters used for discovery
 */
export interface RunFilter {
    /**
     * filter for the test case sources (test containers)
     */
    sourceFilter: string;
    /**
     * filter for the test cases
     */
    testCaseFilter: string;
}

export interface RunStatistic {
    count: number;
    outcome: string;
    resolutionState: TestResolutionState;
    state: string;
}

export interface RunUpdateModel {
    build: ShallowReference;
    comment: string;
    completedDate: string;
    controller: string;
    deleteInProgressResults: boolean;
    dtlAutEnvironment: ShallowReference;
    dtlEnvironment: ShallowReference;
    dtlEnvironmentDetails: DtlEnvironmentDetails;
    dueDate: string;
    errorMessage: string;
    iteration: string;
    logEntries: TestMessageLogDetails[];
    name: string;
    startedDate: string;
    state: string;
    substate: TestRunSubstate;
    testEnvironmentId: string;
    testSettings: ShallowReference;
}

/**
 * An abstracted reference to some other resource. This class is used to provide the build data contracts with a uniform way to reference other resources in a way that provides easy traversal through links.
 */
export interface ShallowReference {
    /**
     * Id of the resource
     */
    id: string;
    /**
     * Name of the linked resource (definition name, controller name, etc.)
     */
    name: string;
    /**
     * Full http link to the resource
     */
    url: string;
}

export interface SharedStepModel {
    id: number;
    revision: number;
}

export interface SuiteCreateModel {
}

export interface SuiteTestCase {
    pointAssignments: PointAssignment[];
    testCase: WorkItemReference;
}

export interface SuiteUpdateModel {
}

export interface TestActionResultModel extends TestResultModelBase {
    actionPath: string;
    iterationId: number;
    sharedStepModel: SharedStepModel;
    url: string;
}

export interface TestAttachmentReference {
    id: number;
    url: string;
}

export interface TestAttachmentRequestModel {
    attachmentType: string;
    comment: string;
    fileName: string;
    stream: string;
}

export interface TestCaseResult {
    additionalFields: CustomTestField[];
    afnStripId: number;
    area: ShallowReference;
    associatedBugs: ShallowReference[];
    automatedTestId: string;
    automatedTestName: string;
    automatedTestStorage: string;
    automatedTestType: string;
    automatedTestTypeId: string;
    build: ShallowReference;
    comment: string;
    completedDate: Date;
    computerName: string;
    configuration: ShallowReference;
    createdDate: Date;
    durationInMs: number;
    errorMessage: string;
    failureType: string;
    id: number;
    iterationDetails: TestIterationDetailsModel[];
    lastUpdatedBy: VSSInterfaces.IdentityRef;
    lastUpdatedDate: Date;
    outcome: string;
    owner: VSSInterfaces.IdentityRef;
    priority: number;
    project: ShallowReference;
    resetCount: number;
    resolutionState: string;
    resolutionStateId: number;
    revision: number;
    runBy: VSSInterfaces.IdentityRef;
    stackTrace: string;
    startedDate: Date;
    state: string;
    testCase: ShallowReference;
    testCaseTitle: string;
    testPoint: ShallowReference;
    testRun: ShallowReference;
    url: string;
}

export interface TestCaseResult2 {
    componentId: string;
    custom: any;
    endTime: Date;
    exceptionStack: string;
    externalArtifacts: string[];
    externalRunId: string;
    externalSystem: string;
    externalTestId: string;
    failureReasons: string[];
    failureSummary: string;
    investigationNotes: string;
    isSuperseded: boolean;
    isValid: boolean;
    outcome: ResultOutcome;
    resultCustomPropertiesTypeName: string;
    resultId: string;
    resultName: string;
    runId: string;
    startTime: Date;
    testId: string;
    tfsSecurityKey: string;
}

export interface TestCaseResultAttachmentModel {
    id: number;
    iterationId: number;
    name: string;
    size: number;
    url: string;
}

export interface TestCaseResultIdentifier {
}

export interface TestCaseResultUpdateModel {
    additionalFields: CustomTestField[];
    associatedWorkItems: number[];
    automatedTestTypeId: string;
    comment: string;
    completedDate: string;
    computerName: string;
    durationInMs: string;
    errorMessage: string;
    failureType: string;
    outcome: string;
    owner: VSSInterfaces.IdentityRef;
    resolutionState: string;
    runBy: VSSInterfaces.IdentityRef;
    stackTrace: string;
    startedDate: string;
    state: string;
    testCasePriority: string;
    testResult: ShallowReference;
}

export interface TestEnvironment {
    environmentId: string;
    environmentName: string;
}

export interface TestInsightDetails {
    count: number;
    previousBuild: ShallowReference;
    self: ShallowReference;
    testResults: ShallowReference[];
}

export interface TestInsights {
    existingFailures: TestInsightDetails;
    fixedTests: TestInsightDetails;
    newFailures: TestInsightDetails;
    self: ShallowReference;
}

export interface TestIterationDetailsModel {
    actionResults: TestActionResultModel[];
    attachments: TestCaseResultAttachmentModel[];
    comment: string;
    completedDate: Date;
    durationInMs: number;
    errorMessage: string;
    id: number;
    outcome: string;
    parameters: TestResultParameterModel[];
    startedDate: Date;
    url: string;
}

/**
 * An abstracted reference to some other resource. This class is used to provide the build data contracts with a uniform way to reference other resources in a way that provides easy traversal through links.
 */
export interface TestMessageLogDetails {
    /**
     * Date when the resource is created
     */
    dateCreated: Date;
    /**
     * Id of the resource
     */
    entryId: number;
    /**
     * Message of the resource
     */
    message: string;
}

export interface TestPlan {
    area: ShallowReference;
    automatedTestEnvironment: TestEnvironment;
    automatedTestSettings: TestSettings;
    build: ShallowReference;
    clientUrl: string;
    description: string;
    endDate: Date;
    id: number;
    iteration: string;
    manualTestEnvironment: TestEnvironment;
    manualTestSettings: TestSettings;
    name: string;
    owner: VSSInterfaces.IdentityRef;
    previousBuild: ShallowReference;
    project: ShallowReference;
    revision: number;
    rootSuite: ShallowReference;
    startDate: Date;
    state: string;
    updatedBy: VSSInterfaces.IdentityRef;
    updatedDate: Date;
    url: string;
}

export interface TestPlansWithSelection {
    lastSelectedPlan: number;
    lastSelectedSuite: number;
    plans: TestPlan[];
}

export interface TestPoint {
    assignedTo: VSSInterfaces.IdentityRef;
    automated: boolean;
    comment: string;
    configuration: ShallowReference;
    failureType: string;
    id: number;
    lastResolutionStateId: number;
    lastResult: ShallowReference;
    lastTestRun: ShallowReference;
    lastUpdatedBy: VSSInterfaces.IdentityRef;
    lastUpdatedDate: Date;
    outcome: string;
    revision: number;
    state: string;
    suite: ShallowReference;
    testCase: WorkItemReference;
    testPlan: ShallowReference;
    url: string;
    workItemProperties: any[];
}

export interface TestReport {
    aggregatedResults: AggregatedTestResults;
    build: ShallowReference;
    self: ShallowReference;
    teamProject: ShallowReference;
    testInsights: TestInsights;
}

export interface TestResolutionState {
    id: number;
    name: string;
    project: ShallowReference;
}

export interface TestResultCreateModel {
    additionalFields: CustomTestField[];
    area: ShallowReference;
    associatedWorkItems: number[];
    automatedTestId: string;
    automatedTestName: string;
    automatedTestStorage: string;
    automatedTestType: string;
    automatedTestTypeId: string;
    comment: string;
    completedDate: string;
    computerName: string;
    configuration: ShallowReference;
    durationInMs: string;
    errorMessage: string;
    failureType: string;
    outcome: string;
    owner: VSSInterfaces.IdentityRef;
    resolutionState: string;
    runBy: VSSInterfaces.IdentityRef;
    stackTrace: string;
    startedDate: string;
    state: string;
    testCase: ShallowReference;
    testCasePriority: string;
    testCaseTitle: string;
    testPoint: ShallowReference;
}

export interface TestResultModelBase {
    comment: string;
    completedDate: Date;
    durationInMs: number;
    errorMessage: string;
    outcome: string;
    startedDate: Date;
}

export interface TestResultParameterModel {
    actionPath: string;
    iterationId: number;
    parameterName: string;
    url: string;
    value: string;
}

export interface TestRun {
    additionalFields: CustomTestField[];
    build: ShallowReference;
    buildConfiguration: BuildConfiguration;
    comment: string;
    completedDate: Date;
    controller: string;
    createdDate: Date;
    dropLocation: string;
    dtlAutEnvironment: ShallowReference;
    dtlEnvironment: ShallowReference;
    dtlEnvironmentCreationDetails: DtlEnvironmentDetails;
    dueDate: Date;
    errorMessage: string;
    filter: RunFilter;
    id: number;
    incompleteTests: number;
    isAutomated: boolean;
    iteration: string;
    lastUpdatedBy: VSSInterfaces.IdentityRef;
    lastUpdatedDate: Date;
    name: string;
    notApplicableTests: number;
    owner: VSSInterfaces.IdentityRef;
    passedTests: number;
    phase: string;
    plan: ShallowReference;
    postProcessState: string;
    project: ShallowReference;
    releaseEnvironmentUri: string;
    releaseUri: string;
    revision: number;
    runStatistics: RunStatistic[];
    startedDate: Date;
    state: string;
    substate: TestRunSubstate;
    testEnvironment: TestEnvironment;
    testMessageLogId: number;
    testSettings: ShallowReference;
    totalTests: number;
    unanalyzedTests: number;
    url: string;
    webAccessUrl: string;
}

export interface TestRunCoverage {
    lastError: string;
    modules: ModuleCoverage[];
    state: string;
    testRun: ShallowReference;
}

export enum TestRunState {
    /**
     * Only used during an update to preserve the existing value.
     */
    Unspecified = 0,
    /**
     * The run is still being created.  No tests have started yet.
     */
    NotStarted = 1,
    /**
     * Tests are running.
     */
    InProgress = 2,
    /**
     * All tests have completed or been skipped.
     */
    Completed = 3,
    /**
     * Run is stopped and remaing tests have been aborted
     */
    Aborted = 4,
    /**
     * Run is currently initializing This is a legacy state and should not be used any more
     */
    Waiting = 5,
    /**
     * Run requires investigation because of a test point failure This is a legacy state and should not be used any more
     */
    NeedsInvestigation = 6,
}

export interface TestRunStatistic {
    run: ShallowReference;
    runStatistics: RunStatistic[];
}

export enum TestRunSubstate {
    None = 0,
    CreatingEnvironment = 1,
    RunningTests = 2,
    CanceledByUser = 3,
    AbortedBySystem = 4,
    TimedOut = 5,
    PendingAnalysis = 6,
    Analyzed = 7,
    CancellationInProgress = 8,
}

/**
 * Represents the test settings of the run. Used to create test settings and fetch test settings
 */
export interface TestSettings {
    /**
     * Area path required to create test settings
     */
    areaPath: string;
    /**
     * Description of the test settings. Used in create test settings.
     */
    description: string;
    /**
     * Indicates if the tests settings is public or private.Used in create test settings.
     */
    isPublic: boolean;
    /**
     * Xml string of machine roles. Used in create test settings.
     */
    machineRoles: string;
    /**
     * Test settings content.
     */
    testSettingsContent: string;
    /**
     * Test settings id.
     */
    testSettingsId: number;
    /**
     * Test settings name.
     */
    testSettingsName: string;
}

export interface TestSuite {
    areaUri: string;
    defaultConfigurations: ShallowReference[];
    id: number;
    inheritDefaultConfigurations: boolean;
    lastError: string;
    lastPopulatedDate: Date;
    lastUpdatedBy: VSSInterfaces.IdentityRef;
    lastUpdatedDate: Date;
    name: string;
    parent: ShallowReference;
    plan: ShallowReference;
    project: ShallowReference;
    queryString: string;
    requirementId: number;
    revision: number;
    state: string;
    suites: ShallowReference[];
    suiteType: string;
    testCaseCount: number;
    testCasesUrl: string;
    url: string;
}

export interface WorkItemReference {
    id: string;
    url: string;
    webUrl: string;
}

export var TypeInfo = {
    AggregatedResultsByPivot: {
        fields: <any>null
    },
    AggregatedTestResults: {
        fields: <any>null
    },
    AttachmentType: {
        enumValues: {
            "generalAttachment": 0,
            "afnStrip": 1,
            "bugFilingData": 2,
            "codeCoverage": 3,
            "intermediateCollectorData": 4,
            "runConfig": 5,
            "testImpactDetails": 6,
            "tmiTestRunDeploymentFiles": 7,
            "tmiTestRunReverseDeploymentFiles": 8,
            "tmiTestResultDetail": 9,
            "tmiTestRunSummary": 10,
        }
    },
    BatchResponse: {
        fields: <any>null
    },
    BuildConfiguration: {
        fields: <any>null
    },
    BuildCoverage: {
        fields: <any>null
    },
    CodeCoverageData: {
        fields: <any>null
    },
    CodeCoverageStatistics: {
        fields: <any>null
    },
    CodeCoverageSummary: {
        fields: <any>null
    },
    CoverageQueryFlags: {
        enumValues: {
            "modules": 1,
            "functions": 2,
            "blockData": 4,
        }
    },
    CoverageStatistics: {
        fields: <any>null
    },
    CustomTestField: {
        fields: <any>null
    },
    CustomTestFieldDefinition: {
        fields: <any>null
    },
    CustomTestFieldScope: {
        enumValues: {
            "none": 0,
            "testRun": 1,
            "testResult": 2,
            "system": 4,
            "all": 7,
        }
    },
    CustomTestFieldType: {
        enumValues: {
            "bit": 2,
            "int": 8,
            "float": 6,
            "guid": 14,
            "dateTime": 4,
            "string": 12,
        }
    },
    DtlEnvironmentDetails: {
        fields: <any>null
    },
    FunctionCoverage: {
        fields: <any>null
    },
    ModuleCoverage: {
        fields: <any>null
    },
    PlanUpdateModel: {
        fields: <any>null
    },
    PointAssignment: {
        fields: <any>null
    },
    PointUpdateModel: {
        fields: <any>null
    },
    PointWorkItemProperty: {
        fields: <any>null
    },
    QueryModel: {
        fields: <any>null
    },
    Response: {
        fields: <any>null
    },
    ResultOutcome: {
        enumValues: {
            "pass": 1,
            "fail": 2,
            "pending": 3,
        }
    },
    ResultUpdateRequestModel: {
        fields: <any>null
    },
    ResultUpdateResponseModel: {
        fields: <any>null
    },
    RunCreateModel: {
        fields: <any>null
    },
    RunFilter: {
        fields: <any>null
    },
    RunStatistic: {
        fields: <any>null
    },
    RunUpdateModel: {
        fields: <any>null
    },
    ShallowReference: {
        fields: <any>null
    },
    SharedStepModel: {
        fields: <any>null
    },
    SuiteCreateModel: {
        fields: <any>null
    },
    SuiteTestCase: {
        fields: <any>null
    },
    SuiteUpdateModel: {
        fields: <any>null
    },
    TestActionResultModel: {
        fields: <any>null
    },
    TestAttachmentReference: {
        fields: <any>null
    },
    TestAttachmentRequestModel: {
        fields: <any>null
    },
    TestCaseResult: {
        fields: <any>null
    },
    TestCaseResult2: {
        fields: <any>null
    },
    TestCaseResultAttachmentModel: {
        fields: <any>null
    },
    TestCaseResultIdentifier: {
        fields: <any>null
    },
    TestCaseResultUpdateModel: {
        fields: <any>null
    },
    TestEnvironment: {
        fields: <any>null
    },
    TestInsightDetails: {
        fields: <any>null
    },
    TestInsights: {
        fields: <any>null
    },
    TestIterationDetailsModel: {
        fields: <any>null
    },
    TestMessageLogDetails: {
        fields: <any>null
    },
    TestPlan: {
        fields: <any>null
    },
    TestPlansWithSelection: {
        fields: <any>null
    },
    TestPoint: {
        fields: <any>null
    },
    TestReport: {
        fields: <any>null
    },
    TestResolutionState: {
        fields: <any>null
    },
    TestResultCreateModel: {
        fields: <any>null
    },
    TestResultModelBase: {
        fields: <any>null
    },
    TestResultParameterModel: {
        fields: <any>null
    },
    TestRun: {
        fields: <any>null
    },
    TestRunCoverage: {
        fields: <any>null
    },
    TestRunState: {
        enumValues: {
            "unspecified": 0,
            "notStarted": 1,
            "inProgress": 2,
            "completed": 3,
            "aborted": 4,
            "waiting": 5,
            "needsInvestigation": 6,
        }
    },
    TestRunStatistic: {
        fields: <any>null
    },
    TestRunSubstate: {
        enumValues: {
            "none": 0,
            "creatingEnvironment": 1,
            "runningTests": 2,
            "canceledByUser": 3,
            "abortedBySystem": 4,
            "timedOut": 5,
            "pendingAnalysis": 6,
            "analyzed": 7,
            "cancellationInProgress": 8,
        }
    },
    TestSettings: {
        fields: <any>null
    },
    TestSuite: {
        fields: <any>null
    },
    WorkItemReference: {
        fields: <any>null
    },
};

TypeInfo.AggregatedResultsByPivot.fields = {
};

TypeInfo.AggregatedTestResults.fields = {
    resultsByPivot: {
        isArray: true,
        typeInfo: TypeInfo.AggregatedResultsByPivot
    },
    self: {
        typeInfo: TypeInfo.ShallowReference
    },
};

TypeInfo.BatchResponse.fields = {
    responses: {
        isArray: true,
        typeInfo: TypeInfo.Response
    },
};

TypeInfo.BuildConfiguration.fields = {
    project: {
        typeInfo: TypeInfo.ShallowReference
    },
};

TypeInfo.BuildCoverage.fields = {
    configuration: {
        typeInfo: TypeInfo.BuildConfiguration
    },
    modules: {
        isArray: true,
        typeInfo: TypeInfo.ModuleCoverage
    },
};

TypeInfo.CodeCoverageData.fields = {
    coverageStats: {
        isArray: true,
        typeInfo: TypeInfo.CodeCoverageStatistics
    },
};

TypeInfo.CodeCoverageStatistics.fields = {
};

TypeInfo.CodeCoverageSummary.fields = {
    build: {
        typeInfo: TypeInfo.ShallowReference
    },
    coverageData: {
        isArray: true,
        typeInfo: TypeInfo.CodeCoverageData
    },
    deltaBuild: {
        typeInfo: TypeInfo.ShallowReference
    },
};

TypeInfo.CoverageStatistics.fields = {
};

TypeInfo.CustomTestField.fields = {
};

TypeInfo.CustomTestFieldDefinition.fields = {
    fieldType: {
        enumType: TypeInfo.CustomTestFieldType
    },
    scope: {
        enumType: TypeInfo.CustomTestFieldScope
    },
};

TypeInfo.DtlEnvironmentDetails.fields = {
};

TypeInfo.FunctionCoverage.fields = {
    statistics: {
        typeInfo: TypeInfo.CoverageStatistics
    },
};

TypeInfo.ModuleCoverage.fields = {
    functions: {
        isArray: true,
        typeInfo: TypeInfo.FunctionCoverage
    },
    statistics: {
        typeInfo: TypeInfo.CoverageStatistics
    },
};

TypeInfo.PlanUpdateModel.fields = {
    area: {
        typeInfo: TypeInfo.ShallowReference
    },
    automatedTestEnvironment: {
        typeInfo: TypeInfo.TestEnvironment
    },
    automatedTestSettings: {
        typeInfo: TypeInfo.TestSettings
    },
    build: {
        typeInfo: TypeInfo.ShallowReference
    },
    manualTestEnvironment: {
        typeInfo: TypeInfo.TestEnvironment
    },
    manualTestSettings: {
        typeInfo: TypeInfo.TestSettings
    },
    owner: {
        typeInfo: VSSInterfaces.TypeInfo.IdentityRef
    },
};

TypeInfo.PointAssignment.fields = {
    configuration: {
        typeInfo: TypeInfo.ShallowReference
    },
    tester: {
        typeInfo: VSSInterfaces.TypeInfo.IdentityRef
    },
};

TypeInfo.PointUpdateModel.fields = {
};

TypeInfo.PointWorkItemProperty.fields = {
};

TypeInfo.QueryModel.fields = {
};

TypeInfo.Response.fields = {
};

TypeInfo.ResultUpdateRequestModel.fields = {
    actionResultDeletes: {
        isArray: true,
        typeInfo: TypeInfo.TestActionResultModel
    },
    actionResults: {
        isArray: true,
        typeInfo: TypeInfo.TestActionResultModel
    },
    parameterDeletes: {
        isArray: true,
        typeInfo: TypeInfo.TestResultParameterModel
    },
    parameters: {
        isArray: true,
        typeInfo: TypeInfo.TestResultParameterModel
    },
    testCaseResult: {
        typeInfo: TypeInfo.TestCaseResultUpdateModel
    },
};

TypeInfo.ResultUpdateResponseModel.fields = {
};

TypeInfo.RunCreateModel.fields = {
    additionalTestFields: {
        isArray: true,
        typeInfo: TypeInfo.CustomTestField
    },
    build: {
        typeInfo: TypeInfo.ShallowReference
    },
    dtlAutEnvironment: {
        typeInfo: TypeInfo.ShallowReference
    },
    dtlTestEnvironment: {
        typeInfo: TypeInfo.ShallowReference
    },
    environmentDetails: {
        typeInfo: TypeInfo.DtlEnvironmentDetails
    },
    filter: {
        typeInfo: TypeInfo.RunFilter
    },
    owner: {
        typeInfo: VSSInterfaces.TypeInfo.IdentityRef
    },
    plan: {
        typeInfo: TypeInfo.ShallowReference
    },
    testSettings: {
        typeInfo: TypeInfo.ShallowReference
    },
};

TypeInfo.RunFilter.fields = {
};

TypeInfo.RunStatistic.fields = {
    resolutionState: {
        typeInfo: TypeInfo.TestResolutionState
    },
};

TypeInfo.RunUpdateModel.fields = {
    build: {
        typeInfo: TypeInfo.ShallowReference
    },
    dtlAutEnvironment: {
        typeInfo: TypeInfo.ShallowReference
    },
    dtlEnvironment: {
        typeInfo: TypeInfo.ShallowReference
    },
    dtlEnvironmentDetails: {
        typeInfo: TypeInfo.DtlEnvironmentDetails
    },
    logEntries: {
        isArray: true,
        typeInfo: TypeInfo.TestMessageLogDetails
    },
    substate: {
        enumType: TypeInfo.TestRunSubstate
    },
    testSettings: {
        typeInfo: TypeInfo.ShallowReference
    },
};

TypeInfo.ShallowReference.fields = {
};

TypeInfo.SharedStepModel.fields = {
};

TypeInfo.SuiteCreateModel.fields = {
};

TypeInfo.SuiteTestCase.fields = {
    pointAssignments: {
        isArray: true,
        typeInfo: TypeInfo.PointAssignment
    },
    testCase: {
        typeInfo: TypeInfo.WorkItemReference
    },
};

TypeInfo.SuiteUpdateModel.fields = {
};

TypeInfo.TestActionResultModel.fields = {
    completedDate: {
        isDate: true,
    },
    sharedStepModel: {
        typeInfo: TypeInfo.SharedStepModel
    },
    startedDate: {
        isDate: true,
    },
};

TypeInfo.TestAttachmentReference.fields = {
};

TypeInfo.TestAttachmentRequestModel.fields = {
};

TypeInfo.TestCaseResult.fields = {
    additionalFields: {
        isArray: true,
        typeInfo: TypeInfo.CustomTestField
    },
    area: {
        typeInfo: TypeInfo.ShallowReference
    },
    associatedBugs: {
        isArray: true,
        typeInfo: TypeInfo.ShallowReference
    },
    build: {
        typeInfo: TypeInfo.ShallowReference
    },
    completedDate: {
        isDate: true,
    },
    configuration: {
        typeInfo: TypeInfo.ShallowReference
    },
    createdDate: {
        isDate: true,
    },
    iterationDetails: {
        isArray: true,
        typeInfo: TypeInfo.TestIterationDetailsModel
    },
    lastUpdatedBy: {
        typeInfo: VSSInterfaces.TypeInfo.IdentityRef
    },
    lastUpdatedDate: {
        isDate: true,
    },
    owner: {
        typeInfo: VSSInterfaces.TypeInfo.IdentityRef
    },
    project: {
        typeInfo: TypeInfo.ShallowReference
    },
    runBy: {
        typeInfo: VSSInterfaces.TypeInfo.IdentityRef
    },
    startedDate: {
        isDate: true,
    },
    testCase: {
        typeInfo: TypeInfo.ShallowReference
    },
    testPoint: {
        typeInfo: TypeInfo.ShallowReference
    },
    testRun: {
        typeInfo: TypeInfo.ShallowReference
    },
};

TypeInfo.TestCaseResult2.fields = {
    endTime: {
        isDate: true,
    },
    outcome: {
        enumType: TypeInfo.ResultOutcome
    },
    startTime: {
        isDate: true,
    },
};

TypeInfo.TestCaseResultAttachmentModel.fields = {
};

TypeInfo.TestCaseResultIdentifier.fields = {
};

TypeInfo.TestCaseResultUpdateModel.fields = {
    additionalFields: {
        isArray: true,
        typeInfo: TypeInfo.CustomTestField
    },
    owner: {
        typeInfo: VSSInterfaces.TypeInfo.IdentityRef
    },
    runBy: {
        typeInfo: VSSInterfaces.TypeInfo.IdentityRef
    },
    testResult: {
        typeInfo: TypeInfo.ShallowReference
    },
};

TypeInfo.TestEnvironment.fields = {
};

TypeInfo.TestInsightDetails.fields = {
    previousBuild: {
        typeInfo: TypeInfo.ShallowReference
    },
    self: {
        typeInfo: TypeInfo.ShallowReference
    },
    testResults: {
        isArray: true,
        typeInfo: TypeInfo.ShallowReference
    },
};

TypeInfo.TestInsights.fields = {
    existingFailures: {
        typeInfo: TypeInfo.TestInsightDetails
    },
    fixedTests: {
        typeInfo: TypeInfo.TestInsightDetails
    },
    newFailures: {
        typeInfo: TypeInfo.TestInsightDetails
    },
    self: {
        typeInfo: TypeInfo.ShallowReference
    },
};

TypeInfo.TestIterationDetailsModel.fields = {
    actionResults: {
        isArray: true,
        typeInfo: TypeInfo.TestActionResultModel
    },
    attachments: {
        isArray: true,
        typeInfo: TypeInfo.TestCaseResultAttachmentModel
    },
    completedDate: {
        isDate: true,
    },
    parameters: {
        isArray: true,
        typeInfo: TypeInfo.TestResultParameterModel
    },
    startedDate: {
        isDate: true,
    },
};

TypeInfo.TestMessageLogDetails.fields = {
    dateCreated: {
        isDate: true,
    },
};

TypeInfo.TestPlan.fields = {
    area: {
        typeInfo: TypeInfo.ShallowReference
    },
    automatedTestEnvironment: {
        typeInfo: TypeInfo.TestEnvironment
    },
    automatedTestSettings: {
        typeInfo: TypeInfo.TestSettings
    },
    build: {
        typeInfo: TypeInfo.ShallowReference
    },
    endDate: {
        isDate: true,
    },
    manualTestEnvironment: {
        typeInfo: TypeInfo.TestEnvironment
    },
    manualTestSettings: {
        typeInfo: TypeInfo.TestSettings
    },
    owner: {
        typeInfo: VSSInterfaces.TypeInfo.IdentityRef
    },
    previousBuild: {
        typeInfo: TypeInfo.ShallowReference
    },
    project: {
        typeInfo: TypeInfo.ShallowReference
    },
    rootSuite: {
        typeInfo: TypeInfo.ShallowReference
    },
    startDate: {
        isDate: true,
    },
    updatedBy: {
        typeInfo: VSSInterfaces.TypeInfo.IdentityRef
    },
    updatedDate: {
        isDate: true,
    },
};

TypeInfo.TestPlansWithSelection.fields = {
    plans: {
        isArray: true,
        typeInfo: TypeInfo.TestPlan
    },
};

TypeInfo.TestPoint.fields = {
    assignedTo: {
        typeInfo: VSSInterfaces.TypeInfo.IdentityRef
    },
    configuration: {
        typeInfo: TypeInfo.ShallowReference
    },
    lastResult: {
        typeInfo: TypeInfo.ShallowReference
    },
    lastTestRun: {
        typeInfo: TypeInfo.ShallowReference
    },
    lastUpdatedBy: {
        typeInfo: VSSInterfaces.TypeInfo.IdentityRef
    },
    lastUpdatedDate: {
        isDate: true,
    },
    suite: {
        typeInfo: TypeInfo.ShallowReference
    },
    testCase: {
        typeInfo: TypeInfo.WorkItemReference
    },
    testPlan: {
        typeInfo: TypeInfo.ShallowReference
    },
};

TypeInfo.TestReport.fields = {
    aggregatedResults: {
        typeInfo: TypeInfo.AggregatedTestResults
    },
    build: {
        typeInfo: TypeInfo.ShallowReference
    },
    self: {
        typeInfo: TypeInfo.ShallowReference
    },
    teamProject: {
        typeInfo: TypeInfo.ShallowReference
    },
    testInsights: {
        typeInfo: TypeInfo.TestInsights
    },
};

TypeInfo.TestResolutionState.fields = {
    project: {
        typeInfo: TypeInfo.ShallowReference
    },
};

TypeInfo.TestResultCreateModel.fields = {
    additionalFields: {
        isArray: true,
        typeInfo: TypeInfo.CustomTestField
    },
    area: {
        typeInfo: TypeInfo.ShallowReference
    },
    configuration: {
        typeInfo: TypeInfo.ShallowReference
    },
    owner: {
        typeInfo: VSSInterfaces.TypeInfo.IdentityRef
    },
    runBy: {
        typeInfo: VSSInterfaces.TypeInfo.IdentityRef
    },
    testCase: {
        typeInfo: TypeInfo.ShallowReference
    },
    testPoint: {
        typeInfo: TypeInfo.ShallowReference
    },
};

TypeInfo.TestResultModelBase.fields = {
    completedDate: {
        isDate: true,
    },
    startedDate: {
        isDate: true,
    },
};

TypeInfo.TestResultParameterModel.fields = {
};

TypeInfo.TestRun.fields = {
    additionalFields: {
        isArray: true,
        typeInfo: TypeInfo.CustomTestField
    },
    build: {
        typeInfo: TypeInfo.ShallowReference
    },
    buildConfiguration: {
        typeInfo: TypeInfo.BuildConfiguration
    },
    completedDate: {
        isDate: true,
    },
    createdDate: {
        isDate: true,
    },
    dtlAutEnvironment: {
        typeInfo: TypeInfo.ShallowReference
    },
    dtlEnvironment: {
        typeInfo: TypeInfo.ShallowReference
    },
    dtlEnvironmentCreationDetails: {
        typeInfo: TypeInfo.DtlEnvironmentDetails
    },
    dueDate: {
        isDate: true,
    },
    filter: {
        typeInfo: TypeInfo.RunFilter
    },
    lastUpdatedBy: {
        typeInfo: VSSInterfaces.TypeInfo.IdentityRef
    },
    lastUpdatedDate: {
        isDate: true,
    },
    owner: {
        typeInfo: VSSInterfaces.TypeInfo.IdentityRef
    },
    plan: {
        typeInfo: TypeInfo.ShallowReference
    },
    project: {
        typeInfo: TypeInfo.ShallowReference
    },
    runStatistics: {
        isArray: true,
        typeInfo: TypeInfo.RunStatistic
    },
    startedDate: {
        isDate: true,
    },
    substate: {
        enumType: TypeInfo.TestRunSubstate
    },
    testEnvironment: {
        typeInfo: TypeInfo.TestEnvironment
    },
    testSettings: {
        typeInfo: TypeInfo.ShallowReference
    },
};

TypeInfo.TestRunCoverage.fields = {
    modules: {
        isArray: true,
        typeInfo: TypeInfo.ModuleCoverage
    },
    testRun: {
        typeInfo: TypeInfo.ShallowReference
    },
};

TypeInfo.TestRunStatistic.fields = {
    run: {
        typeInfo: TypeInfo.ShallowReference
    },
    runStatistics: {
        isArray: true,
        typeInfo: TypeInfo.RunStatistic
    },
};

TypeInfo.TestSettings.fields = {
};

TypeInfo.TestSuite.fields = {
    defaultConfigurations: {
        isArray: true,
        typeInfo: TypeInfo.ShallowReference
    },
    lastPopulatedDate: {
        isDate: true,
    },
    lastUpdatedBy: {
        typeInfo: VSSInterfaces.TypeInfo.IdentityRef
    },
    lastUpdatedDate: {
        isDate: true,
    },
    parent: {
        typeInfo: TypeInfo.ShallowReference
    },
    plan: {
        typeInfo: TypeInfo.ShallowReference
    },
    project: {
        typeInfo: TypeInfo.ShallowReference
    },
    suites: {
        isArray: true,
        typeInfo: TypeInfo.ShallowReference
    },
};

TypeInfo.WorkItemReference.fields = {
};
