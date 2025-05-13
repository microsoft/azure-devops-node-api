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
import TestPlanInterfaces = require("./interfaces/TestPlanInterfaces");
import VSSInterfaces = require("./interfaces/common/VSSInterfaces");

export interface ITestPlanApi extends basem.ClientApiBase {
    createTestConfiguration(testConfigurationCreateUpdateParameters: TestPlanInterfaces.TestConfigurationCreateUpdateParameters, project: string): Promise<TestPlanInterfaces.TestConfiguration>;
    deleteTestConfguration(project: string, testConfiguartionId: number): Promise<void>;
    getTestConfigurationById(project: string, testConfigurationId: number): Promise<TestPlanInterfaces.TestConfiguration>;
    getTestConfigurations(project: string, continuationToken?: string): Promise<VSSInterfaces.PagedList<TestPlanInterfaces.TestConfiguration>>;
    updateTestConfiguration(testConfigurationCreateUpdateParameters: TestPlanInterfaces.TestConfigurationCreateUpdateParameters, project: string, testConfiguartionId: number): Promise<TestPlanInterfaces.TestConfiguration>;
    getTestEntityCountByPlanId(project: string, planId: number, states?: string, outcome?: TestPlanInterfaces.UserFriendlyTestOutcome, configurations?: string, testers?: string, assignedTo?: string, entity?: TestPlanInterfaces.TestEntityTypes): Promise<TestPlanInterfaces.TestEntityCount[]>;
    createTestPlan(testPlanCreateParams: TestPlanInterfaces.TestPlanCreateParams, project: string): Promise<TestPlanInterfaces.TestPlan>;
    deleteTestPlan(project: string, planId: number): Promise<void>;
    getTestPlanById(project: string, planId: number): Promise<TestPlanInterfaces.TestPlan>;
    getTestPlans(project: string, owner?: string, continuationToken?: string, includePlanDetails?: boolean, filterActivePlans?: boolean): Promise<VSSInterfaces.PagedList<TestPlanInterfaces.TestPlan>>;
    updateTestPlan(testPlanUpdateParams: TestPlanInterfaces.TestPlanUpdateParams, project: string, planId: number): Promise<TestPlanInterfaces.TestPlan>;
    getSuiteEntries(project: string, suiteId: number, suiteEntryType?: TestPlanInterfaces.SuiteEntryTypes): Promise<TestPlanInterfaces.SuiteEntry[]>;
    reorderSuiteEntries(suiteEntries: TestPlanInterfaces.SuiteEntryUpdateParams[], project: string, suiteId: number): Promise<TestPlanInterfaces.SuiteEntry[]>;
    createBulkTestSuites(testSuiteCreateParams: TestPlanInterfaces.TestSuiteCreateParams[], project: string, planId: number, parentSuiteId: number): Promise<TestPlanInterfaces.TestSuite[]>;
    createTestSuite(testSuiteCreateParams: TestPlanInterfaces.TestSuiteCreateParams, project: string, planId: number): Promise<TestPlanInterfaces.TestSuite>;
    deleteTestSuite(project: string, planId: number, suiteId: number): Promise<void>;
    getTestSuiteById(project: string, planId: number, suiteId: number, expand?: TestPlanInterfaces.SuiteExpand): Promise<TestPlanInterfaces.TestSuite>;
    getTestSuitesForPlan(project: string, planId: number, expand?: TestPlanInterfaces.SuiteExpand, continuationToken?: string, asTreeView?: boolean): Promise<VSSInterfaces.PagedList<TestPlanInterfaces.TestSuite>>;
    updateTestSuite(testSuiteUpdateParams: TestPlanInterfaces.TestSuiteUpdateParams, project: string, planId: number, suiteId: number): Promise<TestPlanInterfaces.TestSuite>;
    getSuitesByTestCaseId(testCaseId: number): Promise<TestPlanInterfaces.TestSuite[]>;
    addTestCasesToSuite(suiteTestCaseCreateUpdateParameters: TestPlanInterfaces.SuiteTestCaseCreateUpdateParameters[], project: string, planId: number, suiteId: number): Promise<TestPlanInterfaces.TestCase[]>;
    getTestCase(project: string, planId: number, suiteId: number, testCaseId: string, witFields?: string, returnIdentityRef?: boolean): Promise<TestPlanInterfaces.TestCase[]>;
    getTestCaseList(project: string, planId: number, suiteId: number, testIds?: string, configurationIds?: string, witFields?: string, continuationToken?: string, returnIdentityRef?: boolean, expand?: boolean, excludeFlags?: TestPlanInterfaces.ExcludeFlags, isRecursive?: boolean): Promise<VSSInterfaces.PagedList<TestPlanInterfaces.TestCase>>;
    removeTestCasesFromSuite(project: string, planId: number, suiteId: number, testCaseIds: string): Promise<void>;
    removeTestCasesListFromSuite(project: string, planId: number, suiteId: number, testIds: string): Promise<void>;
    updateSuiteTestCases(suiteTestCaseCreateUpdateParameters: TestPlanInterfaces.SuiteTestCaseCreateUpdateParameters[], project: string, planId: number, suiteId: number): Promise<TestPlanInterfaces.TestCase[]>;
    cloneTestCase(cloneRequestBody: TestPlanInterfaces.CloneTestCaseParams, project: string): Promise<TestPlanInterfaces.CloneTestCaseOperationInformation>;
    getTestCaseCloneInformation(project: string, cloneOperationId: number): Promise<TestPlanInterfaces.CloneTestCaseOperationInformation>;
    exportTestCases(exportTestCaseRequestBody: TestPlanInterfaces.ExportTestCaseParams, project: string): Promise<NodeJS.ReadableStream>;
    deleteTestCase(project: string, testCaseId: number): Promise<void>;
    getDeletedTestPlans(project: string, continuationToken?: string): Promise<VSSInterfaces.PagedList<TestPlanInterfaces.TestPlan>>;
    restoreDeletedTestPlan(restoreModel: TestPlanInterfaces.TestPlanAndSuiteRestoreModel, project: string, planId: number): Promise<void>;
    cloneTestPlan(cloneRequestBody: TestPlanInterfaces.CloneTestPlanParams, project: string, deepClone?: boolean): Promise<TestPlanInterfaces.CloneTestPlanOperationInformation>;
    getCloneInformation(project: string, cloneOperationId: number): Promise<TestPlanInterfaces.CloneTestPlanOperationInformation>;
    getPoints(project: string, planId: number, suiteId: number, pointId: string, returnIdentityRef?: boolean, includePointDetails?: boolean): Promise<TestPlanInterfaces.TestPoint[]>;
    getPointsList(project: string, planId: number, suiteId: number, testPointIds?: string, testCaseId?: string, continuationToken?: string, returnIdentityRef?: boolean, includePointDetails?: boolean, isRecursive?: boolean): Promise<VSSInterfaces.PagedList<TestPlanInterfaces.TestPoint>>;
    updateTestPoints(testPointUpdateParams: TestPlanInterfaces.TestPointUpdateParams[], project: string, planId: number, suiteId: number, includePointDetails?: boolean, returnIdentityRef?: boolean): Promise<TestPlanInterfaces.TestPoint[]>;
    getDeletedTestSuitesForPlan(project: string, planId: number, expand?: TestPlanInterfaces.SuiteExpand, continuationToken?: string, asTreeView?: boolean): Promise<VSSInterfaces.PagedList<TestPlanInterfaces.TestSuite>>;
    getDeletedTestSuitesForProject(project: string, expand?: TestPlanInterfaces.SuiteExpand, continuationToken?: string, asTreeView?: boolean): Promise<VSSInterfaces.PagedList<TestPlanInterfaces.TestSuite>>;
    restoreDeletedTestSuite(payload: TestPlanInterfaces.TestPlanAndSuiteRestoreModel, project: string, suiteId: number): Promise<void>;
    cloneTestSuite(cloneRequestBody: TestPlanInterfaces.CloneTestSuiteParams, project: string, deepClone?: boolean): Promise<TestPlanInterfaces.CloneTestSuiteOperationInformation>;
    getSuiteCloneInformation(project: string, cloneOperationId: number): Promise<TestPlanInterfaces.CloneTestSuiteOperationInformation>;
    createTestVariable(testVariableCreateUpdateParameters: TestPlanInterfaces.TestVariableCreateUpdateParameters, project: string): Promise<TestPlanInterfaces.TestVariable>;
    deleteTestVariable(project: string, testVariableId: number): Promise<void>;
    getTestVariableById(project: string, testVariableId: number): Promise<TestPlanInterfaces.TestVariable>;
    getTestVariables(project: string, continuationToken?: string): Promise<VSSInterfaces.PagedList<TestPlanInterfaces.TestVariable>>;
    updateTestVariable(testVariableCreateUpdateParameters: TestPlanInterfaces.TestVariableCreateUpdateParameters, project: string, testVariableId: number): Promise<TestPlanInterfaces.TestVariable>;
}

export class TestPlanApi extends basem.ClientApiBase implements ITestPlanApi {
    constructor(baseUrl: string, handlers: VsoBaseInterfaces.IRequestHandler[], options?: VsoBaseInterfaces.IRequestOptions, userAgent?: string) {
        super(baseUrl, handlers, userAgent || 'node-TestPlan-api', options);
    }

    /**
     * Create a test configuration.
     * 
     * @param {TestPlanInterfaces.TestConfigurationCreateUpdateParameters} testConfigurationCreateUpdateParameters - TestConfigurationCreateUpdateParameters
     * @param {string} project - Project ID or project name
     */
    public async createTestConfiguration(
        testConfigurationCreateUpdateParameters: TestPlanInterfaces.TestConfigurationCreateUpdateParameters,
        project: string
        ): Promise<TestPlanInterfaces.TestConfiguration> {

        return new Promise<TestPlanInterfaces.TestConfiguration>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.2-preview.1",
                    "testplan",
                    "8369318e-38fa-4e84-9043-4b2a75d2c256",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<TestPlanInterfaces.TestConfiguration>;
                res = await this.rest.create<TestPlanInterfaces.TestConfiguration>(url, testConfigurationCreateUpdateParameters, options);

                let ret = this.formatResponse(res.result,
                                              TestPlanInterfaces.TypeInfo.TestConfiguration,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Delete a test configuration by its ID.
     * 
     * @param {string} project - Project ID or project name
     * @param {number} testConfiguartionId - ID of the test configuration to delete.
     */
    public async deleteTestConfguration(
        project: string,
        testConfiguartionId: number
        ): Promise<void> {
        if (testConfiguartionId == null) {
            throw new TypeError('testConfiguartionId can not be null or undefined');
        }

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            let queryValues: any = {
                testConfiguartionId: testConfiguartionId,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.2-preview.1",
                    "testplan",
                    "8369318e-38fa-4e84-9043-4b2a75d2c256",
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
     * Get a test configuration
     * 
     * @param {string} project - Project ID or project name
     * @param {number} testConfigurationId - ID of the test configuration to get.
     */
    public async getTestConfigurationById(
        project: string,
        testConfigurationId: number
        ): Promise<TestPlanInterfaces.TestConfiguration> {

        return new Promise<TestPlanInterfaces.TestConfiguration>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                testConfigurationId: testConfigurationId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.2-preview.1",
                    "testplan",
                    "8369318e-38fa-4e84-9043-4b2a75d2c256",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<TestPlanInterfaces.TestConfiguration>;
                res = await this.rest.get<TestPlanInterfaces.TestConfiguration>(url, options);

                let ret = this.formatResponse(res.result,
                                              TestPlanInterfaces.TypeInfo.TestConfiguration,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Get a list of test configurations.
     * 
     * @param {string} project - Project ID or project name
     * @param {string} continuationToken - If the list of configurations returned is not complete, a continuation token to query next batch of configurations is included in the response header as "x-ms-continuationtoken". Omit this parameter to get the first batch of test configurations.
     */
    public async getTestConfigurations(
        project: string,
        continuationToken?: string
        ): Promise<VSSInterfaces.PagedList<TestPlanInterfaces.TestConfiguration>> {

        return new Promise<VSSInterfaces.PagedList<TestPlanInterfaces.TestConfiguration>>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            let queryValues: any = {
                continuationToken: continuationToken,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.2-preview.1",
                    "testplan",
                    "8369318e-38fa-4e84-9043-4b2a75d2c256",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<VSSInterfaces.PagedList<TestPlanInterfaces.TestConfiguration>>;
                res = await this.rest.get<VSSInterfaces.PagedList<TestPlanInterfaces.TestConfiguration>>(url, options);

                let ret = this.formatResponse(res.result,
                                              TestPlanInterfaces.TypeInfo.TestConfiguration,
                                              true);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Update a test configuration by its ID.
     * 
     * @param {TestPlanInterfaces.TestConfigurationCreateUpdateParameters} testConfigurationCreateUpdateParameters - TestConfigurationCreateUpdateParameters
     * @param {string} project - Project ID or project name
     * @param {number} testConfiguartionId - ID of the test configuration to update.
     */
    public async updateTestConfiguration(
        testConfigurationCreateUpdateParameters: TestPlanInterfaces.TestConfigurationCreateUpdateParameters,
        project: string,
        testConfiguartionId: number
        ): Promise<TestPlanInterfaces.TestConfiguration> {
        if (testConfiguartionId == null) {
            throw new TypeError('testConfiguartionId can not be null or undefined');
        }

        return new Promise<TestPlanInterfaces.TestConfiguration>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            let queryValues: any = {
                testConfiguartionId: testConfiguartionId,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.2-preview.1",
                    "testplan",
                    "8369318e-38fa-4e84-9043-4b2a75d2c256",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<TestPlanInterfaces.TestConfiguration>;
                res = await this.rest.update<TestPlanInterfaces.TestConfiguration>(url, testConfigurationCreateUpdateParameters, options);

                let ret = this.formatResponse(res.result,
                                              TestPlanInterfaces.TypeInfo.TestConfiguration,
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
     * @param {number} planId
     * @param {string} states
     * @param {TestPlanInterfaces.UserFriendlyTestOutcome} outcome
     * @param {string} configurations
     * @param {string} testers
     * @param {string} assignedTo
     * @param {TestPlanInterfaces.TestEntityTypes} entity
     */
    public async getTestEntityCountByPlanId(
        project: string,
        planId: number,
        states?: string,
        outcome?: TestPlanInterfaces.UserFriendlyTestOutcome,
        configurations?: string,
        testers?: string,
        assignedTo?: string,
        entity?: TestPlanInterfaces.TestEntityTypes
        ): Promise<TestPlanInterfaces.TestEntityCount[]> {

        return new Promise<TestPlanInterfaces.TestEntityCount[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                planId: planId
            };

            let queryValues: any = {
                states: states,
                outcome: outcome,
                configurations: configurations,
                testers: testers,
                assignedTo: assignedTo,
                entity: entity,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.2-preview.1",
                    "testplan",
                    "300578da-7b40-4c1e-9542-7aed6029e504",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<TestPlanInterfaces.TestEntityCount[]>;
                res = await this.rest.get<TestPlanInterfaces.TestEntityCount[]>(url, options);

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
     * Create a test plan.
     * 
     * @param {TestPlanInterfaces.TestPlanCreateParams} testPlanCreateParams - A testPlanCreateParams object.TestPlanCreateParams
     * @param {string} project - Project ID or project name
     */
    public async createTestPlan(
        testPlanCreateParams: TestPlanInterfaces.TestPlanCreateParams,
        project: string
        ): Promise<TestPlanInterfaces.TestPlan> {

        return new Promise<TestPlanInterfaces.TestPlan>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.2-preview.1",
                    "testplan",
                    "0e292477-a0c2-47f3-a9b6-34f153d627f4",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<TestPlanInterfaces.TestPlan>;
                res = await this.rest.create<TestPlanInterfaces.TestPlan>(url, testPlanCreateParams, options);

                let ret = this.formatResponse(res.result,
                                              TestPlanInterfaces.TypeInfo.TestPlan,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Delete a test plan.
     * 
     * @param {string} project - Project ID or project name
     * @param {number} planId - ID of the test plan to be deleted.
     */
    public async deleteTestPlan(
        project: string,
        planId: number
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                planId: planId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.2-preview.1",
                    "testplan",
                    "0e292477-a0c2-47f3-a9b6-34f153d627f4",
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
     * Get a test plan by Id.
     * 
     * @param {string} project - Project ID or project name
     * @param {number} planId - ID of the test plan to get.
     */
    public async getTestPlanById(
        project: string,
        planId: number
        ): Promise<TestPlanInterfaces.TestPlan> {

        return new Promise<TestPlanInterfaces.TestPlan>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                planId: planId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.2-preview.1",
                    "testplan",
                    "0e292477-a0c2-47f3-a9b6-34f153d627f4",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<TestPlanInterfaces.TestPlan>;
                res = await this.rest.get<TestPlanInterfaces.TestPlan>(url, options);

                let ret = this.formatResponse(res.result,
                                              TestPlanInterfaces.TypeInfo.TestPlan,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Get a list of test plans
     * 
     * @param {string} project - Project ID or project name
     * @param {string} owner - Filter for test plan by owner ID or name
     * @param {string} continuationToken - If the list of plans returned is not complete, a continuation token to query next batch of plans is included in the response header as "x-ms-continuationtoken". Omit this parameter to get the first batch of test plans.
     * @param {boolean} includePlanDetails - Get all properties of the test plan
     * @param {boolean} filterActivePlans - Get just the active plans
     */
    public async getTestPlans(
        project: string,
        owner?: string,
        continuationToken?: string,
        includePlanDetails?: boolean,
        filterActivePlans?: boolean
        ): Promise<VSSInterfaces.PagedList<TestPlanInterfaces.TestPlan>> {

        return new Promise<VSSInterfaces.PagedList<TestPlanInterfaces.TestPlan>>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            let queryValues: any = {
                owner: owner,
                continuationToken: continuationToken,
                includePlanDetails: includePlanDetails,
                filterActivePlans: filterActivePlans,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.2-preview.1",
                    "testplan",
                    "0e292477-a0c2-47f3-a9b6-34f153d627f4",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<VSSInterfaces.PagedList<TestPlanInterfaces.TestPlan>>;
                res = await this.rest.get<VSSInterfaces.PagedList<TestPlanInterfaces.TestPlan>>(url, options);

                let ret = this.formatResponse(res.result,
                                              TestPlanInterfaces.TypeInfo.TestPlan,
                                              true);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Update a test plan.
     * 
     * @param {TestPlanInterfaces.TestPlanUpdateParams} testPlanUpdateParams - A testPlanUpdateParams object.TestPlanUpdateParams
     * @param {string} project - Project ID or project name
     * @param {number} planId - ID of the test plan to be updated.
     */
    public async updateTestPlan(
        testPlanUpdateParams: TestPlanInterfaces.TestPlanUpdateParams,
        project: string,
        planId: number
        ): Promise<TestPlanInterfaces.TestPlan> {

        return new Promise<TestPlanInterfaces.TestPlan>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                planId: planId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.2-preview.1",
                    "testplan",
                    "0e292477-a0c2-47f3-a9b6-34f153d627f4",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<TestPlanInterfaces.TestPlan>;
                res = await this.rest.update<TestPlanInterfaces.TestPlan>(url, testPlanUpdateParams, options);

                let ret = this.formatResponse(res.result,
                                              TestPlanInterfaces.TypeInfo.TestPlan,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Get a list of test suite entries in the test suite.
     * 
     * @param {string} project - Project ID or project name
     * @param {number} suiteId - Id of the parent suite.
     * @param {TestPlanInterfaces.SuiteEntryTypes} suiteEntryType
     */
    public async getSuiteEntries(
        project: string,
        suiteId: number,
        suiteEntryType?: TestPlanInterfaces.SuiteEntryTypes
        ): Promise<TestPlanInterfaces.SuiteEntry[]> {

        return new Promise<TestPlanInterfaces.SuiteEntry[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                suiteId: suiteId
            };

            let queryValues: any = {
                suiteEntryType: suiteEntryType,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.2-preview.1",
                    "testplan",
                    "d6733edf-72f1-4252-925b-c560dfe9b75a",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<TestPlanInterfaces.SuiteEntry[]>;
                res = await this.rest.get<TestPlanInterfaces.SuiteEntry[]>(url, options);

                let ret = this.formatResponse(res.result,
                                              TestPlanInterfaces.TypeInfo.SuiteEntry,
                                              true);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Reorder test suite entries in the test suite.
     * 
     * @param {TestPlanInterfaces.SuiteEntryUpdateParams[]} suiteEntries - List of SuiteEntry to reorder.
     * @param {string} project - Project ID or project name
     * @param {number} suiteId - Id of the parent test suite.
     */
    public async reorderSuiteEntries(
        suiteEntries: TestPlanInterfaces.SuiteEntryUpdateParams[],
        project: string,
        suiteId: number
        ): Promise<TestPlanInterfaces.SuiteEntry[]> {

        return new Promise<TestPlanInterfaces.SuiteEntry[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                suiteId: suiteId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.2-preview.1",
                    "testplan",
                    "d6733edf-72f1-4252-925b-c560dfe9b75a",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<TestPlanInterfaces.SuiteEntry[]>;
                res = await this.rest.update<TestPlanInterfaces.SuiteEntry[]>(url, suiteEntries, options);

                let ret = this.formatResponse(res.result,
                                              TestPlanInterfaces.TypeInfo.SuiteEntry,
                                              true);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Create bulk requirement based test suites.
     * 
     * @param {TestPlanInterfaces.TestSuiteCreateParams[]} testSuiteCreateParams - Parameters for suite creation
     * @param {string} project - Project ID or project name
     * @param {number} planId - ID of the test plan where requirement based suites need to be created.
     * @param {number} parentSuiteId - ID of the parent suite under which requirement based suites will be created
     */
    public async createBulkTestSuites(
        testSuiteCreateParams: TestPlanInterfaces.TestSuiteCreateParams[],
        project: string,
        planId: number,
        parentSuiteId: number
        ): Promise<TestPlanInterfaces.TestSuite[]> {

        return new Promise<TestPlanInterfaces.TestSuite[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                planId: planId,
                parentSuiteId: parentSuiteId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.2-preview.1",
                    "testplan",
                    "1e58fbe6-1761-43ce-97f6-5492ec9d438e",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<TestPlanInterfaces.TestSuite[]>;
                res = await this.rest.create<TestPlanInterfaces.TestSuite[]>(url, testSuiteCreateParams, options);

                let ret = this.formatResponse(res.result,
                                              TestPlanInterfaces.TypeInfo.TestSuite,
                                              true);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Create test suite.
     * 
     * @param {TestPlanInterfaces.TestSuiteCreateParams} testSuiteCreateParams - Parameters for suite creation
     * @param {string} project - Project ID or project name
     * @param {number} planId - ID of the test plan that contains the suites.
     */
    public async createTestSuite(
        testSuiteCreateParams: TestPlanInterfaces.TestSuiteCreateParams,
        project: string,
        planId: number
        ): Promise<TestPlanInterfaces.TestSuite> {

        return new Promise<TestPlanInterfaces.TestSuite>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                planId: planId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.2-preview.1",
                    "testplan",
                    "1046d5d3-ab61-4ca7-a65a-36118a978256",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<TestPlanInterfaces.TestSuite>;
                res = await this.rest.create<TestPlanInterfaces.TestSuite>(url, testSuiteCreateParams, options);

                let ret = this.formatResponse(res.result,
                                              TestPlanInterfaces.TypeInfo.TestSuite,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Delete test suite.
     * 
     * @param {string} project - Project ID or project name
     * @param {number} planId - ID of the test plan that contains the suite.
     * @param {number} suiteId - ID of the test suite to delete.
     */
    public async deleteTestSuite(
        project: string,
        planId: number,
        suiteId: number
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                planId: planId,
                suiteId: suiteId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.2-preview.1",
                    "testplan",
                    "1046d5d3-ab61-4ca7-a65a-36118a978256",
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
     * Get test suite by suite id.
     * 
     * @param {string} project - Project ID or project name
     * @param {number} planId - ID of the test plan that contains the suites.
     * @param {number} suiteId - ID of the suite to get.
     * @param {TestPlanInterfaces.SuiteExpand} expand - Include the children suites and testers details
     */
    public async getTestSuiteById(
        project: string,
        planId: number,
        suiteId: number,
        expand?: TestPlanInterfaces.SuiteExpand
        ): Promise<TestPlanInterfaces.TestSuite> {

        return new Promise<TestPlanInterfaces.TestSuite>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                planId: planId,
                suiteId: suiteId
            };

            let queryValues: any = {
                expand: expand,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.2-preview.1",
                    "testplan",
                    "1046d5d3-ab61-4ca7-a65a-36118a978256",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<TestPlanInterfaces.TestSuite>;
                res = await this.rest.get<TestPlanInterfaces.TestSuite>(url, options);

                let ret = this.formatResponse(res.result,
                                              TestPlanInterfaces.TypeInfo.TestSuite,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Get test suites for plan.
     * 
     * @param {string} project - Project ID or project name
     * @param {number} planId - ID of the test plan for which suites are requested.
     * @param {TestPlanInterfaces.SuiteExpand} expand - Include the children suites and testers details.
     * @param {string} continuationToken - If the list of suites returned is not complete, a continuation token to query next batch of suites is included in the response header as "x-ms-continuationtoken". Omit this parameter to get the first batch of test suites.
     * @param {boolean} asTreeView - If the suites returned should be in a tree structure.
     */
    public async getTestSuitesForPlan(
        project: string,
        planId: number,
        expand?: TestPlanInterfaces.SuiteExpand,
        continuationToken?: string,
        asTreeView?: boolean
        ): Promise<VSSInterfaces.PagedList<TestPlanInterfaces.TestSuite>> {

        return new Promise<VSSInterfaces.PagedList<TestPlanInterfaces.TestSuite>>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                planId: planId
            };

            let queryValues: any = {
                expand: expand,
                continuationToken: continuationToken,
                asTreeView: asTreeView,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.2-preview.1",
                    "testplan",
                    "1046d5d3-ab61-4ca7-a65a-36118a978256",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<VSSInterfaces.PagedList<TestPlanInterfaces.TestSuite>>;
                res = await this.rest.get<VSSInterfaces.PagedList<TestPlanInterfaces.TestSuite>>(url, options);

                let ret = this.formatResponse(res.result,
                                              TestPlanInterfaces.TypeInfo.TestSuite,
                                              true);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Update test suite.
     * 
     * @param {TestPlanInterfaces.TestSuiteUpdateParams} testSuiteUpdateParams - Parameters for suite updation
     * @param {string} project - Project ID or project name
     * @param {number} planId - ID of the test plan that contains the suites.
     * @param {number} suiteId - ID of the parent suite.
     */
    public async updateTestSuite(
        testSuiteUpdateParams: TestPlanInterfaces.TestSuiteUpdateParams,
        project: string,
        planId: number,
        suiteId: number
        ): Promise<TestPlanInterfaces.TestSuite> {

        return new Promise<TestPlanInterfaces.TestSuite>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                planId: planId,
                suiteId: suiteId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.2-preview.1",
                    "testplan",
                    "1046d5d3-ab61-4ca7-a65a-36118a978256",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<TestPlanInterfaces.TestSuite>;
                res = await this.rest.update<TestPlanInterfaces.TestSuite>(url, testSuiteUpdateParams, options);

                let ret = this.formatResponse(res.result,
                                              TestPlanInterfaces.TypeInfo.TestSuite,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Find the list of all test suites in which a given test case is present. This is helpful if you need to find out which test suites are using a test case, when you need to make changes to a test case.
     * 
     * @param {number} testCaseId - ID of the test case for which suites need to be fetched.
     */
    public async getSuitesByTestCaseId(
        testCaseId: number
        ): Promise<TestPlanInterfaces.TestSuite[]> {
        if (testCaseId == null) {
            throw new TypeError('testCaseId can not be null or undefined');
        }

        return new Promise<TestPlanInterfaces.TestSuite[]>(async (resolve, reject) => {
            let routeValues: any = {
            };

            let queryValues: any = {
                testCaseId: testCaseId,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.2-preview.1",
                    "testplan",
                    "a4080e84-f17b-4fad-84f1-7960b6525bf2",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<TestPlanInterfaces.TestSuite[]>;
                res = await this.rest.get<TestPlanInterfaces.TestSuite[]>(url, options);

                let ret = this.formatResponse(res.result,
                                              TestPlanInterfaces.TypeInfo.TestSuite,
                                              true);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Add test cases to a suite with specified configurations
     * 
     * @param {TestPlanInterfaces.SuiteTestCaseCreateUpdateParameters[]} suiteTestCaseCreateUpdateParameters - SuiteTestCaseCreateUpdateParameters object.
     * @param {string} project - Project ID or project name
     * @param {number} planId - ID of the test plan to which test cases are to be added.
     * @param {number} suiteId - ID of the test suite to which test cases are to be added.
     */
    public async addTestCasesToSuite(
        suiteTestCaseCreateUpdateParameters: TestPlanInterfaces.SuiteTestCaseCreateUpdateParameters[],
        project: string,
        planId: number,
        suiteId: number
        ): Promise<TestPlanInterfaces.TestCase[]> {

        return new Promise<TestPlanInterfaces.TestCase[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                planId: planId,
                suiteId: suiteId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.2-preview.3",
                    "testplan",
                    "a9bd61ac-45cf-4d13-9441-43dcd01edf8d",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<TestPlanInterfaces.TestCase[]>;
                res = await this.rest.create<TestPlanInterfaces.TestCase[]>(url, suiteTestCaseCreateUpdateParameters, options);

                let ret = this.formatResponse(res.result,
                                              TestPlanInterfaces.TypeInfo.TestCase,
                                              true);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Get a particular Test Case from a Suite.
     * 
     * @param {string} project - Project ID or project name
     * @param {number} planId - ID of the test plan for which test cases are requested.
     * @param {number} suiteId - ID of the test suite for which test cases are requested.
     * @param {string} testCaseId - Test Case Id to be fetched.
     * @param {string} witFields - Get the list of witFields.
     * @param {boolean} returnIdentityRef - If set to true, returns all identity fields, like AssignedTo, ActivatedBy etc., as IdentityRef objects. If set to false, these fields are returned as unique names in string format. This is false by default.
     */
    public async getTestCase(
        project: string,
        planId: number,
        suiteId: number,
        testCaseId: string,
        witFields?: string,
        returnIdentityRef?: boolean
        ): Promise<TestPlanInterfaces.TestCase[]> {

        return new Promise<TestPlanInterfaces.TestCase[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                planId: planId,
                suiteId: suiteId,
                testCaseId: testCaseId
            };

            let queryValues: any = {
                witFields: witFields,
                returnIdentityRef: returnIdentityRef,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.2-preview.3",
                    "testplan",
                    "a9bd61ac-45cf-4d13-9441-43dcd01edf8d",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<TestPlanInterfaces.TestCase[]>;
                res = await this.rest.get<TestPlanInterfaces.TestCase[]>(url, options);

                let ret = this.formatResponse(res.result,
                                              TestPlanInterfaces.TypeInfo.TestCase,
                                              true);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Get Test Case List return those test cases which have all the configuration Ids as mentioned in the optional parameter. If configuration Ids is null, it return all the test cases
     * 
     * @param {string} project - Project ID or project name
     * @param {number} planId - ID of the test plan for which test cases are requested.
     * @param {number} suiteId - ID of the test suite for which test cases are requested.
     * @param {string} testIds - Test Case Ids to be fetched.
     * @param {string} configurationIds - Fetch Test Cases which contains all the configuration Ids specified.
     * @param {string} witFields - Get the list of witFields.
     * @param {string} continuationToken - If the list of test cases returned is not complete, a continuation token to query next batch of test cases is included in the response header as "x-ms-continuationtoken". Omit this parameter to get the first batch of test cases.
     * @param {boolean} returnIdentityRef - If set to true, returns all identity fields, like AssignedTo, ActivatedBy etc., as IdentityRef objects. If set to false, these fields are returned as unique names in string format. This is false by default.
     * @param {boolean} expand - If set to false, will get a smaller payload containing only basic details about the suite test case object
     * @param {TestPlanInterfaces.ExcludeFlags} excludeFlags - Flag to exclude various values from payload. For example to remove point assignments pass exclude = 1. To remove extra information (links, test plan , test suite) pass exclude = 2. To remove both extra information and point assignments pass exclude = 3 (1 + 2).
     * @param {boolean} isRecursive
     */
    public async getTestCaseList(
        project: string,
        planId: number,
        suiteId: number,
        testIds?: string,
        configurationIds?: string,
        witFields?: string,
        continuationToken?: string,
        returnIdentityRef?: boolean,
        expand?: boolean,
        excludeFlags?: TestPlanInterfaces.ExcludeFlags,
        isRecursive?: boolean
        ): Promise<VSSInterfaces.PagedList<TestPlanInterfaces.TestCase>> {

        return new Promise<VSSInterfaces.PagedList<TestPlanInterfaces.TestCase>>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                planId: planId,
                suiteId: suiteId
            };

            let queryValues: any = {
                testIds: testIds,
                configurationIds: configurationIds,
                witFields: witFields,
                continuationToken: continuationToken,
                returnIdentityRef: returnIdentityRef,
                expand: expand,
                excludeFlags: excludeFlags,
                isRecursive: isRecursive,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.2-preview.3",
                    "testplan",
                    "a9bd61ac-45cf-4d13-9441-43dcd01edf8d",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<VSSInterfaces.PagedList<TestPlanInterfaces.TestCase>>;
                res = await this.rest.get<VSSInterfaces.PagedList<TestPlanInterfaces.TestCase>>(url, options);

                let ret = this.formatResponse(res.result,
                                              TestPlanInterfaces.TypeInfo.TestCase,
                                              true);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Removes test cases from a suite based on the list of test case Ids provided.
     * 
     * @param {string} project - Project ID or project name
     * @param {number} planId - ID of the test plan from which test cases are to be removed.
     * @param {number} suiteId - ID of the test suite from which test cases are to be removed.
     * @param {string} testCaseIds - Test Case Ids to be removed.
     */
    public async removeTestCasesFromSuite(
        project: string,
        planId: number,
        suiteId: number,
        testCaseIds: string
        ): Promise<void> {
        if (testCaseIds == null) {
            throw new TypeError('testCaseIds can not be null or undefined');
        }

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                planId: planId,
                suiteId: suiteId
            };

            let queryValues: any = {
                testCaseIds: testCaseIds,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.2-preview.3",
                    "testplan",
                    "a9bd61ac-45cf-4d13-9441-43dcd01edf8d",
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
     * Removes test cases from a suite based on the list of test case Ids provided. This API can be used to remove a larger number of test cases.
     * 
     * @param {string} project - Project ID or project name
     * @param {number} planId - ID of the test plan from which test cases are to be removed.
     * @param {number} suiteId - ID of the test suite from which test cases are to be removed.
     * @param {string} testIds - Comma separated string of Test Case Ids to be removed.
     */
    public async removeTestCasesListFromSuite(
        project: string,
        planId: number,
        suiteId: number,
        testIds: string
        ): Promise<void> {
        if (testIds == null) {
            throw new TypeError('testIds can not be null or undefined');
        }

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                planId: planId,
                suiteId: suiteId
            };

            let queryValues: any = {
                testIds: testIds,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.2-preview.3",
                    "testplan",
                    "a9bd61ac-45cf-4d13-9441-43dcd01edf8d",
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
     * Update the configurations for test cases
     * 
     * @param {TestPlanInterfaces.SuiteTestCaseCreateUpdateParameters[]} suiteTestCaseCreateUpdateParameters - A SuiteTestCaseCreateUpdateParameters object.
     * @param {string} project - Project ID or project name
     * @param {number} planId - ID of the test plan to which test cases are to be updated.
     * @param {number} suiteId - ID of the test suite to which test cases are to be updated.
     */
    public async updateSuiteTestCases(
        suiteTestCaseCreateUpdateParameters: TestPlanInterfaces.SuiteTestCaseCreateUpdateParameters[],
        project: string,
        planId: number,
        suiteId: number
        ): Promise<TestPlanInterfaces.TestCase[]> {

        return new Promise<TestPlanInterfaces.TestCase[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                planId: planId,
                suiteId: suiteId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.2-preview.3",
                    "testplan",
                    "a9bd61ac-45cf-4d13-9441-43dcd01edf8d",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<TestPlanInterfaces.TestCase[]>;
                res = await this.rest.update<TestPlanInterfaces.TestCase[]>(url, suiteTestCaseCreateUpdateParameters, options);

                let ret = this.formatResponse(res.result,
                                              TestPlanInterfaces.TypeInfo.TestCase,
                                              true);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * @param {TestPlanInterfaces.CloneTestCaseParams} cloneRequestBody
     * @param {string} project - Project ID or project name
     */
    public async cloneTestCase(
        cloneRequestBody: TestPlanInterfaces.CloneTestCaseParams,
        project: string
        ): Promise<TestPlanInterfaces.CloneTestCaseOperationInformation> {

        return new Promise<TestPlanInterfaces.CloneTestCaseOperationInformation>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.2-preview.2",
                    "testplan",
                    "529b2b8d-82f4-4893-b1e4-1e74ea534673",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<TestPlanInterfaces.CloneTestCaseOperationInformation>;
                res = await this.rest.create<TestPlanInterfaces.CloneTestCaseOperationInformation>(url, cloneRequestBody, options);

                let ret = this.formatResponse(res.result,
                                              TestPlanInterfaces.TypeInfo.CloneTestCaseOperationInformation,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Get clone information.
     * 
     * @param {string} project - Project ID or project name
     * @param {number} cloneOperationId - Operation ID returned when we queue a clone operation
     */
    public async getTestCaseCloneInformation(
        project: string,
        cloneOperationId: number
        ): Promise<TestPlanInterfaces.CloneTestCaseOperationInformation> {

        return new Promise<TestPlanInterfaces.CloneTestCaseOperationInformation>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                cloneOperationId: cloneOperationId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.2-preview.2",
                    "testplan",
                    "529b2b8d-82f4-4893-b1e4-1e74ea534673",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<TestPlanInterfaces.CloneTestCaseOperationInformation>;
                res = await this.rest.get<TestPlanInterfaces.CloneTestCaseOperationInformation>(url, options);

                let ret = this.formatResponse(res.result,
                                              TestPlanInterfaces.TypeInfo.CloneTestCaseOperationInformation,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Exports a set of test cases from a suite to a file. Currently supported  formats: xlsx
     * 
     * @param {TestPlanInterfaces.ExportTestCaseParams} exportTestCaseRequestBody - A ExportTestCaseParams object.ExportTestCaseParams
     * @param {string} project - Project ID or project name
     */
    public async exportTestCases(
        exportTestCaseRequestBody: TestPlanInterfaces.ExportTestCaseParams,
        project: string
        ): Promise<NodeJS.ReadableStream> {

        return new Promise<NodeJS.ReadableStream>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.2-preview.1",
                    "testplan",
                    "3b9d1c87-6b1a-4e7d-9e7d-1a8e543112bb",
                    routeValues);

                let url: string = verData.requestUrl!;
                
                let apiVersion: string = verData.apiVersion!;
                let accept: string = this.createAcceptHeader("application/octet-stream", apiVersion);
                resolve((await this.http.post(url, JSON.stringify(exportTestCaseRequestBody), { "Accept": accept, "Content-Type": "application/json" })).message);
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Delete a test case.
     * 
     * @param {string} project - Project ID or project name
     * @param {number} testCaseId - Id of test case to be deleted.
     */
    public async deleteTestCase(
        project: string,
        testCaseId: number
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                testCaseId: testCaseId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.2-preview.1",
                    "testplan",
                    "29006fb5-816b-4ff7-a329-599943569229",
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
     * Get a list of deleted test plans
     * 
     * @param {string} project - Project ID or project name
     * @param {string} continuationToken - If the list of plans returned is not complete, a continuation token to query next batch of plans is included in the response header as "x-ms-continuationtoken". Omit this parameter to get the first batch of test plans.
     */
    public async getDeletedTestPlans(
        project: string,
        continuationToken?: string
        ): Promise<VSSInterfaces.PagedList<TestPlanInterfaces.TestPlan>> {

        return new Promise<VSSInterfaces.PagedList<TestPlanInterfaces.TestPlan>>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            let queryValues: any = {
                continuationToken: continuationToken,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.2-preview.1",
                    "testplan",
                    "04c64b80-239e-426c-b79d-b1ca8951ce26",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<VSSInterfaces.PagedList<TestPlanInterfaces.TestPlan>>;
                res = await this.rest.get<VSSInterfaces.PagedList<TestPlanInterfaces.TestPlan>>(url, options);

                let ret = this.formatResponse(res.result,
                                              TestPlanInterfaces.TypeInfo.TestPlan,
                                              true);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Restores the deleted test plan
     * 
     * @param {TestPlanInterfaces.TestPlanAndSuiteRestoreModel} restoreModel - The model containing the restore information
     * @param {string} project - Project ID or project name
     * @param {number} planId - The ID of the test plan to restore
     */
    public async restoreDeletedTestPlan(
        restoreModel: TestPlanInterfaces.TestPlanAndSuiteRestoreModel,
        project: string,
        planId: number
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                planId: planId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.2-preview.1",
                    "testplan",
                    "04c64b80-239e-426c-b79d-b1ca8951ce26",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<void>;
                res = await this.rest.update<void>(url, restoreModel, options);

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
     * Clone test plan
     * 
     * @param {TestPlanInterfaces.CloneTestPlanParams} cloneRequestBody - Plan Clone Request Body detail TestPlanCloneRequest
     * @param {string} project - Project ID or project name
     * @param {boolean} deepClone - Clones all the associated test cases as well
     */
    public async cloneTestPlan(
        cloneRequestBody: TestPlanInterfaces.CloneTestPlanParams,
        project: string,
        deepClone?: boolean
        ): Promise<TestPlanInterfaces.CloneTestPlanOperationInformation> {

        return new Promise<TestPlanInterfaces.CloneTestPlanOperationInformation>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            let queryValues: any = {
                deepClone: deepClone,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.2-preview.2",
                    "testplan",
                    "e65df662-d8a3-46c7-ae1c-14e2d4df57e1",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<TestPlanInterfaces.CloneTestPlanOperationInformation>;
                res = await this.rest.create<TestPlanInterfaces.CloneTestPlanOperationInformation>(url, cloneRequestBody, options);

                let ret = this.formatResponse(res.result,
                                              TestPlanInterfaces.TypeInfo.CloneTestPlanOperationInformation,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Get clone information.
     * 
     * @param {string} project - Project ID or project name
     * @param {number} cloneOperationId - Operation ID returned when we queue a clone operation
     */
    public async getCloneInformation(
        project: string,
        cloneOperationId: number
        ): Promise<TestPlanInterfaces.CloneTestPlanOperationInformation> {

        return new Promise<TestPlanInterfaces.CloneTestPlanOperationInformation>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                cloneOperationId: cloneOperationId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.2-preview.2",
                    "testplan",
                    "e65df662-d8a3-46c7-ae1c-14e2d4df57e1",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<TestPlanInterfaces.CloneTestPlanOperationInformation>;
                res = await this.rest.get<TestPlanInterfaces.CloneTestPlanOperationInformation>(url, options);

                let ret = this.formatResponse(res.result,
                                              TestPlanInterfaces.TypeInfo.CloneTestPlanOperationInformation,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Get a particular Test Point from a suite.
     * 
     * @param {string} project - Project ID or project name
     * @param {number} planId - ID of the test plan for which test points are requested.
     * @param {number} suiteId - ID of the test suite for which test points are requested.
     * @param {string} pointId - ID of test point to be fetched.
     * @param {boolean} returnIdentityRef - If set to true, returns the AssignedTo field in TestCaseReference as IdentityRef object.
     * @param {boolean} includePointDetails - If set to false, will get a smaller payload containing only basic details about the test point object
     */
    public async getPoints(
        project: string,
        planId: number,
        suiteId: number,
        pointId: string,
        returnIdentityRef?: boolean,
        includePointDetails?: boolean
        ): Promise<TestPlanInterfaces.TestPoint[]> {
        if (pointId == null) {
            throw new TypeError('pointId can not be null or undefined');
        }

        return new Promise<TestPlanInterfaces.TestPoint[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                planId: planId,
                suiteId: suiteId
            };

            let queryValues: any = {
                pointId: pointId,
                returnIdentityRef: returnIdentityRef,
                includePointDetails: includePointDetails,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.2-preview.2",
                    "testplan",
                    "52df686e-bae4-4334-b0ee-b6cf4e6f6b73",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<TestPlanInterfaces.TestPoint[]>;
                res = await this.rest.get<TestPlanInterfaces.TestPoint[]>(url, options);

                let ret = this.formatResponse(res.result,
                                              TestPlanInterfaces.TypeInfo.TestPoint,
                                              true);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Get all the points inside a suite based on some filters
     * 
     * @param {string} project - Project ID or project name
     * @param {number} planId - ID of the test plan for which test points are requested.
     * @param {number} suiteId - ID of the test suite for which test points are requested
     * @param {string} testPointIds - ID of test points to fetch.
     * @param {string} testCaseId - Get Test Points for specific test case Ids.
     * @param {string} continuationToken - If the list of test point returned is not complete, a continuation token to query next batch of test points is included in the response header as "x-ms-continuationtoken". Omit this parameter to get the first batch of test points.
     * @param {boolean} returnIdentityRef - If set to true, returns the AssignedTo field in TestCaseReference as IdentityRef object.
     * @param {boolean} includePointDetails - If set to false, will get a smaller payload containing only basic details about the test point object
     * @param {boolean} isRecursive - If set to true, will also fetch test points belonging to child suites recursively.
     */
    public async getPointsList(
        project: string,
        planId: number,
        suiteId: number,
        testPointIds?: string,
        testCaseId?: string,
        continuationToken?: string,
        returnIdentityRef?: boolean,
        includePointDetails?: boolean,
        isRecursive?: boolean
        ): Promise<VSSInterfaces.PagedList<TestPlanInterfaces.TestPoint>> {

        return new Promise<VSSInterfaces.PagedList<TestPlanInterfaces.TestPoint>>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                planId: planId,
                suiteId: suiteId
            };

            let queryValues: any = {
                testPointIds: testPointIds,
                testCaseId: testCaseId,
                continuationToken: continuationToken,
                returnIdentityRef: returnIdentityRef,
                includePointDetails: includePointDetails,
                isRecursive: isRecursive,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.2-preview.2",
                    "testplan",
                    "52df686e-bae4-4334-b0ee-b6cf4e6f6b73",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<VSSInterfaces.PagedList<TestPlanInterfaces.TestPoint>>;
                res = await this.rest.get<VSSInterfaces.PagedList<TestPlanInterfaces.TestPoint>>(url, options);

                let ret = this.formatResponse(res.result,
                                              TestPlanInterfaces.TypeInfo.TestPoint,
                                              true);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Update Test Points. This is used to Reset test point to active, update the outcome of a test point or update the tester of a test point
     * 
     * @param {TestPlanInterfaces.TestPointUpdateParams[]} testPointUpdateParams - A TestPointUpdateParams Object.
     * @param {string} project - Project ID or project name
     * @param {number} planId - ID of the test plan for which test points are requested.
     * @param {number} suiteId - ID of the test suite for which test points are requested.
     * @param {boolean} includePointDetails - If set to false, will get a smaller payload containing only basic details about the test point object
     * @param {boolean} returnIdentityRef - If set to true, returns the AssignedTo field in TestCaseReference as IdentityRef object.
     */
    public async updateTestPoints(
        testPointUpdateParams: TestPlanInterfaces.TestPointUpdateParams[],
        project: string,
        planId: number,
        suiteId: number,
        includePointDetails?: boolean,
        returnIdentityRef?: boolean
        ): Promise<TestPlanInterfaces.TestPoint[]> {

        return new Promise<TestPlanInterfaces.TestPoint[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                planId: planId,
                suiteId: suiteId
            };

            let queryValues: any = {
                includePointDetails: includePointDetails,
                returnIdentityRef: returnIdentityRef,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.2-preview.2",
                    "testplan",
                    "52df686e-bae4-4334-b0ee-b6cf4e6f6b73",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<TestPlanInterfaces.TestPoint[]>;
                res = await this.rest.update<TestPlanInterfaces.TestPoint[]>(url, testPointUpdateParams, options);

                let ret = this.formatResponse(res.result,
                                              TestPlanInterfaces.TypeInfo.TestPoint,
                                              true);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Get Deleted Test Suites for a Test Plan.
     * 
     * @param {string} project - Project ID or project name
     * @param {number} planId - ID of the test plan for which suites are requested.
     * @param {TestPlanInterfaces.SuiteExpand} expand - Include the children suites and testers details.
     * @param {string} continuationToken - If the list of suites returned is not complete, a continuation token to query next batch of suites is included in the response header as "x-ms-continuationtoken". Omit this parameter to get the first batch of test suites.
     * @param {boolean} asTreeView - If the suites returned should be in a tree structure.
     */
    public async getDeletedTestSuitesForPlan(
        project: string,
        planId: number,
        expand?: TestPlanInterfaces.SuiteExpand,
        continuationToken?: string,
        asTreeView?: boolean
        ): Promise<VSSInterfaces.PagedList<TestPlanInterfaces.TestSuite>> {

        return new Promise<VSSInterfaces.PagedList<TestPlanInterfaces.TestSuite>>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                planId: planId
            };

            let queryValues: any = {
                expand: expand,
                continuationToken: continuationToken,
                asTreeView: asTreeView,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.2-preview.1",
                    "testplan",
                    "d2f1e8a4-3b6e-4f8b-9c8e-2d4f6e4b5a7c",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<VSSInterfaces.PagedList<TestPlanInterfaces.TestSuite>>;
                res = await this.rest.get<VSSInterfaces.PagedList<TestPlanInterfaces.TestSuite>>(url, options);

                let ret = this.formatResponse(res.result,
                                              TestPlanInterfaces.TypeInfo.TestSuite,
                                              true);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Get Deleted Test Suites within a Project.
     * 
     * @param {string} project - Project ID or project name
     * @param {TestPlanInterfaces.SuiteExpand} expand - Include the children suites and testers details.
     * @param {string} continuationToken - If the list of suites returned is not complete, a continuation token to query next batch of suites is included in the response header as "x-ms-continuationtoken". Omit this parameter to get the first batch of test suites.
     * @param {boolean} asTreeView - If the suites returned should be in a tree structure.
     */
    public async getDeletedTestSuitesForProject(
        project: string,
        expand?: TestPlanInterfaces.SuiteExpand,
        continuationToken?: string,
        asTreeView?: boolean
        ): Promise<VSSInterfaces.PagedList<TestPlanInterfaces.TestSuite>> {

        return new Promise<VSSInterfaces.PagedList<TestPlanInterfaces.TestSuite>>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            let queryValues: any = {
                expand: expand,
                continuationToken: continuationToken,
                asTreeView: asTreeView,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.2-preview.1",
                    "testplan",
                    "f40ae369-855d-4d5e-bee0-5e99c5c42fcb",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<VSSInterfaces.PagedList<TestPlanInterfaces.TestSuite>>;
                res = await this.rest.get<VSSInterfaces.PagedList<TestPlanInterfaces.TestSuite>>(url, options);

                let ret = this.formatResponse(res.result,
                                              TestPlanInterfaces.TypeInfo.TestSuite,
                                              true);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Restores the deleted test suite
     * 
     * @param {TestPlanInterfaces.TestPlanAndSuiteRestoreModel} payload - The model containing the restore information
     * @param {string} project - Project ID or project name
     * @param {number} suiteId - The ID of the test suite to restore
     */
    public async restoreDeletedTestSuite(
        payload: TestPlanInterfaces.TestPlanAndSuiteRestoreModel,
        project: string,
        suiteId: number
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                suiteId: suiteId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.2-preview.1",
                    "testplan",
                    "f40ae369-855d-4d5e-bee0-5e99c5c42fcb",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<void>;
                res = await this.rest.update<void>(url, payload, options);

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
     * Clone test suite
     * 
     * @param {TestPlanInterfaces.CloneTestSuiteParams} cloneRequestBody - Suite Clone Request Body detail TestSuiteCloneRequest
     * @param {string} project - Project ID or project name
     * @param {boolean} deepClone - Clones all the associated test cases as well
     */
    public async cloneTestSuite(
        cloneRequestBody: TestPlanInterfaces.CloneTestSuiteParams,
        project: string,
        deepClone?: boolean
        ): Promise<TestPlanInterfaces.CloneTestSuiteOperationInformation> {

        return new Promise<TestPlanInterfaces.CloneTestSuiteOperationInformation>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            let queryValues: any = {
                deepClone: deepClone,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.2-preview.2",
                    "testplan",
                    "181d4c97-0e98-4ee2-ad6a-4cada675e555",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<TestPlanInterfaces.CloneTestSuiteOperationInformation>;
                res = await this.rest.create<TestPlanInterfaces.CloneTestSuiteOperationInformation>(url, cloneRequestBody, options);

                let ret = this.formatResponse(res.result,
                                              TestPlanInterfaces.TypeInfo.CloneTestSuiteOperationInformation,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Get clone information.
     * 
     * @param {string} project - Project ID or project name
     * @param {number} cloneOperationId - Operation ID returned when we queue a clone operation
     */
    public async getSuiteCloneInformation(
        project: string,
        cloneOperationId: number
        ): Promise<TestPlanInterfaces.CloneTestSuiteOperationInformation> {

        return new Promise<TestPlanInterfaces.CloneTestSuiteOperationInformation>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                cloneOperationId: cloneOperationId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.2-preview.2",
                    "testplan",
                    "181d4c97-0e98-4ee2-ad6a-4cada675e555",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<TestPlanInterfaces.CloneTestSuiteOperationInformation>;
                res = await this.rest.get<TestPlanInterfaces.CloneTestSuiteOperationInformation>(url, options);

                let ret = this.formatResponse(res.result,
                                              TestPlanInterfaces.TypeInfo.CloneTestSuiteOperationInformation,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Create a test variable.
     * 
     * @param {TestPlanInterfaces.TestVariableCreateUpdateParameters} testVariableCreateUpdateParameters - TestVariableCreateUpdateParameters
     * @param {string} project - Project ID or project name
     */
    public async createTestVariable(
        testVariableCreateUpdateParameters: TestPlanInterfaces.TestVariableCreateUpdateParameters,
        project: string
        ): Promise<TestPlanInterfaces.TestVariable> {

        return new Promise<TestPlanInterfaces.TestVariable>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.2-preview.1",
                    "testplan",
                    "2c61fac6-ac4e-45a5-8c38-1c2b8fd8ea6c",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<TestPlanInterfaces.TestVariable>;
                res = await this.rest.create<TestPlanInterfaces.TestVariable>(url, testVariableCreateUpdateParameters, options);

                let ret = this.formatResponse(res.result,
                                              TestPlanInterfaces.TypeInfo.TestVariable,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Delete a test variable by its ID.
     * 
     * @param {string} project - Project ID or project name
     * @param {number} testVariableId - ID of the test variable to delete.
     */
    public async deleteTestVariable(
        project: string,
        testVariableId: number
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                testVariableId: testVariableId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.2-preview.1",
                    "testplan",
                    "2c61fac6-ac4e-45a5-8c38-1c2b8fd8ea6c",
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
     * Get a test variable by its ID.
     * 
     * @param {string} project - Project ID or project name
     * @param {number} testVariableId - ID of the test variable to get.
     */
    public async getTestVariableById(
        project: string,
        testVariableId: number
        ): Promise<TestPlanInterfaces.TestVariable> {

        return new Promise<TestPlanInterfaces.TestVariable>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                testVariableId: testVariableId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.2-preview.1",
                    "testplan",
                    "2c61fac6-ac4e-45a5-8c38-1c2b8fd8ea6c",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<TestPlanInterfaces.TestVariable>;
                res = await this.rest.get<TestPlanInterfaces.TestVariable>(url, options);

                let ret = this.formatResponse(res.result,
                                              TestPlanInterfaces.TypeInfo.TestVariable,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Get a list of test variables.
     * 
     * @param {string} project - Project ID or project name
     * @param {string} continuationToken - If the list of variables returned is not complete, a continuation token to query next batch of variables is included in the response header as "x-ms-continuationtoken". Omit this parameter to get the first batch of test variables.
     */
    public async getTestVariables(
        project: string,
        continuationToken?: string
        ): Promise<VSSInterfaces.PagedList<TestPlanInterfaces.TestVariable>> {

        return new Promise<VSSInterfaces.PagedList<TestPlanInterfaces.TestVariable>>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            let queryValues: any = {
                continuationToken: continuationToken,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.2-preview.1",
                    "testplan",
                    "2c61fac6-ac4e-45a5-8c38-1c2b8fd8ea6c",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<VSSInterfaces.PagedList<TestPlanInterfaces.TestVariable>>;
                res = await this.rest.get<VSSInterfaces.PagedList<TestPlanInterfaces.TestVariable>>(url, options);

                let ret = this.formatResponse(res.result,
                                              TestPlanInterfaces.TypeInfo.TestVariable,
                                              true);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Update a test variable by its ID.
     * 
     * @param {TestPlanInterfaces.TestVariableCreateUpdateParameters} testVariableCreateUpdateParameters - TestVariableCreateUpdateParameters
     * @param {string} project - Project ID or project name
     * @param {number} testVariableId - ID of the test variable to update.
     */
    public async updateTestVariable(
        testVariableCreateUpdateParameters: TestPlanInterfaces.TestVariableCreateUpdateParameters,
        project: string,
        testVariableId: number
        ): Promise<TestPlanInterfaces.TestVariable> {

        return new Promise<TestPlanInterfaces.TestVariable>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                testVariableId: testVariableId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.2-preview.1",
                    "testplan",
                    "2c61fac6-ac4e-45a5-8c38-1c2b8fd8ea6c",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<TestPlanInterfaces.TestVariable>;
                res = await this.rest.update<TestPlanInterfaces.TestVariable>(url, testVariableCreateUpdateParameters, options);

                let ret = this.formatResponse(res.result,
                                              TestPlanInterfaces.TypeInfo.TestVariable,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

}
