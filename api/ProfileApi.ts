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
import ProfileInterfaces = require("./interfaces/ProfileInterfaces");
import VSSInterfaces = require("./interfaces/common/VSSInterfaces");

export interface IProfileApi extends basem.ClientApiBase {
    deleteProfileAttribute(id: string, descriptor: string): Promise<void>;
    getProfileAttribute(id: string, descriptor: string): Promise<ProfileInterfaces.ProfileAttribute>;
    getProfileAttributes(id: string, partition: string, modifiedSince?: string, modifiedAfterRevision?: string, withCoreAttributes?: boolean, coreAttributes?: string): Promise<ProfileInterfaces.ProfileAttribute[]>;
    setProfileAttribute(container: any, id: string, descriptor: string): Promise<void>;
    setProfileAttributes(attributesCollection: VSSInterfaces.VssJsonCollectionWrapperV<ProfileInterfaces.ProfileAttributeBase<any>[]>, id: string): Promise<void>;
    getAvatar(id: string, size?: string, format?: string): Promise<ProfileInterfaces.Avatar>;
    getAvatarPreview(container: any, id: string, size?: string, format?: string, displayName?: string): Promise<ProfileInterfaces.Avatar>;
    resetAvatar(id: string): Promise<void>;
    setAvatar(container: any, id: string): Promise<void>;
    getGeoRegion(ipaddress: string): Promise<ProfileInterfaces.GeoRegion>;
    createProfile(createProfileContext: ProfileInterfaces.CreateProfileContext, autoCreate?: boolean): Promise<ProfileInterfaces.Profile>;
    getProfile(id: string, details?: boolean, withAttributes?: boolean, partition?: string, coreAttributes?: string, forceRefresh?: boolean): Promise<ProfileInterfaces.Profile>;
    updateProfile(profile: ProfileInterfaces.Profile, id: string): Promise<void>;
    getRegions(): Promise<ProfileInterfaces.ProfileRegions>;
    getSupportedLcids(): Promise<string[]>;
    getUserDefaults(includeAvatar?: boolean): Promise<ProfileInterfaces.Profile>;
    refreshUserDefaults(id: string): Promise<ProfileInterfaces.Profile>;
}

export class ProfileApi extends basem.ClientApiBase implements IProfileApi {
    constructor(baseUrl: string, handlers: VsoBaseInterfaces.IRequestHandler[]) {
        super(baseUrl, handlers, 'node-Profile-api');
    }

    /**
    * @param {string} id
    * @param {string} descriptor
    */
    public async deleteProfileAttribute(
        id: string,
        descriptor: string
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
                id: id
            };

            let queryValues: any = {
                descriptor: descriptor,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.2",
                    "Profile",
                    "1392b6ac-d511-492e-af5b-2263e5545a5d",
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
    * @param {string} id
    * @param {string} descriptor
    */
    public async getProfileAttribute(
        id: string,
        descriptor: string
        ): Promise<ProfileInterfaces.ProfileAttribute> {

        return new Promise<ProfileInterfaces.ProfileAttribute>(async (resolve, reject) => {
            let routeValues: any = {
                id: id
            };

            let queryValues: any = {
                descriptor: descriptor,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.2",
                    "Profile",
                    "1392b6ac-d511-492e-af5b-2263e5545a5d",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<ProfileInterfaces.ProfileAttribute>;
                res = await this.rest.get<ProfileInterfaces.ProfileAttribute>(url, options);

                let ret = this.formatResponse(res.result,
                                              ProfileInterfaces.TypeInfo.ProfileAttribute,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {string} id
    * @param {string} partition
    * @param {string} modifiedSince
    * @param {string} modifiedAfterRevision
    * @param {boolean} withCoreAttributes
    * @param {string} coreAttributes
    */
    public async getProfileAttributes(
        id: string,
        partition: string,
        modifiedSince?: string,
        modifiedAfterRevision?: string,
        withCoreAttributes?: boolean,
        coreAttributes?: string
        ): Promise<ProfileInterfaces.ProfileAttribute[]> {

        return new Promise<ProfileInterfaces.ProfileAttribute[]>(async (resolve, reject) => {
            let routeValues: any = {
                id: id
            };

            let queryValues: any = {
                partition: partition,
                modifiedSince: modifiedSince,
                modifiedAfterRevision: modifiedAfterRevision,
                withCoreAttributes: withCoreAttributes,
                coreAttributes: coreAttributes,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.2",
                    "Profile",
                    "1392b6ac-d511-492e-af5b-2263e5545a5d",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<ProfileInterfaces.ProfileAttribute[]>;
                res = await this.rest.get<ProfileInterfaces.ProfileAttribute[]>(url, options);

                let ret = this.formatResponse(res.result,
                                              ProfileInterfaces.TypeInfo.ProfileAttribute,
                                              true);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {any} container
    * @param {string} id
    * @param {string} descriptor
    */
    public async setProfileAttribute(
        container: any,
        id: string,
        descriptor: string
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
                id: id
            };

            let queryValues: any = {
                descriptor: descriptor,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.2",
                    "Profile",
                    "1392b6ac-d511-492e-af5b-2263e5545a5d",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<void>;
                res = await this.rest.replace<void>(url, container, options);

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
    * @param {VSSInterfaces.VssJsonCollectionWrapperV<ProfileInterfaces.ProfileAttributeBase<any>[]>} attributesCollection
    * @param {string} id
    */
    public async setProfileAttributes(
        attributesCollection: VSSInterfaces.VssJsonCollectionWrapperV<ProfileInterfaces.ProfileAttributeBase<any>[]>,
        id: string
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
                id: id
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.2",
                    "Profile",
                    "1392b6ac-d511-492e-af5b-2263e5545a5d",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<void>;
                res = await this.rest.update<void>(url, attributesCollection, options);

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
    * @param {string} id
    * @param {string} size
    * @param {string} format
    */
    public async getAvatar(
        id: string,
        size?: string,
        format?: string
        ): Promise<ProfileInterfaces.Avatar> {

        return new Promise<ProfileInterfaces.Avatar>(async (resolve, reject) => {
            let routeValues: any = {
                id: id
            };

            let queryValues: any = {
                size: size,
                format: format,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "Profile",
                    "67436615-b382-462a-b659-5367a492fb3c",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<ProfileInterfaces.Avatar>;
                res = await this.rest.get<ProfileInterfaces.Avatar>(url, options);

                let ret = this.formatResponse(res.result,
                                              ProfileInterfaces.TypeInfo.Avatar,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {any} container
    * @param {string} id
    * @param {string} size
    * @param {string} format
    * @param {string} displayName
    */
    public async getAvatarPreview(
        container: any,
        id: string,
        size?: string,
        format?: string,
        displayName?: string
        ): Promise<ProfileInterfaces.Avatar> {

        return new Promise<ProfileInterfaces.Avatar>(async (resolve, reject) => {
            let routeValues: any = {
                id: id
            };

            let queryValues: any = {
                size: size,
                format: format,
                displayName: displayName,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "Profile",
                    "67436615-b382-462a-b659-5367a492fb3c",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<ProfileInterfaces.Avatar>;
                res = await this.rest.create<ProfileInterfaces.Avatar>(url, container, options);

                let ret = this.formatResponse(res.result,
                                              ProfileInterfaces.TypeInfo.Avatar,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {string} id
    */
    public async resetAvatar(
        id: string
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
                id: id
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "Profile",
                    "67436615-b382-462a-b659-5367a492fb3c",
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
    * @param {any} container
    * @param {string} id
    */
    public async setAvatar(
        container: any,
        id: string
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
                id: id
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "Profile",
                    "67436615-b382-462a-b659-5367a492fb3c",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<void>;
                res = await this.rest.replace<void>(url, container, options);

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
    * Lookup up country/region based on provided IPv4, null if using the remote IPv4 address.
    * 
    * @param {string} ipaddress - IPv4 address to be used for reverse lookup, null if using RemoteIPAddress in request context
    */
    public async getGeoRegion(
        ipaddress: string
        ): Promise<ProfileInterfaces.GeoRegion> {

        return new Promise<ProfileInterfaces.GeoRegion>(async (resolve, reject) => {
            let routeValues: any = {
            };

            let queryValues: any = {
                ipaddress: ipaddress,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "Profile",
                    "3bcda9c0-3078-48a5-a1e0-83bd05931ad0",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<ProfileInterfaces.GeoRegion>;
                res = await this.rest.get<ProfileInterfaces.GeoRegion>(url, options);

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
    * Create profile
    * 
    * @param {ProfileInterfaces.CreateProfileContext} createProfileContext - Context for profile creation
    * @param {boolean} autoCreate - Create profile automatically
    */
    public async createProfile(
        createProfileContext: ProfileInterfaces.CreateProfileContext,
        autoCreate?: boolean
        ): Promise<ProfileInterfaces.Profile> {

        return new Promise<ProfileInterfaces.Profile>(async (resolve, reject) => {
            let routeValues: any = {
            };

            let queryValues: any = {
                autoCreate: autoCreate,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.3",
                    "Profile",
                    "f83735dc-483f-4238-a291-d45f6080a9af",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<ProfileInterfaces.Profile>;
                res = await this.rest.create<ProfileInterfaces.Profile>(url, createProfileContext, options);

                let ret = this.formatResponse(res.result,
                                              ProfileInterfaces.TypeInfo.Profile,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {string} id
    * @param {boolean} details
    * @param {boolean} withAttributes
    * @param {string} partition
    * @param {string} coreAttributes
    * @param {boolean} forceRefresh
    */
    public async getProfile(
        id: string,
        details?: boolean,
        withAttributes?: boolean,
        partition?: string,
        coreAttributes?: string,
        forceRefresh?: boolean
        ): Promise<ProfileInterfaces.Profile> {

        return new Promise<ProfileInterfaces.Profile>(async (resolve, reject) => {
            let routeValues: any = {
                id: id
            };

            let queryValues: any = {
                details: details,
                withAttributes: withAttributes,
                partition: partition,
                coreAttributes: coreAttributes,
                forceRefresh: forceRefresh,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.3",
                    "Profile",
                    "f83735dc-483f-4238-a291-d45f6080a9af",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<ProfileInterfaces.Profile>;
                res = await this.rest.get<ProfileInterfaces.Profile>(url, options);

                let ret = this.formatResponse(res.result,
                                              ProfileInterfaces.TypeInfo.Profile,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * Update profile
    * 
    * @param {ProfileInterfaces.Profile} profile - Update profile
    * @param {string} id - Profile ID
    */
    public async updateProfile(
        profile: ProfileInterfaces.Profile,
        id: string
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
                id: id
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.3",
                    "Profile",
                    "f83735dc-483f-4238-a291-d45f6080a9af",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<void>;
                res = await this.rest.update<void>(url, profile, options);

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
    */
    public async getRegions(
        ): Promise<ProfileInterfaces.ProfileRegions> {

        return new Promise<ProfileInterfaces.ProfileRegions>(async (resolve, reject) => {
            let routeValues: any = {
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "Profile",
                    "92d8d1c9-26b8-4774-a929-d640a73da524",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<ProfileInterfaces.ProfileRegions>;
                res = await this.rest.get<ProfileInterfaces.ProfileRegions>(url, options);

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
    */
    public async getSupportedLcids(
        ): Promise<string[]> {

        return new Promise<string[]>(async (resolve, reject) => {
            let routeValues: any = {
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "Profile",
                    "d5bd1aa6-c269-4bcd-ad32-75fa17475584",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<string[]>;
                res = await this.rest.get<string[]>(url, options);

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
    * @param {boolean} includeAvatar
    */
    public async getUserDefaults(
        includeAvatar?: boolean
        ): Promise<ProfileInterfaces.Profile> {

        return new Promise<ProfileInterfaces.Profile>(async (resolve, reject) => {
            let routeValues: any = {
            };

            let queryValues: any = {
                includeAvatar: includeAvatar,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "Profile",
                    "b583a356-1da7-4237-9f4c-1deb2edbc7e8",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<ProfileInterfaces.Profile>;
                res = await this.rest.get<ProfileInterfaces.Profile>(url, options);

                let ret = this.formatResponse(res.result,
                                              ProfileInterfaces.TypeInfo.Profile,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {string} id
    */
    public async refreshUserDefaults(
        id: string
        ): Promise<ProfileInterfaces.Profile> {

        return new Promise<ProfileInterfaces.Profile>(async (resolve, reject) => {
            let routeValues: any = {
                id: id
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "Profile",
                    "b583a356-1da7-4237-9f4c-1deb2edbc7e8",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<ProfileInterfaces.Profile>;
                res = await this.rest.replace<ProfileInterfaces.Profile>(url, options);

                let ret = this.formatResponse(res.result,
                                              ProfileInterfaces.TypeInfo.Profile,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

}
