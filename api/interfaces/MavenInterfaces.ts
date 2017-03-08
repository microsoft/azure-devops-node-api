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



export interface MavenPackage {
    _info: string;
    _links: { [key: string] : string; };
    artifactId: string;
    groupId: string;
    version: string;
}

export interface MavenPomCi {
    notifiers: MavenPomCiNotifier[];
    system: string;
    url: string;
}

export interface MavenPomCiNotifier {
    configuration: string[];
    sendOnError: string;
    sendOnFailure: string;
    sendOnSuccess: string;
    sendOnWarning: string;
    type: string;
}

export interface MavenPomDependency extends MavenPomGav {
    optional: boolean;
    scope: string;
    type: string;
}

export interface MavenPomDependencyManagement {
    dependencies: MavenPomDependency[];
}

export interface MavenPomGav {
    artifactId: string;
    groupId: string;
    version: string;
}

export interface MavenPomIssueManagement {
    system: string;
    url: string;
}

export interface MavenPomLicense extends MavenPomOrganization {
    distribution: string;
}

export interface MavenPomMailingList {
    archive: string;
    name: string;
    otherArchives: string[];
    post: string;
    subscribe: string;
    unsubscribe: string;
}

export interface MavenPomMetadata extends MavenPomGav {
    ciManagement: MavenPomCi;
    contributors: MavenPomPerson[];
    dependencies: MavenPomDependency[];
    dependencyManagement: MavenPomDependencyManagement;
    description: string;
    developers: MavenPomPerson[];
    inceptionYear: string;
    issueManagement: MavenPomIssueManagement;
    licenses: MavenPomLicense[];
    mailingLists: MavenPomMailingList[];
    modelVersion: string;
    modules: string[];
    name: string;
    organization: MavenPomOrganization;
    packaging: string;
    parent: MavenPomParent;
    prerequisites: { [key: string] : string; };
    properties: { [key: string] : string; };
    scm: MavenPomScm;
    url: string;
}

export interface MavenPomOrganization {
    name: string;
    url: string;
}

export interface MavenPomParent extends MavenPomGav {
    relativePath: string;
}

export interface MavenPomPerson {
    email: string;
    id: string;
    name: string;
    organization: string;
    organizationUrl: string;
    roles: string[];
    timezone: string;
    url: string;
}

export interface MavenPomScm {
    connection: string;
    developerConnection: string;
    tag: string;
    url: string;
}

export var TypeInfo = {
    MavenPackage: {
        fields: <any>null
    },
    MavenPomCi: {
        fields: <any>null
    },
    MavenPomCiNotifier: {
        fields: <any>null
    },
    MavenPomDependency: {
        fields: <any>null
    },
    MavenPomDependencyManagement: {
        fields: <any>null
    },
    MavenPomGav: {
        fields: <any>null
    },
    MavenPomIssueManagement: {
        fields: <any>null
    },
    MavenPomLicense: {
        fields: <any>null
    },
    MavenPomMailingList: {
        fields: <any>null
    },
    MavenPomMetadata: {
        fields: <any>null
    },
    MavenPomOrganization: {
        fields: <any>null
    },
    MavenPomParent: {
        fields: <any>null
    },
    MavenPomPerson: {
        fields: <any>null
    },
    MavenPomScm: {
        fields: <any>null
    },
};

TypeInfo.MavenPackage.fields = {
};

TypeInfo.MavenPomCi.fields = {
    notifiers: {
        isArray: true,
        typeInfo: TypeInfo.MavenPomCiNotifier
    },
};

TypeInfo.MavenPomCiNotifier.fields = {
};

TypeInfo.MavenPomDependency.fields = {
};

TypeInfo.MavenPomDependencyManagement.fields = {
    dependencies: {
        isArray: true,
        typeInfo: TypeInfo.MavenPomDependency
    },
};

TypeInfo.MavenPomGav.fields = {
};

TypeInfo.MavenPomIssueManagement.fields = {
};

TypeInfo.MavenPomLicense.fields = {
};

TypeInfo.MavenPomMailingList.fields = {
};

TypeInfo.MavenPomMetadata.fields = {
    ciManagement: {
        typeInfo: TypeInfo.MavenPomCi
    },
    contributors: {
        isArray: true,
        typeInfo: TypeInfo.MavenPomPerson
    },
    dependencies: {
        isArray: true,
        typeInfo: TypeInfo.MavenPomDependency
    },
    dependencyManagement: {
        typeInfo: TypeInfo.MavenPomDependencyManagement
    },
    developers: {
        isArray: true,
        typeInfo: TypeInfo.MavenPomPerson
    },
    issueManagement: {
        typeInfo: TypeInfo.MavenPomIssueManagement
    },
    licenses: {
        isArray: true,
        typeInfo: TypeInfo.MavenPomLicense
    },
    mailingLists: {
        isArray: true,
        typeInfo: TypeInfo.MavenPomMailingList
    },
    organization: {
        typeInfo: TypeInfo.MavenPomOrganization
    },
    parent: {
        typeInfo: TypeInfo.MavenPomParent
    },
    scm: {
        typeInfo: TypeInfo.MavenPomScm
    },
};

TypeInfo.MavenPomOrganization.fields = {
};

TypeInfo.MavenPomParent.fields = {
};

TypeInfo.MavenPomPerson.fields = {
};

TypeInfo.MavenPomScm.fields = {
};
