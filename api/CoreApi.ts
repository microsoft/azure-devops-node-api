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


import Q = require('q');
import restm = require('./RestClient');
import httpm = require('./HttpClient');
import vsom = require('./VsoClient');
import basem = require('./ClientApiBases');
import VsoBaseInterfaces = require('./interfaces/common/VsoBaseInterfaces');
import CoreInterfaces = require("./interfaces/CoreInterfaces");
import OperationsInterfaces = require("./interfaces/common/OperationsInterfaces");
import VSSInterfaces = require("./interfaces/common/VSSInterfaces");

export interface ICoreApi extends basem.ClientApiBase {
    createConnectedService(connectedServiceCreationData: CoreInterfaces.WebApiConnectedServiceDetails, projectId: string): Q.Promise<CoreInterfaces.WebApiConnectedService>;
    getConnectedServiceDetails(projectId: string, name: string): Q.Promise<CoreInterfaces.WebApiConnectedServiceDetails>;
    getConnectedServices(projectId: string, kind?: CoreInterfaces.ConnectedServiceKind): Q.Promise<CoreInterfaces.WebApiConnectedService[]>;
    createIdentityMru(mruData: CoreInterfaces.IdentityData, mruName: string): Q.Promise<void>;
    deleteIdentityMru(mruData: CoreInterfaces.IdentityData, mruName: string): Q.Promise<void>;
    getIdentityMru(mruName: string): Q.Promise<VSSInterfaces.IdentityRef[]>;
    updateIdentityMru(mruData: CoreInterfaces.IdentityData, mruName: string): Q.Promise<void>;
    getTeamMembers(projectId: string, teamId: string, top?: number, skip?: number): Q.Promise<VSSInterfaces.IdentityRef[]>;
    getProcessById(processId: string): Q.Promise<CoreInterfaces.Process>;
    getProcesses(): Q.Promise<CoreInterfaces.Process[]>;
    getProjectCollection(collectionId: string): Q.Promise<CoreInterfaces.TeamProjectCollection>;
    getProjectCollections(top?: number, skip?: number): Q.Promise<CoreInterfaces.TeamProjectCollectionReference[]>;
    getProjectHistory(minRevision?: number): Q.Promise<CoreInterfaces.TeamProjectReference[]>;
    getProject(projectId: string, includeCapabilities?: boolean, includeHistory?: boolean): Q.Promise<CoreInterfaces.TeamProject>;
    getProjects(stateFilter?: any, top?: number, skip?: number): Q.Promise<CoreInterfaces.TeamProjectReference[]>;
    queueCreateProject(projectToCreate: CoreInterfaces.TeamProject): Q.Promise<OperationsInterfaces.OperationReference>;
    queueDeleteProject(projectId: string): Q.Promise<OperationsInterfaces.OperationReference>;
    updateProject(projectUpdate: CoreInterfaces.TeamProject, projectId: string): Q.Promise<OperationsInterfaces.OperationReference>;
    getProxies(proxyUrl?: string): Q.Promise<CoreInterfaces.Proxy[]>;
    createTeam(team: CoreInterfaces.WebApiTeam, projectId: string): Q.Promise<CoreInterfaces.WebApiTeam>;
    deleteTeam(projectId: string, teamId: string): Q.Promise<void>;
    getTeam(projectId: string, teamId: string): Q.Promise<CoreInterfaces.WebApiTeam>;
    getTeams(projectId: string, top?: number, skip?: number): Q.Promise<CoreInterfaces.WebApiTeam[]>;
    updateTeam(teamData: CoreInterfaces.WebApiTeam, projectId: string, teamId: string): Q.Promise<CoreInterfaces.WebApiTeam>;
}

export class CoreApi extends basem.ClientApiBase implements ICoreApi {
    constructor(baseUrl: string, handlers: VsoBaseInterfaces.IRequestHandler[]) {
        super(baseUrl, handlers, 'node-Core-api');
    }

    /**
     * @param {CoreInterfaces.WebApiConnectedServiceDetails} connectedServiceCreationData
     * @param {string} projectId
     */
    public createConnectedService(
        connectedServiceCreationData: CoreInterfaces.WebApiConnectedServiceDetails,
        projectId: string
        ): Q.Promise<CoreInterfaces.WebApiConnectedService> {
    
        var deferred = Q.defer<CoreInterfaces.WebApiConnectedService>();

        var onResult = (err: any, statusCode: number, connectedService: CoreInterfaces.WebApiConnectedService) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(connectedService);
            }
        };

        var routeValues: any = {
            projectId: projectId
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "core", "b4f70219-e18b-42c5-abe3-98b07d35525e", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseIsCollection: false };
                
                this.restClient.create(url, apiVersion, connectedServiceCreationData, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<CoreInterfaces.WebApiConnectedService>>deferred.promise;
    }

    /**
     * @param {string} projectId
     * @param {string} name
     */
    public getConnectedServiceDetails(
        projectId: string,
        name: string
        ): Q.Promise<CoreInterfaces.WebApiConnectedServiceDetails> {
    
        var deferred = Q.defer<CoreInterfaces.WebApiConnectedServiceDetails>();

        var onResult = (err: any, statusCode: number, connectedService: CoreInterfaces.WebApiConnectedServiceDetails) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(connectedService);
            }
        };

        var routeValues: any = {
            projectId: projectId,
            name: name
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "core", "b4f70219-e18b-42c5-abe3-98b07d35525e", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseIsCollection: false };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<CoreInterfaces.WebApiConnectedServiceDetails>>deferred.promise;
    }

    /**
     * @param {string} projectId
     * @param {CoreInterfaces.ConnectedServiceKind} kind
     */
    public getConnectedServices(
        projectId: string,
        kind?: CoreInterfaces.ConnectedServiceKind
        ): Q.Promise<CoreInterfaces.WebApiConnectedService[]> {
    
        var deferred = Q.defer<CoreInterfaces.WebApiConnectedService[]>();

        var onResult = (err: any, statusCode: number, connectedServices: CoreInterfaces.WebApiConnectedService[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(connectedServices);
            }
        };

        var routeValues: any = {
            projectId: projectId
        };

        var queryValues: any = {
            kind: kind,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.1", "core", "b4f70219-e18b-42c5-abe3-98b07d35525e", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseIsCollection: true };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<CoreInterfaces.WebApiConnectedService[]>>deferred.promise;
    }

    /**
     * @param {CoreInterfaces.IdentityData} mruData
     * @param {string} mruName
     */
    public createIdentityMru(
        mruData: CoreInterfaces.IdentityData,
        mruName: string
        ): Q.Promise<void> {
    
        var deferred = Q.defer<void>();

        var onResult = (err: any, statusCode: number) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(null);
            }
        };

        var routeValues: any = {
            mruName: mruName
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "core", "5ead0b70-2572-4697-97e9-f341069a783a", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseIsCollection: false };
                
                this.restClient.create(url, apiVersion, mruData, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode);
            });

        return <Q.Promise<void>>deferred.promise;
    }

    /**
     * @param {CoreInterfaces.IdentityData} mruData
     * @param {string} mruName
     */
    public deleteIdentityMru(
        mruData: CoreInterfaces.IdentityData,
        mruName: string
        ): Q.Promise<void> {
    
        var deferred = Q.defer<void>();

        var onResult = (err: any, statusCode: number) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(null);
            }
        };

        var routeValues: any = {
            mruName: mruName
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "core", "5ead0b70-2572-4697-97e9-f341069a783a", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseIsCollection: false };
                
                this.restClient.delete(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode);
            });

        return <Q.Promise<void>>deferred.promise;
    }

    /**
     * @param {string} mruName
     */
    public getIdentityMru(
        mruName: string
        ): Q.Promise<VSSInterfaces.IdentityRef[]> {
    
        var deferred = Q.defer<VSSInterfaces.IdentityRef[]>();

        var onResult = (err: any, statusCode: number, identityMru: VSSInterfaces.IdentityRef[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(identityMru);
            }
        };

        var routeValues: any = {
            mruName: mruName
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "core", "5ead0b70-2572-4697-97e9-f341069a783a", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseIsCollection: true };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<VSSInterfaces.IdentityRef[]>>deferred.promise;
    }

    /**
     * @param {CoreInterfaces.IdentityData} mruData
     * @param {string} mruName
     */
    public updateIdentityMru(
        mruData: CoreInterfaces.IdentityData,
        mruName: string
        ): Q.Promise<void> {
    
        var deferred = Q.defer<void>();

        var onResult = (err: any, statusCode: number) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(null);
            }
        };

        var routeValues: any = {
            mruName: mruName
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "core", "5ead0b70-2572-4697-97e9-f341069a783a", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseIsCollection: false };
                
                this.restClient.update(url, apiVersion, mruData, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode);
            });

        return <Q.Promise<void>>deferred.promise;
    }

    /**
     * @param {string} projectId
     * @param {string} teamId
     * @param {number} top
     * @param {number} skip
     */
    public getTeamMembers(
        projectId: string,
        teamId: string,
        top?: number,
        skip?: number
        ): Q.Promise<VSSInterfaces.IdentityRef[]> {
    
        var deferred = Q.defer<VSSInterfaces.IdentityRef[]>();

        var onResult = (err: any, statusCode: number, members: VSSInterfaces.IdentityRef[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(members);
            }
        };

        var routeValues: any = {
            projectId: projectId,
            teamId: teamId
        };

        var queryValues: any = {
            '$top': top,
            '$skip': skip,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.1", "core", "294c494c-2600-4d7e-b76c-3dd50c3c95be", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseIsCollection: true };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<VSSInterfaces.IdentityRef[]>>deferred.promise;
    }

    /**
     * Retrieve process by id
     * 
     * @param {string} processId
     */
    public getProcessById(
        processId: string
        ): Q.Promise<CoreInterfaces.Process> {
    
        var deferred = Q.defer<CoreInterfaces.Process>();

        var onResult = (err: any, statusCode: number, processe: CoreInterfaces.Process) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(processe);
            }
        };

        var routeValues: any = {
            processId: processId
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "core", "93878975-88c5-4e6a-8abb-7ddd77a8a7d8", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseTypeMetadata: CoreInterfaces.TypeInfo.Process, responseIsCollection: false };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<CoreInterfaces.Process>>deferred.promise;
    }

    /**
     */
    public getProcesses(
        ): Q.Promise<CoreInterfaces.Process[]> {
    
        var deferred = Q.defer<CoreInterfaces.Process[]>();

        var onResult = (err: any, statusCode: number, processes: CoreInterfaces.Process[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(processes);
            }
        };

        var routeValues: any = {
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "core", "93878975-88c5-4e6a-8abb-7ddd77a8a7d8", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseTypeMetadata: CoreInterfaces.TypeInfo.Process, responseIsCollection: true };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<CoreInterfaces.Process[]>>deferred.promise;
    }

    /**
     * Get project collection with the specified id or name.
     * 
     * @param {string} collectionId
     */
    public getProjectCollection(
        collectionId: string
        ): Q.Promise<CoreInterfaces.TeamProjectCollection> {
    
        var deferred = Q.defer<CoreInterfaces.TeamProjectCollection>();

        var onResult = (err: any, statusCode: number, projectCollection: CoreInterfaces.TeamProjectCollection) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(projectCollection);
            }
        };

        var routeValues: any = {
            collectionId: collectionId
        };

        this.vsoClient.getVersioningData("3.0-preview.2", "core", "8031090f-ef1d-4af6-85fc-698cd75d42bf", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseIsCollection: false };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<CoreInterfaces.TeamProjectCollection>>deferred.promise;
    }

    /**
     * Get project collection references for this application.
     * 
     * @param {number} top
     * @param {number} skip
     */
    public getProjectCollections(
        top?: number,
        skip?: number
        ): Q.Promise<CoreInterfaces.TeamProjectCollectionReference[]> {
    
        var deferred = Q.defer<CoreInterfaces.TeamProjectCollectionReference[]>();

        var onResult = (err: any, statusCode: number, projectCollections: CoreInterfaces.TeamProjectCollectionReference[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(projectCollections);
            }
        };

        var routeValues: any = {
        };

        var queryValues: any = {
            '$top': top,
            '$skip': skip,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.2", "core", "8031090f-ef1d-4af6-85fc-698cd75d42bf", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseIsCollection: true };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<CoreInterfaces.TeamProjectCollectionReference[]>>deferred.promise;
    }

    /**
     * @param {number} minRevision
     */
    public getProjectHistory(
        minRevision?: number
        ): Q.Promise<CoreInterfaces.TeamProjectReference[]> {
    
        var deferred = Q.defer<CoreInterfaces.TeamProjectReference[]>();

        var onResult = (err: any, statusCode: number, projectHistory: CoreInterfaces.TeamProjectReference[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(projectHistory);
            }
        };

        var routeValues: any = {
        };

        var queryValues: any = {
            minRevision: minRevision,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.1", "core", "6488a877-4749-4954-82ea-7340d36be9f2", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseIsCollection: true };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<CoreInterfaces.TeamProjectReference[]>>deferred.promise;
    }

    /**
     * Get project with the specified id or name, optionally including capabilities.
     * 
     * @param {string} projectId
     * @param {boolean} includeCapabilities - Include capabilities (such as source control) in the team project result (default: false).
     * @param {boolean} includeHistory - Search within renamed projects (that had such name in the past).
     */
    public getProject(
        projectId: string,
        includeCapabilities?: boolean,
        includeHistory?: boolean
        ): Q.Promise<CoreInterfaces.TeamProject> {
    
        var deferred = Q.defer<CoreInterfaces.TeamProject>();

        var onResult = (err: any, statusCode: number, project: CoreInterfaces.TeamProject) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(project);
            }
        };

        var routeValues: any = {
            projectId: projectId
        };

        var queryValues: any = {
            includeCapabilities: includeCapabilities,
            includeHistory: includeHistory,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.3", "core", "603fe2ac-9723-48b9-88ad-09305aa6c6e1", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseIsCollection: false };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<CoreInterfaces.TeamProject>>deferred.promise;
    }

    /**
     * Get project references with the specified state
     * 
     * @param {any} stateFilter - Filter on team projects in a specific team project state (default: WellFormed).
     * @param {number} top
     * @param {number} skip
     */
    public getProjects(
        stateFilter?: any,
        top?: number,
        skip?: number
        ): Q.Promise<CoreInterfaces.TeamProjectReference[]> {
    
        var deferred = Q.defer<CoreInterfaces.TeamProjectReference[]>();

        var onResult = (err: any, statusCode: number, projects: CoreInterfaces.TeamProjectReference[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(projects);
            }
        };

        var routeValues: any = {
        };

        var queryValues: any = {
            stateFilter: stateFilter,
            '$top': top,
            '$skip': skip,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.3", "core", "603fe2ac-9723-48b9-88ad-09305aa6c6e1", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseIsCollection: true };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<CoreInterfaces.TeamProjectReference[]>>deferred.promise;
    }

    /**
     * Queue a project creation.
     * 
     * @param {CoreInterfaces.TeamProject} projectToCreate - The project to create.
     */
    public queueCreateProject(
        projectToCreate: CoreInterfaces.TeamProject
        ): Q.Promise<OperationsInterfaces.OperationReference> {
    
        var deferred = Q.defer<OperationsInterfaces.OperationReference>();

        var onResult = (err: any, statusCode: number, project: OperationsInterfaces.OperationReference) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(project);
            }
        };

        var routeValues: any = {
        };

        this.vsoClient.getVersioningData("3.0-preview.3", "core", "603fe2ac-9723-48b9-88ad-09305aa6c6e1", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseTypeMetadata: OperationsInterfaces.TypeInfo.OperationReference, responseIsCollection: false };
                
                this.restClient.create(url, apiVersion, projectToCreate, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<OperationsInterfaces.OperationReference>>deferred.promise;
    }

    /**
     * Queue a project deletion.
     * 
     * @param {string} projectId - The project id of the project to delete.
     */
    public queueDeleteProject(
        projectId: string
        ): Q.Promise<OperationsInterfaces.OperationReference> {
    
        var deferred = Q.defer<OperationsInterfaces.OperationReference>();

        var onResult = (err: any, statusCode: number, project: OperationsInterfaces.OperationReference) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(project);
            }
        };

        var routeValues: any = {
            projectId: projectId
        };

        this.vsoClient.getVersioningData("3.0-preview.3", "core", "603fe2ac-9723-48b9-88ad-09305aa6c6e1", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseTypeMetadata: OperationsInterfaces.TypeInfo.OperationReference, responseIsCollection: false };
                
                this.restClient.delete(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<OperationsInterfaces.OperationReference>>deferred.promise;
    }

    /**
     * Update an existing project's name, abbreviation, or description.
     * 
     * @param {CoreInterfaces.TeamProject} projectUpdate - The updates for the project.
     * @param {string} projectId - The project id of the project to update.
     */
    public updateProject(
        projectUpdate: CoreInterfaces.TeamProject,
        projectId: string
        ): Q.Promise<OperationsInterfaces.OperationReference> {
    
        var deferred = Q.defer<OperationsInterfaces.OperationReference>();

        var onResult = (err: any, statusCode: number, project: OperationsInterfaces.OperationReference) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(project);
            }
        };

        var routeValues: any = {
            projectId: projectId
        };

        this.vsoClient.getVersioningData("3.0-preview.3", "core", "603fe2ac-9723-48b9-88ad-09305aa6c6e1", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseTypeMetadata: OperationsInterfaces.TypeInfo.OperationReference, responseIsCollection: false };
                
                this.restClient.update(url, apiVersion, projectUpdate, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<OperationsInterfaces.OperationReference>>deferred.promise;
    }

    /**
     * @param {string} proxyUrl
     */
    public getProxies(
        proxyUrl?: string
        ): Q.Promise<CoreInterfaces.Proxy[]> {
    
        var deferred = Q.defer<CoreInterfaces.Proxy[]>();

        var onResult = (err: any, statusCode: number, proxies: CoreInterfaces.Proxy[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(proxies);
            }
        };

        var routeValues: any = {
        };

        var queryValues: any = {
            proxyUrl: proxyUrl,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.1", "core", "ec1f4311-f2b4-4c15-b2b8-8990b80d2908", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseIsCollection: true };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<CoreInterfaces.Proxy[]>>deferred.promise;
    }

    /**
     * Creates a team
     * 
     * @param {CoreInterfaces.WebApiTeam} team - The team data used to create the team.
     * @param {string} projectId - The name or id (GUID) of the team project in which to create the team.
     */
    public createTeam(
        team: CoreInterfaces.WebApiTeam,
        projectId: string
        ): Q.Promise<CoreInterfaces.WebApiTeam> {
    
        var deferred = Q.defer<CoreInterfaces.WebApiTeam>();

        var onResult = (err: any, statusCode: number, team: CoreInterfaces.WebApiTeam) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(team);
            }
        };

        var routeValues: any = {
            projectId: projectId
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "core", "d30a3dd1-f8ba-442a-b86a-bd0c0c383e59", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseIsCollection: false };
                
                this.restClient.create(url, apiVersion, team, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<CoreInterfaces.WebApiTeam>>deferred.promise;
    }

    /**
     * Deletes a team
     * 
     * @param {string} projectId - The name or id (GUID) of the team project containing the team to delete.
     * @param {string} teamId - The name of id of the team to delete.
     */
    public deleteTeam(
        projectId: string,
        teamId: string
        ): Q.Promise<void> {
    
        var deferred = Q.defer<void>();

        var onResult = (err: any, statusCode: number) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(null);
            }
        };

        var routeValues: any = {
            projectId: projectId,
            teamId: teamId
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "core", "d30a3dd1-f8ba-442a-b86a-bd0c0c383e59", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseIsCollection: false };
                
                this.restClient.delete(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode);
            });

        return <Q.Promise<void>>deferred.promise;
    }

    /**
     * Gets a team
     * 
     * @param {string} projectId
     * @param {string} teamId
     */
    public getTeam(
        projectId: string,
        teamId: string
        ): Q.Promise<CoreInterfaces.WebApiTeam> {
    
        var deferred = Q.defer<CoreInterfaces.WebApiTeam>();

        var onResult = (err: any, statusCode: number, team: CoreInterfaces.WebApiTeam) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(team);
            }
        };

        var routeValues: any = {
            projectId: projectId,
            teamId: teamId
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "core", "d30a3dd1-f8ba-442a-b86a-bd0c0c383e59", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseIsCollection: false };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<CoreInterfaces.WebApiTeam>>deferred.promise;
    }

    /**
     * @param {string} projectId
     * @param {number} top
     * @param {number} skip
     */
    public getTeams(
        projectId: string,
        top?: number,
        skip?: number
        ): Q.Promise<CoreInterfaces.WebApiTeam[]> {
    
        var deferred = Q.defer<CoreInterfaces.WebApiTeam[]>();

        var onResult = (err: any, statusCode: number, teams: CoreInterfaces.WebApiTeam[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(teams);
            }
        };

        var routeValues: any = {
            projectId: projectId
        };

        var queryValues: any = {
            '$top': top,
            '$skip': skip,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.1", "core", "d30a3dd1-f8ba-442a-b86a-bd0c0c383e59", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseIsCollection: true };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<CoreInterfaces.WebApiTeam[]>>deferred.promise;
    }

    /**
     * Updates a team's name and/or description
     * 
     * @param {CoreInterfaces.WebApiTeam} teamData
     * @param {string} projectId - The name or id (GUID) of the team project containing the team to update.
     * @param {string} teamId - The name of id of the team to update.
     */
    public updateTeam(
        teamData: CoreInterfaces.WebApiTeam,
        projectId: string,
        teamId: string
        ): Q.Promise<CoreInterfaces.WebApiTeam> {
    
        var deferred = Q.defer<CoreInterfaces.WebApiTeam>();

        var onResult = (err: any, statusCode: number, team: CoreInterfaces.WebApiTeam) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(team);
            }
        };

        var routeValues: any = {
            projectId: projectId,
            teamId: teamId
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "core", "d30a3dd1-f8ba-442a-b86a-bd0c0c383e59", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseIsCollection: false };
                
                this.restClient.update(url, apiVersion, teamData, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<CoreInterfaces.WebApiTeam>>deferred.promise;
    }

}
