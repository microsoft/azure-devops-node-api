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
import CIXInterfaces = require("./interfaces/CIXInterfaces");
import OperationsInterfaces = require("./interfaces/common/OperationsInterfaces");

export interface ICixApi extends basem.ClientApiBase {
    getConfigurations(project: string, repositoryType?: string, repositoryId?: string, branch?: string, serviceConnectionId?: string): Promise<CIXInterfaces.ConfigurationFile[]>;
    createConnection(createConnectionInputs: CIXInterfaces.CreatePipelineConnectionInputs): Promise<OperationsInterfaces.Operation>;
    createProjectConnection(createConnectionInputs: CIXInterfaces.CreatePipelineConnectionInputs, project: string): Promise<CIXInterfaces.PipelineConnection>;
    getDetectedBuildFrameworks(project: string, repositoryType?: string, repositoryId?: string, branch?: string, detectionType?: CIXInterfaces.BuildFrameworkDetectionType, serviceConnectionId?: string): Promise<CIXInterfaces.DetectedBuildFramework[]>;
    createResources(creationParameters: { [key: string] : CIXInterfaces.ResourceCreationParameter; }, project: string): Promise<CIXInterfaces.CreatedResources>;
}

export class CixApi extends basem.ClientApiBase implements ICixApi {
    constructor(baseUrl: string, handlers: VsoBaseInterfaces.IRequestHandler[], options?: VsoBaseInterfaces.IRequestOptions) {
        super(baseUrl, handlers, 'node-Pipelines-api', options);
    }

    /**
     * Gets a list of existing configuration files for the given repository.
     * 
     * @param {string} project - Project ID or project name
     * @param {string} repositoryType - The type of the repository such as GitHub, TfsGit (i.e. Azure Repos), Bitbucket, etc.
     * @param {string} repositoryId - The vendor-specific identifier or the name of the repository, e.g. Microsoft/vscode (GitHub) or e9d82045-ddba-4e01-a63d-2ab9f040af62 (Azure Repos)
     * @param {string} branch - The repository branch where to look for the configuration file.
     * @param {string} serviceConnectionId - If specified, the ID of the service endpoint to query. Can only be omitted for providers that do not use service endpoints, e.g. TfsGit (i.e. Azure Repos).
     */
    public async getConfigurations(
        project: string,
        repositoryType?: string,
        repositoryId?: string,
        branch?: string,
        serviceConnectionId?: string
        ): Promise<CIXInterfaces.ConfigurationFile[]> {

        return new Promise<CIXInterfaces.ConfigurationFile[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            let queryValues: any = {
                repositoryType: repositoryType,
                repositoryId: repositoryId,
                branch: branch,
                serviceConnectionId: serviceConnectionId,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.2-preview.1",
                    "pipelines",
                    "8fc87684-9ebc-4c37-ab92-f4ac4a58cb3a",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<CIXInterfaces.ConfigurationFile[]>;
                res = await this.rest.get<CIXInterfaces.ConfigurationFile[]>(url, options);

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
     * LEGACY METHOD - Obsolete Creates a new Pipeline connection between the provider installation and the specified project. Returns an Operation object that holds the redirect Url
     * 
     * @param {CIXInterfaces.CreatePipelineConnectionInputs} createConnectionInputs
     */
    public async createConnection(
        createConnectionInputs: CIXInterfaces.CreatePipelineConnectionInputs
        ): Promise<OperationsInterfaces.Operation> {

        return new Promise<OperationsInterfaces.Operation>(async (resolve, reject) => {
            let routeValues: any = {
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.2-preview.1",
                    "pipelines",
                    "00df4879-9216-45d5-b38d-4a487b626b2c",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<OperationsInterfaces.Operation>;
                res = await this.rest.create<OperationsInterfaces.Operation>(url, createConnectionInputs, options);

                let ret = this.formatResponse(res.result,
                                              OperationsInterfaces.TypeInfo.Operation,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Creates a new Pipeline connection between the provider installation and the specified project. Returns the PipelineConnection object created.
     * 
     * @param {CIXInterfaces.CreatePipelineConnectionInputs} createConnectionInputs
     * @param {string} project
     */
    public async createProjectConnection(
        createConnectionInputs: CIXInterfaces.CreatePipelineConnectionInputs,
        project: string
        ): Promise<CIXInterfaces.PipelineConnection> {
        if (project == null) {
            throw new TypeError('project can not be null or undefined');
        }

        return new Promise<CIXInterfaces.PipelineConnection>(async (resolve, reject) => {
            let routeValues: any = {
            };

            let queryValues: any = {
                project: project,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.2-preview.1",
                    "pipelines",
                    "00df4879-9216-45d5-b38d-4a487b626b2c",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<CIXInterfaces.PipelineConnection>;
                res = await this.rest.create<CIXInterfaces.PipelineConnection>(url, createConnectionInputs, options);

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
     * Returns a list of build frameworks that best match the given repository based on its contents.
     * 
     * @param {string} project - Project ID or project name
     * @param {string} repositoryType - The type of the repository such as GitHub, TfsGit (i.e. Azure Repos), Bitbucket, etc.
     * @param {string} repositoryId - The vendor-specific identifier or the name of the repository, e.g. Microsoft/vscode (GitHub) or e9d82045-ddba-4e01-a63d-2ab9f040af62 (Azure Repos)
     * @param {string} branch - The repository branch to detect build frameworks for.
     * @param {CIXInterfaces.BuildFrameworkDetectionType} detectionType
     * @param {string} serviceConnectionId - If specified, the ID of the service endpoint to query. Can only be omitted for providers that do not use service endpoints, e.g. TfsGit (i.e. Azure Repos).
     */
    public async getDetectedBuildFrameworks(
        project: string,
        repositoryType?: string,
        repositoryId?: string,
        branch?: string,
        detectionType?: CIXInterfaces.BuildFrameworkDetectionType,
        serviceConnectionId?: string
        ): Promise<CIXInterfaces.DetectedBuildFramework[]> {

        return new Promise<CIXInterfaces.DetectedBuildFramework[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            let queryValues: any = {
                repositoryType: repositoryType,
                repositoryId: repositoryId,
                branch: branch,
                detectionType: detectionType,
                serviceConnectionId: serviceConnectionId,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.2-preview.1",
                    "pipelines",
                    "29a30bab-9efb-4652-bf1b-9269baca0980",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<CIXInterfaces.DetectedBuildFramework[]>;
                res = await this.rest.get<CIXInterfaces.DetectedBuildFramework[]>(url, options);

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
     * @param {{ [key: string] : CIXInterfaces.ResourceCreationParameter; }} creationParameters
     * @param {string} project - Project ID or project name
     */
    public async createResources(
        creationParameters: { [key: string] : CIXInterfaces.ResourceCreationParameter; },
        project: string
        ): Promise<CIXInterfaces.CreatedResources> {

        return new Promise<CIXInterfaces.CreatedResources>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.2-preview.1",
                    "pipelines",
                    "43201899-7690-4870-9c79-ab69605f21ed",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<CIXInterfaces.CreatedResources>;
                res = await this.rest.create<CIXInterfaces.CreatedResources>(url, creationParameters, options);

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
