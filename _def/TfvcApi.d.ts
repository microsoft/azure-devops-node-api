/// <reference path="../../src/api/definitions/node.d.ts" />
/// <reference path="../../src/api/definitions/Q.d.ts" />
import Q = require('q');
import restm = require('./restclient');
import httpm = require('./httpclient');
import vsom = require('./VsoClient');
import VsoBaseInterfaces = require('./interfaces/common/VsoBaseInterfaces');
import TfvcInterfaces = require("./interfaces/TfvcInterfaces");
export interface ITfvcApi {
    baseUrl: string;
    userAgent: string;
    httpClient: VsoBaseInterfaces.IHttpClient;
    restClient: VsoBaseInterfaces.IRestClient;
    vsoClient: vsom.VsoClient;
    connect(onResult: (err: any, statusCode: number, obj: any) => void): void;
    getBranch(path: string, project: string, includeParent: boolean, includeChildren: boolean, onResult: (err: any, statusCode: number, Branche: TfvcInterfaces.TfvcBranch) => void): void;
    getBranches(project: string, includeParent: boolean, includeChildren: boolean, includeDeleted: boolean, includeLinks: boolean, onResult: (err: any, statusCode: number, Branches: TfvcInterfaces.TfvcBranch[]) => void): void;
    getBranchRefs(scopePath: string, project: string, includeDeleted: boolean, includeLinks: boolean, onResult: (err: any, statusCode: number, Branches: TfvcInterfaces.TfvcBranchRef[]) => void): void;
    getChangesetChanges(id: number, skip: number, top: number, onResult: (err: any, statusCode: number, ChangesetChanges: TfvcInterfaces.TfvcChange[]) => void): void;
    createChangeset(changeset: TfvcInterfaces.TfvcChangeset, project: string, onResult: (err: any, statusCode: number, Changeset: TfvcInterfaces.TfvcChangesetRef) => void): void;
    getChangeset(id: number, project: string, maxChangeCount: number, includeDetails: boolean, includeWorkItems: boolean, maxCommentLength: number, includeSourceRename: boolean, skip: number, top: number, orderby: string, searchCriteria: TfvcInterfaces.TfvcChangesetSearchCriteria, onResult: (err: any, statusCode: number, Changeset: TfvcInterfaces.TfvcChangeset) => void): void;
    getChangesets(project: string, maxChangeCount: number, includeDetails: boolean, includeWorkItems: boolean, maxCommentLength: number, includeSourceRename: boolean, skip: number, top: number, orderby: string, searchCriteria: TfvcInterfaces.TfvcChangesetSearchCriteria, onResult: (err: any, statusCode: number, Changesets: TfvcInterfaces.TfvcChangesetRef[]) => void): void;
    getBatchedChangesets(changesetsRequestData: TfvcInterfaces.TfvcChangesetsRequestData, onResult: (err: any, statusCode: number, ChangesetsBatch: TfvcInterfaces.TfvcChangesetRef[]) => void): void;
    getChangesetWorkItems(id: number, onResult: (err: any, statusCode: number, ChangesetWorkItems: TfvcInterfaces.AssociatedWorkItem[]) => void): void;
    getItemsBatch(itemRequestData: TfvcInterfaces.TfvcItemRequestData, project: string, onResult: (err: any, statusCode: number, ItemBatch: TfvcInterfaces.TfvcItem[][]) => void): void;
    getItem(path: string, project: string, fileName: string, download: boolean, scopePath: string, recursionLevel: TfvcInterfaces.VersionControlRecursionType, versionDescriptor: TfvcInterfaces.TfvcVersionDescriptor, onResult: (err: any, statusCode: number, Item: TfvcInterfaces.TfvcItem) => void): void;
    getItemContent(path: string, project: string, fileName: string, download: boolean, scopePath: string, recursionLevel: TfvcInterfaces.VersionControlRecursionType, versionDescriptor: TfvcInterfaces.TfvcVersionDescriptor, onResult: (err: any, statusCode: number, res: NodeJS.ReadableStream) => void): void;
    getItems(project: string, scopePath: string, recursionLevel: TfvcInterfaces.VersionControlRecursionType, includeLinks: boolean, versionDescriptor: TfvcInterfaces.TfvcVersionDescriptor, onResult: (err: any, statusCode: number, Items: TfvcInterfaces.TfvcItem[]) => void): void;
    getItemText(path: string, project: string, fileName: string, download: boolean, scopePath: string, recursionLevel: TfvcInterfaces.VersionControlRecursionType, versionDescriptor: TfvcInterfaces.TfvcVersionDescriptor, onResult: (err: any, statusCode: number, res: NodeJS.ReadableStream) => void): void;
    getItemZip(path: string, project: string, fileName: string, download: boolean, scopePath: string, recursionLevel: TfvcInterfaces.VersionControlRecursionType, versionDescriptor: TfvcInterfaces.TfvcVersionDescriptor, onResult: (err: any, statusCode: number, res: NodeJS.ReadableStream) => void): void;
    getLabelItems(labelId: string, top: number, skip: number, onResult: (err: any, statusCode: number, LabelItems: TfvcInterfaces.TfvcItem[]) => void): void;
    getLabel(labelId: string, requestData: TfvcInterfaces.TfvcLabelRequestData, project: string, onResult: (err: any, statusCode: number, Label: TfvcInterfaces.TfvcLabel) => void): void;
    getLabels(requestData: TfvcInterfaces.TfvcLabelRequestData, project: string, top: number, skip: number, onResult: (err: any, statusCode: number, Labels: TfvcInterfaces.TfvcLabelRef[]) => void): void;
    getProjectInfo(projectId: string, project: string, onResult: (err: any, statusCode: number, ProjectInfo: TfvcInterfaces.VersionControlProjectInfo) => void): void;
    getProjectInfos(project: string, onResult: (err: any, statusCode: number, ProjectInfo: TfvcInterfaces.VersionControlProjectInfo[]) => void): void;
    getShelvesetChanges(shelvesetId: string, top: number, skip: number, onResult: (err: any, statusCode: number, ShelvesetChanges: TfvcInterfaces.TfvcChange[]) => void): void;
    getShelveset(shelvesetId: string, requestData: TfvcInterfaces.TfvcShelvesetRequestData, onResult: (err: any, statusCode: number, Shelveset: TfvcInterfaces.TfvcShelveset) => void): void;
    getShelvesets(requestData: TfvcInterfaces.TfvcShelvesetRequestData, top: number, skip: number, onResult: (err: any, statusCode: number, Shelvesets: TfvcInterfaces.TfvcShelvesetRef[]) => void): void;
    getShelvesetWorkItems(shelvesetId: string, onResult: (err: any, statusCode: number, ShelvesetWorkItems: TfvcInterfaces.AssociatedWorkItem[]) => void): void;
}
export interface IQTfvcApi {
    connect(): Q.Promise<void>;
    getBranch(path: string, project?: string, includeParent?: boolean, includeChildren?: boolean): Q.Promise<TfvcInterfaces.TfvcBranch>;
    getBranches(project?: string, includeParent?: boolean, includeChildren?: boolean, includeDeleted?: boolean, includeLinks?: boolean): Q.Promise<TfvcInterfaces.TfvcBranch[]>;
    getBranchRefs(scopePath: string, project?: string, includeDeleted?: boolean, includeLinks?: boolean): Q.Promise<TfvcInterfaces.TfvcBranchRef[]>;
    getChangesetChanges(id?: number, skip?: number, top?: number): Q.Promise<TfvcInterfaces.TfvcChange[]>;
    createChangeset(changeset: TfvcInterfaces.TfvcChangeset, project?: string): Q.Promise<TfvcInterfaces.TfvcChangesetRef>;
    getChangeset(id: number, project?: string, maxChangeCount?: number, includeDetails?: boolean, includeWorkItems?: boolean, maxCommentLength?: number, includeSourceRename?: boolean, skip?: number, top?: number, orderby?: string, searchCriteria?: TfvcInterfaces.TfvcChangesetSearchCriteria): Q.Promise<TfvcInterfaces.TfvcChangeset>;
    getChangesets(project?: string, maxChangeCount?: number, includeDetails?: boolean, includeWorkItems?: boolean, maxCommentLength?: number, includeSourceRename?: boolean, skip?: number, top?: number, orderby?: string, searchCriteria?: TfvcInterfaces.TfvcChangesetSearchCriteria): Q.Promise<TfvcInterfaces.TfvcChangesetRef[]>;
    getBatchedChangesets(changesetsRequestData: TfvcInterfaces.TfvcChangesetsRequestData): Q.Promise<TfvcInterfaces.TfvcChangesetRef[]>;
    getChangesetWorkItems(id?: number): Q.Promise<TfvcInterfaces.AssociatedWorkItem[]>;
    getItemsBatch(itemRequestData: TfvcInterfaces.TfvcItemRequestData, project?: string): Q.Promise<TfvcInterfaces.TfvcItem[][]>;
    getItem(path: string, project?: string, fileName?: string, download?: boolean, scopePath?: string, recursionLevel?: TfvcInterfaces.VersionControlRecursionType, versionDescriptor?: TfvcInterfaces.TfvcVersionDescriptor): Q.Promise<TfvcInterfaces.TfvcItem>;
    getItems(project?: string, scopePath?: string, recursionLevel?: TfvcInterfaces.VersionControlRecursionType, includeLinks?: boolean, versionDescriptor?: TfvcInterfaces.TfvcVersionDescriptor): Q.Promise<TfvcInterfaces.TfvcItem[]>;
    getLabelItems(labelId: string, top?: number, skip?: number): Q.Promise<TfvcInterfaces.TfvcItem[]>;
    getLabel(labelId: string, requestData: TfvcInterfaces.TfvcLabelRequestData, project?: string): Q.Promise<TfvcInterfaces.TfvcLabel>;
    getLabels(requestData: TfvcInterfaces.TfvcLabelRequestData, project?: string, top?: number, skip?: number): Q.Promise<TfvcInterfaces.TfvcLabelRef[]>;
    getProjectInfo(projectId: string, project?: string): Q.Promise<TfvcInterfaces.VersionControlProjectInfo>;
    getProjectInfos(project?: string): Q.Promise<TfvcInterfaces.VersionControlProjectInfo[]>;
    getShelvesetChanges(shelvesetId: string, top?: number, skip?: number): Q.Promise<TfvcInterfaces.TfvcChange[]>;
    getShelveset(shelvesetId: string, requestData: TfvcInterfaces.TfvcShelvesetRequestData): Q.Promise<TfvcInterfaces.TfvcShelveset>;
    getShelvesets(requestData: TfvcInterfaces.TfvcShelvesetRequestData, top?: number, skip?: number): Q.Promise<TfvcInterfaces.TfvcShelvesetRef[]>;
    getShelvesetWorkItems(shelvesetId: string): Q.Promise<TfvcInterfaces.AssociatedWorkItem[]>;
}
export declare class TfvcApi implements ITfvcApi {
    baseUrl: string;
    userAgent: string;
    httpClient: httpm.HttpClient;
    restClient: restm.RestClient;
    vsoClient: vsom.VsoClient;
    constructor(baseUrl: string, handlers: VsoBaseInterfaces.IRequestHandler[]);
    setUserAgent(userAgent: string): void;
    connect(onResult: (err: any, statusCode: number, obj: any) => void): void;
    /**
     * Get a single branch hierarchy at the given path with parents or children (if specified)
     *
     * @param {string} path
     * @param {string} project - Project ID or project name
     * @param {boolean} includeParent
     * @param {boolean} includeChildren
     * @param onResult cllback function with the resulting TfvcInterfaces.TfvcBranch
     */
    getBranch(path: string, project: string, includeParent: boolean, includeChildren: boolean, onResult: (err: any, statusCode: number, Branche: TfvcInterfaces.TfvcBranch) => void): void;
    /**
     * Get a collection of branch roots -- first-level children, branches with no parents
     *
     * @param {string} project - Project ID or project name
     * @param {boolean} includeParent
     * @param {boolean} includeChildren
     * @param {boolean} includeDeleted
     * @param {boolean} includeLinks
     * @param onResult cllback function with the resulting TfvcInterfaces.TfvcBranch[]
     */
    getBranches(project: string, includeParent: boolean, includeChildren: boolean, includeDeleted: boolean, includeLinks: boolean, onResult: (err: any, statusCode: number, Branches: TfvcInterfaces.TfvcBranch[]) => void): void;
    /**
     * Get branch hierarchies below the specified scopePath
     *
     * @param {string} scopePath
     * @param {string} project - Project ID or project name
     * @param {boolean} includeDeleted
     * @param {boolean} includeLinks
     * @param onResult cllback function with the resulting TfvcInterfaces.TfvcBranchRef[]
     */
    getBranchRefs(scopePath: string, project: string, includeDeleted: boolean, includeLinks: boolean, onResult: (err: any, statusCode: number, Branches: TfvcInterfaces.TfvcBranchRef[]) => void): void;
    /**
     * Retrieve Tfvc changes for a given changeset
     *
     * @param {number} id
     * @param {number} skip
     * @param {number} top
     * @param onResult cllback function with the resulting TfvcInterfaces.TfvcChange[]
     */
    getChangesetChanges(id: number, skip: number, top: number, onResult: (err: any, statusCode: number, ChangesetChanges: TfvcInterfaces.TfvcChange[]) => void): void;
    /**
     * @param {TfvcInterfaces.TfvcChangeset} changeset
     * @param {string} project - Project ID or project name
     * @param onResult cllback function with the resulting TfvcInterfaces.TfvcChangesetRef
     */
    createChangeset(changeset: TfvcInterfaces.TfvcChangeset, project: string, onResult: (err: any, statusCode: number, Changeset: TfvcInterfaces.TfvcChangesetRef) => void): void;
    /**
     * Retrieve a Tfvc Changeset
     *
     * @param {number} id
     * @param {string} project - Project ID or project name
     * @param {number} maxChangeCount
     * @param {boolean} includeDetails
     * @param {boolean} includeWorkItems
     * @param {number} maxCommentLength
     * @param {boolean} includeSourceRename
     * @param {number} skip
     * @param {number} top
     * @param {string} orderby
     * @param {TfvcInterfaces.TfvcChangesetSearchCriteria} searchCriteria
     * @param onResult cllback function with the resulting TfvcInterfaces.TfvcChangeset
     */
    getChangeset(id: number, project: string, maxChangeCount: number, includeDetails: boolean, includeWorkItems: boolean, maxCommentLength: number, includeSourceRename: boolean, skip: number, top: number, orderby: string, searchCriteria: TfvcInterfaces.TfvcChangesetSearchCriteria, onResult: (err: any, statusCode: number, Changeset: TfvcInterfaces.TfvcChangeset) => void): void;
    /**
     * Retrieve Tfvc changesets
     *
     * @param {string} project - Project ID or project name
     * @param {number} maxChangeCount
     * @param {boolean} includeDetails
     * @param {boolean} includeWorkItems
     * @param {number} maxCommentLength
     * @param {boolean} includeSourceRename
     * @param {number} skip
     * @param {number} top
     * @param {string} orderby
     * @param {TfvcInterfaces.TfvcChangesetSearchCriteria} searchCriteria
     * @param onResult cllback function with the resulting TfvcInterfaces.TfvcChangesetRef[]
     */
    getChangesets(project: string, maxChangeCount: number, includeDetails: boolean, includeWorkItems: boolean, maxCommentLength: number, includeSourceRename: boolean, skip: number, top: number, orderby: string, searchCriteria: TfvcInterfaces.TfvcChangesetSearchCriteria, onResult: (err: any, statusCode: number, Changesets: TfvcInterfaces.TfvcChangesetRef[]) => void): void;
    /**
     * @param {TfvcInterfaces.TfvcChangesetsRequestData} changesetsRequestData
     * @param onResult cllback function with the resulting TfvcInterfaces.TfvcChangesetRef[]
     */
    getBatchedChangesets(changesetsRequestData: TfvcInterfaces.TfvcChangesetsRequestData, onResult: (err: any, statusCode: number, ChangesetsBatch: TfvcInterfaces.TfvcChangesetRef[]) => void): void;
    /**
     * @param {number} id
     * @param onResult cllback function with the resulting TfvcInterfaces.AssociatedWorkItem[]
     */
    getChangesetWorkItems(id: number, onResult: (err: any, statusCode: number, ChangesetWorkItems: TfvcInterfaces.AssociatedWorkItem[]) => void): void;
    /**
     * Post for retrieving a set of items given a list of paths or a long path. Allows for specifying the recursionLevel and version descriptors for each path.
     *
     * @param {TfvcInterfaces.TfvcItemRequestData} itemRequestData
     * @param {string} project - Project ID or project name
     * @param onResult cllback function with the resulting TfvcInterfaces.TfvcItem[][]
     */
    getItemsBatch(itemRequestData: TfvcInterfaces.TfvcItemRequestData, project: string, onResult: (err: any, statusCode: number, ItemBatch: TfvcInterfaces.TfvcItem[][]) => void): void;
    /**
     * Get Item Metadata and/or Content. The download parameter is to indicate whether the content should be available as a download or just sent as a stream in the response. Doesn't apply to zipped content which is always returned as a download.
     *
     * @param {string} path
     * @param {string} project - Project ID or project name
     * @param {string} fileName
     * @param {boolean} download
     * @param {string} scopePath
     * @param {TfvcInterfaces.VersionControlRecursionType} recursionLevel
     * @param {TfvcInterfaces.TfvcVersionDescriptor} versionDescriptor
     * @param onResult cllback function with the resulting TfvcInterfaces.TfvcItem
     */
    getItem(path: string, project: string, fileName: string, download: boolean, scopePath: string, recursionLevel: TfvcInterfaces.VersionControlRecursionType, versionDescriptor: TfvcInterfaces.TfvcVersionDescriptor, onResult: (err: any, statusCode: number, Item: TfvcInterfaces.TfvcItem) => void): void;
    /**
     * Get Item Metadata and/or Content. The download parameter is to indicate whether the content should be available as a download or just sent as a stream in the response. Doesn't apply to zipped content which is always returned as a download.
     *
     * @param {string} path
     * @param {string} project - Project ID or project name
     * @param {string} fileName
     * @param {boolean} download
     * @param {string} scopePath
     * @param {TfvcInterfaces.VersionControlRecursionType} recursionLevel
     * @param {TfvcInterfaces.TfvcVersionDescriptor} versionDescriptor
     * @param onResult cllback function with the resulting ArrayBuffer
     */
    getItemContent(path: string, project: string, fileName: string, download: boolean, scopePath: string, recursionLevel: TfvcInterfaces.VersionControlRecursionType, versionDescriptor: TfvcInterfaces.TfvcVersionDescriptor, onResult: (err: any, statusCode: number, res: NodeJS.ReadableStream) => void): void;
    /**
     * Get a list of Tfvc items
     *
     * @param {string} project - Project ID or project name
     * @param {string} scopePath
     * @param {TfvcInterfaces.VersionControlRecursionType} recursionLevel
     * @param {boolean} includeLinks
     * @param {TfvcInterfaces.TfvcVersionDescriptor} versionDescriptor
     * @param onResult cllback function with the resulting TfvcInterfaces.TfvcItem[]
     */
    getItems(project: string, scopePath: string, recursionLevel: TfvcInterfaces.VersionControlRecursionType, includeLinks: boolean, versionDescriptor: TfvcInterfaces.TfvcVersionDescriptor, onResult: (err: any, statusCode: number, Items: TfvcInterfaces.TfvcItem[]) => void): void;
    /**
     * Get Item Metadata and/or Content. The download parameter is to indicate whether the content should be available as a download or just sent as a stream in the response. Doesn't apply to zipped content which is always returned as a download.
     *
     * @param {string} path
     * @param {string} project - Project ID or project name
     * @param {string} fileName
     * @param {boolean} download
     * @param {string} scopePath
     * @param {TfvcInterfaces.VersionControlRecursionType} recursionLevel
     * @param {TfvcInterfaces.TfvcVersionDescriptor} versionDescriptor
     * @param onResult cllback function with the resulting string
     */
    getItemText(path: string, project: string, fileName: string, download: boolean, scopePath: string, recursionLevel: TfvcInterfaces.VersionControlRecursionType, versionDescriptor: TfvcInterfaces.TfvcVersionDescriptor, onResult: (err: any, statusCode: number, res: NodeJS.ReadableStream) => void): void;
    /**
     * Get Item Metadata and/or Content. The download parameter is to indicate whether the content should be available as a download or just sent as a stream in the response. Doesn't apply to zipped content which is always returned as a download.
     *
     * @param {string} path
     * @param {string} project - Project ID or project name
     * @param {string} fileName
     * @param {boolean} download
     * @param {string} scopePath
     * @param {TfvcInterfaces.VersionControlRecursionType} recursionLevel
     * @param {TfvcInterfaces.TfvcVersionDescriptor} versionDescriptor
     * @param onResult cllback function with the resulting ArrayBuffer
     */
    getItemZip(path: string, project: string, fileName: string, download: boolean, scopePath: string, recursionLevel: TfvcInterfaces.VersionControlRecursionType, versionDescriptor: TfvcInterfaces.TfvcVersionDescriptor, onResult: (err: any, statusCode: number, res: NodeJS.ReadableStream) => void): void;
    /**
     * Get items under a label.
     *
     * @param {string} labelId - Unique identifier of label
     * @param {number} top - Max number of items to return
     * @param {number} skip - Number of items to skip
     * @param onResult cllback function with the resulting TfvcInterfaces.TfvcItem[]
     */
    getLabelItems(labelId: string, top: number, skip: number, onResult: (err: any, statusCode: number, LabelItems: TfvcInterfaces.TfvcItem[]) => void): void;
    /**
     * Get a single deep label.
     *
     * @param {string} labelId - Unique identifier of label
     * @param {TfvcInterfaces.TfvcLabelRequestData} requestData - maxItemCount
     * @param {string} project - Project ID or project name
     * @param onResult cllback function with the resulting TfvcInterfaces.TfvcLabel
     */
    getLabel(labelId: string, requestData: TfvcInterfaces.TfvcLabelRequestData, project: string, onResult: (err: any, statusCode: number, Label: TfvcInterfaces.TfvcLabel) => void): void;
    /**
     * Get a collection of shallow label references.
     *
     * @param {TfvcInterfaces.TfvcLabelRequestData} requestData - labelScope, name, owner, and itemLabelFilter
     * @param {string} project - Project ID or project name
     * @param {number} top - Max number of labels to return
     * @param {number} skip - Number of labels to skip
     * @param onResult cllback function with the resulting TfvcInterfaces.TfvcLabelRef[]
     */
    getLabels(requestData: TfvcInterfaces.TfvcLabelRequestData, project: string, top: number, skip: number, onResult: (err: any, statusCode: number, Labels: TfvcInterfaces.TfvcLabelRef[]) => void): void;
    /**
     * Retrieve the version control information for a given Team Project
     *
     * @param {string} projectId - The id (or name) of the team project
     * @param {string} project - Project ID or project name
     * @param onResult cllback function with the resulting TfvcInterfaces.VersionControlProjectInfo
     */
    getProjectInfo(projectId: string, project: string, onResult: (err: any, statusCode: number, ProjectInfo: TfvcInterfaces.VersionControlProjectInfo) => void): void;
    /**
     * @param {string} project - Project ID or project name
     * @param onResult cllback function with the resulting TfvcInterfaces.VersionControlProjectInfo[]
     */
    getProjectInfos(project: string, onResult: (err: any, statusCode: number, ProjectInfo: TfvcInterfaces.VersionControlProjectInfo[]) => void): void;
    /**
     * Get changes included in a shelveset.
     *
     * @param {string} shelvesetId - Shelveset's unique ID
     * @param {number} top - Max number of changes to return
     * @param {number} skip - Number of changes to skip
     * @param onResult cllback function with the resulting TfvcInterfaces.TfvcChange[]
     */
    getShelvesetChanges(shelvesetId: string, top: number, skip: number, onResult: (err: any, statusCode: number, ShelvesetChanges: TfvcInterfaces.TfvcChange[]) => void): void;
    /**
     * Get a single deep shelveset.
     *
     * @param {string} shelvesetId - Shelveset's unique ID
     * @param {TfvcInterfaces.TfvcShelvesetRequestData} requestData - includeDetails, includeWorkItems, maxChangeCount, and maxCommentLength
     * @param onResult cllback function with the resulting TfvcInterfaces.TfvcShelveset
     */
    getShelveset(shelvesetId: string, requestData: TfvcInterfaces.TfvcShelvesetRequestData, onResult: (err: any, statusCode: number, Shelveset: TfvcInterfaces.TfvcShelveset) => void): void;
    /**
     * Return a collection of shallow shelveset references.
     *
     * @param {TfvcInterfaces.TfvcShelvesetRequestData} requestData - name, owner, and maxCommentLength
     * @param {number} top - Max number of shelvesets to return
     * @param {number} skip - Number of shelvesets to skip
     * @param onResult cllback function with the resulting TfvcInterfaces.TfvcShelvesetRef[]
     */
    getShelvesets(requestData: TfvcInterfaces.TfvcShelvesetRequestData, top: number, skip: number, onResult: (err: any, statusCode: number, Shelvesets: TfvcInterfaces.TfvcShelvesetRef[]) => void): void;
    /**
     * Get work items associated with a shelveset.
     *
     * @param {string} shelvesetId - Shelveset's unique ID
     * @param onResult cllback function with the resulting TfvcInterfaces.AssociatedWorkItem[]
     */
    getShelvesetWorkItems(shelvesetId: string, onResult: (err: any, statusCode: number, ShelvesetWorkItems: TfvcInterfaces.AssociatedWorkItem[]) => void): void;
}
export declare class QTfvcApi implements IQTfvcApi {
    TfvcApi: ITfvcApi;
    constructor(baseUrl: string, handlers: VsoBaseInterfaces.IRequestHandler[]);
    connect(): Q.Promise<any>;
    /**
    * Get a single branch hierarchy at the given path with parents or children (if specified)
    *
    * @param {string} path
    * @param {string} project - Project ID or project name
    * @param {boolean} includeParent
    * @param {boolean} includeChildren
    */
    getBranch(path: string, project?: string, includeParent?: boolean, includeChildren?: boolean): Q.Promise<TfvcInterfaces.TfvcBranch>;
    /**
    * Get a collection of branch roots -- first-level children, branches with no parents
    *
    * @param {string} project - Project ID or project name
    * @param {boolean} includeParent
    * @param {boolean} includeChildren
    * @param {boolean} includeDeleted
    * @param {boolean} includeLinks
    */
    getBranches(project?: string, includeParent?: boolean, includeChildren?: boolean, includeDeleted?: boolean, includeLinks?: boolean): Q.Promise<TfvcInterfaces.TfvcBranch[]>;
    /**
    * Get branch hierarchies below the specified scopePath
    *
    * @param {string} scopePath
    * @param {string} project - Project ID or project name
    * @param {boolean} includeDeleted
    * @param {boolean} includeLinks
    */
    getBranchRefs(scopePath: string, project?: string, includeDeleted?: boolean, includeLinks?: boolean): Q.Promise<TfvcInterfaces.TfvcBranchRef[]>;
    /**
    * Retrieve Tfvc changes for a given changeset
    *
    * @param {number} id
    * @param {number} skip
    * @param {number} top
    */
    getChangesetChanges(id?: number, skip?: number, top?: number): Q.Promise<TfvcInterfaces.TfvcChange[]>;
    /**
    * @param {TfvcInterfaces.TfvcChangeset} changeset
    * @param {string} project - Project ID or project name
    */
    createChangeset(changeset: TfvcInterfaces.TfvcChangeset, project?: string): Q.Promise<TfvcInterfaces.TfvcChangesetRef>;
    /**
    * Retrieve a Tfvc Changeset
    *
    * @param {number} id
    * @param {string} project - Project ID or project name
    * @param {number} maxChangeCount
    * @param {boolean} includeDetails
    * @param {boolean} includeWorkItems
    * @param {number} maxCommentLength
    * @param {boolean} includeSourceRename
    * @param {number} skip
    * @param {number} top
    * @param {string} orderby
    * @param {TfvcInterfaces.TfvcChangesetSearchCriteria} searchCriteria
    */
    getChangeset(id: number, project?: string, maxChangeCount?: number, includeDetails?: boolean, includeWorkItems?: boolean, maxCommentLength?: number, includeSourceRename?: boolean, skip?: number, top?: number, orderby?: string, searchCriteria?: TfvcInterfaces.TfvcChangesetSearchCriteria): Q.Promise<TfvcInterfaces.TfvcChangeset>;
    /**
    * Retrieve Tfvc changesets
    *
    * @param {string} project - Project ID or project name
    * @param {number} maxChangeCount
    * @param {boolean} includeDetails
    * @param {boolean} includeWorkItems
    * @param {number} maxCommentLength
    * @param {boolean} includeSourceRename
    * @param {number} skip
    * @param {number} top
    * @param {string} orderby
    * @param {TfvcInterfaces.TfvcChangesetSearchCriteria} searchCriteria
    */
    getChangesets(project?: string, maxChangeCount?: number, includeDetails?: boolean, includeWorkItems?: boolean, maxCommentLength?: number, includeSourceRename?: boolean, skip?: number, top?: number, orderby?: string, searchCriteria?: TfvcInterfaces.TfvcChangesetSearchCriteria): Q.Promise<TfvcInterfaces.TfvcChangesetRef[]>;
    /**
    * @param {TfvcInterfaces.TfvcChangesetsRequestData} changesetsRequestData
    */
    getBatchedChangesets(changesetsRequestData: TfvcInterfaces.TfvcChangesetsRequestData): Q.Promise<TfvcInterfaces.TfvcChangesetRef[]>;
    /**
    * @param {number} id
    */
    getChangesetWorkItems(id?: number): Q.Promise<TfvcInterfaces.AssociatedWorkItem[]>;
    /**
    * Post for retrieving a set of items given a list of paths or a long path. Allows for specifying the recursionLevel and version descriptors for each path.
    *
    * @param {TfvcInterfaces.TfvcItemRequestData} itemRequestData
    * @param {string} project - Project ID or project name
    */
    getItemsBatch(itemRequestData: TfvcInterfaces.TfvcItemRequestData, project?: string): Q.Promise<TfvcInterfaces.TfvcItem[][]>;
    /**
    * Get Item Metadata and/or Content. The download parameter is to indicate whether the content should be available as a download or just sent as a stream in the response. Doesn't apply to zipped content which is always returned as a download.
    *
    * @param {string} path
    * @param {string} project - Project ID or project name
    * @param {string} fileName
    * @param {boolean} download
    * @param {string} scopePath
    * @param {TfvcInterfaces.VersionControlRecursionType} recursionLevel
    * @param {TfvcInterfaces.TfvcVersionDescriptor} versionDescriptor
    */
    getItem(path: string, project?: string, fileName?: string, download?: boolean, scopePath?: string, recursionLevel?: TfvcInterfaces.VersionControlRecursionType, versionDescriptor?: TfvcInterfaces.TfvcVersionDescriptor): Q.Promise<TfvcInterfaces.TfvcItem>;
    /**
    * Get a list of Tfvc items
    *
    * @param {string} project - Project ID or project name
    * @param {string} scopePath
    * @param {TfvcInterfaces.VersionControlRecursionType} recursionLevel
    * @param {boolean} includeLinks
    * @param {TfvcInterfaces.TfvcVersionDescriptor} versionDescriptor
    */
    getItems(project?: string, scopePath?: string, recursionLevel?: TfvcInterfaces.VersionControlRecursionType, includeLinks?: boolean, versionDescriptor?: TfvcInterfaces.TfvcVersionDescriptor): Q.Promise<TfvcInterfaces.TfvcItem[]>;
    /**
    * Get items under a label.
    *
    * @param {string} labelId - Unique identifier of label
    * @param {number} top - Max number of items to return
    * @param {number} skip - Number of items to skip
    */
    getLabelItems(labelId: string, top?: number, skip?: number): Q.Promise<TfvcInterfaces.TfvcItem[]>;
    /**
    * Get a single deep label.
    *
    * @param {string} labelId - Unique identifier of label
    * @param {TfvcInterfaces.TfvcLabelRequestData} requestData - maxItemCount
    * @param {string} project - Project ID or project name
    */
    getLabel(labelId: string, requestData: TfvcInterfaces.TfvcLabelRequestData, project?: string): Q.Promise<TfvcInterfaces.TfvcLabel>;
    /**
    * Get a collection of shallow label references.
    *
    * @param {TfvcInterfaces.TfvcLabelRequestData} requestData - labelScope, name, owner, and itemLabelFilter
    * @param {string} project - Project ID or project name
    * @param {number} top - Max number of labels to return
    * @param {number} skip - Number of labels to skip
    */
    getLabels(requestData: TfvcInterfaces.TfvcLabelRequestData, project?: string, top?: number, skip?: number): Q.Promise<TfvcInterfaces.TfvcLabelRef[]>;
    /**
    * Retrieve the version control information for a given Team Project
    *
    * @param {string} projectId - The id (or name) of the team project
    * @param {string} project - Project ID or project name
    */
    getProjectInfo(projectId: string, project?: string): Q.Promise<TfvcInterfaces.VersionControlProjectInfo>;
    /**
    * @param {string} project - Project ID or project name
    */
    getProjectInfos(project?: string): Q.Promise<TfvcInterfaces.VersionControlProjectInfo[]>;
    /**
    * Get changes included in a shelveset.
    *
    * @param {string} shelvesetId - Shelveset's unique ID
    * @param {number} top - Max number of changes to return
    * @param {number} skip - Number of changes to skip
    */
    getShelvesetChanges(shelvesetId: string, top?: number, skip?: number): Q.Promise<TfvcInterfaces.TfvcChange[]>;
    /**
    * Get a single deep shelveset.
    *
    * @param {string} shelvesetId - Shelveset's unique ID
    * @param {TfvcInterfaces.TfvcShelvesetRequestData} requestData - includeDetails, includeWorkItems, maxChangeCount, and maxCommentLength
    */
    getShelveset(shelvesetId: string, requestData: TfvcInterfaces.TfvcShelvesetRequestData): Q.Promise<TfvcInterfaces.TfvcShelveset>;
    /**
    * Return a collection of shallow shelveset references.
    *
    * @param {TfvcInterfaces.TfvcShelvesetRequestData} requestData - name, owner, and maxCommentLength
    * @param {number} top - Max number of shelvesets to return
    * @param {number} skip - Number of shelvesets to skip
    */
    getShelvesets(requestData: TfvcInterfaces.TfvcShelvesetRequestData, top?: number, skip?: number): Q.Promise<TfvcInterfaces.TfvcShelvesetRef[]>;
    /**
    * Get work items associated with a shelveset.
    *
    * @param {string} shelvesetId - Shelveset's unique ID
    */
    getShelvesetWorkItems(shelvesetId: string): Q.Promise<TfvcInterfaces.AssociatedWorkItem[]>;
}
