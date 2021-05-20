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
import LocationsInterfaces = require("./interfaces/LocationsInterfaces");
import VSSInterfaces = require("./interfaces/common/VSSInterfaces");

export interface ILocationsApi extends basem.ClientApiBase {
    getConnectionData(connectOptions?: VSSInterfaces.ConnectOptions, lastChangeId?: number, lastChangeId64?: number): Promise<LocationsInterfaces.ConnectionData>;
    getResourceArea(areaId: string, enterpriseName?: string, organizationName?: string): Promise<LocationsInterfaces.ResourceAreaInfo>;
    getResourceAreaByHost(areaId: string, hostId: string): Promise<LocationsInterfaces.ResourceAreaInfo>;
    getResourceAreas(enterpriseName?: string, organizationName?: string): Promise<LocationsInterfaces.ResourceAreaInfo[]>;
    getResourceAreasByHost(hostId: string): Promise<LocationsInterfaces.ResourceAreaInfo[]>;
    deleteServiceDefinition(serviceType: string, identifier: string): Promise<void>;
    getServiceDefinition(serviceType: string, identifier: string, allowFaultIn?: boolean, previewFaultIn?: boolean): Promise<LocationsInterfaces.ServiceDefinition>;
    getServiceDefinitions(serviceType?: string): Promise<LocationsInterfaces.ServiceDefinition[]>;
    updateServiceDefinitions(serviceDefinitions: VSSInterfaces.VssJsonCollectionWrapperV<LocationsInterfaces.ServiceDefinition[]>): Promise<void>;
}

export class LocationsApi extends basem.ClientApiBase implements ILocationsApi {
    constructor(baseUrl: string, handlers: VsoBaseInterfaces.IRequestHandler[], options?: VsoBaseInterfaces.IRequestOptions) {
        super(baseUrl, handlers, 'node-Locations-api', options);
    }

    /**
     * This was copied and adapted from TeamFoundationConnectionService.Connect()
     * 
     * @param {VSSInterfaces.ConnectOptions} connectOptions
     * @param {number} lastChangeId - Obsolete 32-bit LastChangeId
     * @param {number} lastChangeId64 - Non-truncated 64-bit LastChangeId
     */
    public async getConnectionData(
        connectOptions?: VSSInterfaces.ConnectOptions,
        lastChangeId?: number,
        lastChangeId64?: number
        ): Promise<LocationsInterfaces.ConnectionData> {

        return new Promise<LocationsInterfaces.ConnectionData>(async (resolve, reject) => {
            let routeValues: any = {
            };

            let queryValues: any = {
                connectOptions: connectOptions,
                lastChangeId: lastChangeId,
                lastChangeId64: lastChangeId64,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "6.1-preview.1",
                    "Location",
                    "00d9565f-ed9c-4a06-9a50-00e7896ccab4",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<LocationsInterfaces.ConnectionData>;
                res = await this.rest.get<LocationsInterfaces.ConnectionData>(url, options);

                let ret = this.formatResponse(res.result,
                                              LocationsInterfaces.TypeInfo.ConnectionData,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * @param {string} areaId
     * @param {string} enterpriseName
     * @param {string} organizationName
     */
    public async getResourceArea(
        areaId: string,
        enterpriseName?: string,
        organizationName?: string
        ): Promise<LocationsInterfaces.ResourceAreaInfo> {

        return new Promise<LocationsInterfaces.ResourceAreaInfo>(async (resolve, reject) => {
            let routeValues: any = {
                areaId: areaId
            };

            let queryValues: any = {
                enterpriseName: enterpriseName,
                organizationName: organizationName,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "6.1-preview.1",
                    "Location",
                    "e81700f7-3be2-46de-8624-2eb35882fcaa",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<LocationsInterfaces.ResourceAreaInfo>;
                res = await this.rest.get<LocationsInterfaces.ResourceAreaInfo>(url, options);

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
     * @param {string} areaId
     * @param {string} hostId
     */
    public async getResourceAreaByHost(
        areaId: string,
        hostId: string
        ): Promise<LocationsInterfaces.ResourceAreaInfo> {
        if (hostId == null) {
            throw new TypeError('hostId can not be null or undefined');
        }

        return new Promise<LocationsInterfaces.ResourceAreaInfo>(async (resolve, reject) => {
            let routeValues: any = {
                areaId: areaId
            };

            let queryValues: any = {
                hostId: hostId,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "6.1-preview.1",
                    "Location",
                    "e81700f7-3be2-46de-8624-2eb35882fcaa",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<LocationsInterfaces.ResourceAreaInfo>;
                res = await this.rest.get<LocationsInterfaces.ResourceAreaInfo>(url, options);

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
     * @param {string} enterpriseName
     * @param {string} organizationName
     */
    public async getResourceAreas(
        enterpriseName?: string,
        organizationName?: string
        ): Promise<LocationsInterfaces.ResourceAreaInfo[]> {

        return new Promise<LocationsInterfaces.ResourceAreaInfo[]>(async (resolve, reject) => {
            let routeValues: any = {
            };

            let queryValues: any = {
                enterpriseName: enterpriseName,
                organizationName: organizationName,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "6.1-preview.1",
                    "Location",
                    "e81700f7-3be2-46de-8624-2eb35882fcaa",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<LocationsInterfaces.ResourceAreaInfo[]>;
                res = await this.rest.get<LocationsInterfaces.ResourceAreaInfo[]>(url, options);

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
     * @param {string} hostId
     */
    public async getResourceAreasByHost(
        hostId: string
        ): Promise<LocationsInterfaces.ResourceAreaInfo[]> {
        if (hostId == null) {
            throw new TypeError('hostId can not be null or undefined');
        }

        return new Promise<LocationsInterfaces.ResourceAreaInfo[]>(async (resolve, reject) => {
            let routeValues: any = {
            };

            let queryValues: any = {
                hostId: hostId,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "6.1-preview.1",
                    "Location",
                    "e81700f7-3be2-46de-8624-2eb35882fcaa",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<LocationsInterfaces.ResourceAreaInfo[]>;
                res = await this.rest.get<LocationsInterfaces.ResourceAreaInfo[]>(url, options);

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
     * @param {string} serviceType
     * @param {string} identifier
     */
    public async deleteServiceDefinition(
        serviceType: string,
        identifier: string
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
                serviceType: serviceType,
                identifier: identifier
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "6.1-preview.1",
                    "Location",
                    "d810a47d-f4f4-4a62-a03f-fa1860585c4c",
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
     * Finds a given service definition.
     * 
     * @param {string} serviceType
     * @param {string} identifier
     * @param {boolean} allowFaultIn - If true, we will attempt to fault in a host instance mapping if in SPS.
     * @param {boolean} previewFaultIn - If true, we will calculate and return a host instance mapping, but not persist it.
     */
    public async getServiceDefinition(
        serviceType: string,
        identifier: string,
        allowFaultIn?: boolean,
        previewFaultIn?: boolean
        ): Promise<LocationsInterfaces.ServiceDefinition> {

        return new Promise<LocationsInterfaces.ServiceDefinition>(async (resolve, reject) => {
            let routeValues: any = {
                serviceType: serviceType,
                identifier: identifier
            };

            let queryValues: any = {
                allowFaultIn: allowFaultIn,
                previewFaultIn: previewFaultIn,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "6.1-preview.1",
                    "Location",
                    "d810a47d-f4f4-4a62-a03f-fa1860585c4c",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<LocationsInterfaces.ServiceDefinition>;
                res = await this.rest.get<LocationsInterfaces.ServiceDefinition>(url, options);

                let ret = this.formatResponse(res.result,
                                              LocationsInterfaces.TypeInfo.ServiceDefinition,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * @param {string} serviceType
     */
    public async getServiceDefinitions(
        serviceType?: string
        ): Promise<LocationsInterfaces.ServiceDefinition[]> {

        return new Promise<LocationsInterfaces.ServiceDefinition[]>(async (resolve, reject) => {
            let routeValues: any = {
                serviceType: serviceType
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "6.1-preview.1",
                    "Location",
                    "d810a47d-f4f4-4a62-a03f-fa1860585c4c",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<LocationsInterfaces.ServiceDefinition[]>;
                res = await this.rest.get<LocationsInterfaces.ServiceDefinition[]>(url, options);

                let ret = this.formatResponse(res.result,
                                              LocationsInterfaces.TypeInfo.ServiceDefinition,
                                              true);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * @param {VSSInterfaces.VssJsonCollectionWrapperV<LocationsInterfaces.ServiceDefinition[]>} serviceDefinitions
     */
    public async updateServiceDefinitions(
        serviceDefinitions: VSSInterfaces.VssJsonCollectionWrapperV<LocationsInterfaces.ServiceDefinition[]>
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "6.1-preview.1",
                    "Location",
                    "d810a47d-f4f4-4a62-a03f-fa1860585c4c",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<void>;
                res = await this.rest.update<void>(url, serviceDefinitions, options);

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
