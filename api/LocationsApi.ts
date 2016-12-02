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


import restm = require('./RestClient');
import httpm = require('./HttpClient');
import vsom = require('./VsoClient');
import basem = require('./ClientApiBases');
import serm = require('./Serialization');
import VsoBaseInterfaces = require('./interfaces/common/VsoBaseInterfaces');
import LocationsInterfaces = require("./interfaces/LocationsInterfaces");
import VSSInterfaces = require("./interfaces/common/VSSInterfaces");

export interface ILocationsApi extends basem.ClientApiBase {
    getConnectionData(connectOptions?: VSSInterfaces.ConnectOptions, lastChangeId?: number, lastChangeId64?: number): Promise<LocationsInterfaces.ConnectionData>;
    deleteServiceDefinition(serviceType: string, identifier: string): Promise<void>;
    getServiceDefinition(serviceType: string, identifier: string, allowFaultIn?: boolean): Promise<LocationsInterfaces.ServiceDefinition>;
    getServiceDefinitions(serviceType?: string): Promise<LocationsInterfaces.ServiceDefinition[]>;
    updateServiceDefinitions(serviceDefinitions: VSSInterfaces.VssJsonCollectionWrapperV<LocationsInterfaces.ServiceDefinition[]>): Promise<void>;
}

export class LocationsApi extends basem.ClientApiBase implements ILocationsApi {
    constructor(baseUrl: string, handlers: VsoBaseInterfaces.IRequestHandler[]) {
        super(baseUrl, handlers, 'node-Locations-api');
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
                    "3.1-preview.1",
                    "Location",
                    "00d9565f-ed9c-4a06-9a50-00e7896ccab4",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.get(url, apiVersion, null);
                let serializationData = {  responseTypeMetadata: LocationsInterfaces.TypeInfo.ConnectionData, responseIsCollection: false };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(deserializedResult);
                
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
                    "3.1-preview.1",
                    "Location",
                    "d810a47d-f4f4-4a62-a03f-fa1860585c4c",
                    routeValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.del(url, apiVersion, null);
                let serializationData = {  responseIsCollection: false };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(null);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {string} serviceType
    * @param {string} identifier
    * @param {boolean} allowFaultIn
    */
    public async getServiceDefinition(
        serviceType: string,
        identifier: string,
        allowFaultIn?: boolean
        ): Promise<LocationsInterfaces.ServiceDefinition> {

        return new Promise<LocationsInterfaces.ServiceDefinition>(async (resolve, reject) => {
            
            let routeValues: any = {
                serviceType: serviceType,
                identifier: identifier
            };

            let queryValues: any = {
                allowFaultIn: allowFaultIn,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.1-preview.1",
                    "Location",
                    "d810a47d-f4f4-4a62-a03f-fa1860585c4c",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.get(url, apiVersion, null);
                let serializationData = {  responseTypeMetadata: LocationsInterfaces.TypeInfo.ServiceDefinition, responseIsCollection: false };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(deserializedResult);
                
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
                    "3.1-preview.1",
                    "Location",
                    "d810a47d-f4f4-4a62-a03f-fa1860585c4c",
                    routeValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.get(url, apiVersion, null);
                let serializationData = {  responseTypeMetadata: LocationsInterfaces.TypeInfo.ServiceDefinition, responseIsCollection: true };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(deserializedResult);
                
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
                    "3.1-preview.1",
                    "Location",
                    "d810a47d-f4f4-4a62-a03f-fa1860585c4c",
                    routeValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.update(url, apiVersion, serviceDefinitions, null);
                let serializationData = {  responseIsCollection: false };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(null);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

}
