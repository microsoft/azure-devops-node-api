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
import PipelinesInterfaces = require("./interfaces/PipelinesInterfaces");

export interface IPipelinesApi extends basem.ClientApiBase {
    getArtifact(project: string, pipelineId: number, runId: number, artifactName: string, expand?: PipelinesInterfaces.GetArtifactExpandOptions): Promise<PipelinesInterfaces.Artifact>;
    getLog(project: string, pipelineId: number, runId: number, logId: number, expand?: PipelinesInterfaces.GetLogExpandOptions): Promise<PipelinesInterfaces.Log>;
    listLogs(project: string, pipelineId: number, runId: number, expand?: PipelinesInterfaces.GetLogExpandOptions): Promise<PipelinesInterfaces.LogCollection>;
    createPipeline(inputParameters: PipelinesInterfaces.CreatePipelineParameters, project: string): Promise<PipelinesInterfaces.Pipeline>;
    getPipeline(project: string, pipelineId: number, pipelineVersion?: number): Promise<PipelinesInterfaces.Pipeline>;
    listPipelines(project: string, orderBy?: string, top?: number, continuationToken?: string): Promise<PipelinesInterfaces.Pipeline[]>;
    preview(runParameters: PipelinesInterfaces.RunPipelineParameters, project: string, pipelineId: number, pipelineVersion?: number): Promise<PipelinesInterfaces.PreviewRun>;
    getRun(project: string, pipelineId: number, runId: number): Promise<PipelinesInterfaces.Run>;
    listRuns(project: string, pipelineId: number): Promise<PipelinesInterfaces.Run[]>;
    runPipeline(runParameters: PipelinesInterfaces.RunPipelineParameters, project: string, pipelineId: number, pipelineVersion?: number): Promise<PipelinesInterfaces.Run>;
}

export class PipelinesApi extends basem.ClientApiBase implements IPipelinesApi {
    constructor(baseUrl: string, handlers: VsoBaseInterfaces.IRequestHandler[], options?: VsoBaseInterfaces.IRequestOptions) {
        super(baseUrl, handlers, 'node-Pipelines-api', options);
    }

    /**
     * Get a specific artifact from a pipeline run
     * 
     * @param {string} project - Project ID or project name
     * @param {number} pipelineId - ID of the pipeline.
     * @param {number} runId - ID of the run of that pipeline.
     * @param {string} artifactName - Name of the artifact.
     * @param {PipelinesInterfaces.GetArtifactExpandOptions} expand - Expand options. Default is None.
     */
    public async getArtifact(
        project: string,
        pipelineId: number,
        runId: number,
        artifactName: string,
        expand?: PipelinesInterfaces.GetArtifactExpandOptions
        ): Promise<PipelinesInterfaces.Artifact> {
        if (artifactName == null) {
            throw new TypeError('artifactName can not be null or undefined');
        }

        return new Promise<PipelinesInterfaces.Artifact>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                pipelineId: pipelineId,
                runId: runId
            };

            let queryValues: any = {
                artifactName: artifactName,
                '$expand': expand,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.2-preview.1",
                    "pipelines",
                    "85023071-bd5e-4438-89b0-2a5bf362a19d",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<PipelinesInterfaces.Artifact>;
                res = await this.rest.get<PipelinesInterfaces.Artifact>(url, options);

                let ret = this.formatResponse(res.result,
                                              PipelinesInterfaces.TypeInfo.Artifact,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Get a specific log from a pipeline run
     * 
     * @param {string} project - Project ID or project name
     * @param {number} pipelineId - ID of the pipeline.
     * @param {number} runId - ID of the run of that pipeline.
     * @param {number} logId - ID of the log.
     * @param {PipelinesInterfaces.GetLogExpandOptions} expand - Expand options. Default is None.
     */
    public async getLog(
        project: string,
        pipelineId: number,
        runId: number,
        logId: number,
        expand?: PipelinesInterfaces.GetLogExpandOptions
        ): Promise<PipelinesInterfaces.Log> {

        return new Promise<PipelinesInterfaces.Log>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                pipelineId: pipelineId,
                runId: runId,
                logId: logId
            };

            let queryValues: any = {
                '$expand': expand,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.2-preview.1",
                    "pipelines",
                    "fb1b6d27-3957-43d5-a14b-a2d70403e545",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<PipelinesInterfaces.Log>;
                res = await this.rest.get<PipelinesInterfaces.Log>(url, options);

                let ret = this.formatResponse(res.result,
                                              PipelinesInterfaces.TypeInfo.Log,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Get a list of logs from a pipeline run.
     * 
     * @param {string} project - Project ID or project name
     * @param {number} pipelineId - ID of the pipeline.
     * @param {number} runId - ID of the run of that pipeline.
     * @param {PipelinesInterfaces.GetLogExpandOptions} expand - Expand options. Default is None.
     */
    public async listLogs(
        project: string,
        pipelineId: number,
        runId: number,
        expand?: PipelinesInterfaces.GetLogExpandOptions
        ): Promise<PipelinesInterfaces.LogCollection> {

        return new Promise<PipelinesInterfaces.LogCollection>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                pipelineId: pipelineId,
                runId: runId
            };

            let queryValues: any = {
                '$expand': expand,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.2-preview.1",
                    "pipelines",
                    "fb1b6d27-3957-43d5-a14b-a2d70403e545",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<PipelinesInterfaces.LogCollection>;
                res = await this.rest.get<PipelinesInterfaces.LogCollection>(url, options);

                let ret = this.formatResponse(res.result,
                                              PipelinesInterfaces.TypeInfo.LogCollection,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Create a pipeline.
     * 
     * @param {PipelinesInterfaces.CreatePipelineParameters} inputParameters - Input parameters.
     * @param {string} project - Project ID or project name
     */
    public async createPipeline(
        inputParameters: PipelinesInterfaces.CreatePipelineParameters,
        project: string
        ): Promise<PipelinesInterfaces.Pipeline> {

        return new Promise<PipelinesInterfaces.Pipeline>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.2-preview.1",
                    "pipelines",
                    "28e1305e-2afe-47bf-abaf-cbb0e6a91988",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<PipelinesInterfaces.Pipeline>;
                res = await this.rest.create<PipelinesInterfaces.Pipeline>(url, inputParameters, options);

                let ret = this.formatResponse(res.result,
                                              PipelinesInterfaces.TypeInfo.Pipeline,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Gets a pipeline, optionally at the specified version
     * 
     * @param {string} project - Project ID or project name
     * @param {number} pipelineId - The pipeline ID
     * @param {number} pipelineVersion - The pipeline version
     */
    public async getPipeline(
        project: string,
        pipelineId: number,
        pipelineVersion?: number
        ): Promise<PipelinesInterfaces.Pipeline> {

        return new Promise<PipelinesInterfaces.Pipeline>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                pipelineId: pipelineId
            };

            let queryValues: any = {
                pipelineVersion: pipelineVersion,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.2-preview.1",
                    "pipelines",
                    "28e1305e-2afe-47bf-abaf-cbb0e6a91988",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<PipelinesInterfaces.Pipeline>;
                res = await this.rest.get<PipelinesInterfaces.Pipeline>(url, options);

                let ret = this.formatResponse(res.result,
                                              PipelinesInterfaces.TypeInfo.Pipeline,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Get a list of pipelines.
     * 
     * @param {string} project - Project ID or project name
     * @param {string} orderBy - A sort expression. Defaults to "name asc"
     * @param {number} top - The maximum number of pipelines to return
     * @param {string} continuationToken - A continuation token from a previous request, to retrieve the next page of results
     */
    public async listPipelines(
        project: string,
        orderBy?: string,
        top?: number,
        continuationToken?: string
        ): Promise<PipelinesInterfaces.Pipeline[]> {

        return new Promise<PipelinesInterfaces.Pipeline[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            let queryValues: any = {
                orderBy: orderBy,
                '$top': top,
                continuationToken: continuationToken,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.2-preview.1",
                    "pipelines",
                    "28e1305e-2afe-47bf-abaf-cbb0e6a91988",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<PipelinesInterfaces.Pipeline[]>;
                res = await this.rest.get<PipelinesInterfaces.Pipeline[]>(url, options);

                let ret = this.formatResponse(res.result,
                                              PipelinesInterfaces.TypeInfo.Pipeline,
                                              true);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Queues a dry run of the pipeline and returns an object containing the final yaml.
     * 
     * @param {PipelinesInterfaces.RunPipelineParameters} runParameters - Optional additional parameters for this run.
     * @param {string} project - Project ID or project name
     * @param {number} pipelineId - The pipeline ID.
     * @param {number} pipelineVersion - The pipeline version.
     */
    public async preview(
        runParameters: PipelinesInterfaces.RunPipelineParameters,
        project: string,
        pipelineId: number,
        pipelineVersion?: number
        ): Promise<PipelinesInterfaces.PreviewRun> {

        return new Promise<PipelinesInterfaces.PreviewRun>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                pipelineId: pipelineId
            };

            let queryValues: any = {
                pipelineVersion: pipelineVersion,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.2-preview.1",
                    "pipelines",
                    "53df2d18-29ea-46a9-bee0-933540f80abf",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<PipelinesInterfaces.PreviewRun>;
                res = await this.rest.create<PipelinesInterfaces.PreviewRun>(url, runParameters, options);

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
     * Gets a run for a particular pipeline.
     * 
     * @param {string} project - Project ID or project name
     * @param {number} pipelineId - The pipeline id
     * @param {number} runId - The run id
     */
    public async getRun(
        project: string,
        pipelineId: number,
        runId: number
        ): Promise<PipelinesInterfaces.Run> {

        return new Promise<PipelinesInterfaces.Run>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                pipelineId: pipelineId,
                runId: runId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.2-preview.1",
                    "pipelines",
                    "7859261e-d2e9-4a68-b820-a5d84cc5bb3d",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<PipelinesInterfaces.Run>;
                res = await this.rest.get<PipelinesInterfaces.Run>(url, options);

                let ret = this.formatResponse(res.result,
                                              PipelinesInterfaces.TypeInfo.Run,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Gets top 10000 runs for a particular pipeline.
     * 
     * @param {string} project - Project ID or project name
     * @param {number} pipelineId - The pipeline id
     */
    public async listRuns(
        project: string,
        pipelineId: number
        ): Promise<PipelinesInterfaces.Run[]> {

        return new Promise<PipelinesInterfaces.Run[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                pipelineId: pipelineId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.2-preview.1",
                    "pipelines",
                    "7859261e-d2e9-4a68-b820-a5d84cc5bb3d",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<PipelinesInterfaces.Run[]>;
                res = await this.rest.get<PipelinesInterfaces.Run[]>(url, options);

                let ret = this.formatResponse(res.result,
                                              PipelinesInterfaces.TypeInfo.Run,
                                              true);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Runs a pipeline.
     * 
     * @param {PipelinesInterfaces.RunPipelineParameters} runParameters - Optional additional parameters for this run.
     * @param {string} project - Project ID or project name
     * @param {number} pipelineId - The pipeline ID.
     * @param {number} pipelineVersion - The pipeline version.
     */
    public async runPipeline(
        runParameters: PipelinesInterfaces.RunPipelineParameters,
        project: string,
        pipelineId: number,
        pipelineVersion?: number
        ): Promise<PipelinesInterfaces.Run> {

        return new Promise<PipelinesInterfaces.Run>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                pipelineId: pipelineId
            };

            let queryValues: any = {
                pipelineVersion: pipelineVersion,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.2-preview.1",
                    "pipelines",
                    "7859261e-d2e9-4a68-b820-a5d84cc5bb3d",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<PipelinesInterfaces.Run>;
                res = await this.rest.create<PipelinesInterfaces.Run>(url, runParameters, options);

                let ret = this.formatResponse(res.result,
                                              PipelinesInterfaces.TypeInfo.Run,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

}
