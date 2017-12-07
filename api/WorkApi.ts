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
import TfsCoreInterfaces = require("./interfaces/CoreInterfaces");
import WorkInterfaces = require("./interfaces/WorkInterfaces");

export interface IWorkApi extends basem.ClientApiBase {
    getBacklogConfigurations(teamContext: TfsCoreInterfaces.TeamContext): Promise<WorkInterfaces.BacklogConfiguration>;
    getColumnSuggestedValues(project?: string): Promise<WorkInterfaces.BoardSuggestedValue[]>;
    getBoardMappingParentItems(teamContext: TfsCoreInterfaces.TeamContext, childBacklogContextCategoryRefName: string, workitemIds: number[]): Promise<WorkInterfaces.ParentChildWIMap[]>;
    getRowSuggestedValues(project?: string): Promise<WorkInterfaces.BoardSuggestedValue[]>;
    getBoard(teamContext: TfsCoreInterfaces.TeamContext, id: string): Promise<WorkInterfaces.Board>;
    getBoards(teamContext: TfsCoreInterfaces.TeamContext): Promise<WorkInterfaces.BoardReference[]>;
    setBoardOptions(options: { [key: string] : string; }, teamContext: TfsCoreInterfaces.TeamContext, id: string): Promise<{ [key: string] : string; }>;
    getBoardUserSettings(teamContext: TfsCoreInterfaces.TeamContext, board: string): Promise<WorkInterfaces.BoardUserSettings>;
    updateBoardUserSettings(boardUserSettings: { [key: string] : string; }, teamContext: TfsCoreInterfaces.TeamContext, board: string): Promise<WorkInterfaces.BoardUserSettings>;
    getCapacities(teamContext: TfsCoreInterfaces.TeamContext, iterationId: string): Promise<WorkInterfaces.TeamMemberCapacity[]>;
    getCapacity(teamContext: TfsCoreInterfaces.TeamContext, iterationId: string, teamMemberId: string): Promise<WorkInterfaces.TeamMemberCapacity>;
    replaceCapacities(capacities: WorkInterfaces.TeamMemberCapacity[], teamContext: TfsCoreInterfaces.TeamContext, iterationId: string): Promise<WorkInterfaces.TeamMemberCapacity[]>;
    updateCapacity(patch: WorkInterfaces.CapacityPatch, teamContext: TfsCoreInterfaces.TeamContext, iterationId: string, teamMemberId: string): Promise<WorkInterfaces.TeamMemberCapacity>;
    getBoardCardRuleSettings(teamContext: TfsCoreInterfaces.TeamContext, board: string): Promise<WorkInterfaces.BoardCardRuleSettings>;
    updateBoardCardRuleSettings(boardCardRuleSettings: WorkInterfaces.BoardCardRuleSettings, teamContext: TfsCoreInterfaces.TeamContext, board: string): Promise<WorkInterfaces.BoardCardRuleSettings>;
    getBoardCardSettings(teamContext: TfsCoreInterfaces.TeamContext, board: string): Promise<WorkInterfaces.BoardCardSettings>;
    updateBoardCardSettings(boardCardSettingsToSave: WorkInterfaces.BoardCardSettings, teamContext: TfsCoreInterfaces.TeamContext, board: string): Promise<WorkInterfaces.BoardCardSettings>;
    getBoardChart(teamContext: TfsCoreInterfaces.TeamContext, board: string, name: string): Promise<WorkInterfaces.BoardChart>;
    getBoardCharts(teamContext: TfsCoreInterfaces.TeamContext, board: string): Promise<WorkInterfaces.BoardChartReference[]>;
    updateBoardChart(chart: WorkInterfaces.BoardChart, teamContext: TfsCoreInterfaces.TeamContext, board: string, name: string): Promise<WorkInterfaces.BoardChart>;
    getBoardColumns(teamContext: TfsCoreInterfaces.TeamContext, board: string): Promise<WorkInterfaces.BoardColumn[]>;
    updateBoardColumns(boardColumns: WorkInterfaces.BoardColumn[], teamContext: TfsCoreInterfaces.TeamContext, board: string): Promise<WorkInterfaces.BoardColumn[]>;
    getDeliveryTimelineData(project: string, id: string, revision?: number, startDate?: Date, endDate?: Date): Promise<WorkInterfaces.DeliveryViewData>;
    deleteTeamIteration(teamContext: TfsCoreInterfaces.TeamContext, id: string): Promise<void>;
    getTeamIteration(teamContext: TfsCoreInterfaces.TeamContext, id: string): Promise<WorkInterfaces.TeamSettingsIteration>;
    getTeamIterations(teamContext: TfsCoreInterfaces.TeamContext, timeframe?: string): Promise<WorkInterfaces.TeamSettingsIteration[]>;
    postTeamIteration(iteration: WorkInterfaces.TeamSettingsIteration, teamContext: TfsCoreInterfaces.TeamContext): Promise<WorkInterfaces.TeamSettingsIteration>;
    createPlan(postedPlan: WorkInterfaces.CreatePlan, project: string): Promise<WorkInterfaces.Plan>;
    deletePlan(project: string, id: string): Promise<void>;
    getPlan(project: string, id: string): Promise<WorkInterfaces.Plan>;
    getPlans(project: string): Promise<WorkInterfaces.Plan[]>;
    updatePlan(updatedPlan: WorkInterfaces.UpdatePlan, project: string, id: string): Promise<WorkInterfaces.Plan>;
    getProcessConfiguration(project: string): Promise<WorkInterfaces.ProcessConfiguration>;
    getBoardRows(teamContext: TfsCoreInterfaces.TeamContext, board: string): Promise<WorkInterfaces.BoardRow[]>;
    updateBoardRows(boardRows: WorkInterfaces.BoardRow[], teamContext: TfsCoreInterfaces.TeamContext, board: string): Promise<WorkInterfaces.BoardRow[]>;
    getTeamDaysOff(teamContext: TfsCoreInterfaces.TeamContext, iterationId: string): Promise<WorkInterfaces.TeamSettingsDaysOff>;
    updateTeamDaysOff(daysOffPatch: WorkInterfaces.TeamSettingsDaysOffPatch, teamContext: TfsCoreInterfaces.TeamContext, iterationId: string): Promise<WorkInterfaces.TeamSettingsDaysOff>;
    getTeamFieldValues(teamContext: TfsCoreInterfaces.TeamContext): Promise<WorkInterfaces.TeamFieldValues>;
    updateTeamFieldValues(patch: WorkInterfaces.TeamFieldValuesPatch, teamContext: TfsCoreInterfaces.TeamContext): Promise<WorkInterfaces.TeamFieldValues>;
    getTeamSettings(teamContext: TfsCoreInterfaces.TeamContext): Promise<WorkInterfaces.TeamSetting>;
    updateTeamSettings(teamSettingsPatch: WorkInterfaces.TeamSettingsPatch, teamContext: TfsCoreInterfaces.TeamContext): Promise<WorkInterfaces.TeamSetting>;
}

export class WorkApi extends basem.ClientApiBase implements IWorkApi {
    constructor(baseUrl: string, handlers: VsoBaseInterfaces.IRequestHandler[], options?: VsoBaseInterfaces.IRequestOptions) {
        super(baseUrl, handlers, 'node-Work-api', options);
    }

    /**
     * Gets backlog configuration for a team
     * 
     * @param {TfsCoreInterfaces.TeamContext} teamContext - The team context for the operation
     */
    public async getBacklogConfigurations(
        teamContext: TfsCoreInterfaces.TeamContext
        ): Promise<WorkInterfaces.BacklogConfiguration> {

        return new Promise<WorkInterfaces.BacklogConfiguration>(async (resolve, reject) => {
            let project = teamContext.projectId || teamContext.project;
            let team = teamContext.teamId || teamContext.team;

            let routeValues: any = {
                project: project,
                team: team
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "4.1-preview.1",
                    "work",
                    "7799f497-3cb5-4f16-ad4f-5cd06012db64",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<WorkInterfaces.BacklogConfiguration>;
                res = await this.rest.get<WorkInterfaces.BacklogConfiguration>(url, options);

                let ret = this.formatResponse(res.result,
                                              WorkInterfaces.TypeInfo.BacklogConfiguration,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Get available board columns in a project
     * 
     * @param {string} project - Project ID or project name
     */
    public async getColumnSuggestedValues(
        project?: string
        ): Promise<WorkInterfaces.BoardSuggestedValue[]> {

        return new Promise<WorkInterfaces.BoardSuggestedValue[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "4.1-preview.1",
                    "work",
                    "eb7ec5a3-1ba3-4fd1-b834-49a5a387e57d",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<WorkInterfaces.BoardSuggestedValue[]>;
                res = await this.rest.get<WorkInterfaces.BoardSuggestedValue[]>(url, options);

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
     * Returns the list of parent field filter model for the given list of workitem ids
     * 
     * @param {TfsCoreInterfaces.TeamContext} teamContext - The team context for the operation
     * @param {string} childBacklogContextCategoryRefName
     * @param {number[]} workitemIds
     */
    public async getBoardMappingParentItems(
        teamContext: TfsCoreInterfaces.TeamContext,
        childBacklogContextCategoryRefName: string,
        workitemIds: number[]
        ): Promise<WorkInterfaces.ParentChildWIMap[]> {

        return new Promise<WorkInterfaces.ParentChildWIMap[]>(async (resolve, reject) => {
            let project = teamContext.projectId || teamContext.project;
            let team = teamContext.teamId || teamContext.team;

            let routeValues: any = {
                project: project,
                team: team
            };

            let queryValues: any = {
                childBacklogContextCategoryRefName: childBacklogContextCategoryRefName,
                workitemIds: workitemIds && workitemIds.join(","),
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "4.1-preview.1",
                    "work",
                    "186abea3-5c35-432f-9e28-7a15b4312a0e",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<WorkInterfaces.ParentChildWIMap[]>;
                res = await this.rest.get<WorkInterfaces.ParentChildWIMap[]>(url, options);

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
     * Get available board rows in a project
     * 
     * @param {string} project - Project ID or project name
     */
    public async getRowSuggestedValues(
        project?: string
        ): Promise<WorkInterfaces.BoardSuggestedValue[]> {

        return new Promise<WorkInterfaces.BoardSuggestedValue[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "4.1-preview.1",
                    "work",
                    "bb494cc6-a0f5-4c6c-8dca-ea6912e79eb9",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<WorkInterfaces.BoardSuggestedValue[]>;
                res = await this.rest.get<WorkInterfaces.BoardSuggestedValue[]>(url, options);

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
     * Get board
     * 
     * @param {TfsCoreInterfaces.TeamContext} teamContext - The team context for the operation
     * @param {string} id - identifier for board, either board's backlog level name (Eg:"Stories") or Id
     */
    public async getBoard(
        teamContext: TfsCoreInterfaces.TeamContext,
        id: string
        ): Promise<WorkInterfaces.Board> {

        return new Promise<WorkInterfaces.Board>(async (resolve, reject) => {
            let project = teamContext.projectId || teamContext.project;
            let team = teamContext.teamId || teamContext.team;

            let routeValues: any = {
                project: project,
                team: team,
                id: id
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "4.1-preview.1",
                    "work",
                    "23ad19fc-3b8e-4877-8462-b3f92bc06b40",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<WorkInterfaces.Board>;
                res = await this.rest.get<WorkInterfaces.Board>(url, options);

                let ret = this.formatResponse(res.result,
                                              WorkInterfaces.TypeInfo.Board,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Get boards
     * 
     * @param {TfsCoreInterfaces.TeamContext} teamContext - The team context for the operation
     */
    public async getBoards(
        teamContext: TfsCoreInterfaces.TeamContext
        ): Promise<WorkInterfaces.BoardReference[]> {

        return new Promise<WorkInterfaces.BoardReference[]>(async (resolve, reject) => {
            let project = teamContext.projectId || teamContext.project;
            let team = teamContext.teamId || teamContext.team;

            let routeValues: any = {
                project: project,
                team: team
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "4.1-preview.1",
                    "work",
                    "23ad19fc-3b8e-4877-8462-b3f92bc06b40",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<WorkInterfaces.BoardReference[]>;
                res = await this.rest.get<WorkInterfaces.BoardReference[]>(url, options);

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
     * Update board options
     * 
     * @param {{ [key: string] : string; }} options - options to updated
     * @param {TfsCoreInterfaces.TeamContext} teamContext - The team context for the operation
     * @param {string} id - identifier for board, either category plural name (Eg:"Stories") or guid
     */
    public async setBoardOptions(
        options: { [key: string] : string; },
        teamContext: TfsCoreInterfaces.TeamContext,
        id: string
        ): Promise<{ [key: string] : string; }> {

        return new Promise<{ [key: string] : string; }>(async (resolve, reject) => {
            let project = teamContext.projectId || teamContext.project;
            let team = teamContext.teamId || teamContext.team;

            let routeValues: any = {
                project: project,
                team: team,
                id: id
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "4.1-preview.1",
                    "work",
                    "23ad19fc-3b8e-4877-8462-b3f92bc06b40",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<{ [key: string] : string; }>;
                res = await this.rest.replace<{ [key: string] : string; }>(url, options, options);

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
     * Get board user settings for a board id
     * 
     * @param {TfsCoreInterfaces.TeamContext} teamContext - The team context for the operation
     * @param {string} board - Board ID or Name
     */
    public async getBoardUserSettings(
        teamContext: TfsCoreInterfaces.TeamContext,
        board: string
        ): Promise<WorkInterfaces.BoardUserSettings> {

        return new Promise<WorkInterfaces.BoardUserSettings>(async (resolve, reject) => {
            let project = teamContext.projectId || teamContext.project;
            let team = teamContext.teamId || teamContext.team;

            let routeValues: any = {
                project: project,
                team: team,
                board: board
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "4.1-preview.1",
                    "work",
                    "b30d9f58-1891-4b0a-b168-c46408f919b0",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<WorkInterfaces.BoardUserSettings>;
                res = await this.rest.get<WorkInterfaces.BoardUserSettings>(url, options);

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
     * Update board user settings for the board id
     * 
     * @param {{ [key: string] : string; }} boardUserSettings
     * @param {TfsCoreInterfaces.TeamContext} teamContext - The team context for the operation
     * @param {string} board
     */
    public async updateBoardUserSettings(
        boardUserSettings: { [key: string] : string; },
        teamContext: TfsCoreInterfaces.TeamContext,
        board: string
        ): Promise<WorkInterfaces.BoardUserSettings> {

        return new Promise<WorkInterfaces.BoardUserSettings>(async (resolve, reject) => {
            let project = teamContext.projectId || teamContext.project;
            let team = teamContext.teamId || teamContext.team;

            let routeValues: any = {
                project: project,
                team: team,
                board: board
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "4.1-preview.1",
                    "work",
                    "b30d9f58-1891-4b0a-b168-c46408f919b0",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<WorkInterfaces.BoardUserSettings>;
                res = await this.rest.update<WorkInterfaces.BoardUserSettings>(url, boardUserSettings, options);

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
     * Get a team's capacity
     * 
     * @param {TfsCoreInterfaces.TeamContext} teamContext - The team context for the operation
     * @param {string} iterationId - ID of the iteration
     */
    public async getCapacities(
        teamContext: TfsCoreInterfaces.TeamContext,
        iterationId: string
        ): Promise<WorkInterfaces.TeamMemberCapacity[]> {

        return new Promise<WorkInterfaces.TeamMemberCapacity[]>(async (resolve, reject) => {
            let project = teamContext.projectId || teamContext.project;
            let team = teamContext.teamId || teamContext.team;

            let routeValues: any = {
                project: project,
                team: team,
                iterationId: iterationId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "4.1-preview.1",
                    "work",
                    "74412d15-8c1a-4352-a48d-ef1ed5587d57",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<WorkInterfaces.TeamMemberCapacity[]>;
                res = await this.rest.get<WorkInterfaces.TeamMemberCapacity[]>(url, options);

                let ret = this.formatResponse(res.result,
                                              WorkInterfaces.TypeInfo.TeamMemberCapacity,
                                              true);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Get a team member's capacity
     * 
     * @param {TfsCoreInterfaces.TeamContext} teamContext - The team context for the operation
     * @param {string} iterationId - ID of the iteration
     * @param {string} teamMemberId - ID of the team member
     */
    public async getCapacity(
        teamContext: TfsCoreInterfaces.TeamContext,
        iterationId: string,
        teamMemberId: string
        ): Promise<WorkInterfaces.TeamMemberCapacity> {

        return new Promise<WorkInterfaces.TeamMemberCapacity>(async (resolve, reject) => {
            let project = teamContext.projectId || teamContext.project;
            let team = teamContext.teamId || teamContext.team;

            let routeValues: any = {
                project: project,
                team: team,
                iterationId: iterationId,
                teamMemberId: teamMemberId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "4.1-preview.1",
                    "work",
                    "74412d15-8c1a-4352-a48d-ef1ed5587d57",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<WorkInterfaces.TeamMemberCapacity>;
                res = await this.rest.get<WorkInterfaces.TeamMemberCapacity>(url, options);

                let ret = this.formatResponse(res.result,
                                              WorkInterfaces.TypeInfo.TeamMemberCapacity,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Replace a team's capacity
     * 
     * @param {WorkInterfaces.TeamMemberCapacity[]} capacities - Team capacity to replace
     * @param {TfsCoreInterfaces.TeamContext} teamContext - The team context for the operation
     * @param {string} iterationId - ID of the iteration
     */
    public async replaceCapacities(
        capacities: WorkInterfaces.TeamMemberCapacity[],
        teamContext: TfsCoreInterfaces.TeamContext,
        iterationId: string
        ): Promise<WorkInterfaces.TeamMemberCapacity[]> {

        return new Promise<WorkInterfaces.TeamMemberCapacity[]>(async (resolve, reject) => {
            let project = teamContext.projectId || teamContext.project;
            let team = teamContext.teamId || teamContext.team;

            let routeValues: any = {
                project: project,
                team: team,
                iterationId: iterationId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "4.1-preview.1",
                    "work",
                    "74412d15-8c1a-4352-a48d-ef1ed5587d57",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<WorkInterfaces.TeamMemberCapacity[]>;
                res = await this.rest.replace<WorkInterfaces.TeamMemberCapacity[]>(url, capacities, options);

                let ret = this.formatResponse(res.result,
                                              WorkInterfaces.TypeInfo.TeamMemberCapacity,
                                              true);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Update a team member's capacity
     * 
     * @param {WorkInterfaces.CapacityPatch} patch - Updated capacity
     * @param {TfsCoreInterfaces.TeamContext} teamContext - The team context for the operation
     * @param {string} iterationId - ID of the iteration
     * @param {string} teamMemberId - ID of the team member
     */
    public async updateCapacity(
        patch: WorkInterfaces.CapacityPatch,
        teamContext: TfsCoreInterfaces.TeamContext,
        iterationId: string,
        teamMemberId: string
        ): Promise<WorkInterfaces.TeamMemberCapacity> {

        return new Promise<WorkInterfaces.TeamMemberCapacity>(async (resolve, reject) => {
            let project = teamContext.projectId || teamContext.project;
            let team = teamContext.teamId || teamContext.team;

            let routeValues: any = {
                project: project,
                team: team,
                iterationId: iterationId,
                teamMemberId: teamMemberId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "4.1-preview.1",
                    "work",
                    "74412d15-8c1a-4352-a48d-ef1ed5587d57",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<WorkInterfaces.TeamMemberCapacity>;
                res = await this.rest.update<WorkInterfaces.TeamMemberCapacity>(url, patch, options);

                let ret = this.formatResponse(res.result,
                                              WorkInterfaces.TypeInfo.TeamMemberCapacity,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Get board card Rule settings for the board id or board by name
     * 
     * @param {TfsCoreInterfaces.TeamContext} teamContext - The team context for the operation
     * @param {string} board
     */
    public async getBoardCardRuleSettings(
        teamContext: TfsCoreInterfaces.TeamContext,
        board: string
        ): Promise<WorkInterfaces.BoardCardRuleSettings> {

        return new Promise<WorkInterfaces.BoardCardRuleSettings>(async (resolve, reject) => {
            let project = teamContext.projectId || teamContext.project;
            let team = teamContext.teamId || teamContext.team;

            let routeValues: any = {
                project: project,
                team: team,
                board: board
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "4.1-preview.1",
                    "work",
                    "b044a3d9-02ea-49c7-91a1-b730949cc896",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<WorkInterfaces.BoardCardRuleSettings>;
                res = await this.rest.get<WorkInterfaces.BoardCardRuleSettings>(url, options);

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
     * Update board card Rule settings for the board id or board by name
     * 
     * @param {WorkInterfaces.BoardCardRuleSettings} boardCardRuleSettings
     * @param {TfsCoreInterfaces.TeamContext} teamContext - The team context for the operation
     * @param {string} board
     */
    public async updateBoardCardRuleSettings(
        boardCardRuleSettings: WorkInterfaces.BoardCardRuleSettings,
        teamContext: TfsCoreInterfaces.TeamContext,
        board: string
        ): Promise<WorkInterfaces.BoardCardRuleSettings> {

        return new Promise<WorkInterfaces.BoardCardRuleSettings>(async (resolve, reject) => {
            let project = teamContext.projectId || teamContext.project;
            let team = teamContext.teamId || teamContext.team;

            let routeValues: any = {
                project: project,
                team: team,
                board: board
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "4.1-preview.1",
                    "work",
                    "b044a3d9-02ea-49c7-91a1-b730949cc896",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<WorkInterfaces.BoardCardRuleSettings>;
                res = await this.rest.update<WorkInterfaces.BoardCardRuleSettings>(url, boardCardRuleSettings, options);

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
     * Get board card settings for the board id or board by name
     * 
     * @param {TfsCoreInterfaces.TeamContext} teamContext - The team context for the operation
     * @param {string} board
     */
    public async getBoardCardSettings(
        teamContext: TfsCoreInterfaces.TeamContext,
        board: string
        ): Promise<WorkInterfaces.BoardCardSettings> {

        return new Promise<WorkInterfaces.BoardCardSettings>(async (resolve, reject) => {
            let project = teamContext.projectId || teamContext.project;
            let team = teamContext.teamId || teamContext.team;

            let routeValues: any = {
                project: project,
                team: team,
                board: board
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "4.1-preview.1",
                    "work",
                    "07c3b467-bc60-4f05-8e34-599ce288fafc",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<WorkInterfaces.BoardCardSettings>;
                res = await this.rest.get<WorkInterfaces.BoardCardSettings>(url, options);

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
     * Update board card settings for the board id or board by name
     * 
     * @param {WorkInterfaces.BoardCardSettings} boardCardSettingsToSave
     * @param {TfsCoreInterfaces.TeamContext} teamContext - The team context for the operation
     * @param {string} board
     */
    public async updateBoardCardSettings(
        boardCardSettingsToSave: WorkInterfaces.BoardCardSettings,
        teamContext: TfsCoreInterfaces.TeamContext,
        board: string
        ): Promise<WorkInterfaces.BoardCardSettings> {

        return new Promise<WorkInterfaces.BoardCardSettings>(async (resolve, reject) => {
            let project = teamContext.projectId || teamContext.project;
            let team = teamContext.teamId || teamContext.team;

            let routeValues: any = {
                project: project,
                team: team,
                board: board
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "4.1-preview.1",
                    "work",
                    "07c3b467-bc60-4f05-8e34-599ce288fafc",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<WorkInterfaces.BoardCardSettings>;
                res = await this.rest.replace<WorkInterfaces.BoardCardSettings>(url, boardCardSettingsToSave, options);

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
     * Get a board chart
     * 
     * @param {TfsCoreInterfaces.TeamContext} teamContext - The team context for the operation
     * @param {string} board - Identifier for board, either board's backlog level name (Eg:"Stories") or Id
     * @param {string} name - The chart name
     */
    public async getBoardChart(
        teamContext: TfsCoreInterfaces.TeamContext,
        board: string,
        name: string
        ): Promise<WorkInterfaces.BoardChart> {

        return new Promise<WorkInterfaces.BoardChart>(async (resolve, reject) => {
            let project = teamContext.projectId || teamContext.project;
            let team = teamContext.teamId || teamContext.team;

            let routeValues: any = {
                project: project,
                team: team,
                board: board,
                name: name
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "4.1-preview.1",
                    "work",
                    "45fe888c-239e-49fd-958c-df1a1ab21d97",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<WorkInterfaces.BoardChart>;
                res = await this.rest.get<WorkInterfaces.BoardChart>(url, options);

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
     * Get board charts
     * 
     * @param {TfsCoreInterfaces.TeamContext} teamContext - The team context for the operation
     * @param {string} board - Identifier for board, either board's backlog level name (Eg:"Stories") or Id
     */
    public async getBoardCharts(
        teamContext: TfsCoreInterfaces.TeamContext,
        board: string
        ): Promise<WorkInterfaces.BoardChartReference[]> {

        return new Promise<WorkInterfaces.BoardChartReference[]>(async (resolve, reject) => {
            let project = teamContext.projectId || teamContext.project;
            let team = teamContext.teamId || teamContext.team;

            let routeValues: any = {
                project: project,
                team: team,
                board: board
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "4.1-preview.1",
                    "work",
                    "45fe888c-239e-49fd-958c-df1a1ab21d97",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<WorkInterfaces.BoardChartReference[]>;
                res = await this.rest.get<WorkInterfaces.BoardChartReference[]>(url, options);

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
     * Update a board chart
     * 
     * @param {WorkInterfaces.BoardChart} chart
     * @param {TfsCoreInterfaces.TeamContext} teamContext - The team context for the operation
     * @param {string} board - Identifier for board, either board's backlog level name (Eg:"Stories") or Id
     * @param {string} name - The chart name
     */
    public async updateBoardChart(
        chart: WorkInterfaces.BoardChart,
        teamContext: TfsCoreInterfaces.TeamContext,
        board: string,
        name: string
        ): Promise<WorkInterfaces.BoardChart> {

        return new Promise<WorkInterfaces.BoardChart>(async (resolve, reject) => {
            let project = teamContext.projectId || teamContext.project;
            let team = teamContext.teamId || teamContext.team;

            let routeValues: any = {
                project: project,
                team: team,
                board: board,
                name: name
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "4.1-preview.1",
                    "work",
                    "45fe888c-239e-49fd-958c-df1a1ab21d97",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<WorkInterfaces.BoardChart>;
                res = await this.rest.update<WorkInterfaces.BoardChart>(url, chart, options);

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
     * Get columns on a board
     * 
     * @param {TfsCoreInterfaces.TeamContext} teamContext - The team context for the operation
     * @param {string} board - Name or ID of the specific board
     */
    public async getBoardColumns(
        teamContext: TfsCoreInterfaces.TeamContext,
        board: string
        ): Promise<WorkInterfaces.BoardColumn[]> {

        return new Promise<WorkInterfaces.BoardColumn[]>(async (resolve, reject) => {
            let project = teamContext.projectId || teamContext.project;
            let team = teamContext.teamId || teamContext.team;

            let routeValues: any = {
                project: project,
                team: team,
                board: board
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "4.1-preview.1",
                    "work",
                    "c555d7ff-84e1-47df-9923-a3fe0cd8751b",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<WorkInterfaces.BoardColumn[]>;
                res = await this.rest.get<WorkInterfaces.BoardColumn[]>(url, options);

                let ret = this.formatResponse(res.result,
                                              WorkInterfaces.TypeInfo.BoardColumn,
                                              true);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Update columns on a board
     * 
     * @param {WorkInterfaces.BoardColumn[]} boardColumns - List of board columns to update
     * @param {TfsCoreInterfaces.TeamContext} teamContext - The team context for the operation
     * @param {string} board - Name or ID of the specific board
     */
    public async updateBoardColumns(
        boardColumns: WorkInterfaces.BoardColumn[],
        teamContext: TfsCoreInterfaces.TeamContext,
        board: string
        ): Promise<WorkInterfaces.BoardColumn[]> {

        return new Promise<WorkInterfaces.BoardColumn[]>(async (resolve, reject) => {
            let project = teamContext.projectId || teamContext.project;
            let team = teamContext.teamId || teamContext.team;

            let routeValues: any = {
                project: project,
                team: team,
                board: board
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "4.1-preview.1",
                    "work",
                    "c555d7ff-84e1-47df-9923-a3fe0cd8751b",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<WorkInterfaces.BoardColumn[]>;
                res = await this.rest.replace<WorkInterfaces.BoardColumn[]>(url, boardColumns, options);

                let ret = this.formatResponse(res.result,
                                              WorkInterfaces.TypeInfo.BoardColumn,
                                              true);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Get Delivery View Data
     * 
     * @param {string} project - Project ID or project name
     * @param {string} id - Identifier for delivery view
     * @param {number} revision - Revision of the plan for which you want data. If the current plan is a different revision you will get an ViewRevisionMismatchException exception. If you do not supply a revision you will get data for the latest revision.
     * @param {Date} startDate - The start date of timeline
     * @param {Date} endDate - The end date of timeline
     */
    public async getDeliveryTimelineData(
        project: string,
        id: string,
        revision?: number,
        startDate?: Date,
        endDate?: Date
        ): Promise<WorkInterfaces.DeliveryViewData> {

        return new Promise<WorkInterfaces.DeliveryViewData>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                id: id
            };

            let queryValues: any = {
                revision: revision,
                startDate: startDate,
                endDate: endDate,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "4.1-preview.1",
                    "work",
                    "bdd0834e-101f-49f0-a6ae-509f384a12b4",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<WorkInterfaces.DeliveryViewData>;
                res = await this.rest.get<WorkInterfaces.DeliveryViewData>(url, options);

                let ret = this.formatResponse(res.result,
                                              WorkInterfaces.TypeInfo.DeliveryViewData,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Delete a team's iteration by iterationId
     * 
     * @param {TfsCoreInterfaces.TeamContext} teamContext - The team context for the operation
     * @param {string} id - ID of the iteration
     */
    public async deleteTeamIteration(
        teamContext: TfsCoreInterfaces.TeamContext,
        id: string
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            let project = teamContext.projectId || teamContext.project;
            let team = teamContext.teamId || teamContext.team;

            let routeValues: any = {
                project: project,
                team: team,
                id: id
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "4.1-preview.1",
                    "work",
                    "c9175577-28a1-4b06-9197-8636af9f64ad",
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
     * Get team's iteration by iterationId
     * 
     * @param {TfsCoreInterfaces.TeamContext} teamContext - The team context for the operation
     * @param {string} id - ID of the iteration
     */
    public async getTeamIteration(
        teamContext: TfsCoreInterfaces.TeamContext,
        id: string
        ): Promise<WorkInterfaces.TeamSettingsIteration> {

        return new Promise<WorkInterfaces.TeamSettingsIteration>(async (resolve, reject) => {
            let project = teamContext.projectId || teamContext.project;
            let team = teamContext.teamId || teamContext.team;

            let routeValues: any = {
                project: project,
                team: team,
                id: id
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "4.1-preview.1",
                    "work",
                    "c9175577-28a1-4b06-9197-8636af9f64ad",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<WorkInterfaces.TeamSettingsIteration>;
                res = await this.rest.get<WorkInterfaces.TeamSettingsIteration>(url, options);

                let ret = this.formatResponse(res.result,
                                              WorkInterfaces.TypeInfo.TeamSettingsIteration,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Get a team's iterations using timeframe filter
     * 
     * @param {TfsCoreInterfaces.TeamContext} teamContext - The team context for the operation
     * @param {string} timeframe - A filter for which iterations are returned based on relative time
     */
    public async getTeamIterations(
        teamContext: TfsCoreInterfaces.TeamContext,
        timeframe?: string
        ): Promise<WorkInterfaces.TeamSettingsIteration[]> {

        return new Promise<WorkInterfaces.TeamSettingsIteration[]>(async (resolve, reject) => {
            let project = teamContext.projectId || teamContext.project;
            let team = teamContext.teamId || teamContext.team;

            let routeValues: any = {
                project: project,
                team: team
            };

            let queryValues: any = {
                '$timeframe': timeframe,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "4.1-preview.1",
                    "work",
                    "c9175577-28a1-4b06-9197-8636af9f64ad",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<WorkInterfaces.TeamSettingsIteration[]>;
                res = await this.rest.get<WorkInterfaces.TeamSettingsIteration[]>(url, options);

                let ret = this.formatResponse(res.result,
                                              WorkInterfaces.TypeInfo.TeamSettingsIteration,
                                              true);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Add an iteration to the team
     * 
     * @param {WorkInterfaces.TeamSettingsIteration} iteration - Iteration to add
     * @param {TfsCoreInterfaces.TeamContext} teamContext - The team context for the operation
     */
    public async postTeamIteration(
        iteration: WorkInterfaces.TeamSettingsIteration,
        teamContext: TfsCoreInterfaces.TeamContext
        ): Promise<WorkInterfaces.TeamSettingsIteration> {

        return new Promise<WorkInterfaces.TeamSettingsIteration>(async (resolve, reject) => {
            let project = teamContext.projectId || teamContext.project;
            let team = teamContext.teamId || teamContext.team;

            let routeValues: any = {
                project: project,
                team: team
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "4.1-preview.1",
                    "work",
                    "c9175577-28a1-4b06-9197-8636af9f64ad",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<WorkInterfaces.TeamSettingsIteration>;
                res = await this.rest.create<WorkInterfaces.TeamSettingsIteration>(url, iteration, options);

                let ret = this.formatResponse(res.result,
                                              WorkInterfaces.TypeInfo.TeamSettingsIteration,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Add a new plan for the team
     * 
     * @param {WorkInterfaces.CreatePlan} postedPlan - Plan definition
     * @param {string} project - Project ID or project name
     */
    public async createPlan(
        postedPlan: WorkInterfaces.CreatePlan,
        project: string
        ): Promise<WorkInterfaces.Plan> {

        return new Promise<WorkInterfaces.Plan>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "4.1-preview.1",
                    "work",
                    "0b42cb47-cd73-4810-ac90-19c9ba147453",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<WorkInterfaces.Plan>;
                res = await this.rest.create<WorkInterfaces.Plan>(url, postedPlan, options);

                let ret = this.formatResponse(res.result,
                                              WorkInterfaces.TypeInfo.Plan,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Delete the specified plan
     * 
     * @param {string} project - Project ID or project name
     * @param {string} id - Identifier of the plan
     */
    public async deletePlan(
        project: string,
        id: string
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                id: id
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "4.1-preview.1",
                    "work",
                    "0b42cb47-cd73-4810-ac90-19c9ba147453",
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
     * Get the information for the specified plan
     * 
     * @param {string} project - Project ID or project name
     * @param {string} id - Identifier of the plan
     */
    public async getPlan(
        project: string,
        id: string
        ): Promise<WorkInterfaces.Plan> {

        return new Promise<WorkInterfaces.Plan>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                id: id
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "4.1-preview.1",
                    "work",
                    "0b42cb47-cd73-4810-ac90-19c9ba147453",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<WorkInterfaces.Plan>;
                res = await this.rest.get<WorkInterfaces.Plan>(url, options);

                let ret = this.formatResponse(res.result,
                                              WorkInterfaces.TypeInfo.Plan,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Get the information for all the plans configured for the given team
     * 
     * @param {string} project - Project ID or project name
     */
    public async getPlans(
        project: string
        ): Promise<WorkInterfaces.Plan[]> {

        return new Promise<WorkInterfaces.Plan[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "4.1-preview.1",
                    "work",
                    "0b42cb47-cd73-4810-ac90-19c9ba147453",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<WorkInterfaces.Plan[]>;
                res = await this.rest.get<WorkInterfaces.Plan[]>(url, options);

                let ret = this.formatResponse(res.result,
                                              WorkInterfaces.TypeInfo.Plan,
                                              true);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Update the information for the specified plan
     * 
     * @param {WorkInterfaces.UpdatePlan} updatedPlan - Plan definition to be updated
     * @param {string} project - Project ID or project name
     * @param {string} id - Identifier of the plan
     */
    public async updatePlan(
        updatedPlan: WorkInterfaces.UpdatePlan,
        project: string,
        id: string
        ): Promise<WorkInterfaces.Plan> {

        return new Promise<WorkInterfaces.Plan>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                id: id
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "4.1-preview.1",
                    "work",
                    "0b42cb47-cd73-4810-ac90-19c9ba147453",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<WorkInterfaces.Plan>;
                res = await this.rest.replace<WorkInterfaces.Plan>(url, updatedPlan, options);

                let ret = this.formatResponse(res.result,
                                              WorkInterfaces.TypeInfo.Plan,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Get process configuration
     * 
     * @param {string} project - Project ID or project name
     */
    public async getProcessConfiguration(
        project: string
        ): Promise<WorkInterfaces.ProcessConfiguration> {

        return new Promise<WorkInterfaces.ProcessConfiguration>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "4.1-preview.1",
                    "work",
                    "f901ba42-86d2-4b0c-89c1-3f86d06daa84",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<WorkInterfaces.ProcessConfiguration>;
                res = await this.rest.get<WorkInterfaces.ProcessConfiguration>(url, options);

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
     * Get rows on a board
     * 
     * @param {TfsCoreInterfaces.TeamContext} teamContext - The team context for the operation
     * @param {string} board - Name or ID of the specific board
     */
    public async getBoardRows(
        teamContext: TfsCoreInterfaces.TeamContext,
        board: string
        ): Promise<WorkInterfaces.BoardRow[]> {

        return new Promise<WorkInterfaces.BoardRow[]>(async (resolve, reject) => {
            let project = teamContext.projectId || teamContext.project;
            let team = teamContext.teamId || teamContext.team;

            let routeValues: any = {
                project: project,
                team: team,
                board: board
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "4.1-preview.1",
                    "work",
                    "0863355d-aefd-4d63-8669-984c9b7b0e78",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<WorkInterfaces.BoardRow[]>;
                res = await this.rest.get<WorkInterfaces.BoardRow[]>(url, options);

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
     * Update rows on a board
     * 
     * @param {WorkInterfaces.BoardRow[]} boardRows - List of board rows to update
     * @param {TfsCoreInterfaces.TeamContext} teamContext - The team context for the operation
     * @param {string} board - Name or ID of the specific board
     */
    public async updateBoardRows(
        boardRows: WorkInterfaces.BoardRow[],
        teamContext: TfsCoreInterfaces.TeamContext,
        board: string
        ): Promise<WorkInterfaces.BoardRow[]> {

        return new Promise<WorkInterfaces.BoardRow[]>(async (resolve, reject) => {
            let project = teamContext.projectId || teamContext.project;
            let team = teamContext.teamId || teamContext.team;

            let routeValues: any = {
                project: project,
                team: team,
                board: board
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "4.1-preview.1",
                    "work",
                    "0863355d-aefd-4d63-8669-984c9b7b0e78",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<WorkInterfaces.BoardRow[]>;
                res = await this.rest.replace<WorkInterfaces.BoardRow[]>(url, boardRows, options);

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
     * Get team's days off for an iteration
     * 
     * @param {TfsCoreInterfaces.TeamContext} teamContext - The team context for the operation
     * @param {string} iterationId - ID of the iteration
     */
    public async getTeamDaysOff(
        teamContext: TfsCoreInterfaces.TeamContext,
        iterationId: string
        ): Promise<WorkInterfaces.TeamSettingsDaysOff> {

        return new Promise<WorkInterfaces.TeamSettingsDaysOff>(async (resolve, reject) => {
            let project = teamContext.projectId || teamContext.project;
            let team = teamContext.teamId || teamContext.team;

            let routeValues: any = {
                project: project,
                team: team,
                iterationId: iterationId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "4.1-preview.1",
                    "work",
                    "2d4faa2e-9150-4cbf-a47a-932b1b4a0773",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<WorkInterfaces.TeamSettingsDaysOff>;
                res = await this.rest.get<WorkInterfaces.TeamSettingsDaysOff>(url, options);

                let ret = this.formatResponse(res.result,
                                              WorkInterfaces.TypeInfo.TeamSettingsDaysOff,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Set a team's days off for an iteration
     * 
     * @param {WorkInterfaces.TeamSettingsDaysOffPatch} daysOffPatch - Team's days off patch containting a list of start and end dates
     * @param {TfsCoreInterfaces.TeamContext} teamContext - The team context for the operation
     * @param {string} iterationId - ID of the iteration
     */
    public async updateTeamDaysOff(
        daysOffPatch: WorkInterfaces.TeamSettingsDaysOffPatch,
        teamContext: TfsCoreInterfaces.TeamContext,
        iterationId: string
        ): Promise<WorkInterfaces.TeamSettingsDaysOff> {

        return new Promise<WorkInterfaces.TeamSettingsDaysOff>(async (resolve, reject) => {
            let project = teamContext.projectId || teamContext.project;
            let team = teamContext.teamId || teamContext.team;

            let routeValues: any = {
                project: project,
                team: team,
                iterationId: iterationId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "4.1-preview.1",
                    "work",
                    "2d4faa2e-9150-4cbf-a47a-932b1b4a0773",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<WorkInterfaces.TeamSettingsDaysOff>;
                res = await this.rest.update<WorkInterfaces.TeamSettingsDaysOff>(url, daysOffPatch, options);

                let ret = this.formatResponse(res.result,
                                              WorkInterfaces.TypeInfo.TeamSettingsDaysOff,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Get a collection of team field values
     * 
     * @param {TfsCoreInterfaces.TeamContext} teamContext - The team context for the operation
     */
    public async getTeamFieldValues(
        teamContext: TfsCoreInterfaces.TeamContext
        ): Promise<WorkInterfaces.TeamFieldValues> {

        return new Promise<WorkInterfaces.TeamFieldValues>(async (resolve, reject) => {
            let project = teamContext.projectId || teamContext.project;
            let team = teamContext.teamId || teamContext.team;

            let routeValues: any = {
                project: project,
                team: team
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "4.1-preview.1",
                    "work",
                    "07ced576-58ed-49e6-9c1e-5cb53ab8bf2a",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<WorkInterfaces.TeamFieldValues>;
                res = await this.rest.get<WorkInterfaces.TeamFieldValues>(url, options);

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
     * Update team field values
     * 
     * @param {WorkInterfaces.TeamFieldValuesPatch} patch
     * @param {TfsCoreInterfaces.TeamContext} teamContext - The team context for the operation
     */
    public async updateTeamFieldValues(
        patch: WorkInterfaces.TeamFieldValuesPatch,
        teamContext: TfsCoreInterfaces.TeamContext
        ): Promise<WorkInterfaces.TeamFieldValues> {

        return new Promise<WorkInterfaces.TeamFieldValues>(async (resolve, reject) => {
            let project = teamContext.projectId || teamContext.project;
            let team = teamContext.teamId || teamContext.team;

            let routeValues: any = {
                project: project,
                team: team
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "4.1-preview.1",
                    "work",
                    "07ced576-58ed-49e6-9c1e-5cb53ab8bf2a",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<WorkInterfaces.TeamFieldValues>;
                res = await this.rest.update<WorkInterfaces.TeamFieldValues>(url, patch, options);

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
     * Get a team's settings
     * 
     * @param {TfsCoreInterfaces.TeamContext} teamContext - The team context for the operation
     */
    public async getTeamSettings(
        teamContext: TfsCoreInterfaces.TeamContext
        ): Promise<WorkInterfaces.TeamSetting> {

        return new Promise<WorkInterfaces.TeamSetting>(async (resolve, reject) => {
            let project = teamContext.projectId || teamContext.project;
            let team = teamContext.teamId || teamContext.team;

            let routeValues: any = {
                project: project,
                team: team
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "4.1-preview.1",
                    "work",
                    "c3c1012b-bea7-49d7-b45e-1664e566f84c",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<WorkInterfaces.TeamSetting>;
                res = await this.rest.get<WorkInterfaces.TeamSetting>(url, options);

                let ret = this.formatResponse(res.result,
                                              WorkInterfaces.TypeInfo.TeamSetting,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Update a team's settings
     * 
     * @param {WorkInterfaces.TeamSettingsPatch} teamSettingsPatch - TeamSettings changes
     * @param {TfsCoreInterfaces.TeamContext} teamContext - The team context for the operation
     */
    public async updateTeamSettings(
        teamSettingsPatch: WorkInterfaces.TeamSettingsPatch,
        teamContext: TfsCoreInterfaces.TeamContext
        ): Promise<WorkInterfaces.TeamSetting> {

        return new Promise<WorkInterfaces.TeamSetting>(async (resolve, reject) => {
            let project = teamContext.projectId || teamContext.project;
            let team = teamContext.teamId || teamContext.team;

            let routeValues: any = {
                project: project,
                team: team
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "4.1-preview.1",
                    "work",
                    "c3c1012b-bea7-49d7-b45e-1664e566f84c",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<WorkInterfaces.TeamSetting>;
                res = await this.rest.update<WorkInterfaces.TeamSetting>(url, teamSettingsPatch, options);

                let ret = this.formatResponse(res.result,
                                              WorkInterfaces.TypeInfo.TeamSetting,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

}
