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
import TokenInterfaces = require("./interfaces/TokenInterfaces");
import VSSInterfaces = require("./interfaces/common/VSSInterfaces");

export interface ITokenApi extends basem.ClientApiBase {
    authorize(redirectUri: string, responseType: TokenInterfaces.ResponseType, clientId: string, scopes: string, userId?: string): Promise<TokenInterfaces.AuthorizationDecision>;
    getAuthorizations(userId?: string): Promise<TokenInterfaces.AuthorizationDetails[]>;
    initiateAuthorization(redirectUri: string, responseType: TokenInterfaces.ResponseType, clientId: string, scopes: string, userId?: string): Promise<TokenInterfaces.AuthorizationDescription>;
    revokeAuthorization(authorizationId: string, userId?: string): Promise<void>;
    host(clientId: string): Promise<void>;
    revoke(clientId: string, hostId?: string): Promise<void>;
    create(registration: TokenInterfaces.Registration, includeSecret?: boolean): Promise<TokenInterfaces.Registration>;
    delete(registrationId: string): Promise<void>;
    get(registrationId: string, includeSecret: boolean): Promise<TokenInterfaces.Registration>;
    list(): Promise<TokenInterfaces.Registration[]>;
    update(registration: TokenInterfaces.Registration, includeSecret?: boolean): Promise<TokenInterfaces.Registration>;
    getSecret(registrationId: string): Promise<VSSInterfaces.JsonWebToken>;
}

export class TokenApi extends basem.ClientApiBase implements ITokenApi {
    constructor(baseUrl: string, handlers: VsoBaseInterfaces.IRequestHandler[], options?: VsoBaseInterfaces.IRequestOptions) {
        super(baseUrl, handlers, 'node-Token-api', options);
    }

    /**
    * @param {string} redirectUri
    * @param {TokenInterfaces.ResponseType} responseType
    * @param {string} clientId
    * @param {string} scopes
    * @param {string} userId
    */
    public async authorize(
        redirectUri: string,
        responseType: TokenInterfaces.ResponseType,
        clientId: string,
        scopes: string,
        userId?: string
    ): Promise<TokenInterfaces.AuthorizationDecision> {

        return new Promise<TokenInterfaces.AuthorizationDecision>(async (resolve, reject) => {
            let routeValues: any = {
                userId: userId
            };

            let queryValues: any = {
                responseType: responseType,
                clientId: clientId,
                scopes: scopes,
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "DelegatedAuth",
                    "efbf6e0c-1150-43fd-b869-7e2b04fc0d09",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                    verData.apiVersion);
                let res: restm.IRestResponse<TokenInterfaces.AuthorizationDecision>;
                res = await this.rest.create<TokenInterfaces.AuthorizationDecision>(url, redirectUri, options);

                let ret = this.formatResponse(res.result,
                    TokenInterfaces.TypeInfo.AuthorizationDecision,
                    false);

                resolve(ret);

            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {string} userId
    */
    public async getAuthorizations(
        userId?: string
    ): Promise<TokenInterfaces.AuthorizationDetails[]> {

        return new Promise<TokenInterfaces.AuthorizationDetails[]>(async (resolve, reject) => {
            let routeValues: any = {
                userId: userId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "DelegatedAuth",
                    "efbf6e0c-1150-43fd-b869-7e2b04fc0d09",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                    verData.apiVersion);
                let res: restm.IRestResponse<TokenInterfaces.AuthorizationDetails[]>;
                res = await this.rest.get<TokenInterfaces.AuthorizationDetails[]>(url, options);

                let ret = this.formatResponse(res.result,
                    TokenInterfaces.TypeInfo.AuthorizationDetails,
                    true);

                resolve(ret);

            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {string} redirectUri
    * @param {TokenInterfaces.ResponseType} responseType
    * @param {string} clientId
    * @param {string} scopes
    * @param {string} userId
    */
    public async initiateAuthorization(
        redirectUri: string,
        responseType: TokenInterfaces.ResponseType,
        clientId: string,
        scopes: string,
        userId?: string
    ): Promise<TokenInterfaces.AuthorizationDescription> {

        return new Promise<TokenInterfaces.AuthorizationDescription>(async (resolve, reject) => {
            let routeValues: any = {
                userId: userId
            };

            let queryValues: any = {
                responseType: responseType,
                clientId: clientId,
                scopes: scopes,
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "DelegatedAuth",
                    "efbf6e0c-1150-43fd-b869-7e2b04fc0d09",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                    verData.apiVersion);
                let res: restm.IRestResponse<TokenInterfaces.AuthorizationDescription>;
                res = await this.rest.get<TokenInterfaces.AuthorizationDescription>(url, options);

                let ret = this.formatResponse(res.result,
                    TokenInterfaces.TypeInfo.AuthorizationDescription,
                    false);

                resolve(ret);

            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {string} authorizationId
    * @param {string} userId
    */
    public async revokeAuthorization(
        authorizationId: string,
        userId?: string
    ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
                userId: userId
            };

            let queryValues: any = {
                authorizationId: authorizationId,
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "DelegatedAuth",
                    "efbf6e0c-1150-43fd-b869-7e2b04fc0d09",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                    verData.apiVersion);
                let res: restm.IRestResponse<void>;
                res = await this.rest.create<void>(url, options);

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
    * @param {string} clientId
    */
    public async host(
        clientId: string
    ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
            };

            let queryValues: any = {
                clientId: clientId,
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "DelegatedAuth",
                    "7372fdd9-238c-467c-b0f2-995f4bfe0d94",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                    verData.apiVersion);
                let res: restm.IRestResponse<void>;
                res = await this.rest.create<void>(url, options);

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
    * @param {string} clientId
    * @param {string} hostId
    */
    public async revoke(
        clientId: string,
        hostId?: string
    ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
            };

            let queryValues: any = {
                clientId: clientId,
                hostId: hostId,
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "DelegatedAuth",
                    "7372fdd9-238c-467c-b0f2-995f4bfe0d94",
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
    * @param {TokenInterfaces.Registration} registration
    * @param {boolean} includeSecret
    */
    public async create(
        registration: TokenInterfaces.Registration,
        includeSecret?: boolean
    ): Promise<TokenInterfaces.Registration> {

        return new Promise<TokenInterfaces.Registration>(async (resolve, reject) => {
            let routeValues: any = {
            };

            let queryValues: any = {
                includeSecret: includeSecret,
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.2",
                    "DelegatedAuth",
                    "909cd090-3005-480d-a1b4-220b76cb0afe",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                    verData.apiVersion);
                let res: restm.IRestResponse<TokenInterfaces.Registration>;
                res = await this.rest.replace<TokenInterfaces.Registration>(url, registration, options);

                let ret = this.formatResponse(res.result,
                    TokenInterfaces.TypeInfo.Registration,
                    false);

                resolve(ret);

            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {string} registrationId
    */
    public async delete(
        registrationId: string
    ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
                registrationId: registrationId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.2",
                    "DelegatedAuth",
                    "909cd090-3005-480d-a1b4-220b76cb0afe",
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
    * @param {string} registrationId
    * @param {boolean} includeSecret
    */
    public async get(
        registrationId: string,
        includeSecret: boolean
    ): Promise<TokenInterfaces.Registration> {

        return new Promise<TokenInterfaces.Registration>(async (resolve, reject) => {
            let routeValues: any = {
                registrationId: registrationId
            };

            let queryValues: any = {
                includeSecret: includeSecret,
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.2",
                    "DelegatedAuth",
                    "909cd090-3005-480d-a1b4-220b76cb0afe",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                    verData.apiVersion);
                let res: restm.IRestResponse<TokenInterfaces.Registration>;
                res = await this.rest.get<TokenInterfaces.Registration>(url, options);

                let ret = this.formatResponse(res.result,
                    TokenInterfaces.TypeInfo.Registration,
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
    public async list(
    ): Promise<TokenInterfaces.Registration[]> {

        return new Promise<TokenInterfaces.Registration[]>(async (resolve, reject) => {
            let routeValues: any = {
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.2",
                    "DelegatedAuth",
                    "909cd090-3005-480d-a1b4-220b76cb0afe",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                    verData.apiVersion);
                let res: restm.IRestResponse<TokenInterfaces.Registration[]>;
                res = await this.rest.get<TokenInterfaces.Registration[]>(url, options);

                let ret = this.formatResponse(res.result,
                    TokenInterfaces.TypeInfo.Registration,
                    true);

                resolve(ret);

            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {TokenInterfaces.Registration} registration
    * @param {boolean} includeSecret
    */
    public async update(
        registration: TokenInterfaces.Registration,
        includeSecret?: boolean
    ): Promise<TokenInterfaces.Registration> {

        return new Promise<TokenInterfaces.Registration>(async (resolve, reject) => {
            let routeValues: any = {
            };

            let queryValues: any = {
                includeSecret: includeSecret,
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.2",
                    "DelegatedAuth",
                    "909cd090-3005-480d-a1b4-220b76cb0afe",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                    verData.apiVersion);
                let res: restm.IRestResponse<TokenInterfaces.Registration>;
                res = await this.rest.create<TokenInterfaces.Registration>(url, registration, options);

                let ret = this.formatResponse(res.result,
                    TokenInterfaces.TypeInfo.Registration,
                    false);

                resolve(ret);

            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {string} registrationId
    */
    public async getSecret(
        registrationId: string
    ): Promise<VSSInterfaces.JsonWebToken> {

        return new Promise<VSSInterfaces.JsonWebToken>(async (resolve, reject) => {
            let routeValues: any = {
                registrationId: registrationId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "DelegatedAuth",
                    "f37e5023-dfbe-490e-9e40-7b7fb6b67887",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                    verData.apiVersion);
                let res: restm.IRestResponse<VSSInterfaces.JsonWebToken>;
                res = await this.rest.get<VSSInterfaces.JsonWebToken>(url, options);

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
