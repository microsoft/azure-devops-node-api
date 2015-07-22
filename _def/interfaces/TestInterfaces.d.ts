import VSSInterfaces = require("../interfaces/common/VSSInterfaces");
export declare enum AttachmentType {
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
export declare enum CoverageQueryFlags {
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
    workItem: {
        key: string;
        value: any;
    };
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
export declare enum ResultOutcome {
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
    startedDate: string;
    state: string;
    testCasePriority: string;
    testResult: ShallowReference;
}
export interface TestEnvironment {
    environmentId: string;
    environmentName: string;
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
export interface TestResolutionState {
    id: number;
    name: string;
    project: ShallowReference;
}
export interface TestResultCreateModel {
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
export declare enum TestRunState {
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
export declare enum TestRunSubstate {
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
export declare var TypeInfo: {
    AttachmentType: {
        enumValues: {
            "generalAttachment": number;
            "afnStrip": number;
            "bugFilingData": number;
            "codeCoverage": number;
            "intermediateCollectorData": number;
            "runConfig": number;
            "testImpactDetails": number;
            "tmiTestRunDeploymentFiles": number;
            "tmiTestRunReverseDeploymentFiles": number;
            "tmiTestResultDetail": number;
            "tmiTestRunSummary": number;
        };
    };
    BatchResponse: {
        fields: any;
    };
    BuildConfiguration: {
        fields: any;
    };
    BuildCoverage: {
        fields: any;
    };
    CoverageQueryFlags: {
        enumValues: {
            "modules": number;
            "functions": number;
            "blockData": number;
        };
    };
    CoverageStatistics: {
        fields: any;
    };
    DtlEnvironmentDetails: {
        fields: any;
    };
    FunctionCoverage: {
        fields: any;
    };
    ModuleCoverage: {
        fields: any;
    };
    PlanUpdateModel: {
        fields: any;
    };
    PointAssignment: {
        fields: any;
    };
    PointUpdateModel: {
        fields: any;
    };
    PointWorkItemProperty: {
        fields: any;
    };
    QueryModel: {
        fields: any;
    };
    Response: {
        fields: any;
    };
    ResultOutcome: {
        enumValues: {
            "pass": number;
            "fail": number;
            "pending": number;
        };
    };
    ResultUpdateRequestModel: {
        fields: any;
    };
    ResultUpdateResponseModel: {
        fields: any;
    };
    RunCreateModel: {
        fields: any;
    };
    RunFilter: {
        fields: any;
    };
    RunStatistic: {
        fields: any;
    };
    RunUpdateModel: {
        fields: any;
    };
    ShallowReference: {
        fields: any;
    };
    SharedStepModel: {
        fields: any;
    };
    SuiteCreateModel: {
        fields: any;
    };
    SuiteTestCase: {
        fields: any;
    };
    SuiteUpdateModel: {
        fields: any;
    };
    TestActionResultModel: {
        fields: any;
    };
    TestAttachmentReference: {
        fields: any;
    };
    TestAttachmentRequestModel: {
        fields: any;
    };
    TestCaseResult: {
        fields: any;
    };
    TestCaseResult2: {
        fields: any;
    };
    TestCaseResultAttachmentModel: {
        fields: any;
    };
    TestCaseResultIdentifier: {
        fields: any;
    };
    TestCaseResultUpdateModel: {
        fields: any;
    };
    TestEnvironment: {
        fields: any;
    };
    TestIterationDetailsModel: {
        fields: any;
    };
    TestMessageLogDetails: {
        fields: any;
    };
    TestPlan: {
        fields: any;
    };
    TestPlansWithSelection: {
        fields: any;
    };
    TestPoint: {
        fields: any;
    };
    TestResolutionState: {
        fields: any;
    };
    TestResultCreateModel: {
        fields: any;
    };
    TestResultModelBase: {
        fields: any;
    };
    TestResultParameterModel: {
        fields: any;
    };
    TestRun: {
        fields: any;
    };
    TestRunCoverage: {
        fields: any;
    };
    TestRunState: {
        enumValues: {
            "unspecified": number;
            "notStarted": number;
            "inProgress": number;
            "completed": number;
            "aborted": number;
            "waiting": number;
            "needsInvestigation": number;
        };
    };
    TestRunStatistic: {
        fields: any;
    };
    TestRunSubstate: {
        enumValues: {
            "none": number;
            "creatingEnvironment": number;
            "runningTests": number;
            "canceledByUser": number;
            "abortedBySystem": number;
            "timedOut": number;
            "pendingAnalysis": number;
            "analyzed": number;
            "cancellationInProgress": number;
        };
    };
    TestSettings: {
        fields: any;
    };
    TestSuite: {
        fields: any;
    };
    WorkItemReference: {
        fields: any;
    };
};
