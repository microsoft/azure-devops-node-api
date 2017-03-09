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
import MemberEntitlementManagementInterfaces = require("./interfaces/MemberEntitlementManagementInterfaces");
import VSSInterfaces = require("./interfaces/common/VSSInterfaces");

export interface IMemberEntitlementManagementApi extends basem.ClientApiBase {
    addMemberEntitlement(memberEntitlement: MemberEntitlementManagementInterfaces.MemberEntitlement): Promise<MemberEntitlementManagementInterfaces.MemberEntitlementsPostResponse>;
    deleteMemberEntitlement(memberId: string): Promise<void>;
    getMemberEntitlement(memberId: string): Promise<MemberEntitlementManagementInterfaces.MemberEntitlement>;
    getMemberEntitlements(top: number, skip: number, filter?: string, select?: string): Promise<MemberEntitlementManagementInterfaces.MemberEntitlement[]>;
    updateMemberEntitlement(customHeaders: any, document: VSSInterfaces.JsonPatchDocument, memberId: string): Promise<MemberEntitlementManagementInterfaces.MemberEntitlementsPatchResponse>;
}

export class MemberEntitlementManagementApi extends basem.ClientApiBase implements IMemberEntitlementManagementApi {
    constructor(baseUrl: string, handlers: VsoBaseInterfaces.IRequestHandler[]) {
        super(baseUrl, handlers, 'node-MemberEntitlementManagement-api');
    }

    /**
    * Used to add members to a project in an account. It adds them to groups, assigns licenses, and assigns extensions.
    * 
    * @param {MemberEntitlementManagementInterfaces.MemberEntitlement} memberEntitlement - Member model for where to add the member and what licenses and extensions they should receive.
    */
    public async addMemberEntitlement(
        memberEntitlement: MemberEntitlementManagementInterfaces.MemberEntitlement
        ): Promise<MemberEntitlementManagementInterfaces.MemberEntitlementsPostResponse> {

        return new Promise<MemberEntitlementManagementInterfaces.MemberEntitlementsPostResponse>(async (resolve, reject) => {
            let routeValues: any = {
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "MemberEntitlementManagement",
                    "1e8cabfb-1fda-461e-860f-eeeae54d06bb",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<MemberEntitlementManagementInterfaces.MemberEntitlementsPostResponse>;
                res = await this.rest.create<MemberEntitlementManagementInterfaces.MemberEntitlementsPostResponse>(url, memberEntitlement, options);

                let ret = this.formatResponse(res.result,
                                              MemberEntitlementManagementInterfaces.TypeInfo.MemberEntitlementsPostResponse,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * Deletes members from an account
    * 
    * @param {string} memberId - memberId of the member to be removed.
    */
    public async deleteMemberEntitlement(
        memberId: string
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
                memberId: memberId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "MemberEntitlementManagement",
                    "1e8cabfb-1fda-461e-860f-eeeae54d06bb",
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
    * Used to get member entitlement information in an account
    * 
    * @param {string} memberId
    */
    public async getMemberEntitlement(
        memberId: string
        ): Promise<MemberEntitlementManagementInterfaces.MemberEntitlement> {

        return new Promise<MemberEntitlementManagementInterfaces.MemberEntitlement>(async (resolve, reject) => {
            let routeValues: any = {
                memberId: memberId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "MemberEntitlementManagement",
                    "1e8cabfb-1fda-461e-860f-eeeae54d06bb",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<MemberEntitlementManagementInterfaces.MemberEntitlement>;
                res = await this.rest.get<MemberEntitlementManagementInterfaces.MemberEntitlement>(url, options);

                let ret = this.formatResponse(res.result,
                                              MemberEntitlementManagementInterfaces.TypeInfo.MemberEntitlement,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * Used to get member entitlement information in an account
    * 
    * @param {number} top
    * @param {number} skip
    * @param {string} filter
    * @param {string} select
    */
    public async getMemberEntitlements(
        top: number,
        skip: number,
        filter?: string,
        select?: string
        ): Promise<MemberEntitlementManagementInterfaces.MemberEntitlement[]> {

        return new Promise<MemberEntitlementManagementInterfaces.MemberEntitlement[]>(async (resolve, reject) => {
            let routeValues: any = {
            };

            let queryValues: any = {
                top: top,
                skip: skip,
                filter: filter,
                select: select,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "MemberEntitlementManagement",
                    "1e8cabfb-1fda-461e-860f-eeeae54d06bb",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<MemberEntitlementManagementInterfaces.MemberEntitlement[]>;
                res = await this.rest.get<MemberEntitlementManagementInterfaces.MemberEntitlement[]>(url, options);

                let ret = this.formatResponse(res.result,
                                              MemberEntitlementManagementInterfaces.TypeInfo.MemberEntitlement,
                                              true);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * Used to edit a member in an account. Edits groups, licenses, and extensions.
    * 
    * @param {VSSInterfaces.JsonPatchDocument} document - document of operations to be used
    * @param {string} memberId - member Id of the member to be edit
    */
    public async updateMemberEntitlement(
        customHeaders: any,
        document: VSSInterfaces.JsonPatchDocument,
        memberId: string
        ): Promise<MemberEntitlementManagementInterfaces.MemberEntitlementsPatchResponse> {

        return new Promise<MemberEntitlementManagementInterfaces.MemberEntitlementsPatchResponse>(async (resolve, reject) => {
            let routeValues: any = {
                memberId: memberId
            };

            customHeaders = customHeaders || {};
            customHeaders["Content-Type"] = "application/json-patch+json";

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "MemberEntitlementManagement",
                    "1e8cabfb-1fda-461e-860f-eeeae54d06bb",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<MemberEntitlementManagementInterfaces.MemberEntitlementsPatchResponse>;
                res = await this.rest.update<MemberEntitlementManagementInterfaces.MemberEntitlementsPatchResponse>(url, document, options);

                let ret = this.formatResponse(res.result,
                                              MemberEntitlementManagementInterfaces.TypeInfo.MemberEntitlementsPatchResponse,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

}
