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
import FeatureAvailabilityInterfaces = require("./interfaces/FeatureAvailabilityInterfaces");

export interface IFeatureAvailabilityApi extends basem.ClientApiBase {
    getAllFeatureFlags(userEmail?: string): Promise<FeatureAvailabilityInterfaces.FeatureFlag[]>;
    getFeatureFlagByName(name: string): Promise<FeatureAvailabilityInterfaces.FeatureFlag>;
    getFeatureFlagByNameAndUserEmail(name: string, userEmail: string): Promise<FeatureAvailabilityInterfaces.FeatureFlag>;
    getFeatureFlagByNameAndUserId(name: string, userId: string): Promise<FeatureAvailabilityInterfaces.FeatureFlag>;
    updateFeatureFlag(state: FeatureAvailabilityInterfaces.FeatureFlagPatch, name: string, userEmail?: string, checkFeatureExists?: boolean, setAtApplicationLevelAlso?: boolean): Promise<FeatureAvailabilityInterfaces.FeatureFlag>;
}

export class FeatureAvailabilityApi extends basem.ClientApiBase implements IFeatureAvailabilityApi {
    constructor(baseUrl: string, handlers: VsoBaseInterfaces.IRequestHandler[]) {
        super(baseUrl, handlers, 'node-FeatureAvailability-api');
    }

    /**
    * Retrieve a listing of all feature flags and their current states for a user
    * 
    * @param {string} userEmail - The email of the user to check
    */
    public async getAllFeatureFlags(
        userEmail?: string
        ): Promise<FeatureAvailabilityInterfaces.FeatureFlag[]> {

        return new Promise<FeatureAvailabilityInterfaces.FeatureFlag[]>(async (resolve, reject) => {
            let routeValues: any = {
            };

            let queryValues: any = {
                userEmail: userEmail,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "FeatureAvailability",
                    "3e2b80f8-9e6f-441e-8393-005610692d9c",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<FeatureAvailabilityInterfaces.FeatureFlag[]>;
                res = await this.rest.get<FeatureAvailabilityInterfaces.FeatureFlag[]>(url, options);

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
    * Retrieve information on a single feature flag and its current states
    * 
    * @param {string} name - The name of the feature to retrieve
    */
    public async getFeatureFlagByName(
        name: string
        ): Promise<FeatureAvailabilityInterfaces.FeatureFlag> {

        return new Promise<FeatureAvailabilityInterfaces.FeatureFlag>(async (resolve, reject) => {
            let routeValues: any = {
                name: name
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "FeatureAvailability",
                    "3e2b80f8-9e6f-441e-8393-005610692d9c",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<FeatureAvailabilityInterfaces.FeatureFlag>;
                res = await this.rest.get<FeatureAvailabilityInterfaces.FeatureFlag>(url, options);

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
    * Retrieve information on a single feature flag and its current states for a user
    * 
    * @param {string} name - The name of the feature to retrieve
    * @param {string} userEmail - The email of the user to check
    */
    public async getFeatureFlagByNameAndUserEmail(
        name: string,
        userEmail: string
        ): Promise<FeatureAvailabilityInterfaces.FeatureFlag> {

        return new Promise<FeatureAvailabilityInterfaces.FeatureFlag>(async (resolve, reject) => {
            let routeValues: any = {
                name: name
            };

            let queryValues: any = {
                userEmail: userEmail,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "FeatureAvailability",
                    "3e2b80f8-9e6f-441e-8393-005610692d9c",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<FeatureAvailabilityInterfaces.FeatureFlag>;
                res = await this.rest.get<FeatureAvailabilityInterfaces.FeatureFlag>(url, options);

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
    * Retrieve information on a single feature flag and its current states for a user
    * 
    * @param {string} name - The name of the feature to retrieve
    * @param {string} userId - The id of the user to check
    */
    public async getFeatureFlagByNameAndUserId(
        name: string,
        userId: string
        ): Promise<FeatureAvailabilityInterfaces.FeatureFlag> {

        return new Promise<FeatureAvailabilityInterfaces.FeatureFlag>(async (resolve, reject) => {
            let routeValues: any = {
                name: name
            };

            let queryValues: any = {
                userId: userId,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "FeatureAvailability",
                    "3e2b80f8-9e6f-441e-8393-005610692d9c",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<FeatureAvailabilityInterfaces.FeatureFlag>;
                res = await this.rest.get<FeatureAvailabilityInterfaces.FeatureFlag>(url, options);

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
    * Change the state of an individual feature flag for a name
    * 
    * @param {FeatureAvailabilityInterfaces.FeatureFlagPatch} state - State that should be set
    * @param {string} name - The name of the feature to change
    * @param {string} userEmail
    * @param {boolean} checkFeatureExists - Checks if the feature exists before setting the state
    * @param {boolean} setAtApplicationLevelAlso
    */
    public async updateFeatureFlag(
        state: FeatureAvailabilityInterfaces.FeatureFlagPatch,
        name: string,
        userEmail?: string,
        checkFeatureExists?: boolean,
        setAtApplicationLevelAlso?: boolean
        ): Promise<FeatureAvailabilityInterfaces.FeatureFlag> {

        return new Promise<FeatureAvailabilityInterfaces.FeatureFlag>(async (resolve, reject) => {
            let routeValues: any = {
                name: name
            };

            let queryValues: any = {
                userEmail: userEmail,
                checkFeatureExists: checkFeatureExists,
                setAtApplicationLevelAlso: setAtApplicationLevelAlso,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "FeatureAvailability",
                    "3e2b80f8-9e6f-441e-8393-005610692d9c",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<FeatureAvailabilityInterfaces.FeatureFlag>;
                res = await this.rest.update<FeatureAvailabilityInterfaces.FeatureFlag>(url, state, options);

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
