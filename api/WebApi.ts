// Copyright (c) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import VsoBaseInterfaces = require('./interfaces/common/VsoBaseInterfaces');
import basem = require('./ClientApiBases');
import buildm = require('./BuildApi');
import corem = require('./CoreApi');
import filecontainerm = require('./FileContainerApi');
import gallerym = require('./GalleryApi');
import gitm = require('./GitApi');
import taskagentm = require('./TaskAgentApi');
import taskm = require('./TaskApi');
import testm = require('./TestApi');
import tfvcm = require('./TfvcApi');
import workitemtrackingm = require('./WorkItemTrackingApi');
import releasem = require('./ReleaseApi');

import apivm = require('./handlers/apiversion');
import basicm = require('./handlers/basiccreds');
import bearm = require('./handlers/bearertoken');
import ntlmm = require('./handlers/ntlm');

/**
 * Methods to return handler objects (see handlers folder)
 */
export function getVersionHandler(apiVersion: string) {
    return new apivm.ApiVersionHandler(apiVersion);
}

export function getBasicHandler(username: string, password: string) {
    return new basicm.BasicCredentialHandler(username, password);
}

export function getNtlmHandler(username: string, password: string, workstation?: string, domain?: string) {
    return new ntlmm.NtlmCredentialHandler(username, password, workstation, domain);
}

export function getBearerHandler(token) {
    return new bearm.BearerCredentialHandler(token);
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
     * @param defaultServerUrl default server url to use when creating new apis from factory methods
     * @param defaultAuthHandler default authentication credentials to use when creating new apis from factory methods
     */
    constructor(serverUrl: string, authHandler: VsoBaseInterfaces.IRequestHandler) {
        this.serverUrl = serverUrl;
        this.authHandler = authHandler;
    }

    /**
     * Each factory method can take a serverUrl and a list of handlers
     * if these aren't provided, the default url and auth handler given to the constructor for this class will be used
     */
    public getBuildApi(serverUrl: string = this.serverUrl, handlers: VsoBaseInterfaces.IRequestHandler[] = [this.authHandler]): buildm.IBuildApi {
        return new buildm.BuildApi(serverUrl, handlers);
    }

    /**
     * Each API has a method here to create the "vanilla" API as well as one with a Q Promise wrapper.
     */
    public getQBuildApi(serverUrl: string = this.serverUrl, handlers: VsoBaseInterfaces.IRequestHandler[] = [this.authHandler]): buildm.IQBuildApi {
        return new buildm.QBuildApi(serverUrl, handlers);
    }

    public getCoreApi(serverUrl: string = this.serverUrl, handlers: VsoBaseInterfaces.IRequestHandler[] = [this.authHandler]): corem.ICoreApi {
        return new corem.CoreApi(serverUrl, handlers);
    }

    public getQCoreApi(serverUrl: string = this.serverUrl, handlers: VsoBaseInterfaces.IRequestHandler[] = [this.authHandler]): corem.IQCoreApi {
        return new corem.QCoreApi(serverUrl, handlers);
    }

    public getFileContainerApi(serverUrl: string = this.serverUrl, handlers: VsoBaseInterfaces.IRequestHandler[] = [this.authHandler]): filecontainerm.IFileContainerApi {
        return new filecontainerm.FileContainerApi(serverUrl, handlers);
    }

    public getQFileContainerApi(serverUrl: string = this.serverUrl, handlers: VsoBaseInterfaces.IRequestHandler[] = [this.authHandler]): filecontainerm.IQFileContainerApi {
        return new filecontainerm.QFileContainerApi(serverUrl, handlers);
    }
    
    public getGalleryApi(serverUrl: string = this.serverUrl, handlers: VsoBaseInterfaces.IRequestHandler[] = [this.authHandler]): gallerym.IGalleryApi {
        return new gallerym.GalleryApi(serverUrl, handlers);
    }

    public getQGalleryApi(serverUrl: string = this.serverUrl, handlers: VsoBaseInterfaces.IRequestHandler[] = [this.authHandler]): gallerym.IQGalleryApi {
        return new gallerym.QGalleryApi(serverUrl, handlers);
    }
    
    public getGitApi(serverUrl: string = this.serverUrl, handlers: VsoBaseInterfaces.IRequestHandler[] = [this.authHandler]): gitm.IGitApi {
        return new gitm.GitApi(serverUrl, handlers);
    }

    public getQGitApi(serverUrl: string = this.serverUrl, handlers: VsoBaseInterfaces.IRequestHandler[] = [this.authHandler]): gitm.IQGitApi {
        return new gitm.QGitApi(serverUrl, handlers);
    } 
    
    public getTaskApi(serverUrl: string = this.serverUrl, handlers: VsoBaseInterfaces.IRequestHandler[] = [this.authHandler]): taskm.ITaskApi {
        return new taskm.TaskApi(serverUrl, handlers);
    }

    public getQTaskApi(serverUrl: string = this.serverUrl, handlers: VsoBaseInterfaces.IRequestHandler[] = [this.authHandler]): taskm.IQTaskApi {
        return new taskm.QTaskApi(serverUrl, handlers);
    }
    
    public getTaskAgentApi(serverUrl: string = this.serverUrl, handlers: VsoBaseInterfaces.IRequestHandler[] = [this.authHandler]): taskagentm.ITaskAgentApi {
        return new taskagentm.TaskAgentApi(serverUrl, handlers); 
    }

    public getQTaskAgentApi(serverUrl: string = this.serverUrl, handlers: VsoBaseInterfaces.IRequestHandler[] = [this.authHandler]): taskagentm.IQTaskAgentApi {
        return new taskagentm.QTaskAgentApi(serverUrl, handlers);
    }
    
    public getTestApi(serverUrl: string = this.serverUrl, handlers: VsoBaseInterfaces.IRequestHandler[] = [this.authHandler]): testm.ITestApi {
        return new testm.TestApi(serverUrl, handlers); 
    }

    public getQTestApi(serverUrl: string = this.serverUrl, handlers: VsoBaseInterfaces.IRequestHandler[] = [this.authHandler]): testm.IQTestApi {
        return new testm.QTestApi(serverUrl, handlers);
    }

    public getTfvcApi(serverUrl: string = this.serverUrl, handlers: VsoBaseInterfaces.IRequestHandler[] = [this.authHandler]): tfvcm.ITfvcApi {
        return new tfvcm.TfvcApi(serverUrl, handlers);
    }

    public getQTfvcApi(serverUrl: string = this.serverUrl, handlers: VsoBaseInterfaces.IRequestHandler[] = [this.authHandler]): tfvcm.IQTfvcApi {
        return new tfvcm.QTfvcApi(serverUrl, handlers);
    }

    public getWorkItemTrackingApi(serverUrl: string = this.serverUrl, handlers: VsoBaseInterfaces.IRequestHandler[] = [this.authHandler]): workitemtrackingm.IWorkItemTrackingApi {
        return new workitemtrackingm.WorkItemTrackingApi(serverUrl, handlers);
    }

    public getQWorkItemTrackingApi(serverUrl: string = this.serverUrl, handlers: VsoBaseInterfaces.IRequestHandler[] = [this.authHandler]): workitemtrackingm.IQWorkItemTrackingApi {
        return new workitemtrackingm.QWorkItemTrackingApi(serverUrl, handlers);
    }

    public getReleaseApi(serverUrl: string = this.serverUrl, handlers: VsoBaseInterfaces.IRequestHandler[] = [this.authHandler]): releasem.IReleaseApi {
        return new releasem.ReleaseApi(serverUrl, handlers);
    }

    public getQReleaseApi(serverUrl: string = this.serverUrl, handlers: VsoBaseInterfaces.IRequestHandler[] = [this.authHandler]): releasem.IQReleaseApi {
        return new releasem.QReleaseApi(serverUrl, handlers);
    }
}
