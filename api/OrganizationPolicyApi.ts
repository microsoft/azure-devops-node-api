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
import OrganizationPolicyInterfaces = require("./interfaces/OrganizationPolicyInterfaces");
import VSSInterfaces = require("./interfaces/common/VSSInterfaces");

export interface IOrganizationPolicyApi extends basem.ClientApiBase {
    getPolicy(policyName: string, defaultValue: string): Promise<OrganizationPolicyInterfaces.Policy>;
    updatePolicy(customHeaders: any, patchDocument: VSSInterfaces.JsonPatchDocument, policyName: string): Promise<void>;
    getPolicies(policyNames: string[], defaultValues: string[]): Promise<{ [key: string] : OrganizationPolicyInterfaces.Policy; }>;
    getPolicyInformation(policyName: string): Promise<OrganizationPolicyInterfaces.PolicyInfo>;
    getPolicyInformations(policyNames?: string[]): Promise<{ [key: string] : OrganizationPolicyInterfaces.PolicyInfo; }>;
}

export class OrganizationPolicyApi extends basem.ClientApiBase implements IOrganizationPolicyApi {
    constructor(baseUrl: string, handlers: VsoBaseInterfaces.IRequestHandler[]) {
        super(baseUrl, handlers, 'node-OrganizationPolicy-api');
    }

    /**
    * @param {string} policyName
    * @param {string} defaultValue
    */
    public async getPolicy(
        policyName: string,
        defaultValue: string
        ): Promise<OrganizationPolicyInterfaces.Policy> {

        return new Promise<OrganizationPolicyInterfaces.Policy>(async (resolve, reject) => {
            let routeValues: any = {
                policyName: policyName
            };

            let queryValues: any = {
                defaultValue: defaultValue,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "OrganizationPolicy",
                    "d0ab077b-1b97-4f78-984c-cfe2d248fc79",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<OrganizationPolicyInterfaces.Policy>;
                res = await this.rest.get<OrganizationPolicyInterfaces.Policy>(url, options);

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
    * @param {VSSInterfaces.JsonPatchDocument} patchDocument
    * @param {string} policyName
    */
    public async updatePolicy(
        customHeaders: any,
        patchDocument: VSSInterfaces.JsonPatchDocument,
        policyName: string
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
                policyName: policyName
            };

            customHeaders = customHeaders || {};
            customHeaders["Content-Type"] = "application/json-patch+json";

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "OrganizationPolicy",
                    "d0ab077b-1b97-4f78-984c-cfe2d248fc79",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<void>;
                res = await this.rest.update<void>(url, patchDocument, options);

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
    * @param {string[]} policyNames
    * @param {string[]} defaultValues
    */
    public async getPolicies(
        policyNames: string[],
        defaultValues: string[]
        ): Promise<{ [key: string] : OrganizationPolicyInterfaces.Policy; }> {

        return new Promise<{ [key: string] : OrganizationPolicyInterfaces.Policy; }>(async (resolve, reject) => {
            let routeValues: any = {
            };

            let queryValues: any = {
                policyNames: policyNames && policyNames.join(","),
                defaultValues: defaultValues && defaultValues.join(","),
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "OrganizationPolicy",
                    "7ef423e0-59d8-4c00-b951-7143b18bd97b",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<{ [key: string] : OrganizationPolicyInterfaces.Policy; }>;
                res = await this.rest.get<{ [key: string] : OrganizationPolicyInterfaces.Policy; }>(url, options);

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
    * @param {string} policyName
    */
    public async getPolicyInformation(
        policyName: string
        ): Promise<OrganizationPolicyInterfaces.PolicyInfo> {

        return new Promise<OrganizationPolicyInterfaces.PolicyInfo>(async (resolve, reject) => {
            let routeValues: any = {
                policyName: policyName
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "OrganizationPolicy",
                    "222af71b-7280-4a95-80e4-dcb0deeac834",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<OrganizationPolicyInterfaces.PolicyInfo>;
                res = await this.rest.get<OrganizationPolicyInterfaces.PolicyInfo>(url, options);

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
    * @param {string[]} policyNames
    */
    public async getPolicyInformations(
        policyNames?: string[]
        ): Promise<{ [key: string] : OrganizationPolicyInterfaces.PolicyInfo; }> {

        return new Promise<{ [key: string] : OrganizationPolicyInterfaces.PolicyInfo; }>(async (resolve, reject) => {
            let routeValues: any = {
            };

            let queryValues: any = {
                policyNames: policyNames && policyNames.join(","),
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "OrganizationPolicy",
                    "222af71b-7280-4a95-80e4-dcb0deeac834",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<{ [key: string] : OrganizationPolicyInterfaces.PolicyInfo; }>;
                res = await this.rest.get<{ [key: string] : OrganizationPolicyInterfaces.PolicyInfo; }>(url, options);

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

}
