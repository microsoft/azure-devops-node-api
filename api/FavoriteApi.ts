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
import FavoriteInterfaces = require("./interfaces/FavoriteInterfaces");

export interface IFavoriteApi extends basem.ClientApiBase {
    getFavoriteProviders(faultInMissingHost?: boolean): Promise<FavoriteInterfaces.FavoriteProvider[]>;
    createFavorite(favorite: FavoriteInterfaces.FavoriteCreateParameters): Promise<FavoriteInterfaces.Favorite>;
    createFavoriteOfOwner(favorite: FavoriteInterfaces.FavoriteCreateParameters, ownerScopeType: string, ownerScopeId: string): Promise<FavoriteInterfaces.Favorite>;
    deleteFavoriteById(favoriteId: string, artifactType: string, artifactScopeType: string, artifactScopeId?: string): Promise<void>;
    deleteFavoriteOfOwnerById(favoriteId: string, ownerScopeType: string, ownerScopeId: string, artifactType: string, artifactScopeType: string, artifactScopeId?: string): Promise<void>;
    getFavoriteByArtifact(artifactType: string, artifactId: string, artifactScopeType: string, artifactScopeId?: string): Promise<FavoriteInterfaces.Favorite>;
    getFavoriteById(favoriteId: string, artifactScopeType: string, artifactType: string, artifactScopeId?: string, includeExtendedDetails?: boolean): Promise<FavoriteInterfaces.Favorite>;
    getFavoriteOfOwnerById(favoriteId: string, ownerScopeType: string, ownerScopeId: string, artifactScopeType: string, artifactType: string, artifactScopeId?: string, includeExtendedDetails?: boolean): Promise<FavoriteInterfaces.Favorite>;
    getFavorites(artifactType?: string, artifactScopeType?: string, artifactScopeId?: string, includeExtendedDetails?: boolean): Promise<FavoriteInterfaces.Favorite[]>;
    getFavoritesOfOwner(ownerScopeType: string, ownerScopeId: string, artifactType?: string, artifactScopeType?: string, artifactScopeId?: string, includeExtendedDetails?: boolean): Promise<FavoriteInterfaces.Favorite[]>;
}

export class FavoriteApi extends basem.ClientApiBase implements IFavoriteApi {
    constructor(baseUrl: string, handlers: VsoBaseInterfaces.IRequestHandler[]) {
        super(baseUrl, handlers, 'node-Favorite-api');
    }

    /**
    * @param {boolean} faultInMissingHost
    */
    public async getFavoriteProviders(
        faultInMissingHost?: boolean
        ): Promise<FavoriteInterfaces.FavoriteProvider[]> {

        return new Promise<FavoriteInterfaces.FavoriteProvider[]>(async (resolve, reject) => {
            let routeValues: any = {
            };

            let queryValues: any = {
                faultInMissingHost: faultInMissingHost,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "Favorite",
                    "0c04d86b-e315-464f-8125-4d6222d306c2",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<FavoriteInterfaces.FavoriteProvider[]>;
                res = await this.rest.get<FavoriteInterfaces.FavoriteProvider[]>(url, options);

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
    * @param {FavoriteInterfaces.FavoriteCreateParameters} favorite
    */
    public async createFavorite(
        favorite: FavoriteInterfaces.FavoriteCreateParameters
        ): Promise<FavoriteInterfaces.Favorite> {

        return new Promise<FavoriteInterfaces.Favorite>(async (resolve, reject) => {
            let routeValues: any = {
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "Favorite",
                    "6f13e9a6-aae2-4b89-b683-131ca9564cec",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<FavoriteInterfaces.Favorite>;
                res = await this.rest.create<FavoriteInterfaces.Favorite>(url, favorite, options);

                let ret = this.formatResponse(res.result,
                                              FavoriteInterfaces.TypeInfo.Favorite,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {FavoriteInterfaces.FavoriteCreateParameters} favorite
    * @param {string} ownerScopeType
    * @param {string} ownerScopeId
    */
    public async createFavoriteOfOwner(
        favorite: FavoriteInterfaces.FavoriteCreateParameters,
        ownerScopeType: string,
        ownerScopeId: string
        ): Promise<FavoriteInterfaces.Favorite> {

        return new Promise<FavoriteInterfaces.Favorite>(async (resolve, reject) => {
            let routeValues: any = {
            };

            let queryValues: any = {
                ownerScopeType: ownerScopeType,
                ownerScopeId: ownerScopeId,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "Favorite",
                    "6f13e9a6-aae2-4b89-b683-131ca9564cec",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<FavoriteInterfaces.Favorite>;
                res = await this.rest.create<FavoriteInterfaces.Favorite>(url, favorite, options);

                let ret = this.formatResponse(res.result,
                                              FavoriteInterfaces.TypeInfo.Favorite,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {string} favoriteId
    * @param {string} artifactType
    * @param {string} artifactScopeType
    * @param {string} artifactScopeId
    */
    public async deleteFavoriteById(
        favoriteId: string,
        artifactType: string,
        artifactScopeType: string,
        artifactScopeId?: string
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
                favoriteId: favoriteId
            };

            let queryValues: any = {
                artifactType: artifactType,
                artifactScopeType: artifactScopeType,
                artifactScopeId: artifactScopeId,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "Favorite",
                    "6f13e9a6-aae2-4b89-b683-131ca9564cec",
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
    * @param {string} favoriteId
    * @param {string} ownerScopeType
    * @param {string} ownerScopeId
    * @param {string} artifactType
    * @param {string} artifactScopeType
    * @param {string} artifactScopeId
    */
    public async deleteFavoriteOfOwnerById(
        favoriteId: string,
        ownerScopeType: string,
        ownerScopeId: string,
        artifactType: string,
        artifactScopeType: string,
        artifactScopeId?: string
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
                favoriteId: favoriteId
            };

            let queryValues: any = {
                ownerScopeType: ownerScopeType,
                ownerScopeId: ownerScopeId,
                artifactType: artifactType,
                artifactScopeType: artifactScopeType,
                artifactScopeId: artifactScopeId,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "Favorite",
                    "6f13e9a6-aae2-4b89-b683-131ca9564cec",
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
    * @param {string} artifactType
    * @param {string} artifactId
    * @param {string} artifactScopeType
    * @param {string} artifactScopeId
    */
    public async getFavoriteByArtifact(
        artifactType: string,
        artifactId: string,
        artifactScopeType: string,
        artifactScopeId?: string
        ): Promise<FavoriteInterfaces.Favorite> {

        return new Promise<FavoriteInterfaces.Favorite>(async (resolve, reject) => {
            let routeValues: any = {
            };

            let queryValues: any = {
                artifactType: artifactType,
                artifactId: artifactId,
                artifactScopeType: artifactScopeType,
                artifactScopeId: artifactScopeId,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "Favorite",
                    "6f13e9a6-aae2-4b89-b683-131ca9564cec",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<FavoriteInterfaces.Favorite>;
                res = await this.rest.get<FavoriteInterfaces.Favorite>(url, options);

                let ret = this.formatResponse(res.result,
                                              FavoriteInterfaces.TypeInfo.Favorite,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {string} favoriteId
    * @param {string} artifactScopeType
    * @param {string} artifactType
    * @param {string} artifactScopeId
    * @param {boolean} includeExtendedDetails
    */
    public async getFavoriteById(
        favoriteId: string,
        artifactScopeType: string,
        artifactType: string,
        artifactScopeId?: string,
        includeExtendedDetails?: boolean
        ): Promise<FavoriteInterfaces.Favorite> {

        return new Promise<FavoriteInterfaces.Favorite>(async (resolve, reject) => {
            let routeValues: any = {
                favoriteId: favoriteId
            };

            let queryValues: any = {
                artifactScopeType: artifactScopeType,
                artifactType: artifactType,
                artifactScopeId: artifactScopeId,
                includeExtendedDetails: includeExtendedDetails,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "Favorite",
                    "6f13e9a6-aae2-4b89-b683-131ca9564cec",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<FavoriteInterfaces.Favorite>;
                res = await this.rest.get<FavoriteInterfaces.Favorite>(url, options);

                let ret = this.formatResponse(res.result,
                                              FavoriteInterfaces.TypeInfo.Favorite,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {string} favoriteId
    * @param {string} ownerScopeType
    * @param {string} ownerScopeId
    * @param {string} artifactScopeType
    * @param {string} artifactType
    * @param {string} artifactScopeId
    * @param {boolean} includeExtendedDetails
    */
    public async getFavoriteOfOwnerById(
        favoriteId: string,
        ownerScopeType: string,
        ownerScopeId: string,
        artifactScopeType: string,
        artifactType: string,
        artifactScopeId?: string,
        includeExtendedDetails?: boolean
        ): Promise<FavoriteInterfaces.Favorite> {

        return new Promise<FavoriteInterfaces.Favorite>(async (resolve, reject) => {
            let routeValues: any = {
                favoriteId: favoriteId
            };

            let queryValues: any = {
                ownerScopeType: ownerScopeType,
                ownerScopeId: ownerScopeId,
                artifactScopeType: artifactScopeType,
                artifactType: artifactType,
                artifactScopeId: artifactScopeId,
                includeExtendedDetails: includeExtendedDetails,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "Favorite",
                    "6f13e9a6-aae2-4b89-b683-131ca9564cec",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<FavoriteInterfaces.Favorite>;
                res = await this.rest.get<FavoriteInterfaces.Favorite>(url, options);

                let ret = this.formatResponse(res.result,
                                              FavoriteInterfaces.TypeInfo.Favorite,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {string} artifactType
    * @param {string} artifactScopeType
    * @param {string} artifactScopeId
    * @param {boolean} includeExtendedDetails
    */
    public async getFavorites(
        artifactType?: string,
        artifactScopeType?: string,
        artifactScopeId?: string,
        includeExtendedDetails?: boolean
        ): Promise<FavoriteInterfaces.Favorite[]> {

        return new Promise<FavoriteInterfaces.Favorite[]>(async (resolve, reject) => {
            let routeValues: any = {
            };

            let queryValues: any = {
                artifactType: artifactType,
                artifactScopeType: artifactScopeType,
                artifactScopeId: artifactScopeId,
                includeExtendedDetails: includeExtendedDetails,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "Favorite",
                    "6f13e9a6-aae2-4b89-b683-131ca9564cec",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<FavoriteInterfaces.Favorite[]>;
                res = await this.rest.get<FavoriteInterfaces.Favorite[]>(url, options);

                let ret = this.formatResponse(res.result,
                                              FavoriteInterfaces.TypeInfo.Favorite,
                                              true);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {string} ownerScopeType
    * @param {string} ownerScopeId
    * @param {string} artifactType
    * @param {string} artifactScopeType
    * @param {string} artifactScopeId
    * @param {boolean} includeExtendedDetails
    */
    public async getFavoritesOfOwner(
        ownerScopeType: string,
        ownerScopeId: string,
        artifactType?: string,
        artifactScopeType?: string,
        artifactScopeId?: string,
        includeExtendedDetails?: boolean
        ): Promise<FavoriteInterfaces.Favorite[]> {

        return new Promise<FavoriteInterfaces.Favorite[]>(async (resolve, reject) => {
            let routeValues: any = {
            };

            let queryValues: any = {
                ownerScopeType: ownerScopeType,
                ownerScopeId: ownerScopeId,
                artifactType: artifactType,
                artifactScopeType: artifactScopeType,
                artifactScopeId: artifactScopeId,
                includeExtendedDetails: includeExtendedDetails,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "Favorite",
                    "6f13e9a6-aae2-4b89-b683-131ca9564cec",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<FavoriteInterfaces.Favorite[]>;
                res = await this.rest.get<FavoriteInterfaces.Favorite[]>(url, options);

                let ret = this.formatResponse(res.result,
                                              FavoriteInterfaces.TypeInfo.Favorite,
                                              true);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

}
