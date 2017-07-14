// Copyright (c) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import VsoBaseInterfaces = require('./interfaces/common/VsoBaseInterfaces');
import basem = require('./ClientApiBases');
import buildm = require('./BuildApi');
import chatm = require('./ChatApi');
import contributionsm = require("./ContributionsApi");
import corem = require('./CoreApi');
import dashboardm = require('./DashboardApi');
import delegatedauthorizationm = require('./DelegatedAuthorizationApi');
import extmgmtm = require("./ExtensionManagementApi");
import featuremgmtm = require("./FeatureManagementApi");
import filecontainerm = require('./FileContainerApi');
import gallerym = require('./GalleryApi');
import gitm = require('./GitApi');
import identitiesm = require('./IdentitiesApi');
import locationsm = require('./LocationsApi');
import notificationm = require('./NotificationApi');
import organizationm = require('./OrganizationApi');
import policym = require('./PolicyApi');
import profilem = require('./ProfileApi');
import releasem = require('./ReleaseApi');
import securityrolesm = require('./SecurityRolesApi');
import servicehooksm = require('./ServiceHooksApi');
import taskagentm = require('./TaskAgentApi');
import taskm = require('./TaskApi');
import testm = require('./TestApi');
import tfvcm = require('./TfvcApi');
import tokenm = require('./TokenApi');
import workm = require('./WorkApi');
import workitemtrackingm = require('./WorkItemTrackingApi');
import basicm = require('./handlers/basiccreds');
import bearm = require('./handlers/bearertoken');
import ntlmm = require('./handlers/ntlm');
import patm = require('./handlers/personalaccesstoken');

import * as rm from 'typed-rest-client/RestClient';
//import * as hm from 'typed-rest-client/HttpClient';
import vsom = require('./VsoClient');
import lim = require("./interfaces/LocationsInterfaces");

/**
 * Methods to return handler objects (see handlers folder)
 */

export function getBasicHandler(username: string, password: string): VsoBaseInterfaces.IRequestHandler {
    return new basicm.BasicCredentialHandler(username, password);
}

export function getNtlmHandler(username: string, password: string, workstation?: string, domain?: string): VsoBaseInterfaces.IRequestHandler {
    return new ntlmm.NtlmCredentialHandler(username, password, workstation, domain);
}

export function getBearerHandler(token: string): VsoBaseInterfaces.IRequestHandler {
    return new bearm.BearerCredentialHandler(token);
}

export function getPersonalAccessTokenHandler(token: string): VsoBaseInterfaces.IRequestHandler {
    return new patm.PersonalAccessTokenCredentialHandler(token);
}

export function getHandlerFromToken(token: string): VsoBaseInterfaces.IRequestHandler {
    if (token.length === 52) {
        return getPersonalAccessTokenHandler(token);
    }
    else {
        return getBearerHandler(token);
    }
}

// ---------------------------------------------------------------------------
// Factory to return client apis
// When new APIs are added, a method must be added here to instantiate the API
//----------------------------------------------------------------------------
export class WebApi {

    serverUrl: string;
    authHandler: VsoBaseInterfaces.IRequestHandler;
    rest: rm.RestClient;
    vsoClient: vsom.VsoClient;
    options?: VsoBaseInterfaces.IRequestOptions;

    /*
     * Factory to return client apis and handlers
     * @param defaultUrl default server url to use when creating new apis from factory methods
     * @param authHandler default authentication credentials to use when creating new apis from factory methods
     */
    constructor(defaultUrl: string, authHandler: VsoBaseInterfaces.IRequestHandler, options?: VsoBaseInterfaces.IRequestOptions) {
        this.serverUrl = defaultUrl;
        this.authHandler = authHandler;
        this.options = options;
        this.rest = new rm.RestClient('vsts-node-api', null, [this.authHandler], options);
        this.vsoClient = new vsom.VsoClient(defaultUrl, this.rest);
    }

    /**
     *  Convenience factory to create with a bearer token.
     * @param defaultServerUrl default server url to use when creating new apis from factory methods
     * @param defaultAuthHandler default authentication credentials to use when creating new apis from factory methods
     */
    public static createWithBearerToken(defaultUrl: string, token: string, options?: VsoBaseInterfaces.IRequestOptions) {
        let bearerHandler = getBearerHandler(token);
        return new this(defaultUrl, bearerHandler, options);
    }

    public async connect(): Promise<lim.ConnectionData> {
        return new Promise<lim.ConnectionData>(async (resolve, reject) => {
            try {
                let res: rm.IRestResponse<lim.ConnectionData>;
                res = await this.rest.get<lim.ConnectionData>(this.vsoClient.resolveUrl('/_apis/connectionData'));
                resolve(res.result);
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Each factory method can take a serverUrl and a list of handlers
     * if these aren't provided, the default url and auth handler given to the constructor for this class will be used
     */
    public getBuildApi(serverUrl?: string, handlers?: VsoBaseInterfaces.IRequestHandler[]): buildm.IBuildApi {
        serverUrl = serverUrl || this.serverUrl;
        handlers = handlers || [this.authHandler];
        return new buildm.BuildApi(serverUrl, handlers, this.options);
    }

    /**
     * Each API has a method here to create the client.
     */

    public getChatApi(serverUrl?: string, handlers?: VsoBaseInterfaces.IRequestHandler[]): chatm.IChatApi {
        serverUrl = serverUrl || this.serverUrl;
        handlers = handlers || [this.authHandler];
        return new chatm.ChatApi(serverUrl, handlers, this.options);
    }

    public getCoreApi(serverUrl?: string, handlers?: VsoBaseInterfaces.IRequestHandler[]): corem.ICoreApi {
        serverUrl = serverUrl || this.serverUrl;
        handlers = handlers || [this.authHandler];
        return new corem.CoreApi(serverUrl, handlers, this.options);
    }

    public getContributionsApi(serverUrl?: string, handlers?: VsoBaseInterfaces.IRequestHandler[]): contributionsm.IContributionsApi {
        serverUrl = serverUrl || this.serverUrl;
        handlers = handlers || [this.authHandler];
        return new contributionsm.ContributionsApi(serverUrl, handlers, this.options);
    }

    public getDashboardApi(serverUrl?: string, handlers?: VsoBaseInterfaces.IRequestHandler[]): dashboardm.IDashboardApi {
        serverUrl = serverUrl || this.serverUrl;
        handlers = handlers || [this.authHandler];
        return new dashboardm.DashboardApi(serverUrl, handlers, this.options);
    }

    public getDelegatedAuthorizationApi(serverUrl?: string, handlers?: VsoBaseInterfaces.IRequestHandler[]): delegatedauthorizationm.IDelegatedAuthorizationApi {
        serverUrl = serverUrl || this.serverUrl;
        handlers = handlers || [this.authHandler];
        return new delegatedauthorizationm.DelegatedAuthorizationApi(serverUrl, handlers, this.options);
    }

    public getExtensionManagementApi(serverUrl?: string, handlers?: VsoBaseInterfaces.IRequestHandler[]): extmgmtm.IExtensionManagementApi {
        serverUrl = serverUrl || this.serverUrl;
        handlers = handlers || [this.authHandler];
        return new extmgmtm.ExtensionManagementApi(serverUrl, handlers, this.options);
    }

    public getFeatureManagementApi(serverUrl?: string, handlers?: VsoBaseInterfaces.IRequestHandler[]): featuremgmtm.IFeatureManagementApi {
        serverUrl = serverUrl || this.serverUrl;
        handlers = handlers || [this.authHandler];
        return new featuremgmtm.FeatureManagementApi(serverUrl, handlers, this.options);
    }

    public getFileContainerApi(serverUrl?: string, handlers?: VsoBaseInterfaces.IRequestHandler[]): filecontainerm.IFileContainerApi {
        serverUrl = serverUrl || this.serverUrl;
        handlers = handlers || [this.authHandler];
        return new filecontainerm.FileContainerApi(serverUrl, handlers, this.options);
    }

    public getGalleryApi(serverUrl?: string, handlers?: VsoBaseInterfaces.IRequestHandler[]): gallerym.IGalleryApi {
        serverUrl = serverUrl || this.serverUrl;
        handlers = handlers || [this.authHandler];
        return new gallerym.GalleryApi(serverUrl, handlers, this.options);
    }

    public getGitApi(serverUrl?: string, handlers?: VsoBaseInterfaces.IRequestHandler[]): gitm.IGitApi {
        serverUrl = serverUrl || this.serverUrl;
        handlers = handlers || [this.authHandler];
        return new gitm.GitApi(serverUrl, handlers, this.options);
    }

    public getIdentitiesApi(serverUrl?: string, handlers?: VsoBaseInterfaces.IRequestHandler[]): identitiesm.IIdentitiesApi {
        serverUrl = serverUrl || this.serverUrl;
        handlers = handlers || [this.authHandler];
        return new identitiesm.IdentitiesApi(serverUrl, handlers, this.options);
    }

    public getLocationsApi(serverUrl?: string, handlers?: VsoBaseInterfaces.IRequestHandler[]): locationsm.ILocationsApi {
        serverUrl = serverUrl || this.serverUrl;
        handlers = handlers || [this.authHandler];
        return new locationsm.LocationsApi(serverUrl, handlers, this.options);
    }

    public getNotificationApi(serverUrl?: string, handlers?: VsoBaseInterfaces.IRequestHandler[]): notificationm.INotificationApi {
        serverUrl = serverUrl || this.serverUrl;
        handlers = handlers || [this.authHandler];
        return new notificationm.NotificationApi(serverUrl, handlers, this.options);
    }

    public getOrganizationApi(serverUrl?: string, handlers?: VsoBaseInterfaces.IRequestHandler[]): organizationm.IOrganizationApi {
        serverUrl = serverUrl || this.serverUrl;
        handlers = handlers || [this.authHandler];
        return new organizationm.OrganizationApi(serverUrl, handlers, this.options);
    }

    public getPolicyApi(serverUrl?: string, handlers?: VsoBaseInterfaces.IRequestHandler[]): policym.IPolicyApi {
        serverUrl = serverUrl || this.serverUrl;
        handlers = handlers || [this.authHandler];
        return new policym.PolicyApi(serverUrl, handlers, this.options);
    }

    public getProfileApi(serverUrl?: string, handlers?: VsoBaseInterfaces.IRequestHandler[]): profilem.IProfileApi {
        serverUrl = serverUrl || this.serverUrl;
        handlers = handlers || [this.authHandler];
        return new profilem.ProfileApi(serverUrl, handlers, this.options);
    }

    public getSecurityRolesApi(serverUrl?: string, handlers?: VsoBaseInterfaces.IRequestHandler[]): securityrolesm.ISecurityRolesApi {
        serverUrl = serverUrl || this.serverUrl;
        handlers = handlers || [this.authHandler];
        return new securityrolesm.SecurityRolesApi(serverUrl, handlers, this.options);
    }

    public getServiceHooksApi(serverUrl?: string, handlers?: VsoBaseInterfaces.IRequestHandler[]): servicehooksm.IServiceHooksApi {
        serverUrl = serverUrl || this.serverUrl;
        handlers = handlers || [this.authHandler];
        return new servicehooksm.ServiceHooksApi(serverUrl, handlers, this.options);
    }

    public getReleaseApi(serverUrl?: string, handlers?: VsoBaseInterfaces.IRequestHandler[]): releasem.IReleaseApi {
        serverUrl = serverUrl || this.serverUrl;
        handlers = handlers || [this.authHandler];
        return new releasem.ReleaseApi(serverUrl, handlers, this.options);
    }

    public getTaskApi(serverUrl?: string, handlers?: VsoBaseInterfaces.IRequestHandler[]): taskm.ITaskApi {
        serverUrl = serverUrl || this.serverUrl;
        handlers = handlers || [this.authHandler];
        return new taskm.TaskApi(serverUrl, handlers, this.options);
    }

    public getTaskAgentApi(serverUrl?: string, handlers?: VsoBaseInterfaces.IRequestHandler[]): taskagentm.ITaskAgentApi {
        serverUrl = serverUrl || this.serverUrl;
        handlers = handlers || [this.authHandler];
        return new taskagentm.TaskAgentApi(serverUrl, handlers, this.options);
    }

    public getTestApi(serverUrl?: string, handlers?: VsoBaseInterfaces.IRequestHandler[]): testm.ITestApi {
        serverUrl = serverUrl || this.serverUrl;
        handlers = handlers || [this.authHandler];
        return new testm.TestApi(serverUrl, handlers, this.options);
    }

    public getTfvcApi(serverUrl?: string, handlers?: VsoBaseInterfaces.IRequestHandler[]): tfvcm.ITfvcApi {
        serverUrl = serverUrl || this.serverUrl;
        handlers = handlers || [this.authHandler];
        return new tfvcm.TfvcApi(serverUrl, handlers, this.options);
    }

    public getWorkApi(serverUrl?: string, handlers?: VsoBaseInterfaces.IRequestHandler[]): workm.IWorkApi {
        serverUrl = serverUrl || this.serverUrl;
        handlers = handlers || [this.authHandler];
        return new workm.WorkApi(serverUrl, handlers, this.options);
    }

    public getWorkItemTrackingApi(serverUrl?: string, handlers?: VsoBaseInterfaces.IRequestHandler[]): workitemtrackingm.IWorkItemTrackingApi {
        serverUrl = serverUrl || this.serverUrl;
        handlers = handlers || [this.authHandler];
        return new workitemtrackingm.WorkItemTrackingApi(serverUrl, handlers, this.options);
    }
}
