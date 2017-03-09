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



/**
 * Encapsulates the usage info about a command within a time period, which is currently fetched from Kusto.
 */
export interface CommandUsage {
    application: string;
    command: string;
    count: number;
    delay: number;
    endTime: Date;
    /**
     * Note: the "p" in IpAddress should be lowercase so that genclient creates the TypeScript REST client correctly
     */
    ipAddress: string;
    startTime: Date;
    usage: number;
    userAgent: string;
}

/**
 * Encapsulates the query criteria for a usage summary query.
 */
export interface UsageSummaryQueryCriteria {
    /**
     * The upper bound of the query time window. Defaults to now (UTC).
     */
    endTime: Date;
    /**
     * The lower bound of the query time window. Defaults to one hour ago (UTC).
     */
    startTime: Date;
    /**
     * The size of the time buckets that data will be grouped into. Defaults to 5 minutes.
     */
    timeBucket: any;
    /**
     * The ID of the user to query usage summary for.
     */
    userId: string;
}

export var TypeInfo = {
    CommandUsage: {
        fields: <any>null
    },
    UsageSummaryQueryCriteria: {
        fields: <any>null
    },
};

TypeInfo.CommandUsage.fields = {
    endTime: {
        isDate: true,
    },
    startTime: {
        isDate: true,
    },
};

TypeInfo.UsageSummaryQueryCriteria.fields = {
    endTime: {
        isDate: true,
    },
    startTime: {
        isDate: true,
    },
};
