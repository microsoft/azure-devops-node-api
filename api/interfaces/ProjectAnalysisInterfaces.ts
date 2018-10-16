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



export enum AggregationType {
    Hourly = 0,
    Daily = 1,
}

export interface AnalyzerDescriptor {
    description?: string;
    id: string;
    majorVersion?: number;
    minorVersion?: number;
    name: string;
    patchVersion?: number;
}

export interface CodeChangeTrendItem {
    time?: Date;
    value?: number;
}

export interface LanguageMetricsSecuredObject {
    namespaceId?: string;
    projectId?: string;
    requiredPermissions?: number;
}

export interface LanguageStatistics extends LanguageMetricsSecuredObject {
    bytes?: number;
    files?: number;
    filesPercentage?: number;
    languagePercentage?: number;
    name?: string;
}

export interface ProjectActivityMetrics {
    authorsCount?: number;
    codeChangesCount?: number;
    codeChangesTrend?: CodeChangeTrendItem[];
    projectId?: string;
    pullRequestsCompletedCount?: number;
    pullRequestsCreatedCount?: number;
}

export interface ProjectLanguageAnalytics extends LanguageMetricsSecuredObject {
    id?: string;
    languageBreakdown?: LanguageStatistics[];
    repositoryLanguageAnalytics?: RepositoryLanguageAnalytics[];
    resultPhase?: ResultPhase;
    url?: string;
}

export interface RepositoryActivityMetrics {
    codeChangesCount?: number;
    codeChangesTrend?: CodeChangeTrendItem[];
    repositoryId?: string;
}

export interface RepositoryLanguageAnalytics extends LanguageMetricsSecuredObject {
    id?: string;
    languageBreakdown?: LanguageStatistics[];
    name?: string;
    resultPhase?: ResultPhase;
    updatedTime?: Date;
}

export enum ResultPhase {
    Preliminary = 0,
    Full = 1,
}

export var TypeInfo = {
    AggregationType: {
        enumValues: {
            "hourly": 0,
            "daily": 1
        }
    },
    CodeChangeTrendItem: <any>{
    },
    ProjectActivityMetrics: <any>{
    },
    ProjectLanguageAnalytics: <any>{
    },
    RepositoryActivityMetrics: <any>{
    },
    RepositoryLanguageAnalytics: <any>{
    },
    ResultPhase: {
        enumValues: {
            "preliminary": 0,
            "full": 1
        }
    },
};

TypeInfo.CodeChangeTrendItem.fields = {
    time: {
        isDate: true,
    }
};

TypeInfo.ProjectActivityMetrics.fields = {
    codeChangesTrend: {
        isArray: true,
        typeInfo: TypeInfo.CodeChangeTrendItem
    }
};

TypeInfo.ProjectLanguageAnalytics.fields = {
    repositoryLanguageAnalytics: {
        isArray: true,
        typeInfo: TypeInfo.RepositoryLanguageAnalytics
    },
    resultPhase: {
        enumType: TypeInfo.ResultPhase
    }
};

TypeInfo.RepositoryActivityMetrics.fields = {
    codeChangesTrend: {
        isArray: true,
        typeInfo: TypeInfo.CodeChangeTrendItem
    }
};

TypeInfo.RepositoryLanguageAnalytics.fields = {
    resultPhase: {
        enumType: TypeInfo.ResultPhase
    },
    updatedTime: {
        isDate: true,
    }
};
