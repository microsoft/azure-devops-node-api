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
import TeamInterfaces = require("./interfaces/TeamInterfaces");
import VSSInterfaces = require("./interfaces/common/VSSInterfaces");

export interface ITeamApi extends basem.ClientApiBase {
    getTeamMembers(projectId: string, teamId: string, top?: number, skip?: number): Promise<VSSInterfaces.IdentityRef[]>;
    createTeam(team: TeamInterfaces.WebApiTeam, projectId: string): Promise<TeamInterfaces.WebApiTeam>;
    deleteTeam(projectId: string, teamId: string): Promise<void>;
    getTeam(projectId: string, teamId: string): Promise<TeamInterfaces.WebApiTeam>;
    getTeams(projectId: string, top?: number, skip?: number): Promise<TeamInterfaces.WebApiTeam[]>;
    updateTeam(teamData: TeamInterfaces.WebApiTeam, projectId: string, teamId: string): Promise<TeamInterfaces.WebApiTeam>;
}

export class TeamApi extends basem.ClientApiBase implements ITeamApi {
    constructor(baseUrl: string, handlers: VsoBaseInterfaces.IRequestHandler[]) {
        super(baseUrl, handlers, 'node-Core-api');
    }

    /**
    * @param {string} projectId
    * @param {string} teamId
    * @param {number} top
    * @param {number} skip
    */
    public async getTeamMembers(
        projectId: string,
        teamId: string,
        top?: number,
        skip?: number
        ): Promise<VSSInterfaces.IdentityRef[]> {

        return new Promise<VSSInterfaces.IdentityRef[]>(async (resolve, reject) => {
            let routeValues: any = {
                projectId: projectId,
                teamId: teamId
            };

            let queryValues: any = {
                '$top': top,
                '$skip': skip,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "core",
                    "294c494c-2600-4d7e-b76c-3dd50c3c95be",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<VSSInterfaces.IdentityRef[]>;
                res = await this.rest.get<VSSInterfaces.IdentityRef[]>(url, options);

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
    * Creates a team
    * 
    * @param {TeamInterfaces.WebApiTeam} team - The team data used to create the team.
    * @param {string} projectId - The name or id (GUID) of the team project in which to create the team.
    */
    public async createTeam(
        team: TeamInterfaces.WebApiTeam,
        projectId: string
        ): Promise<TeamInterfaces.WebApiTeam> {

        return new Promise<TeamInterfaces.WebApiTeam>(async (resolve, reject) => {
            let routeValues: any = {
                projectId: projectId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "core",
                    "d30a3dd1-f8ba-442a-b86a-bd0c0c383e59",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<TeamInterfaces.WebApiTeam>;
                res = await this.rest.create<TeamInterfaces.WebApiTeam>(url, team, options);

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
    * Deletes a team
    * 
    * @param {string} projectId - The name or id (GUID) of the team project containing the team to delete.
    * @param {string} teamId - The name of id of the team to delete.
    */
    public async deleteTeam(
        projectId: string,
        teamId: string
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
                projectId: projectId,
                teamId: teamId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "core",
                    "d30a3dd1-f8ba-442a-b86a-bd0c0c383e59",
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
    * Gets a team
    * 
    * @param {string} projectId
    * @param {string} teamId
    */
    public async getTeam(
        projectId: string,
        teamId: string
        ): Promise<TeamInterfaces.WebApiTeam> {

        return new Promise<TeamInterfaces.WebApiTeam>(async (resolve, reject) => {
            let routeValues: any = {
                projectId: projectId,
                teamId: teamId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "core",
                    "d30a3dd1-f8ba-442a-b86a-bd0c0c383e59",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<TeamInterfaces.WebApiTeam>;
                res = await this.rest.get<TeamInterfaces.WebApiTeam>(url, options);

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
    * @param {string} projectId
    * @param {number} top
    * @param {number} skip
    */
    public async getTeams(
        projectId: string,
        top?: number,
        skip?: number
        ): Promise<TeamInterfaces.WebApiTeam[]> {

        return new Promise<TeamInterfaces.WebApiTeam[]>(async (resolve, reject) => {
            let routeValues: any = {
                projectId: projectId
            };

            let queryValues: any = {
                '$top': top,
                '$skip': skip,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "core",
                    "d30a3dd1-f8ba-442a-b86a-bd0c0c383e59",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<TeamInterfaces.WebApiTeam[]>;
                res = await this.rest.get<TeamInterfaces.WebApiTeam[]>(url, options);

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
    * Updates a team's name and/or description
    * 
    * @param {TeamInterfaces.WebApiTeam} teamData
    * @param {string} projectId - The name or id (GUID) of the team project containing the team to update.
    * @param {string} teamId - The name of id of the team to update.
    */
    public async updateTeam(
        teamData: TeamInterfaces.WebApiTeam,
        projectId: string,
        teamId: string
        ): Promise<TeamInterfaces.WebApiTeam> {

        return new Promise<TeamInterfaces.WebApiTeam>(async (resolve, reject) => {
            let routeValues: any = {
                projectId: projectId,
                teamId: teamId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "core",
                    "d30a3dd1-f8ba-442a-b86a-bd0c0c383e59",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<TeamInterfaces.WebApiTeam>;
                res = await this.rest.update<TeamInterfaces.WebApiTeam>(url, teamData, options);

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
