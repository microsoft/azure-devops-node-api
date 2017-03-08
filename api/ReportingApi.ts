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
import ReportingInterfaces = require("./interfaces/ReportingInterfaces");

export interface IReportingApi extends basem.ClientApiBase {
    createChartConfiguration(chartConfiguration: ReportingInterfaces.ChartConfiguration, project: string): Promise<ReportingInterfaces.ChartConfigurationResponse>;
    deleteChartConfiguration(project: string, id: string): Promise<void>;
    getChartConfiguration(project: string, id: string): Promise<ReportingInterfaces.ChartConfigurationResponse>;
    getChartConfigurations(project: string, scope: string, groupKey: string): Promise<ReportingInterfaces.ChartConfigurationResponse[]>;
    replaceChartConfiguration(chartConfiguration: ReportingInterfaces.ChartConfiguration, project: string): Promise<ReportingInterfaces.ChartConfigurationResponse>;
    getDataServiceCapabilities(scope: string): Promise<ReportingInterfaces.DataServiceCapabilitiesResponse>;
    runTransformQuery(transformOptions: ReportingInterfaces.TransformOptions[], scope: string): Promise<ReportingInterfaces.TransformResult[]>;
}

export class ReportingApi extends basem.ClientApiBase implements IReportingApi {
    constructor(baseUrl: string, handlers: VsoBaseInterfaces.IRequestHandler[]) {
        super(baseUrl, handlers, 'node-Reporting-api');
    }

    /**
    * @param {ReportingInterfaces.ChartConfiguration} chartConfiguration
    * @param {string} project - Project ID or project name
    */
    public async createChartConfiguration(
        chartConfiguration: ReportingInterfaces.ChartConfiguration,
        project: string
        ): Promise<ReportingInterfaces.ChartConfigurationResponse> {

        return new Promise<ReportingInterfaces.ChartConfigurationResponse>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "reporting",
                    "50fbd84e-398e-41da-8688-9a3a7b0e602b",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<ReportingInterfaces.ChartConfigurationResponse>;
                res = await this.rest.create<ReportingInterfaces.ChartConfigurationResponse>(url, chartConfiguration, options);

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
    * @param {string} id
    */
    public async deleteChartConfiguration(
        project: string,
        id: string
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                id: id
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "reporting",
                    "50fbd84e-398e-41da-8688-9a3a7b0e602b",
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
    * @param {string} project - Project ID or project name
    * @param {string} id
    */
    public async getChartConfiguration(
        project: string,
        id: string
        ): Promise<ReportingInterfaces.ChartConfigurationResponse> {

        return new Promise<ReportingInterfaces.ChartConfigurationResponse>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                id: id
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "reporting",
                    "50fbd84e-398e-41da-8688-9a3a7b0e602b",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<ReportingInterfaces.ChartConfigurationResponse>;
                res = await this.rest.get<ReportingInterfaces.ChartConfigurationResponse>(url, options);

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
    * @param {string} scope
    * @param {string} groupKey
    */
    public async getChartConfigurations(
        project: string,
        scope: string,
        groupKey: string
        ): Promise<ReportingInterfaces.ChartConfigurationResponse[]> {

        return new Promise<ReportingInterfaces.ChartConfigurationResponse[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            let queryValues: any = {
                scope: scope,
                groupKey: groupKey,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "reporting",
                    "50fbd84e-398e-41da-8688-9a3a7b0e602b",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<ReportingInterfaces.ChartConfigurationResponse[]>;
                res = await this.rest.get<ReportingInterfaces.ChartConfigurationResponse[]>(url, options);

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
    * @param {ReportingInterfaces.ChartConfiguration} chartConfiguration
    * @param {string} project - Project ID or project name
    */
    public async replaceChartConfiguration(
        chartConfiguration: ReportingInterfaces.ChartConfiguration,
        project: string
        ): Promise<ReportingInterfaces.ChartConfigurationResponse> {

        return new Promise<ReportingInterfaces.ChartConfigurationResponse>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "reporting",
                    "50fbd84e-398e-41da-8688-9a3a7b0e602b",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<ReportingInterfaces.ChartConfigurationResponse>;
                res = await this.rest.replace<ReportingInterfaces.ChartConfigurationResponse>(url, chartConfiguration, options);

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
    * @param {string} scope
    */
    public async getDataServiceCapabilities(
        scope: string
        ): Promise<ReportingInterfaces.DataServiceCapabilitiesResponse> {

        return new Promise<ReportingInterfaces.DataServiceCapabilitiesResponse>(async (resolve, reject) => {
            let routeValues: any = {
                scope: scope
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "reporting",
                    "81aa1f62-c70d-4356-ba6b-d8ee4be4379c",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<ReportingInterfaces.DataServiceCapabilitiesResponse>;
                res = await this.rest.get<ReportingInterfaces.DataServiceCapabilitiesResponse>(url, options);

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
    * @param {ReportingInterfaces.TransformOptions[]} transformOptions
    * @param {string} scope
    */
    public async runTransformQuery(
        transformOptions: ReportingInterfaces.TransformOptions[],
        scope: string
        ): Promise<ReportingInterfaces.TransformResult[]> {

        return new Promise<ReportingInterfaces.TransformResult[]>(async (resolve, reject) => {
            let routeValues: any = {
                scope: scope
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "reporting",
                    "71ec2b57-742e-4c12-8bd3-ef633b473f66",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<ReportingInterfaces.TransformResult[]>;
                res = await this.rest.create<ReportingInterfaces.TransformResult[]>(url, transformOptions, options);

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
