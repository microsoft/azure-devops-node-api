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
import FeatureManagementInterfaces = require("./interfaces/FeatureManagementInterfaces");

export interface IFeatureManagementApi extends basem.ClientApiBase {
    getFeature(featureId: string): Promise<FeatureManagementInterfaces.ContributedFeature>;
    getFeatures(targetContributionId?: string): Promise<FeatureManagementInterfaces.ContributedFeature[]>;
    getFeatureState(featureId: string, userScope: string): Promise<FeatureManagementInterfaces.ContributedFeatureState>;
    setFeatureState(feature: FeatureManagementInterfaces.ContributedFeatureState, featureId: string, userScope: string, reason?: string, reasonCode?: string): Promise<FeatureManagementInterfaces.ContributedFeatureState>;
    getFeatureStateForScope(featureId: string, userScope: string, scopeName: string, scopeValue: string): Promise<FeatureManagementInterfaces.ContributedFeatureState>;
    setFeatureStateForScope(feature: FeatureManagementInterfaces.ContributedFeatureState, featureId: string, userScope: string, scopeName: string, scopeValue: string, reason?: string, reasonCode?: string): Promise<FeatureManagementInterfaces.ContributedFeatureState>;
    queryFeatureStates(query: FeatureManagementInterfaces.ContributedFeatureStateQuery): Promise<FeatureManagementInterfaces.ContributedFeatureStateQuery>;
    queryFeatureStatesForDefaultScope(query: FeatureManagementInterfaces.ContributedFeatureStateQuery, userScope: string): Promise<FeatureManagementInterfaces.ContributedFeatureStateQuery>;
    queryFeatureStatesForNamedScope(query: FeatureManagementInterfaces.ContributedFeatureStateQuery, userScope: string, scopeName: string, scopeValue: string): Promise<FeatureManagementInterfaces.ContributedFeatureStateQuery>;
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
    public async getFeature(
        featureId: string
        ): Promise<FeatureManagementInterfaces.ContributedFeature> {

        return new Promise<FeatureManagementInterfaces.ContributedFeature>(async (resolve, reject) => {
            let routeValues: any = {
                featureId: featureId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "FeatureManagement",
                    "c4209f25-7a27-41dd-9f04-06080c7b6afd",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<FeatureManagementInterfaces.ContributedFeature>;
                res = await this.rest.get<FeatureManagementInterfaces.ContributedFeature>(url, options);

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
    * Get a list of all defined features
    * 
    * @param {string} targetContributionId - Optional target contribution. If null/empty, return all features. If specified include the features that target the specified contribution.
    */
    public async getFeatures(
        targetContributionId?: string
        ): Promise<FeatureManagementInterfaces.ContributedFeature[]> {

        return new Promise<FeatureManagementInterfaces.ContributedFeature[]>(async (resolve, reject) => {
            let routeValues: any = {
            };

            let queryValues: any = {
                targetContributionId: targetContributionId,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "FeatureManagement",
                    "c4209f25-7a27-41dd-9f04-06080c7b6afd",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<FeatureManagementInterfaces.ContributedFeature[]>;
                res = await this.rest.get<FeatureManagementInterfaces.ContributedFeature[]>(url, options);

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
    * Get the state of the specified feature for the given user/all-users scope
    * 
    * @param {string} featureId - Contribution id of the feature
    * @param {string} userScope - User-Scope at which to get the value. Should be "me" for the current user or "host" for all users.
    */
    public async getFeatureState(
        featureId: string,
        userScope: string
        ): Promise<FeatureManagementInterfaces.ContributedFeatureState> {

        return new Promise<FeatureManagementInterfaces.ContributedFeatureState>(async (resolve, reject) => {
            let routeValues: any = {
                featureId: featureId,
                userScope: userScope
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "FeatureManagement",
                    "98911314-3f9b-4eaf-80e8-83900d8e85d9",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<FeatureManagementInterfaces.ContributedFeatureState>;
                res = await this.rest.get<FeatureManagementInterfaces.ContributedFeatureState>(url, options);

                let ret = this.formatResponse(res.result,
                                              FeatureManagementInterfaces.TypeInfo.ContributedFeatureState,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
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
    public async setFeatureState(
        feature: FeatureManagementInterfaces.ContributedFeatureState,
        featureId: string,
        userScope: string,
        reason?: string,
        reasonCode?: string
        ): Promise<FeatureManagementInterfaces.ContributedFeatureState> {

        return new Promise<FeatureManagementInterfaces.ContributedFeatureState>(async (resolve, reject) => {
            let routeValues: any = {
                featureId: featureId,
                userScope: userScope
            };

            let queryValues: any = {
                reason: reason,
                reasonCode: reasonCode,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "FeatureManagement",
                    "98911314-3f9b-4eaf-80e8-83900d8e85d9",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<FeatureManagementInterfaces.ContributedFeatureState>;
                res = await this.rest.update<FeatureManagementInterfaces.ContributedFeatureState>(url, feature, options);

                let ret = this.formatResponse(res.result,
                                              FeatureManagementInterfaces.TypeInfo.ContributedFeatureState,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * Get the state of the specified feature for the given named scope
    * 
    * @param {string} featureId - Contribution id of the feature
    * @param {string} userScope - User-Scope at which to get the value. Should be "me" for the current user or "host" for all users.
    * @param {string} scopeName - Scope at which to get the feature setting for (e.g. "project" or "team")
    * @param {string} scopeValue - Value of the scope (e.g. the project or team id)
    */
    public async getFeatureStateForScope(
        featureId: string,
        userScope: string,
        scopeName: string,
        scopeValue: string
        ): Promise<FeatureManagementInterfaces.ContributedFeatureState> {

        return new Promise<FeatureManagementInterfaces.ContributedFeatureState>(async (resolve, reject) => {
            let routeValues: any = {
                featureId: featureId,
                userScope: userScope,
                scopeName: scopeName,
                scopeValue: scopeValue
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "FeatureManagement",
                    "dd291e43-aa9f-4cee-8465-a93c78e414a4",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<FeatureManagementInterfaces.ContributedFeatureState>;
                res = await this.rest.get<FeatureManagementInterfaces.ContributedFeatureState>(url, options);

                let ret = this.formatResponse(res.result,
                                              FeatureManagementInterfaces.TypeInfo.ContributedFeatureState,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
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
    public async setFeatureStateForScope(
        feature: FeatureManagementInterfaces.ContributedFeatureState,
        featureId: string,
        userScope: string,
        scopeName: string,
        scopeValue: string,
        reason?: string,
        reasonCode?: string
        ): Promise<FeatureManagementInterfaces.ContributedFeatureState> {

        return new Promise<FeatureManagementInterfaces.ContributedFeatureState>(async (resolve, reject) => {
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
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "FeatureManagement",
                    "dd291e43-aa9f-4cee-8465-a93c78e414a4",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<FeatureManagementInterfaces.ContributedFeatureState>;
                res = await this.rest.update<FeatureManagementInterfaces.ContributedFeatureState>(url, feature, options);

                let ret = this.formatResponse(res.result,
                                              FeatureManagementInterfaces.TypeInfo.ContributedFeatureState,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * Get the effective state for a list of feature ids
    * 
    * @param {FeatureManagementInterfaces.ContributedFeatureStateQuery} query - Features to query along with current scope values
    */
    public async queryFeatureStates(
        query: FeatureManagementInterfaces.ContributedFeatureStateQuery
        ): Promise<FeatureManagementInterfaces.ContributedFeatureStateQuery> {

        return new Promise<FeatureManagementInterfaces.ContributedFeatureStateQuery>(async (resolve, reject) => {
            let routeValues: any = {
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "FeatureManagement",
                    "2b4486ad-122b-400c-ae65-17b6672c1f9d",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<FeatureManagementInterfaces.ContributedFeatureStateQuery>;
                res = await this.rest.create<FeatureManagementInterfaces.ContributedFeatureStateQuery>(url, query, options);

                let ret = this.formatResponse(res.result,
                                              FeatureManagementInterfaces.TypeInfo.ContributedFeatureStateQuery,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * Get the states of the specified features for the default scope
    * 
    * @param {FeatureManagementInterfaces.ContributedFeatureStateQuery} query - Query describing the features to query.
    * @param {string} userScope
    */
    public async queryFeatureStatesForDefaultScope(
        query: FeatureManagementInterfaces.ContributedFeatureStateQuery,
        userScope: string
        ): Promise<FeatureManagementInterfaces.ContributedFeatureStateQuery> {

        return new Promise<FeatureManagementInterfaces.ContributedFeatureStateQuery>(async (resolve, reject) => {
            let routeValues: any = {
                userScope: userScope
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "FeatureManagement",
                    "3f810f28-03e2-4239-b0bc-788add3005e5",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<FeatureManagementInterfaces.ContributedFeatureStateQuery>;
                res = await this.rest.create<FeatureManagementInterfaces.ContributedFeatureStateQuery>(url, query, options);

                let ret = this.formatResponse(res.result,
                                              FeatureManagementInterfaces.TypeInfo.ContributedFeatureStateQuery,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * Get the states of the specified features for the specific named scope
    * 
    * @param {FeatureManagementInterfaces.ContributedFeatureStateQuery} query - Query describing the features to query.
    * @param {string} userScope
    * @param {string} scopeName
    * @param {string} scopeValue
    */
    public async queryFeatureStatesForNamedScope(
        query: FeatureManagementInterfaces.ContributedFeatureStateQuery,
        userScope: string,
        scopeName: string,
        scopeValue: string
        ): Promise<FeatureManagementInterfaces.ContributedFeatureStateQuery> {

        return new Promise<FeatureManagementInterfaces.ContributedFeatureStateQuery>(async (resolve, reject) => {
            let routeValues: any = {
                userScope: userScope,
                scopeName: scopeName,
                scopeValue: scopeValue
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "FeatureManagement",
                    "f29e997b-c2da-4d15-8380-765788a1a74c",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<FeatureManagementInterfaces.ContributedFeatureStateQuery>;
                res = await this.rest.create<FeatureManagementInterfaces.ContributedFeatureStateQuery>(url, query, options);

                let ret = this.formatResponse(res.result,
                                              FeatureManagementInterfaces.TypeInfo.ContributedFeatureStateQuery,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

}
