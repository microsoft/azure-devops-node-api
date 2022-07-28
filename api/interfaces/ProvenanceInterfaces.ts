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



export interface SessionRequest {
    /**
     * Generic property bag to store data about the session
     */
    data?: { [key: string] : string; };
    /**
     * The feed name or id for the session
     */
    feed: string;
    /**
     * The type of session If a known value is provided, the Data dictionary will be validated for the presence of properties required by that type
     */
    source?: string;
}

export interface SessionResponse {
    /**
     * The unique identifier for the session
     */
    sessionId?: string;
    /**
     * The name for the session
     */
    sessionName?: string;
}
