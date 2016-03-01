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

/// <reference path="../node/node.d.ts"/>
/// <reference path="../q/Q.d.ts"/>

import Q = require('q');
import restm = require('./RestClient');
import httpm = require('./HttpClient');
import vsom = require('./VsoClient');
import basem = require('./ClientApiBases');
import VsoBaseInterfaces = require('./interfaces/common/VsoBaseInterfaces');
import LocationsInterfaces = require("./interfaces/LocationsInterfaces");
import VSSInterfaces = require("./interfaces/common/VSSInterfaces");

export interface ILocationsApi extends basem.ClientApiBase {
    getConnectionData(connectOptions: VSSInterfaces.ConnectOptions, lastChangeId: number, lastChangeId64: number, onResult: (err: any, statusCode: number, ConnectionData: LocationsInterfaces.ConnectionData) => void): void;
    deleteServiceDefinition(serviceType: string, identifier: string, onResult: (err: any, statusCode: number) => void): void;
    getServiceDefinition(serviceType: string, identifier: string, onResult: (err: any, statusCode: number, ServiceDefinition: LocationsInterfaces.ServiceDefinition) => void): void;
    getServiceDefinitions(serviceType: string, onResult: (err: any, statusCode: number, ServiceDefinitions: LocationsInterfaces.ServiceDefinition[]) => void): void;
    updateServiceDefinitions(serviceDefinitions: VSSInterfaces.VssJsonCollectionWrapperV<LocationsInterfaces.ServiceDefinition[]>, onResult: (err: any, statusCode: number) => void): void;
}

export interface IQLocationsApi extends basem.QClientApiBase {
    getConnectionData(connectOptions?: VSSInterfaces.ConnectOptions, lastChangeId?: number, lastChangeId64?: number): Q.Promise<LocationsInterfaces.ConnectionData>;
    deleteServiceDefinition(serviceType: string, identifier: string): Q.Promise<void>;
    getServiceDefinition(serviceType: string, identifier: string): Q.Promise<LocationsInterfaces.ServiceDefinition>;
    getServiceDefinitions(serviceType?: string): Q.Promise<LocationsInterfaces.ServiceDefinition[]>;
    updateServiceDefinitions(serviceDefinitions: VSSInterfaces.VssJsonCollectionWrapperV<LocationsInterfaces.ServiceDefinition[]>): Q.Promise<void>;
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
     * @param onResult callback function with the resulting LocationsInterfaces.ConnectionData
     */
    public getConnectionData(
        connectOptions: VSSInterfaces.ConnectOptions,
        lastChangeId: number,
        lastChangeId64: number,
        onResult: (err: any, statusCode: number, ConnectionData: LocationsInterfaces.ConnectionData) => void
        ): void {

        var routeValues: any = {
        };

        var queryValues: any = {
            connectOptions: connectOptions,
            lastChangeId: lastChangeId,
            lastChangeId64: lastChangeId64,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.1", "Location", "00d9565f-ed9c-4a06-9a50-00e7896ccab4", routeValues, queryValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseTypeMetadata: LocationsInterfaces.TypeInfo.ConnectionData, responseIsCollection: false };
            
            this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * @param {string} serviceType
     * @param {string} identifier
     * @param onResult callback function
     */
    public deleteServiceDefinition(
        serviceType: string,
        identifier: string,
        onResult: (err: any, statusCode: number) => void
        ): void {

        var routeValues: any = {
            serviceType: serviceType,
            identifier: identifier
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "Location", "d810a47d-f4f4-4a62-a03f-fa1860585c4c", routeValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseIsCollection: false };
            
            this.restClient.delete(url, apiVersion, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode);
        });
    }

    /**
     * @param {string} serviceType
     * @param {string} identifier
     * @param onResult callback function with the resulting LocationsInterfaces.ServiceDefinition
     */
    public getServiceDefinition(
        serviceType: string,
        identifier: string,
        onResult: (err: any, statusCode: number, ServiceDefinition: LocationsInterfaces.ServiceDefinition) => void
        ): void {

        var routeValues: any = {
            serviceType: serviceType,
            identifier: identifier
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "Location", "d810a47d-f4f4-4a62-a03f-fa1860585c4c", routeValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseTypeMetadata: LocationsInterfaces.TypeInfo.ServiceDefinition, responseIsCollection: false };
            
            this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * @param {string} serviceType
     * @param onResult callback function with the resulting LocationsInterfaces.ServiceDefinition[]
     */
    public getServiceDefinitions(
        serviceType: string,
        onResult: (err: any, statusCode: number, ServiceDefinitions: LocationsInterfaces.ServiceDefinition[]) => void
        ): void {

        var routeValues: any = {
            serviceType: serviceType
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "Location", "d810a47d-f4f4-4a62-a03f-fa1860585c4c", routeValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseTypeMetadata: LocationsInterfaces.TypeInfo.ServiceDefinition, responseIsCollection: true };
            
            this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * @param {VSSInterfaces.VssJsonCollectionWrapperV<LocationsInterfaces.ServiceDefinition[]>} serviceDefinitions
     * @param onResult callback function
     */
    public updateServiceDefinitions(
        serviceDefinitions: VSSInterfaces.VssJsonCollectionWrapperV<LocationsInterfaces.ServiceDefinition[]>,
        onResult: (err: any, statusCode: number) => void
        ): void {

        var routeValues: any = {
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "Location", "d810a47d-f4f4-4a62-a03f-fa1860585c4c", routeValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = { requestTypeMetadata: VSSInterfaces.TypeInfo.VssJsonCollectionWrapperV, responseIsCollection: false };
            
            this.restClient.update(url, apiVersion, serviceDefinitions, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode);
        });
    }

}

export class QLocationsApi extends basem.QClientApiBase implements IQLocationsApi {
    api: LocationsApi;

    constructor(baseUrl: string, handlers: VsoBaseInterfaces.IRequestHandler[]) {
        super(baseUrl, handlers, LocationsApi);
    }

    /**
    * This was copied and adapted from TeamFoundationConnectionService.Connect()
    * 
    * @param {VSSInterfaces.ConnectOptions} connectOptions
    * @param {number} lastChangeId - Obsolete 32-bit LastChangeId
    * @param {number} lastChangeId64 - Non-truncated 64-bit LastChangeId
    */
    public getConnectionData(
        connectOptions?: VSSInterfaces.ConnectOptions,
        lastChangeId?: number,
        lastChangeId64?: number
        ): Q.Promise<LocationsInterfaces.ConnectionData> {
    
        var deferred = Q.defer<LocationsInterfaces.ConnectionData>();

        this.api.getConnectionData(connectOptions, lastChangeId, lastChangeId64, (err: any, statusCode: number, ConnectionData: LocationsInterfaces.ConnectionData) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(ConnectionData);
            }
        });

        return <Q.Promise<LocationsInterfaces.ConnectionData>>deferred.promise;
    }

    /**
    * @param {string} serviceType
    * @param {string} identifier
    */
    public deleteServiceDefinition(
        serviceType: string,
        identifier: string
        ): Q.Promise<void> {
    
        var deferred = Q.defer<void>();

        this.api.deleteServiceDefinition(serviceType, identifier, (err: any, statusCode: number) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(null);
            }
        });

        return <Q.Promise<void>>deferred.promise;
    }

    /**
    * @param {string} serviceType
    * @param {string} identifier
    */
    public getServiceDefinition(
        serviceType: string,
        identifier: string
        ): Q.Promise<LocationsInterfaces.ServiceDefinition> {
    
        var deferred = Q.defer<LocationsInterfaces.ServiceDefinition>();

        this.api.getServiceDefinition(serviceType, identifier, (err: any, statusCode: number, ServiceDefinition: LocationsInterfaces.ServiceDefinition) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(ServiceDefinition);
            }
        });

        return <Q.Promise<LocationsInterfaces.ServiceDefinition>>deferred.promise;
    }

    /**
    * @param {string} serviceType
    */
    public getServiceDefinitions(
        serviceType?: string
        ): Q.Promise<LocationsInterfaces.ServiceDefinition[]> {
    
        var deferred = Q.defer<LocationsInterfaces.ServiceDefinition[]>();

        this.api.getServiceDefinitions(serviceType, (err: any, statusCode: number, ServiceDefinitions: LocationsInterfaces.ServiceDefinition[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(ServiceDefinitions);
            }
        });

        return <Q.Promise<LocationsInterfaces.ServiceDefinition[]>>deferred.promise;
    }

    /**
    * @param {VSSInterfaces.VssJsonCollectionWrapperV<LocationsInterfaces.ServiceDefinition[]>} serviceDefinitions
    */
    public updateServiceDefinitions(
        serviceDefinitions: VSSInterfaces.VssJsonCollectionWrapperV<LocationsInterfaces.ServiceDefinition[]>
        ): Q.Promise<void> {
    
        var deferred = Q.defer<void>();

        this.api.updateServiceDefinitions(serviceDefinitions, (err: any, statusCode: number) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(null);
            }
        });

        return <Q.Promise<void>>deferred.promise;
    }

}
