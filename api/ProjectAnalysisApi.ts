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
import ProjectAnalysisInterfaces = require("./interfaces/ProjectAnalysisInterfaces");

export interface IProjectAnalysisApi extends basem.ClientApiBase {
    getProjectLanguageAnalytics(project: string): Promise<ProjectAnalysisInterfaces.ProjectLanguageAnalytics>;
    getProjectActivityMetrics(project: string, fromDate: Date, aggregationType: ProjectAnalysisInterfaces.AggregationType): Promise<ProjectAnalysisInterfaces.ProjectActivityMetrics>;
    getGitRepositoriesActivityMetrics(project: string, fromDate: Date, aggregationType: ProjectAnalysisInterfaces.AggregationType, skip: number, top: number): Promise<ProjectAnalysisInterfaces.RepositoryActivityMetrics[]>;
    getRepositoryActivityMetrics(project: string, repositoryId: string, fromDate: Date, aggregationType: ProjectAnalysisInterfaces.AggregationType): Promise<ProjectAnalysisInterfaces.RepositoryActivityMetrics>;
}

export class ProjectAnalysisApi extends basem.ClientApiBase implements IProjectAnalysisApi {
    constructor(baseUrl: string, handlers: VsoBaseInterfaces.IRequestHandler[], options?: VsoBaseInterfaces.IRequestOptions) {
        super(baseUrl, handlers, 'node-ProjectAnalysis-api', options);
    }

    /**
     * @param {string} project - Project ID or project name
     */
    public async getProjectLanguageAnalytics(
        project: string
        ): Promise<ProjectAnalysisInterfaces.ProjectLanguageAnalytics> {

        return new Promise<ProjectAnalysisInterfaces.ProjectLanguageAnalytics>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "4.1-preview.1",
                    "projectanalysis",
                    "5b02a779-1867-433f-90b7-d23ed5e33e57",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<ProjectAnalysisInterfaces.ProjectLanguageAnalytics>;
                res = await this.rest.get<ProjectAnalysisInterfaces.ProjectLanguageAnalytics>(url, options);

                let ret = this.formatResponse(res.result,
                                              ProjectAnalysisInterfaces.TypeInfo.ProjectLanguageAnalytics,
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
     * @param {Date} fromDate
     * @param {ProjectAnalysisInterfaces.AggregationType} aggregationType
     */
    public async getProjectActivityMetrics(
        project: string,
        fromDate: Date,
        aggregationType: ProjectAnalysisInterfaces.AggregationType
        ): Promise<ProjectAnalysisInterfaces.ProjectActivityMetrics> {

        return new Promise<ProjectAnalysisInterfaces.ProjectActivityMetrics>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            let queryValues: any = {
                fromDate: fromDate,
                aggregationType: aggregationType,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "4.1-preview.1",
                    "projectanalysis",
                    "e40ae584-9ea6-4f06-a7c7-6284651b466b",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<ProjectAnalysisInterfaces.ProjectActivityMetrics>;
                res = await this.rest.get<ProjectAnalysisInterfaces.ProjectActivityMetrics>(url, options);

                let ret = this.formatResponse(res.result,
                                              ProjectAnalysisInterfaces.TypeInfo.ProjectActivityMetrics,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Retrieves git activity metrics for repositories matching a specified criteria.
     * 
     * @param {string} project - Project ID or project name
     * @param {Date} fromDate - Date from which, the trends are to be fetched.
     * @param {ProjectAnalysisInterfaces.AggregationType} aggregationType - Bucket size on which, trends are to be aggregated.
     * @param {number} skip - The number of repositories to ignore.
     * @param {number} top - The number of repositories for which activity metrics are to be retrieved.
     */
    public async getGitRepositoriesActivityMetrics(
        project: string,
        fromDate: Date,
        aggregationType: ProjectAnalysisInterfaces.AggregationType,
        skip: number,
        top: number
        ): Promise<ProjectAnalysisInterfaces.RepositoryActivityMetrics[]> {

        return new Promise<ProjectAnalysisInterfaces.RepositoryActivityMetrics[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            let queryValues: any = {
                fromDate: fromDate,
                aggregationType: aggregationType,
                '$skip': skip,
                '$top': top,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "4.1-preview.1",
                    "projectanalysis",
                    "df7fbbca-630a-40e3-8aa3-7a3faf66947e",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<ProjectAnalysisInterfaces.RepositoryActivityMetrics[]>;
                res = await this.rest.get<ProjectAnalysisInterfaces.RepositoryActivityMetrics[]>(url, options);

                let ret = this.formatResponse(res.result,
                                              ProjectAnalysisInterfaces.TypeInfo.RepositoryActivityMetrics,
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
     * @param {string} repositoryId
     * @param {Date} fromDate
     * @param {ProjectAnalysisInterfaces.AggregationType} aggregationType
     */
    public async getRepositoryActivityMetrics(
        project: string,
        repositoryId: string,
        fromDate: Date,
        aggregationType: ProjectAnalysisInterfaces.AggregationType
        ): Promise<ProjectAnalysisInterfaces.RepositoryActivityMetrics> {

        return new Promise<ProjectAnalysisInterfaces.RepositoryActivityMetrics>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                repositoryId: repositoryId
            };

            let queryValues: any = {
                fromDate: fromDate,
                aggregationType: aggregationType,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "4.1-preview.1",
                    "projectanalysis",
                    "df7fbbca-630a-40e3-8aa3-7a3faf66947e",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<ProjectAnalysisInterfaces.RepositoryActivityMetrics>;
                res = await this.rest.get<ProjectAnalysisInterfaces.RepositoryActivityMetrics>(url, options);

                let ret = this.formatResponse(res.result,
                                              ProjectAnalysisInterfaces.TypeInfo.RepositoryActivityMetrics,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

}
