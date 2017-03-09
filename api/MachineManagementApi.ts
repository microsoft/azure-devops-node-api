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
import MachineManagementInterfaces = require("./interfaces/MachineManagementInterfaces");

export interface IMachineManagementApi extends basem.ClientApiBase {
    getMachineConfiguration(poolName: string, instanceName: string): Promise<MachineManagementInterfaces.MachineConfigurationResponse>;
    publishNotification(poolEvent: MachineManagementInterfaces.MachinePoolEvent, poolName: string): Promise<void>;
    getPoolFriendlyImageNameList(): Promise<MachineManagementInterfaces.FriendlyImageName[]>;
    registerMachineInstance(poolAuthToken: number[], poolName: string, instanceName: string, imageName: string, imageVersion: string, provisioning?: boolean, startProvisioning?: boolean): Promise<MachineManagementInterfaces.MachineRegistrationResponseData>;
    updateMachineInstance(properties: any, poolName: string, instanceName: string, state?: string, enabled?: boolean, imageName?: string, imageVersion?: string, provisioned?: boolean): Promise<MachineManagementInterfaces.MachineInstance>;
    deleteMessage(poolName: string, instanceName: string, queueName: string, accessToken: string, messageId: number): Promise<void>;
    getMessage(poolName: string, instanceName: string, queueName: string, accessToken: string, lastMessageId?: number): Promise<MachineManagementInterfaces.MachineInstanceMessage>;
    getMachinePool(poolName: string, propertyFilters?: string): Promise<MachineManagementInterfaces.MachinePool>;
    requestAction(state: MachineManagementInterfaces.RequestStateData, poolName: string, requestId: number): Promise<void>;
    queueRequest(machineRequest: MachineManagementInterfaces.MachineRequest): Promise<void>;
    getResource(requestType: string, version: string): Promise<MachineManagementInterfaces.MachineRequestResource>;
    getResources(requestType: string): Promise<MachineManagementInterfaces.MachineRequestResource[]>;
}

export class MachineManagementApi extends basem.ClientApiBase implements IMachineManagementApi {
    constructor(baseUrl: string, handlers: VsoBaseInterfaces.IRequestHandler[]) {
        super(baseUrl, handlers, 'node-MachineManagement-api');
    }

    /**
    * @param {string} poolName
    * @param {string} instanceName
    */
    public async getMachineConfiguration(
        poolName: string,
        instanceName: string
        ): Promise<MachineManagementInterfaces.MachineConfigurationResponse> {

        return new Promise<MachineManagementInterfaces.MachineConfigurationResponse>(async (resolve, reject) => {
            let routeValues: any = {
                poolName: poolName,
                instanceName: instanceName
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "mms",
                    "50c4e238-51d9-4144-93cc-8a842315f95d",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<MachineManagementInterfaces.MachineConfigurationResponse>;
                res = await this.rest.get<MachineManagementInterfaces.MachineConfigurationResponse>(url, options);

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
    * @param {MachineManagementInterfaces.MachinePoolEvent} poolEvent
    * @param {string} poolName
    */
    public async publishNotification(
        poolEvent: MachineManagementInterfaces.MachinePoolEvent,
        poolName: string
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
                poolName: poolName
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "mms",
                    "b770d7eb-cb9e-4d55-af35-4ce10d01dc1c",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<void>;
                res = await this.rest.create<void>(url, poolEvent, options);

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
    */
    public async getPoolFriendlyImageNameList(
        ): Promise<MachineManagementInterfaces.FriendlyImageName[]> {

        return new Promise<MachineManagementInterfaces.FriendlyImageName[]>(async (resolve, reject) => {
            let routeValues: any = {
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "mms",
                    "33e5d203-cc38-478b-a0a0-aad8d7cc04ed",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<MachineManagementInterfaces.FriendlyImageName[]>;
                res = await this.rest.get<MachineManagementInterfaces.FriendlyImageName[]>(url, options);

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
    * @param {number[]} poolAuthToken
    * @param {string} poolName
    * @param {string} instanceName
    * @param {string} imageName
    * @param {string} imageVersion
    * @param {boolean} provisioning
    * @param {boolean} startProvisioning
    */
    public async registerMachineInstance(
        poolAuthToken: number[],
        poolName: string,
        instanceName: string,
        imageName: string,
        imageVersion: string,
        provisioning?: boolean,
        startProvisioning?: boolean
        ): Promise<MachineManagementInterfaces.MachineRegistrationResponseData> {

        return new Promise<MachineManagementInterfaces.MachineRegistrationResponseData>(async (resolve, reject) => {
            let routeValues: any = {
                poolName: poolName,
                instanceName: instanceName
            };

            let queryValues: any = {
                imageName: imageName,
                imageVersion: imageVersion,
                provisioning: provisioning,
                startProvisioning: startProvisioning,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "mms",
                    "80ed82a1-c9f1-41bf-95b6-8becc1a72b89",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<MachineManagementInterfaces.MachineRegistrationResponseData>;
                res = await this.rest.create<MachineManagementInterfaces.MachineRegistrationResponseData>(url, poolAuthToken, options);

                let ret = this.formatResponse(res.result,
                                              MachineManagementInterfaces.TypeInfo.MachineRegistrationResponseData,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {any} properties
    * @param {string} poolName
    * @param {string} instanceName
    * @param {string} state
    * @param {boolean} enabled
    * @param {string} imageName
    * @param {string} imageVersion
    * @param {boolean} provisioned
    */
    public async updateMachineInstance(
        properties: any,
        poolName: string,
        instanceName: string,
        state?: string,
        enabled?: boolean,
        imageName?: string,
        imageVersion?: string,
        provisioned?: boolean
        ): Promise<MachineManagementInterfaces.MachineInstance> {

        return new Promise<MachineManagementInterfaces.MachineInstance>(async (resolve, reject) => {
            let routeValues: any = {
                poolName: poolName,
                instanceName: instanceName
            };

            let queryValues: any = {
                state: state,
                enabled: enabled,
                imageName: imageName,
                imageVersion: imageVersion,
                provisioned: provisioned,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "mms",
                    "a67cc23a-6234-4f05-a75b-f08892603e86",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<MachineManagementInterfaces.MachineInstance>;
                res = await this.rest.update<MachineManagementInterfaces.MachineInstance>(url, properties, options);

                let ret = this.formatResponse(res.result,
                                              MachineManagementInterfaces.TypeInfo.MachineInstance,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {string} poolName
    * @param {string} instanceName
    * @param {string} queueName
    * @param {string} accessToken
    * @param {number} messageId
    */
    public async deleteMessage(
        poolName: string,
        instanceName: string,
        queueName: string,
        accessToken: string,
        messageId: number
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
                poolName: poolName,
                instanceName: instanceName
            };

            let queryValues: any = {
                queueName: queueName,
                accessToken: accessToken,
                messageId: messageId,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "mms",
                    "b53c80e3-c3eb-4224-9294-82e773974c5a",
                    routeValues,
                    queryValues);

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
    * @param {string} poolName
    * @param {string} instanceName
    * @param {string} queueName
    * @param {string} accessToken
    * @param {number} lastMessageId
    */
    public async getMessage(
        poolName: string,
        instanceName: string,
        queueName: string,
        accessToken: string,
        lastMessageId?: number
        ): Promise<MachineManagementInterfaces.MachineInstanceMessage> {

        return new Promise<MachineManagementInterfaces.MachineInstanceMessage>(async (resolve, reject) => {
            let routeValues: any = {
                poolName: poolName,
                instanceName: instanceName
            };

            let queryValues: any = {
                queueName: queueName,
                accessToken: accessToken,
                lastMessageId: lastMessageId,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "mms",
                    "b53c80e3-c3eb-4224-9294-82e773974c5a",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<MachineManagementInterfaces.MachineInstanceMessage>;
                res = await this.rest.get<MachineManagementInterfaces.MachineInstanceMessage>(url, options);

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
    * @param {string} poolName
    * @param {string} propertyFilters
    */
    public async getMachinePool(
        poolName: string,
        propertyFilters?: string
        ): Promise<MachineManagementInterfaces.MachinePool> {

        return new Promise<MachineManagementInterfaces.MachinePool>(async (resolve, reject) => {
            let routeValues: any = {
                poolName: poolName
            };

            let queryValues: any = {
                propertyFilters: propertyFilters,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "mms",
                    "11ee58b6-3140-4a8d-a6dd-3e5093db23db",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<MachineManagementInterfaces.MachinePool>;
                res = await this.rest.get<MachineManagementInterfaces.MachinePool>(url, options);

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
    * @param {MachineManagementInterfaces.RequestStateData} state
    * @param {string} poolName
    * @param {number} requestId
    */
    public async requestAction(
        state: MachineManagementInterfaces.RequestStateData,
        poolName: string,
        requestId: number
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
                poolName: poolName,
                requestId: requestId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "mms",
                    "dc8c72f1-74e2-4788-98b0-26117efc38eb",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<void>;
                res = await this.rest.create<void>(url, state, options);

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
    * @param {MachineManagementInterfaces.MachineRequest} machineRequest
    */
    public async queueRequest(
        machineRequest: MachineManagementInterfaces.MachineRequest
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "mms",
                    "658f89f4-f19c-464c-85a4-7ea6669d78e5",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<void>;
                res = await this.rest.create<void>(url, machineRequest, options);

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
    * @param {string} requestType
    * @param {string} version
    */
    public async getResource(
        requestType: string,
        version: string
        ): Promise<MachineManagementInterfaces.MachineRequestResource> {

        return new Promise<MachineManagementInterfaces.MachineRequestResource>(async (resolve, reject) => {
            let routeValues: any = {
                requestType: requestType,
                version: version
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "mms",
                    "37016efb-bdea-4ddf-9684-19098d11ebd4",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<MachineManagementInterfaces.MachineRequestResource>;
                res = await this.rest.get<MachineManagementInterfaces.MachineRequestResource>(url, options);

                let ret = this.formatResponse(res.result,
                                              MachineManagementInterfaces.TypeInfo.MachineRequestResource,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {string} requestType
    */
    public async getResources(
        requestType: string
        ): Promise<MachineManagementInterfaces.MachineRequestResource[]> {

        return new Promise<MachineManagementInterfaces.MachineRequestResource[]>(async (resolve, reject) => {
            let routeValues: any = {
                requestType: requestType
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "mms",
                    "37016efb-bdea-4ddf-9684-19098d11ebd4",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<MachineManagementInterfaces.MachineRequestResource[]>;
                res = await this.rest.get<MachineManagementInterfaces.MachineRequestResource[]>(url, options);

                let ret = this.formatResponse(res.result,
                                              MachineManagementInterfaces.TypeInfo.MachineRequestResource,
                                              true);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

}
