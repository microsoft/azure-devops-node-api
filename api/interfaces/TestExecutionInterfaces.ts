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

import TfsCoreInterfaces = require("../interfaces/CoreInterfaces");


export enum AutomatedTestRunSliceStatus {
    None = 0,
    Pending = 1,
    Allocated = 2,
    Completed = 3,
    Aborted = 4,
    Cancelled = 5,
}

export enum AutomatedTestRunSliceType {
    None = 0,
    Discovery = 1,
    Execution = 2,
    SessionStart = 3,
    SessionStop = 4,
}

export interface DistributedTestRun {
    distributedTestRunCreateModel: DistributedTestRunCreateModel;
    /**
     * DTA Environment Uri
     */
    environmentUri: string;
    /**
     * Test Run Id
     */
    testRunId: number;
}

export interface DistributedTestRunCreateModel {
    autEnvironmentUrl: string;
    automated: boolean;
    build: ShallowReference;
    buildDropLocation: string;
    buildFlavor: string;
    buildPlatform: string;
    configurationIds: number[];
    environmentUrl: string;
    name: string;
    plan: ShallowReference;
    pointIds: number[];
    releaseEnvironmentUri: string;
    releaseUri: string;
    runTimeout: any;
    sourceFilter: string;
    testCaseFilter: string;
    testConfigurationsMapping: string;
    testSettings: ShallowReference;
    type: string;
}

/**
 * Slices can send back information via the Message structure
 */
export interface Message {
    data: string;
    type: MessageType;
}

export enum MessageType {
    None = 0,
    Error = 1,
    Warning = 2,
    Info = 3,
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

/**
 * An abstracted reference to some other resource. This class is used to provide the build data contracts with a uniform way to reference other resources in a way that provides easy traversal through links.
 */
export interface ShallowReference {
    /**
     * Id of the resource
     */
    id: number;
    /**
     * Name of the resource
     */
    name: string;
    /**
     * Full http link to the resource
     */
    url: string;
}

/**
 * Sliced Data passed from server to agent post slicing
 */
export interface SlicedTestData {
    /**
     * ExecutorUri of Executor of testcase
     */
    executorUri: string;
    /**
     * Fully qualified Name of Testcase
     */
    fullyQualifiedName: string;
    /**
     * TestContainer of TestCase
     */
    source: string;
}

export interface TestAgent {
    capabilities: string[];
    dtlEnvironment: ShallowReference;
    dtlMachine: ShallowReference;
    id: number;
    name: string;
    testRunId: number;
}

/**
 * Represents the Slice of work that needs to be executed by Automation Test Agent. Data is categorized as below Slice related information e.g. Identity/Type etc Agent related information: Currently none. TestRun related information e.g. TcmRunId/ProjectName/TestContainers etc
 */
export interface TestAutomationRunSlice {
    /**
     * Id of Slice Sent to ExecutionHost
     */
    id: number;
    /**
     * Results from the previous slice in jason format. e.g. Results from DiscoverySlice can be used by ExecutionSlice.
     */
    lastPhaseResults: SlicedTestData[];
    /**
     * Important messages related to the execution of the slice.
     */
    messages: Message[];
    /**
     * List of requirements on the slice that should be met for it to be assigned
     */
    requirements: string;
    /**
     * Results of the slice
     */
    results: string;
    /**
     * Status of the slice
     */
    status: AutomatedTestRunSliceStatus;
    /**
     * config Id of Executing Slice
     */
    testConfigId: number;
    /**
     * Test Configurations mapping
     */
    testConfigurationsMapping: string;
    /**
     * TestRunInformation should capture any information related to the TestRun
     */
    testRunInformation: TestRunInformation;
    /**
     * The type of slice being worked on
     */
    type: AutomatedTestRunSliceType;
}

/**
 * The type is used as part of Command resource rest api. When Agent does a GetCommand this is what Agent gets.
 */
export interface TestExecutionServiceCommand {
    /**
     * Json string of TestExecutionCommandMessage.
     */
    body: string;
    /**
     * The message id.
     */
    messageId: number;
    /**
     * The message type
     */
    messageType: string;
}

/**
 * Captures the Automation TestRun related information needed by TestAgent to execute the TestRun slice.
 */
export interface TestRunInformation {
    filters: RunFilter;
    isTestRunComplete: boolean;
    projectReference: TfsCoreInterfaces.TeamProjectReference;
    /**
     * RunSettings Xml
     */
    runSettings: string;
    tcmRun: ShallowReference;
    /**
     * Location of Test containers on Test agent machine.
     */
    testDropPath: string;
}

export var TypeInfo = {
    AutomatedTestRunSliceStatus: {
        enumValues: {
            "none": 0,
            "pending": 1,
            "allocated": 2,
            "completed": 3,
            "aborted": 4,
            "cancelled": 5,
        }
    },
    AutomatedTestRunSliceType: {
        enumValues: {
            "none": 0,
            "discovery": 1,
            "execution": 2,
            "sessionStart": 3,
            "sessionStop": 4,
        }
    },
    DistributedTestRun: {
        fields: <any>null
    },
    DistributedTestRunCreateModel: {
        fields: <any>null
    },
    Message: {
        fields: <any>null
    },
    MessageType: {
        enumValues: {
            "none": 0,
            "error": 1,
            "warning": 2,
            "info": 3,
        }
    },
    RunFilter: {
        fields: <any>null
    },
    ShallowReference: {
        fields: <any>null
    },
    SlicedTestData: {
        fields: <any>null
    },
    TestAgent: {
        fields: <any>null
    },
    TestAutomationRunSlice: {
        fields: <any>null
    },
    TestExecutionServiceCommand: {
        fields: <any>null
    },
    TestRunInformation: {
        fields: <any>null
    },
};

TypeInfo.DistributedTestRun.fields = {
    distributedTestRunCreateModel: {
        typeInfo: TypeInfo.DistributedTestRunCreateModel
    },
};

TypeInfo.DistributedTestRunCreateModel.fields = {
    build: {
        typeInfo: TypeInfo.ShallowReference
    },
    plan: {
        typeInfo: TypeInfo.ShallowReference
    },
    testSettings: {
        typeInfo: TypeInfo.ShallowReference
    },
};

TypeInfo.Message.fields = {
    type: {
        enumType: TypeInfo.MessageType
    },
};

TypeInfo.RunFilter.fields = {
};

TypeInfo.ShallowReference.fields = {
};

TypeInfo.SlicedTestData.fields = {
};

TypeInfo.TestAgent.fields = {
    dtlEnvironment: {
        typeInfo: TypeInfo.ShallowReference
    },
    dtlMachine: {
        typeInfo: TypeInfo.ShallowReference
    },
};

TypeInfo.TestAutomationRunSlice.fields = {
    lastPhaseResults: {
        isArray: true,
        typeInfo: TypeInfo.SlicedTestData
    },
    messages: {
        isArray: true,
        typeInfo: TypeInfo.Message
    },
    status: {
        enumType: TypeInfo.AutomatedTestRunSliceStatus
    },
    testRunInformation: {
        typeInfo: TypeInfo.TestRunInformation
    },
    type: {
        enumType: TypeInfo.AutomatedTestRunSliceType
    },
};

TypeInfo.TestExecutionServiceCommand.fields = {
};

TypeInfo.TestRunInformation.fields = {
    filters: {
        typeInfo: TypeInfo.RunFilter
    },
    projectReference: {
        typeInfo: TfsCoreInterfaces.TypeInfo.TeamProjectReference
    },
    tcmRun: {
        typeInfo: TypeInfo.ShallowReference
    },
};
