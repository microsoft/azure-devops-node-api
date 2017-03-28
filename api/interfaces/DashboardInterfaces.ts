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



export interface Dashboard {
    _links: any;
    eTag: string;
    id: string;
    name: string;
    position: number;
    refreshInterval: number;
    url: string;
    widgets: Widget[];
}

export interface DashboardGroup {
    _links: any;
    dashboardEntries: DashboardGroupEntry[];
    permission: GroupMemberPermission;
    url: string;
}

/**
 * Dashboard group entry, wraping around Dashboard (needed?)
 */
export interface DashboardGroupEntry extends Dashboard {
}

/**
 * Response from RestAPI when saving and editing DashboardGroupEntry
 */
export interface DashboardGroupEntryResponse extends DashboardGroupEntry {
}

export interface DashboardResponse extends DashboardGroupEntry {
}

export enum DashboardScope {
    Collection_User = 0,
    Project_Team = 1,
}

export enum GroupMemberPermission {
    None = 0,
    Edit = 1,
    Manage = 2,
    ManagePermissions = 3,
}

/**
 * Lightbox configuration
 */
export interface LightboxOptions {
    /**
     * Height of desired lightbox, in pixels
     */
    height: number;
    /**
     * True to allow lightbox resizing, false to disallow lightbox resizing, defaults to false.
     */
    resizable: boolean;
    /**
     * Width of desired lightbox, in pixels
     */
    width: number;
}

/**
 * versioning for an artifact as described at: http://semver.org/, of the form major.minor.patch.
 */
export interface SemanticVersion {
    /**
     * Major version when you make incompatible API changes
     */
    major: number;
    /**
     * Minor version when you add functionality in a backwards-compatible manner
     */
    minor: number;
    /**
     * Patch version when you make backwards-compatible bug fixes
     */
    patch: number;
}

/**
 * Widget data
 */
export interface Widget {
    _links: any;
    /**
     * Refers to the allowed sizes for the widget. This gets populated when user wants to configure the widget
     */
    allowedSizes: WidgetSize[];
    /**
     * Refers to unique identifier of a feature artifact. Used for pinning+unpinning a specific artifact.
     */
    artifactId: string;
    configurationContributionId: string;
    configurationContributionRelativeId: string;
    contentUri: string;
    /**
     * The id of the underlying contribution defining the supplied Widget Configuration.
     */
    contributionId: string;
    /**
     * Optional partial dashboard content, to support exchanging dashboard-level version ETag for widget-level APIs
     */
    dashboard: Dashboard;
    eTag: string;
    id: string;
    isEnabled: boolean;
    isNameConfigurable: boolean;
    lightboxOptions: LightboxOptions;
    loadingImageUrl: string;
    name: string;
    position: WidgetPosition;
    settings: string;
    settingsVersion: SemanticVersion;
    size: WidgetSize;
    typeId: string;
    url: string;
}

/**
 * For V1, this is just a pool of definitions describing our possible Widgets.
 */
export interface WidgetMetadata {
    /**
     * Sizes supported by the Widget.
     */
    allowedSizes: WidgetSize[];
    /**
     * Opt-in boolean that indicates if the widget requires the Analytics Service to function. Widgets requiring the analytics service are hidden from the catalog if the Analytics Service is not available.
     */
    analyticsServiceRequired: boolean;
    /**
     * Resource for an icon in the widget catalog.
     */
    catalogIconUrl: string;
    /**
     * Opt-in URL string pointing at widget information. Defaults to extension marketplace URL if omitted
     */
    catalogInfoUrl: string;
    /**
     * The id of the underlying contribution defining the supplied Widget custom configuration UI. Null if custom configuration UI is not available.
     */
    configurationContributionId: string;
    /**
     * The relative id of the underlying contribution defining the supplied Widget custom configuration UI. Null if custom configuration UI is not available.
     */
    configurationContributionRelativeId: string;
    /**
     * Indicates if the widget requires configuration before being added to dashboard.
     */
    configurationRequired: boolean;
    /**
     * Uri for the WidgetFactory to get the widget
     */
    contentUri: string;
    /**
     * The id of the underlying contribution defining the supplied Widget.
     */
    contributionId: string;
    /**
     * Optional default settings to be copied into widget settings
     */
    defaultSettings: string;
    /**
     * Summary information describing the widget.
     */
    description: string;
    /**
     * Widgets can be disabled by the app store.  We'll need to gracefully handle for: - persistence (Allow) - Requests (Tag as disabled, and provide context)
     */
    isEnabled: boolean;
    /**
     * Opt-out boolean that indicates if the widget supports widget name/title configuration. Widgets ignoring the name should set it to false in the manifest.
     */
    isNameConfigurable: boolean;
    /**
     * Opt-out boolean indicating if the widget is hidden from the catalog.  For V1, only "pull" model widgets can be provided from the catalog.
     */
    isVisibleFromCatalog: boolean;
    /**
     * Opt-in lightbox properties
     */
    lightboxOptions: LightboxOptions;
    /**
     * Resource for a loading placeholder image on dashboard
     */
    loadingImageUrl: string;
    /**
     * User facing name of the widget type. Each widget must use a unique value here.
     */
    name: string;
    /**
     * Publisher Name of this kind of widget.
     */
    publisherName: string;
    /**
     * Data contract required for the widget to function and to work in its container.
     */
    supportedScopes: WidgetScope[];
    /**
     * Contribution target IDs
     */
    targets: string[];
    /**
     * Dev-facing id of this kind of widget.
     */
    typeId: string;
}

export interface WidgetMetadataResponse {
    uri: string;
    widgetMetadata: WidgetMetadata;
}

export interface WidgetPosition {
    column: number;
    row: number;
}

/**
 * Response from RestAPI when saving and editing Widget
 */
export interface WidgetResponse extends Widget {
}

export enum WidgetScope {
    Collection_User = 0,
    Project_Team = 1,
}

export interface WidgetSize {
    columnSpan: number;
    rowSpan: number;
}

/**
 * Wrapper class to support HTTP header generation using CreateResponse, ClientHeaderParameter and ClientResponseType in WidgetV2Controller
 */
export interface WidgetsVersionedList {
    eTag: string[];
    widgets: Widget[];
}

export interface WidgetTypesResponse {
    _links: any;
    uri: string;
    widgetTypes: WidgetMetadata[];
}

export var TypeInfo = {
    DashboardGroup: <any>{
    },
    DashboardScope: {
        enumValues: {
            "collection_User": 0,
            "project_Team": 1
        }
    },
    GroupMemberPermission: {
        enumValues: {
            "none": 0,
            "edit": 1,
            "manage": 2,
            "managePermissions": 3
        }
    },
    WidgetMetadata: <any>{
    },
    WidgetMetadataResponse: <any>{
    },
    WidgetScope: {
        enumValues: {
            "collection_User": 0,
            "project_Team": 1
        }
    },
    WidgetTypesResponse: <any>{
    },
};

TypeInfo.DashboardGroup.fields = {
    permission: {
        enumType: TypeInfo.GroupMemberPermission
    },
};

TypeInfo.WidgetMetadata.fields = {
    supportedScopes: {
        isArray: true,
        enumType: TypeInfo.WidgetScope
    },
};

TypeInfo.WidgetMetadataResponse.fields = {
    widgetMetadata: {
        typeInfo: TypeInfo.WidgetMetadata
    },
};

TypeInfo.WidgetTypesResponse.fields = {
    widgetTypes: {
        isArray: true,
        typeInfo: TypeInfo.WidgetMetadata
    },
};
