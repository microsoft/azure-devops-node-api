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
import TestExecutionInterfaces = require("./interfaces/TestExecutionInterfaces");

export interface ITestApi extends basem.ClientApiBase {
    createAgent(testAgent: TestExecutionInterfaces.TestAgent): Promise<TestExecutionInterfaces.TestAgent>;
    deleteAgent(id: number): Promise<void>;
    getAgent(id: number): Promise<TestExecutionInterfaces.TestAgent>;
    getCommand(testAgentId?: number, commandId?: number): Promise<TestExecutionInterfaces.TestExecutionServiceCommand>;
    updateTestRun(distributedTestRun: TestExecutionInterfaces.DistributedTestRun, project: string): Promise<TestExecutionInterfaces.DistributedTestRun>;
    getSlice(testAgentId: number): Promise<TestExecutionInterfaces.TestAutomationRunSlice>;
    updateSlice(sliceDetails: TestExecutionInterfaces.TestAutomationRunSlice): Promise<void>;
}

export class TestApi extends basem.ClientApiBase implements ITestApi {
    constructor(baseUrl: string, handlers: VsoBaseInterfaces.IRequestHandler[]) {
        super(baseUrl, handlers, 'node-Test-api');
    }

    /**
    * http://(tfsserver):8080/tfs/DefaultCollection/_apis/test/agents Request: Json of TestAgent
    * 
    * @param {TestExecutionInterfaces.TestAgent} testAgent
    */
    public async createAgent(
        testAgent: TestExecutionInterfaces.TestAgent
        ): Promise<TestExecutionInterfaces.TestAgent> {

        return new Promise<TestExecutionInterfaces.TestAgent>(async (resolve, reject) => {
            let routeValues: any = {
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "Test",
                    "0f1857de-6e56-4010-9ea7-f29b80b911c4",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<TestExecutionInterfaces.TestAgent>;
                res = await this.rest.create<TestExecutionInterfaces.TestAgent>(url, testAgent, options);

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
    * http://(tfsserver):8080/tfs/DefaultCollection/_apis/test/agents/id Request: Json of id
    * 
    * @param {number} id
    */
    public async deleteAgent(
        id: number
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
                id: id
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "Test",
                    "0f1857de-6e56-4010-9ea7-f29b80b911c4",
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
    * http://(tfsserver):8080/tfs/DefaultCollection/_apis/test/agents/id Request: Json of id
    * 
    * @param {number} id
    */
    public async getAgent(
        id: number
        ): Promise<TestExecutionInterfaces.TestAgent> {

        return new Promise<TestExecutionInterfaces.TestAgent>(async (resolve, reject) => {
            let routeValues: any = {
                id: id
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "Test",
                    "0f1857de-6e56-4010-9ea7-f29b80b911c4",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<TestExecutionInterfaces.TestAgent>;
                res = await this.rest.get<TestExecutionInterfaces.TestAgent>(url, options);

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
    * Gets test message that is in queue after lastMessageId.
    * 
    * @param {number} testAgentId - The test agent which calls this api.
    * @param {number} commandId
    */
    public async getCommand(
        testAgentId?: number,
        commandId?: number
        ): Promise<TestExecutionInterfaces.TestExecutionServiceCommand> {

        return new Promise<TestExecutionInterfaces.TestExecutionServiceCommand>(async (resolve, reject) => {
            let routeValues: any = {
                testAgentId: testAgentId,
                commandId: commandId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "Test",
                    "5b78449b-a866-4726-b989-9083eb2d977c",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<TestExecutionInterfaces.TestExecutionServiceCommand>;
                res = await this.rest.get<TestExecutionInterfaces.TestExecutionServiceCommand>(url, options);

                let ret = this.formatResponse(res.result,
                                              TestExecutionInterfaces.TypeInfo.TestExecutionServiceCommand,
                                              true);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * http://(tfsserver):8080/tfs/DefaultCollection/_apis/test/DistributedTestRuns/ Request: Json of TestRun
    * 
    * @param {TestExecutionInterfaces.DistributedTestRun} distributedTestRun
    * @param {string} project
    */
    public async updateTestRun(
        distributedTestRun: TestExecutionInterfaces.DistributedTestRun,
        project: string
        ): Promise<TestExecutionInterfaces.DistributedTestRun> {

        return new Promise<TestExecutionInterfaces.DistributedTestRun>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "Test",
                    "b7c4fe2a-9dd1-4dae-8b77-8412002de5a4",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<TestExecutionInterfaces.DistributedTestRun>;
                res = await this.rest.update<TestExecutionInterfaces.DistributedTestRun>(url, distributedTestRun, options);

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
    * http://(tfsserver):8080/tfs/DefaultCollection/_apis/test/slices/[?testAgentId=1]
    * 
    * @param {number} testAgentId
    */
    public async getSlice(
        testAgentId: number
        ): Promise<TestExecutionInterfaces.TestAutomationRunSlice> {

        return new Promise<TestExecutionInterfaces.TestAutomationRunSlice>(async (resolve, reject) => {
            let routeValues: any = {
                testAgentId: testAgentId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "Test",
                    "575891b2-50a3-474f-a963-7ca011c97500",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<TestExecutionInterfaces.TestAutomationRunSlice>;
                res = await this.rest.get<TestExecutionInterfaces.TestAutomationRunSlice>(url, options);

                let ret = this.formatResponse(res.result,
                                              TestExecutionInterfaces.TypeInfo.TestAutomationRunSlice,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {TestExecutionInterfaces.TestAutomationRunSlice} sliceDetails
    */
    public async updateSlice(
        sliceDetails: TestExecutionInterfaces.TestAutomationRunSlice
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "Test",
                    "575891b2-50a3-474f-a963-7ca011c97500",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<void>;
                res = await this.rest.update<void>(url, sliceDetails, options);

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

}
