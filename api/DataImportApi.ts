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
import DataImportInterfaces = require("./interfaces/DataImportInterfaces");

export interface IDataImportApi extends basem.ClientApiBase {
    cancelDataImportJob(requestId: string): Promise<void>;
    getDataImportRequestStatus(requestId: string): Promise<DataImportInterfaces.DataImportRequestStatus>;
    queueDatabaseImportJob(import: DataImportInterfaces.DatabaseDataImportRequest, validateOnly?: boolean): Promise<void>;
    queueActivateImportJob(activateImport: DataImportInterfaces.ActivateDataImportRequest, validateOnly?: boolean): Promise<void>;
    queueDataImportDehydrateJob(dehydrateRequest: DataImportInterfaces.DataImportDehydrateRequest, validateOnly?: boolean): Promise<void>;
    queueHostMoveImportJob(hostMove: DataImportInterfaces.HostMoveDataImportRequest, validateOnly?: boolean): Promise<void>;
    queueRemoveImportJob(removeImport: DataImportInterfaces.RemoveDataImportRequest, validateOnly?: boolean): Promise<void>;
}

export class DataImportApi extends basem.ClientApiBase implements IDataImportApi {
    constructor(baseUrl: string, handlers: VsoBaseInterfaces.IRequestHandler[]) {
        super(baseUrl, handlers, 'node-DataImport-api');
    }

    /**
    * @param {string} requestId
    */
    public async cancelDataImportJob(
        requestId: string
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
                requestId: requestId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "DataImport",
                    "d8a12f6b-34c2-47b9-8c5a-a13eeea8816e",
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
    * @param {string} requestId
    */
    public async getDataImportRequestStatus(
        requestId: string
        ): Promise<DataImportInterfaces.DataImportRequestStatus> {

        return new Promise<DataImportInterfaces.DataImportRequestStatus>(async (resolve, reject) => {
            let routeValues: any = {
                requestId: requestId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "DataImport",
                    "d8a12f6b-34c2-47b9-8c5a-a13eeea8816e",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<DataImportInterfaces.DataImportRequestStatus>;
                res = await this.rest.get<DataImportInterfaces.DataImportRequestStatus>(url, options);

                let ret = this.formatResponse(res.result,
                                              DataImportInterfaces.TypeInfo.DataImportRequestStatus,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {DataImportInterfaces.DatabaseDataImportRequest} import
    * @param {boolean} validateOnly
    */
    public async queueDatabaseImportJob(
        import: DataImportInterfaces.DatabaseDataImportRequest,
        validateOnly?: boolean
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
            };

            let queryValues: any = {
                validateOnly: validateOnly,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "DataImport",
                    "d8a12f6b-34c2-47b9-8c5a-a13eeea8816e",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<void>;
                res = await this.rest.create<void>(url, import, options);

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
    * @param {DataImportInterfaces.ActivateDataImportRequest} activateImport
    * @param {boolean} validateOnly
    */
    public async queueActivateImportJob(
        activateImport: DataImportInterfaces.ActivateDataImportRequest,
        validateOnly?: boolean
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
            };

            let queryValues: any = {
                validateOnly: validateOnly,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "DataImport",
                    "8217d957-104b-4ac8-9049-cbeea0a9910a",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<void>;
                res = await this.rest.create<void>(url, activateImport, options);

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
    * @param {DataImportInterfaces.DataImportDehydrateRequest} dehydrateRequest
    * @param {boolean} validateOnly
    */
    public async queueDataImportDehydrateJob(
        dehydrateRequest: DataImportInterfaces.DataImportDehydrateRequest,
        validateOnly?: boolean
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
            };

            let queryValues: any = {
                validateOnly: validateOnly,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "DataImport",
                    "b5f81f2f-00c4-4880-bd29-fa75411e8e00",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<void>;
                res = await this.rest.create<void>(url, dehydrateRequest, options);

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
    * @param {DataImportInterfaces.HostMoveDataImportRequest} hostMove
    * @param {boolean} validateOnly
    */
    public async queueHostMoveImportJob(
        hostMove: DataImportInterfaces.HostMoveDataImportRequest,
        validateOnly?: boolean
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
            };

            let queryValues: any = {
                validateOnly: validateOnly,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "DataImport",
                    "55c1dede-24b8-4c2b-82c8-731a2f0c7549",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<void>;
                res = await this.rest.create<void>(url, hostMove, options);

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
    * @param {DataImportInterfaces.RemoveDataImportRequest} removeImport
    * @param {boolean} validateOnly
    */
    public async queueRemoveImportJob(
        removeImport: DataImportInterfaces.RemoveDataImportRequest,
        validateOnly?: boolean
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
            };

            let queryValues: any = {
                validateOnly: validateOnly,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "DataImport",
                    "721974fc-e5d3-46a9-a427-81f84f5c965a",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<void>;
                res = await this.rest.create<void>(url, removeImport, options);

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
