/// <reference path="../../src/api/definitions/node.d.ts" />
/// <reference path="../../src/api/definitions/Q.d.ts" />
import Q = require('q');
import restm = require('./restclient');
import httpm = require('./httpclient');
import vsom = require('./VsoClient');
import VsoBaseInterfaces = require('./interfaces/common/VsoBaseInterfaces');
import CoreInterfaces = require("./interfaces/CoreInterfaces");
import OperationsInterfaces = require("./interfaces/common/OperationsInterfaces");
import VSSInterfaces = require("./interfaces/common/VSSInterfaces");
export interface ICoreApi {
    baseUrl: string;
    userAgent: string;
    httpClient: VsoBaseInterfaces.IHttpClient;
    restClient: VsoBaseInterfaces.IRestClient;
    vsoClient: vsom.VsoClient;
    connect(onResult: (err: any, statusCode: number, obj: any) => void): void;
    createConnectedService(connectedServiceCreationData: CoreInterfaces.WebApiConnectedServiceDetails, projectId: string, onResult: (err: any, statusCode: number, connectedService: CoreInterfaces.WebApiConnectedService) => void): void;
    getConnectedServiceDetails(projectId: string, name: string, onResult: (err: any, statusCode: number, connectedService: CoreInterfaces.WebApiConnectedServiceDetails) => void): void;
    getConnectedServices(projectId: string, kind: CoreInterfaces.ConnectedServiceKind, onResult: (err: any, statusCode: number, connectedServices: CoreInterfaces.WebApiConnectedService[]) => void): void;
    createIdentityMru(mruData: CoreInterfaces.IdentityData, mruName: string, onResult: (err: any, statusCode: number) => void): void;
    deleteIdentityMru(mruData: CoreInterfaces.IdentityData, mruName: string, onResult: (err: any, statusCode: number) => void): void;
    getIdentityMru(mruName: string, onResult: (err: any, statusCode: number, identityMru: VSSInterfaces.IdentityRef[]) => void): void;
    updateIdentityMru(mruData: CoreInterfaces.IdentityData, mruName: string, onResult: (err: any, statusCode: number) => void): void;
    getTeamMembers(projectId: string, teamId: string, top: number, skip: number, onResult: (err: any, statusCode: number, members: VSSInterfaces.IdentityRef[]) => void): void;
    getProjectCollection(collectionId: string, onResult: (err: any, statusCode: number, projectCollection: CoreInterfaces.TeamProjectCollection) => void): void;
    getProjectCollections(top: number, skip: number, onResult: (err: any, statusCode: number, projectCollections: CoreInterfaces.TeamProjectCollectionReference[]) => void): void;
    getProjectHistory(minRevision: number, onResult: (err: any, statusCode: number, projectHistory: CoreInterfaces.TeamProjectReference[]) => void): void;
    getProject(projectId: string, includeCapabilities: boolean, includeHistory: boolean, onResult: (err: any, statusCode: number, project: CoreInterfaces.TeamProject) => void): void;
    getProjects(stateFilter: any, top: number, skip: number, onResult: (err: any, statusCode: number, projects: CoreInterfaces.TeamProjectReference[]) => void): void;
    queueCreateProject(projectToCreate: CoreInterfaces.TeamProject, onResult: (err: any, statusCode: number, project: OperationsInterfaces.OperationReference) => void): void;
    queueDeleteProject(projectId: string, onResult: (err: any, statusCode: number, project: OperationsInterfaces.OperationReference) => void): void;
    updateProject(projectUpdate: CoreInterfaces.TeamProject, projectId: string, onResult: (err: any, statusCode: number, project: OperationsInterfaces.OperationReference) => void): void;
    getProxies(proxyUrl: string, onResult: (err: any, statusCode: number, proxies: CoreInterfaces.Proxy[]) => void): void;
    getTeams(projectId: string, teamId: string, top: number, skip: number, onResult: (err: any, statusCode: number, team: CoreInterfaces.WebApiTeam) => void): void;
}
export interface IQCoreApi {
    connect(): Q.Promise<void>;
    createConnectedService(connectedServiceCreationData: CoreInterfaces.WebApiConnectedServiceDetails, projectId: string): Q.Promise<CoreInterfaces.WebApiConnectedService>;
    getConnectedServiceDetails(projectId: string, name: string): Q.Promise<CoreInterfaces.WebApiConnectedServiceDetails>;
    getConnectedServices(projectId: string, kind?: CoreInterfaces.ConnectedServiceKind): Q.Promise<CoreInterfaces.WebApiConnectedService[]>;
    getIdentityMru(mruName: string): Q.Promise<VSSInterfaces.IdentityRef[]>;
    getTeamMembers(projectId: string, teamId: string, top?: number, skip?: number): Q.Promise<VSSInterfaces.IdentityRef[]>;
    getProjectCollection(collectionId: string): Q.Promise<CoreInterfaces.TeamProjectCollection>;
    getProjectCollections(top?: number, skip?: number): Q.Promise<CoreInterfaces.TeamProjectCollectionReference[]>;
    getProjectHistory(minRevision?: number): Q.Promise<CoreInterfaces.TeamProjectReference[]>;
    getProject(projectId: string, includeCapabilities?: boolean, includeHistory?: boolean): Q.Promise<CoreInterfaces.TeamProject>;
    getProjects(stateFilter?: any, top?: number, skip?: number): Q.Promise<CoreInterfaces.TeamProjectReference[]>;
    queueCreateProject(projectToCreate: CoreInterfaces.TeamProject): Q.Promise<OperationsInterfaces.OperationReference>;
    queueDeleteProject(projectId: string): Q.Promise<OperationsInterfaces.OperationReference>;
    updateProject(projectUpdate: CoreInterfaces.TeamProject, projectId: string): Q.Promise<OperationsInterfaces.OperationReference>;
    getProxies(proxyUrl?: string): Q.Promise<CoreInterfaces.Proxy[]>;
    getTeams(projectId: string, teamId?: string, top?: number, skip?: number): Q.Promise<CoreInterfaces.WebApiTeam>;
}
export declare class CoreApi implements ICoreApi {
    baseUrl: string;
    userAgent: string;
    httpClient: httpm.HttpClient;
    restClient: restm.RestClient;
    vsoClient: vsom.VsoClient;
    constructor(baseUrl: string, handlers: VsoBaseInterfaces.IRequestHandler[]);
    setUserAgent(userAgent: string): void;
    connect(onResult: (err: any, statusCode: number, obj: any) => void): void;
    /**
     * @param {CoreInterfaces.WebApiConnectedServiceDetails} connectedServiceCreationData
     * @param {string} projectId
     * @param onResult callback function with the resulting CoreInterfaces.WebApiConnectedService
     */
    createConnectedService(connectedServiceCreationData: CoreInterfaces.WebApiConnectedServiceDetails, projectId: string, onResult: (err: any, statusCode: number, connectedService: CoreInterfaces.WebApiConnectedService) => void): void;
    /**
     * @param {string} projectId
     * @param {string} name
     * @param onResult callback function with the resulting CoreInterfaces.WebApiConnectedServiceDetails
     */
    getConnectedServiceDetails(projectId: string, name: string, onResult: (err: any, statusCode: number, connectedService: CoreInterfaces.WebApiConnectedServiceDetails) => void): void;
    /**
     * @param {string} projectId
     * @param {CoreInterfaces.ConnectedServiceKind} kind
     * @param onResult callback function with the resulting CoreInterfaces.WebApiConnectedService[]
     */
    getConnectedServices(projectId: string, kind: CoreInterfaces.ConnectedServiceKind, onResult: (err: any, statusCode: number, connectedServices: CoreInterfaces.WebApiConnectedService[]) => void): void;
    /**
     * @param {CoreInterfaces.IdentityData} mruData
     * @param {string} mruName
     * @param onResult callback function
     */
    createIdentityMru(mruData: CoreInterfaces.IdentityData, mruName: string, onResult: (err: any, statusCode: number) => void): void;
    /**
     * @param {CoreInterfaces.IdentityData} mruData
     * @param {string} mruName
     * @param onResult callback function
     */
    deleteIdentityMru(mruData: CoreInterfaces.IdentityData, mruName: string, onResult: (err: any, statusCode: number) => void): void;
    /**
     * @param {string} mruName
     * @param onResult callback function with the resulting VSSInterfaces.IdentityRef[]
     */
    getIdentityMru(mruName: string, onResult: (err: any, statusCode: number, identityMru: VSSInterfaces.IdentityRef[]) => void): void;
    /**
     * @param {CoreInterfaces.IdentityData} mruData
     * @param {string} mruName
     * @param onResult callback function
     */
    updateIdentityMru(mruData: CoreInterfaces.IdentityData, mruName: string, onResult: (err: any, statusCode: number) => void): void;
    /**
     * @param {string} projectId
     * @param {string} teamId
     * @param {number} top
     * @param {number} skip
     * @param onResult callback function with the resulting VSSInterfaces.IdentityRef[]
     */
    getTeamMembers(projectId: string, teamId: string, top: number, skip: number, onResult: (err: any, statusCode: number, members: VSSInterfaces.IdentityRef[]) => void): void;
    /**
     * Get project collection with the specified id or name.
     *
     * @param {string} collectionId
     * @param onResult callback function with the resulting CoreInterfaces.TeamProjectCollection
     */
    getProjectCollection(collectionId: string, onResult: (err: any, statusCode: number, projectCollection: CoreInterfaces.TeamProjectCollection) => void): void;
    /**
     * Get project collection references for this application.
     *
     * @param {number} top
     * @param {number} skip
     * @param onResult callback function with the resulting CoreInterfaces.TeamProjectCollectionReference[]
     */
    getProjectCollections(top: number, skip: number, onResult: (err: any, statusCode: number, projectCollections: CoreInterfaces.TeamProjectCollectionReference[]) => void): void;
    /**
     * @param {number} minRevision
     * @param onResult callback function with the resulting CoreInterfaces.TeamProjectReference[]
     */
    getProjectHistory(minRevision: number, onResult: (err: any, statusCode: number, projectHistory: CoreInterfaces.TeamProjectReference[]) => void): void;
    /**
     * Get project with the specified id or name, optionally including capabilities.
     *
     * @param {string} projectId
     * @param {boolean} includeCapabilities - Include capabilities (such as source control) in the team project result (default: false).
     * @param {boolean} includeHistory - Search within renamed projects (that had such name in the past).
     * @param onResult callback function with the resulting CoreInterfaces.TeamProject
     */
    getProject(projectId: string, includeCapabilities: boolean, includeHistory: boolean, onResult: (err: any, statusCode: number, project: CoreInterfaces.TeamProject) => void): void;
    /**
     * Get project references with the specified state
     *
     * @param {any} stateFilter - Filter on team projects in a specific team project state (default: WellFormed).
     * @param {number} top
     * @param {number} skip
     * @param onResult callback function with the resulting CoreInterfaces.TeamProjectReference[]
     */
    getProjects(stateFilter: any, top: number, skip: number, onResult: (err: any, statusCode: number, projects: CoreInterfaces.TeamProjectReference[]) => void): void;
    /**
     * Queue a project creation.
     *
     * @param {CoreInterfaces.TeamProject} projectToCreate - The project to create.
     * @param onResult callback function with the resulting OperationsInterfaces.OperationReference
     */
    queueCreateProject(projectToCreate: CoreInterfaces.TeamProject, onResult: (err: any, statusCode: number, project: OperationsInterfaces.OperationReference) => void): void;
    /**
     * Queue a project deletion.
     *
     * @param {string} projectId - The project id of the project to delete.
     * @param onResult callback function with the resulting OperationsInterfaces.OperationReference
     */
    queueDeleteProject(projectId: string, onResult: (err: any, statusCode: number, project: OperationsInterfaces.OperationReference) => void): void;
    /**
     * Update an existing project's name, abbreviation, or description.
     *
     * @param {CoreInterfaces.TeamProject} projectUpdate - The updates for the project.
     * @param {string} projectId - The project id of the project to update.
     * @param onResult callback function with the resulting OperationsInterfaces.OperationReference
     */
    updateProject(projectUpdate: CoreInterfaces.TeamProject, projectId: string, onResult: (err: any, statusCode: number, project: OperationsInterfaces.OperationReference) => void): void;
    /**
     * @param {string} proxyUrl
     * @param onResult callback function with the resulting CoreInterfaces.Proxy[]
     */
    getProxies(proxyUrl: string, onResult: (err: any, statusCode: number, proxies: CoreInterfaces.Proxy[]) => void): void;
    /**
     * @param {string} projectId
     * @param {string} teamId
     * @param {number} top
     * @param {number} skip
     * @param onResult callback function with the resulting CoreInterfaces.WebApiTeam
     */
    getTeams(projectId: string, teamId: string, top: number, skip: number, onResult: (err: any, statusCode: number, team: CoreInterfaces.WebApiTeam) => void): void;
}
export declare class QCoreApi implements IQCoreApi {
    CoreApi: ICoreApi;
    constructor(baseUrl: string, handlers: VsoBaseInterfaces.IRequestHandler[]);
    connect(): Q.Promise<any>;
    /**
    * @param {CoreInterfaces.WebApiConnectedServiceDetails} connectedServiceCreationData
    * @param {string} projectId
    */
    createConnectedService(connectedServiceCreationData: CoreInterfaces.WebApiConnectedServiceDetails, projectId: string): Q.Promise<CoreInterfaces.WebApiConnectedService>;
    /**
    * @param {string} projectId
    * @param {string} name
    */
    getConnectedServiceDetails(projectId: string, name: string): Q.Promise<CoreInterfaces.WebApiConnectedServiceDetails>;
    /**
    * @param {string} projectId
    * @param {CoreInterfaces.ConnectedServiceKind} kind
    */
    getConnectedServices(projectId: string, kind?: CoreInterfaces.ConnectedServiceKind): Q.Promise<CoreInterfaces.WebApiConnectedService[]>;
    /**
    * @param {string} mruName
    */
    getIdentityMru(mruName: string): Q.Promise<VSSInterfaces.IdentityRef[]>;
    /**
    * @param {string} projectId
    * @param {string} teamId
    * @param {number} top
    * @param {number} skip
    */
    getTeamMembers(projectId: string, teamId: string, top?: number, skip?: number): Q.Promise<VSSInterfaces.IdentityRef[]>;
    /**
    * Get project collection with the specified id or name.
    *
    * @param {string} collectionId
    */
    getProjectCollection(collectionId: string): Q.Promise<CoreInterfaces.TeamProjectCollection>;
    /**
    * Get project collection references for this application.
    *
    * @param {number} top
    * @param {number} skip
    */
    getProjectCollections(top?: number, skip?: number): Q.Promise<CoreInterfaces.TeamProjectCollectionReference[]>;
    /**
    * @param {number} minRevision
    */
    getProjectHistory(minRevision?: number): Q.Promise<CoreInterfaces.TeamProjectReference[]>;
    /**
    * Get project with the specified id or name, optionally including capabilities.
    *
    * @param {string} projectId
    * @param {boolean} includeCapabilities - Include capabilities (such as source control) in the team project result (default: false).
    * @param {boolean} includeHistory - Search within renamed projects (that had such name in the past).
    */
    getProject(projectId: string, includeCapabilities?: boolean, includeHistory?: boolean): Q.Promise<CoreInterfaces.TeamProject>;
    /**
    * Get project references with the specified state
    *
    * @param {any} stateFilter - Filter on team projects in a specific team project state (default: WellFormed).
    * @param {number} top
    * @param {number} skip
    */
    getProjects(stateFilter?: any, top?: number, skip?: number): Q.Promise<CoreInterfaces.TeamProjectReference[]>;
    /**
    * Queue a project creation.
    *
    * @param {CoreInterfaces.TeamProject} projectToCreate - The project to create.
    */
    queueCreateProject(projectToCreate: CoreInterfaces.TeamProject): Q.Promise<OperationsInterfaces.OperationReference>;
    /**
    * Queue a project deletion.
    *
    * @param {string} projectId - The project id of the project to delete.
    */
    queueDeleteProject(projectId: string): Q.Promise<OperationsInterfaces.OperationReference>;
    /**
    * Update an existing project's name, abbreviation, or description.
    *
    * @param {CoreInterfaces.TeamProject} projectUpdate - The updates for the project.
    * @param {string} projectId - The project id of the project to update.
    */
    updateProject(projectUpdate: CoreInterfaces.TeamProject, projectId: string): Q.Promise<OperationsInterfaces.OperationReference>;
    /**
    * @param {string} proxyUrl
    */
    getProxies(proxyUrl?: string): Q.Promise<CoreInterfaces.Proxy[]>;
    /**
    * @param {string} projectId
    * @param {string} teamId
    * @param {number} top
    * @param {number} skip
    */
    getTeams(projectId: string, teamId?: string, top?: number, skip?: number): Q.Promise<CoreInterfaces.WebApiTeam>;
}
