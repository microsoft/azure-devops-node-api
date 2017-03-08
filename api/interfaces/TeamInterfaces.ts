/*
* ---------------------------------------------------------
* Copyright(C) Microsoft Corporation. All rights reserved.
* ---------------------------------------------------------
* 
* ---------------------------------------------------------
* Generated file, DO NOT EDIT
* ---------------------------------------------------------
*/

"use strict";



export interface WebApiTeam extends WebApiTeamRef {
    /**
     * Team description
     */
    description: string;
    /**
     * Identity REST API Url to this team
     */
    identityUrl: string;
}

export interface WebApiTeamRef {
    /**
     * Team (Identity) Guid. A Team Foundation ID.
     */
    id: string;
    /**
     * Team name
     */
    name: string;
    /**
     * Team REST API Url
     */
    url: string;
}

export var TypeInfo = {
    WebApiTeam: {
        fields: <any>null
    },
    WebApiTeamRef: {
        fields: <any>null
    },
};

TypeInfo.WebApiTeam.fields = {
};

TypeInfo.WebApiTeamRef.fields = {
};
