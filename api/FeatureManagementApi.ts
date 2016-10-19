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


import Q = require('q');
import restm = require('./RestClient');
import httpm = require('./HttpClient');
import vsom = require('./VsoClient');
import basem = require('./ClientApiBases');
import VsoBaseInterfaces = require('./interfaces/common/VsoBaseInterfaces');
import FeatureManagementInterfaces = require("./interfaces/FeatureManagementInterfaces");

export interface IFeatureManagementApi extends basem.ClientApiBase {
    getFeature(featureId: string): Promise<FeatureManagementInterfaces.ContributedFeature>;
    getFeatures(): Promise<FeatureManagementInterfaces.ContributedFeature[]>;
    getFeatureState(featureId: string, userScope: string): Promise<FeatureManagementInterfaces.ContributedFeatureState>;
    setFeatureState(feature: FeatureManagementInterfaces.ContributedFeatureState, featureId: string, userScope: string, reason?: string, reasonCode?: string): Promise<FeatureManagementInterfaces.ContributedFeatureState>;
    getFeatureStateForScope(featureId: string, userScope: string, scopeName: string, scopeValue: string): Promise<FeatureManagementInterfaces.ContributedFeatureState>;
    setFeatureStateForScope(feature: FeatureManagementInterfaces.ContributedFeatureState, featureId: string, userScope: string, scopeName: string, scopeValue: string, reason?: string, reasonCode?: string): Promise<FeatureManagementInterfaces.ContributedFeatureState>;
}

export class FeatureManagementApi extends basem.ClientApiBase implements IFeatureManagementApi {
    constructor(baseUrl: string, handlers: VsoBaseInterfaces.IRequestHandler[]) {
        super(baseUrl, handlers, 'node-FeatureManagement-api');
    }

    /**
    * Get a specific feature by its id
    * 
    * @param {string} featureId - The contribution id of the feature
    */
    public getFeature(
        featureId: string
        ): Promise<FeatureManagementInterfaces.ContributedFeature> {
    
        let deferred = Q.defer<FeatureManagementInterfaces.ContributedFeature>();

        let onResult = (err: any, statusCode: number, Feature: FeatureManagementInterfaces.ContributedFeature) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(Feature);
            }
        };

        let routeValues: any = {
            featureId: featureId
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "FeatureManagement", "c4209f25-7a27-41dd-9f04-06080c7b6afd", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = {  responseIsCollection: false };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
    }

    /**
    */
    public getFeatures(
        ): Promise<FeatureManagementInterfaces.ContributedFeature[]> {
    
        let deferred = Q.defer<FeatureManagementInterfaces.ContributedFeature[]>();

        let onResult = (err: any, statusCode: number, Features: FeatureManagementInterfaces.ContributedFeature[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(Features);
            }
        };

        let routeValues: any = {
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "FeatureManagement", "c4209f25-7a27-41dd-9f04-06080c7b6afd", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = {  responseIsCollection: true };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
    }

    /**
    * Get the state of the specified feature for the given user/all-users scope
    * 
    * @param {string} featureId - Contribution id of the feature
    * @param {string} userScope - User-Scope at which to get the value. Should be "me" for the current user or "host" for all users.
    */
    public getFeatureState(
        featureId: string,
        userScope: string
        ): Promise<FeatureManagementInterfaces.ContributedFeatureState> {
    
        let deferred = Q.defer<FeatureManagementInterfaces.ContributedFeatureState>();

        let onResult = (err: any, statusCode: number, FeatureState: FeatureManagementInterfaces.ContributedFeatureState) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(FeatureState);
            }
        };

        let routeValues: any = {
            featureId: featureId,
            userScope: userScope
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "FeatureManagement", "98911314-3f9b-4eaf-80e8-83900d8e85d9", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = {  responseTypeMetadata: FeatureManagementInterfaces.TypeInfo.ContributedFeatureState, responseIsCollection: false };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
    }

    /**
    * Set the state of a feature
    * 
    * @param {FeatureManagementInterfaces.ContributedFeatureState} feature - Posted feature state object. Should specify the effective value.
    * @param {string} featureId - Contribution id of the feature
    * @param {string} userScope - User-Scope at which to set the value. Should be "me" for the current user or "host" for all users.
    * @param {string} reason - Reason for changing the state
    * @param {string} reasonCode - Short reason code
    */
    public setFeatureState(
        feature: FeatureManagementInterfaces.ContributedFeatureState,
        featureId: string,
        userScope: string,
        reason?: string,
        reasonCode?: string
        ): Promise<FeatureManagementInterfaces.ContributedFeatureState> {
    
        let deferred = Q.defer<FeatureManagementInterfaces.ContributedFeatureState>();

        let onResult = (err: any, statusCode: number, FeatureState: FeatureManagementInterfaces.ContributedFeatureState) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(FeatureState);
            }
        };

        let routeValues: any = {
            featureId: featureId,
            userScope: userScope
        };

        let queryValues: any = {
            reason: reason,
            reasonCode: reasonCode,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.1", "FeatureManagement", "98911314-3f9b-4eaf-80e8-83900d8e85d9", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = { requestTypeMetadata: FeatureManagementInterfaces.TypeInfo.ContributedFeatureState, responseTypeMetadata: FeatureManagementInterfaces.TypeInfo.ContributedFeatureState, responseIsCollection: false };
                
                this.restClient.update(url, apiVersion, feature, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
    }

    /**
    * Get the state of the specified feature for the given named scope
    * 
    * @param {string} featureId - Contribution id of the feature
    * @param {string} userScope - User-Scope at which to get the value. Should be "me" for the current user or "host" for all users.
    * @param {string} scopeName - Scope at which to get the feature setting for (e.g. "project" or "team")
    * @param {string} scopeValue - Value of the scope (e.g. the project or team id)
    */
    public getFeatureStateForScope(
        featureId: string,
        userScope: string,
        scopeName: string,
        scopeValue: string
        ): Promise<FeatureManagementInterfaces.ContributedFeatureState> {
    
        let deferred = Q.defer<FeatureManagementInterfaces.ContributedFeatureState>();

        let onResult = (err: any, statusCode: number, FeatureState: FeatureManagementInterfaces.ContributedFeatureState) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(FeatureState);
            }
        };

        let routeValues: any = {
            featureId: featureId,
            userScope: userScope,
            scopeName: scopeName,
            scopeValue: scopeValue
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "FeatureManagement", "dd291e43-aa9f-4cee-8465-a93c78e414a4", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = {  responseTypeMetadata: FeatureManagementInterfaces.TypeInfo.ContributedFeatureState, responseIsCollection: false };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
    }

    /**
    * Set the state of a feature at a specific scope
    * 
    * @param {FeatureManagementInterfaces.ContributedFeatureState} feature - Posted feature state object. Should specify the effective value.
    * @param {string} featureId - Contribution id of the feature
    * @param {string} userScope - User-Scope at which to set the value. Should be "me" for the current user or "host" for all users.
    * @param {string} scopeName - Scope at which to get the feature setting for (e.g. "project" or "team")
    * @param {string} scopeValue - Value of the scope (e.g. the project or team id)
    * @param {string} reason - Reason for changing the state
    * @param {string} reasonCode - Short reason code
    */
    public setFeatureStateForScope(
        feature: FeatureManagementInterfaces.ContributedFeatureState,
        featureId: string,
        userScope: string,
        scopeName: string,
        scopeValue: string,
        reason?: string,
        reasonCode?: string
        ): Promise<FeatureManagementInterfaces.ContributedFeatureState> {
    
        let deferred = Q.defer<FeatureManagementInterfaces.ContributedFeatureState>();

        let onResult = (err: any, statusCode: number, FeatureState: FeatureManagementInterfaces.ContributedFeatureState) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(FeatureState);
            }
        };

        let routeValues: any = {
            featureId: featureId,
            userScope: userScope,
            scopeName: scopeName,
            scopeValue: scopeValue
        };

        let queryValues: any = {
            reason: reason,
            reasonCode: reasonCode,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.1", "FeatureManagement", "dd291e43-aa9f-4cee-8465-a93c78e414a4", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = { requestTypeMetadata: FeatureManagementInterfaces.TypeInfo.ContributedFeatureState, responseTypeMetadata: FeatureManagementInterfaces.TypeInfo.ContributedFeatureState, responseIsCollection: false };
                
                this.restClient.update(url, apiVersion, feature, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
    }

}
