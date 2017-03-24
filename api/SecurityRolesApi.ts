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
import SecurityRolesInterfaces = require("./interfaces/SecurityRolesInterfaces");

export interface ISecurityRolesApi extends basem.ClientApiBase {
    getRoleAssignments(scopeId: string, resourceId: string): Promise<SecurityRolesInterfaces.RoleAssignment[]>;
    removeRoleAssignment(scopeId: string, resourceId: string, identityId: string): Promise<void>;
    removeRoleAssignments(identityIds: string[], scopeId: string, resourceId: string): Promise<void>;
    setRoleAssignment(roleAssignment: SecurityRolesInterfaces.UserRoleAssignmentRef, scopeId: string, resourceId: string, identityId: string): Promise<SecurityRolesInterfaces.RoleAssignment>;
    setRoleAssignments(roleAssignments: SecurityRolesInterfaces.UserRoleAssignmentRef[], scopeId: string, resourceId: string): Promise<SecurityRolesInterfaces.RoleAssignment[]>;
    getRoleDefinitions(scopeId: string): Promise<SecurityRolesInterfaces.SecurityRole[]>;
}

export class SecurityRolesApi extends basem.ClientApiBase implements ISecurityRolesApi {
    constructor(baseUrl: string, handlers: VsoBaseInterfaces.IRequestHandler[]) {
        super(baseUrl, handlers, 'node-SecurityRoles-api');
    }

    /**
     * @param {string} scopeId
     * @param {string} resourceId
     */
    public async getRoleAssignments(
        scopeId: string,
        resourceId: string
        ): Promise<SecurityRolesInterfaces.RoleAssignment[]> {

        return new Promise<SecurityRolesInterfaces.RoleAssignment[]>(async (resolve, reject) => {
            let routeValues: any = {
                scopeId: scopeId,
                resourceId: resourceId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "securityroles",
                    "9461c234-c84c-4ed2-b918-2f0f92ad0a35",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<SecurityRolesInterfaces.RoleAssignment[]>;
                res = await this.rest.get<SecurityRolesInterfaces.RoleAssignment[]>(url, options);

                let ret = this.formatResponse(res.result,
                                              SecurityRolesInterfaces.TypeInfo.RoleAssignment,
                                              true);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * @param {string} scopeId
     * @param {string} resourceId
     * @param {string} identityId
     */
    public async removeRoleAssignment(
        scopeId: string,
        resourceId: string,
        identityId: string
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
                scopeId: scopeId,
                resourceId: resourceId,
                identityId: identityId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "securityroles",
                    "9461c234-c84c-4ed2-b918-2f0f92ad0a35",
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
     * @param {string[]} identityIds
     * @param {string} scopeId
     * @param {string} resourceId
     */
    public async removeRoleAssignments(
        identityIds: string[],
        scopeId: string,
        resourceId: string
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
                scopeId: scopeId,
                resourceId: resourceId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "securityroles",
                    "9461c234-c84c-4ed2-b918-2f0f92ad0a35",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<void>;
                res = await this.rest.update<void>(url, identityIds, options);

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
     * @param {SecurityRolesInterfaces.UserRoleAssignmentRef} roleAssignment
     * @param {string} scopeId
     * @param {string} resourceId
     * @param {string} identityId
     */
    public async setRoleAssignment(
        roleAssignment: SecurityRolesInterfaces.UserRoleAssignmentRef,
        scopeId: string,
        resourceId: string,
        identityId: string
        ): Promise<SecurityRolesInterfaces.RoleAssignment> {

        return new Promise<SecurityRolesInterfaces.RoleAssignment>(async (resolve, reject) => {
            let routeValues: any = {
                scopeId: scopeId,
                resourceId: resourceId,
                identityId: identityId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "securityroles",
                    "9461c234-c84c-4ed2-b918-2f0f92ad0a35",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<SecurityRolesInterfaces.RoleAssignment>;
                res = await this.rest.replace<SecurityRolesInterfaces.RoleAssignment>(url, roleAssignment, options);

                let ret = this.formatResponse(res.result,
                                              SecurityRolesInterfaces.TypeInfo.RoleAssignment,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * @param {SecurityRolesInterfaces.UserRoleAssignmentRef[]} roleAssignments
     * @param {string} scopeId
     * @param {string} resourceId
     */
    public async setRoleAssignments(
        roleAssignments: SecurityRolesInterfaces.UserRoleAssignmentRef[],
        scopeId: string,
        resourceId: string
        ): Promise<SecurityRolesInterfaces.RoleAssignment[]> {

        return new Promise<SecurityRolesInterfaces.RoleAssignment[]>(async (resolve, reject) => {
            let routeValues: any = {
                scopeId: scopeId,
                resourceId: resourceId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "securityroles",
                    "9461c234-c84c-4ed2-b918-2f0f92ad0a35",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<SecurityRolesInterfaces.RoleAssignment[]>;
                res = await this.rest.replace<SecurityRolesInterfaces.RoleAssignment[]>(url, roleAssignments, options);

                let ret = this.formatResponse(res.result,
                                              SecurityRolesInterfaces.TypeInfo.RoleAssignment,
                                              true);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * @param {string} scopeId
     */
    public async getRoleDefinitions(
        scopeId: string
        ): Promise<SecurityRolesInterfaces.SecurityRole[]> {

        return new Promise<SecurityRolesInterfaces.SecurityRole[]>(async (resolve, reject) => {
            let routeValues: any = {
                scopeId: scopeId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "securityroles",
                    "f4cc9a86-453c-48d2-b44d-d3bd5c105f4f",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<SecurityRolesInterfaces.SecurityRole[]>;
                res = await this.rest.get<SecurityRolesInterfaces.SecurityRole[]>(url, options);

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
