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
import GovernanceInterfaces = require("./interfaces/GovernanceInterfaces");

export interface IGovernanceApi extends basem.ClientApiBase {
    createPolicy(policy: GovernanceInterfaces.Policy, includeUrls?: boolean): Promise<GovernanceInterfaces.Policy>;
    deletePolicy(policyId: string): Promise<void>;
    getPolicies(includeUrls?: boolean): Promise<GovernanceInterfaces.Policy[]>;
    getPolicy(policyId: string, includeUrls?: boolean): Promise<GovernanceInterfaces.Policy>;
    updatePolicy(policy: GovernanceInterfaces.Policy, policyId: string, includeUrls?: boolean): Promise<GovernanceInterfaces.Policy>;
    addPolicyToProduct(policyId: string, productId: string): Promise<string>;
    removePolicyFromProduct(productId: string, policyId: string): Promise<void>;
    createProduct(product: GovernanceInterfaces.Product, includeUrls?: boolean): Promise<GovernanceInterfaces.Product>;
    deleteProduct(productId: string): Promise<void>;
    getProduct(productId: string, includeUrls?: boolean): Promise<GovernanceInterfaces.Product>;
    getProducts(includeUrls?: boolean): Promise<GovernanceInterfaces.Product[]>;
    updateProduct(product: GovernanceInterfaces.Product, productId: string, includeUrls?: boolean): Promise<GovernanceInterfaces.Product>;
    createRegistrationRequests(registrationRequests: GovernanceInterfaces.RegistrationRequest[], productId: string): Promise<GovernanceInterfaces.Registration[]>;
}

export class GovernanceApi extends basem.ClientApiBase implements IGovernanceApi {
    constructor(baseUrl: string, handlers: VsoBaseInterfaces.IRequestHandler[]) {
        super(baseUrl, handlers, 'node-Governance-api');
    }

    /**
    * @param {GovernanceInterfaces.Policy} policy
    * @param {boolean} includeUrls
    */
    public async createPolicy(
        policy: GovernanceInterfaces.Policy,
        includeUrls?: boolean
        ): Promise<GovernanceInterfaces.Policy> {

        return new Promise<GovernanceInterfaces.Policy>(async (resolve, reject) => {
            let routeValues: any = {
            };

            let queryValues: any = {
                includeUrls: includeUrls,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "Governance",
                    "7d772072-15e9-48d6-98f0-4465462607f8",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<GovernanceInterfaces.Policy>;
                res = await this.rest.create<GovernanceInterfaces.Policy>(url, policy, options);

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
    * @param {string} policyId
    */
    public async deletePolicy(
        policyId: string
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
                policyId: policyId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "Governance",
                    "7d772072-15e9-48d6-98f0-4465462607f8",
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
    * @param {boolean} includeUrls
    */
    public async getPolicies(
        includeUrls?: boolean
        ): Promise<GovernanceInterfaces.Policy[]> {

        return new Promise<GovernanceInterfaces.Policy[]>(async (resolve, reject) => {
            let routeValues: any = {
            };

            let queryValues: any = {
                includeUrls: includeUrls,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "Governance",
                    "7d772072-15e9-48d6-98f0-4465462607f8",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<GovernanceInterfaces.Policy[]>;
                res = await this.rest.get<GovernanceInterfaces.Policy[]>(url, options);

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
    * @param {string} policyId
    * @param {boolean} includeUrls
    */
    public async getPolicy(
        policyId: string,
        includeUrls?: boolean
        ): Promise<GovernanceInterfaces.Policy> {

        return new Promise<GovernanceInterfaces.Policy>(async (resolve, reject) => {
            let routeValues: any = {
                policyId: policyId
            };

            let queryValues: any = {
                includeUrls: includeUrls,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "Governance",
                    "7d772072-15e9-48d6-98f0-4465462607f8",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<GovernanceInterfaces.Policy>;
                res = await this.rest.get<GovernanceInterfaces.Policy>(url, options);

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
    * @param {GovernanceInterfaces.Policy} policy
    * @param {string} policyId
    * @param {boolean} includeUrls
    */
    public async updatePolicy(
        policy: GovernanceInterfaces.Policy,
        policyId: string,
        includeUrls?: boolean
        ): Promise<GovernanceInterfaces.Policy> {

        return new Promise<GovernanceInterfaces.Policy>(async (resolve, reject) => {
            let routeValues: any = {
                policyId: policyId
            };

            let queryValues: any = {
                includeUrls: includeUrls,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "Governance",
                    "7d772072-15e9-48d6-98f0-4465462607f8",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<GovernanceInterfaces.Policy>;
                res = await this.rest.update<GovernanceInterfaces.Policy>(url, policy, options);

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
    * @param {string} policyId
    * @param {string} productId
    */
    public async addPolicyToProduct(
        policyId: string,
        productId: string
        ): Promise<string> {

        return new Promise<string>(async (resolve, reject) => {
            let routeValues: any = {
                productId: productId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "Governance",
                    "85f9ab1b-f4e6-43f2-bb51-1dbff1e41786",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<string>;
                res = await this.rest.create<string>(url, policyId, options);

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
    * @param {string} productId
    * @param {string} policyId
    */
    public async removePolicyFromProduct(
        productId: string,
        policyId: string
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
                productId: productId,
                policyId: policyId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "Governance",
                    "85f9ab1b-f4e6-43f2-bb51-1dbff1e41786",
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
    * @param {GovernanceInterfaces.Product} product
    * @param {boolean} includeUrls
    */
    public async createProduct(
        product: GovernanceInterfaces.Product,
        includeUrls?: boolean
        ): Promise<GovernanceInterfaces.Product> {

        return new Promise<GovernanceInterfaces.Product>(async (resolve, reject) => {
            let routeValues: any = {
            };

            let queryValues: any = {
                includeUrls: includeUrls,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "Governance",
                    "3d0ed9e4-20fd-45b9-b7e9-a991ab7d091e",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<GovernanceInterfaces.Product>;
                res = await this.rest.create<GovernanceInterfaces.Product>(url, product, options);

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
    * @param {string} productId
    */
    public async deleteProduct(
        productId: string
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
                productId: productId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "Governance",
                    "3d0ed9e4-20fd-45b9-b7e9-a991ab7d091e",
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
    * @param {string} productId
    * @param {boolean} includeUrls
    */
    public async getProduct(
        productId: string,
        includeUrls?: boolean
        ): Promise<GovernanceInterfaces.Product> {

        return new Promise<GovernanceInterfaces.Product>(async (resolve, reject) => {
            let routeValues: any = {
                productId: productId
            };

            let queryValues: any = {
                includeUrls: includeUrls,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "Governance",
                    "3d0ed9e4-20fd-45b9-b7e9-a991ab7d091e",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<GovernanceInterfaces.Product>;
                res = await this.rest.get<GovernanceInterfaces.Product>(url, options);

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
    * @param {boolean} includeUrls
    */
    public async getProducts(
        includeUrls?: boolean
        ): Promise<GovernanceInterfaces.Product[]> {

        return new Promise<GovernanceInterfaces.Product[]>(async (resolve, reject) => {
            let routeValues: any = {
            };

            let queryValues: any = {
                includeUrls: includeUrls,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "Governance",
                    "3d0ed9e4-20fd-45b9-b7e9-a991ab7d091e",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<GovernanceInterfaces.Product[]>;
                res = await this.rest.get<GovernanceInterfaces.Product[]>(url, options);

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
    * @param {GovernanceInterfaces.Product} product
    * @param {string} productId
    * @param {boolean} includeUrls
    */
    public async updateProduct(
        product: GovernanceInterfaces.Product,
        productId: string,
        includeUrls?: boolean
        ): Promise<GovernanceInterfaces.Product> {

        return new Promise<GovernanceInterfaces.Product>(async (resolve, reject) => {
            let routeValues: any = {
                productId: productId
            };

            let queryValues: any = {
                includeUrls: includeUrls,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "Governance",
                    "3d0ed9e4-20fd-45b9-b7e9-a991ab7d091e",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<GovernanceInterfaces.Product>;
                res = await this.rest.update<GovernanceInterfaces.Product>(url, product, options);

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
    * @param {GovernanceInterfaces.RegistrationRequest[]} registrationRequests
    * @param {string} productId
    */
    public async createRegistrationRequests(
        registrationRequests: GovernanceInterfaces.RegistrationRequest[],
        productId: string
        ): Promise<GovernanceInterfaces.Registration[]> {

        return new Promise<GovernanceInterfaces.Registration[]>(async (resolve, reject) => {
            let routeValues: any = {
                productId: productId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "Governance",
                    "4968fe48-e1a4-4e8c-b251-65ab65fd1d36",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<GovernanceInterfaces.Registration[]>;
                res = await this.rest.create<GovernanceInterfaces.Registration[]>(url, registrationRequests, options);

                let ret = this.formatResponse(res.result,
                                              GovernanceInterfaces.TypeInfo.Registration,
                                              true);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

}
