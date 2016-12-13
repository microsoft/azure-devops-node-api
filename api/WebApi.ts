// Copyright (c) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import VsoBaseInterfaces = require('./interfaces/common/VsoBaseInterfaces');
import basem = require('./ClientApiBases');
import buildm = require('./BuildApi');
import contributionsm = require("./ContributionsApi");
import corem = require('./CoreApi');
import extmgmtm = require("./ExtensionManagementApi");
import featuremgmtm = require("./FeatureManagementApi");
import filecontainerm = require('./FileContainerApi');
import gallerym = require('./GalleryApi');
import gitm = require('./GitApi');
import taskagentm = require('./TaskAgentApi');
import taskm = require('./TaskApi');
import testm = require('./TestApi');
import tfvcm = require('./TfvcApi');
import workitemtrackingm = require('./WorkItemTrackingApi');
import releasem = require('./ReleaseApi');
import basicm = require('./handlers/basiccreds');
import bearm = require('./handlers/bearertoken');
import ntlmm = require('./handlers/ntlm');
import patm = require('./handlers/personalaccesstoken');

/**
 * Methods to return handler objects (see handlers folder)
 */

export function getBasicHandler(username: string, password: string) {
    return new basicm.BasicCredentialHandler(username, password);
}

export function getNtlmHandler(username: string, password: string, workstation?: string, domain?: string) {
    return new ntlmm.NtlmCredentialHandler(username, password, workstation, domain);
}

export function getBearerHandler(token) {
    return new bearm.BearerCredentialHandler(token);
}

export function getPersonalAccessTokenHandler(token) {
    return new patm.PersonalAccessTokenCredentialHandler(token);
}

// ---------------------------------------------------------------------------
// Factory to return client apis
// When new APIs are added, two methods must be added here to instantiate the
// API and its corresponding Q Promise-wrapped API
//----------------------------------------------------------------------------
export class WebApi {

    serverUrl: string;
    authHandler: VsoBaseInterfaces.IRequestHandler;

    /*
     * Factory to return client apis and handlers
     * @param defaultUrl default server url to use when creating new apis from factory methods
     * @param authHandler default authentication credentials to use when creating new apis from factory methods
     */
    constructor(defaultUrl: string, authHandler: VsoBaseInterfaces.IRequestHandler) {
        this.serverUrl = defaultUrl;
        this.authHandler = authHandler;
    }

    /**
     *  Convenience factory to create with a bearer token.
     * @param defaultServerUrl default server url to use when creating new apis from factory methods
     * @param defaultAuthHandler default authentication credentials to use when creating new apis from factory methods
     */ 
    public static createWithBearerToken(defaultUrl: string, token: string) {
        let bearerHandler = getBearerHandler(token);
        return new this(defaultUrl, bearerHandler);
    } 

    /**
     * Each factory method can take a serverUrl and a list of handlers
     * if these aren't provided, the default url and auth handler given to the constructor for this class will be used
     */
    public getBuildApi(serverUrl?: string, handlers?: VsoBaseInterfaces.IRequestHandler[]): buildm.IBuildApi {
        serverUrl = serverUrl || this.serverUrl;
        handlers = handlers || [this.authHandler];
        return new buildm.BuildApi(serverUrl, handlers);
    }

    /**
     * Each API has a method here to create the client.
     */
    public getCoreApi(serverUrl?: string, handlers?: VsoBaseInterfaces.IRequestHandler[]): corem.ICoreApi {
        serverUrl = serverUrl || this.serverUrl;
        handlers = handlers || [this.authHandler];        
        return new corem.CoreApi(serverUrl, handlers);
    }

    public getContributionsApi(serverUrl?: string, handlers?: VsoBaseInterfaces.IRequestHandler[]): contributionsm.ContributionsApi {
        serverUrl = serverUrl || this.serverUrl;
        handlers = handlers || [this.authHandler];        
        return new contributionsm.ContributionsApi(serverUrl, handlers);
    }

    public getExtensionManagementApi(serverUrl?: string, handlers?: VsoBaseInterfaces.IRequestHandler[]): extmgmtm.IExtensionManagementApi {
        serverUrl = serverUrl || this.serverUrl;
        handlers = handlers || [this.authHandler];        
        return new extmgmtm.ExtensionManagementApi(serverUrl, handlers);
    }

    public getFeatureManagementApi(serverUrl?: string, handlers?: VsoBaseInterfaces.IRequestHandler[]): featuremgmtm.FeatureManagementApi {
        serverUrl = serverUrl || this.serverUrl;
        handlers = handlers || [this.authHandler];        
        return new featuremgmtm.FeatureManagementApi(serverUrl, handlers);
    }

    public getFileContainerApi(serverUrl?: string, handlers?: VsoBaseInterfaces.IRequestHandler[]): filecontainerm.IFileContainerApi {
        serverUrl = serverUrl || this.serverUrl;
        handlers = handlers || [this.authHandler];        
        return new filecontainerm.FileContainerApi(serverUrl, handlers);
    }

    public getGalleryApi(serverUrl?: string, handlers?: VsoBaseInterfaces.IRequestHandler[]): gallerym.IGalleryApi {
        serverUrl = serverUrl || this.serverUrl;
        handlers = handlers || [this.authHandler];        
        return new gallerym.GalleryApi(serverUrl, handlers);
    }

    public getGitApi(serverUrl?: string, handlers?: VsoBaseInterfaces.IRequestHandler[]): gitm.IGitApi {
        serverUrl = serverUrl || this.serverUrl;
        handlers = handlers || [this.authHandler];        
        return new gitm.GitApi(serverUrl, handlers);
    }

    public getTaskApi(serverUrl?: string, handlers?: VsoBaseInterfaces.IRequestHandler[]): taskm.ITaskApi {
        serverUrl = serverUrl || this.serverUrl;
        handlers = handlers || [this.authHandler];        
        return new taskm.TaskApi(serverUrl, handlers);
    }

    public getTaskAgentApi(serverUrl?: string, handlers?: VsoBaseInterfaces.IRequestHandler[]): taskagentm.ITaskAgentApi {
        serverUrl = serverUrl || this.serverUrl;
        handlers = handlers || [this.authHandler];        
        return new taskagentm.TaskAgentApi(serverUrl, handlers); 
    }

    public getTestApi(serverUrl?: string, handlers?: VsoBaseInterfaces.IRequestHandler[]): testm.ITestApi {
        serverUrl = serverUrl || this.serverUrl;
        handlers = handlers || [this.authHandler];        
        return new testm.TestApi(serverUrl, handlers); 
    }

    public getTfvcApi(serverUrl?: string, handlers?: VsoBaseInterfaces.IRequestHandler[]): tfvcm.ITfvcApi {
        serverUrl = serverUrl || this.serverUrl;
        handlers = handlers || [this.authHandler];        
        return new tfvcm.TfvcApi(serverUrl, handlers);
    }

    public getWorkItemTrackingApi(serverUrl?: string, handlers?: VsoBaseInterfaces.IRequestHandler[]): workitemtrackingm.IWorkItemTrackingApi {
        serverUrl = serverUrl || this.serverUrl;
        handlers = handlers || [this.authHandler];        
        return new workitemtrackingm.WorkItemTrackingApi(serverUrl, handlers);
    }

    public getReleaseApi(serverUrl?: string, handlers?: VsoBaseInterfaces.IRequestHandler[]): releasem.IReleaseApi {
        serverUrl = serverUrl || this.serverUrl;
        handlers = handlers || [this.authHandler];        
        return new releasem.ReleaseApi(serverUrl, handlers);
    }
}
