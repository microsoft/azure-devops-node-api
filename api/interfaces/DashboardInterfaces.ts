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
 * Copy options of a Dashboard.
 */
export interface CopyDashboardOptions {
    /**
     * Dashboard Scope. Can be either Project or Project_Team
     */
    copyDashboardScope: DashboardScope;
    /**
     * Description of the dashboard
     */
    description?: string;
    /**
     * Name of the dashboard
     */
    name?: string;
    /**
     * ID of the project. Provided by service at creation time.
     */
    projectId: string;
    /**
     * Refresh interval of dashboard
     */
    refreshInterval?: number;
    /**
     * ID of the team. Provided by service at creation time
     */
    teamId?: string;
}

export interface CopyDashboardResponse {
    /**
     * Copied Dashboard
     */
    copiedDashboard?: Dashboard;
    /**
     * Copy Dashboard options
     */
    copyDashboardOptions: CopyDashboardOptions;
}

/**
 * Model of a Dashboard.
 */
export interface Dashboard {
    _links?: any;
    /**
     * Entity to which the dashboard is scoped.
     */
    dashboardScope?: DashboardScope;
    /**
     * Description of the dashboard.
     */
    description?: string;
    /**
     * Server defined version tracking value, used for edit collision detection.
     */
    eTag?: string;
    /**
     * ID of the group for a dashboard. For team-scoped dashboards, this is the unique identifier for the team associated with the dashboard. For project-scoped dashboards this property is empty.
     */
    groupId?: string;
    /**
     * ID of the Dashboard. Provided by service at creation time.
     */
    id?: string;
    /**
     * Name of the Dashboard.
     */
    name?: string;
    /**
     * ID of the owner for a dashboard. For team-scoped dashboards, this is the unique identifier for the team associated with the dashboard. For project-scoped dashboards, this is the unique identifier for the user identity associated with the dashboard.
     */
    ownerId?: string;
    /**
     * Position of the dashboard, within a dashboard group. If unset at creation time, position is decided by the service.
     */
    position?: number;
    /**
     * Interval for client to automatically refresh the dashboard. Expressed in minutes.
     */
    refreshInterval?: number;
    url?: string;
    /**
     * The set of Widgets on the dashboard.
     */
    widgets?: Widget[];
}

/**
 * Describes a list of dashboards associated to an owner. Currently, teams own dashboard groups.
 */
export interface DashboardGroup {
    _links?: any;
    /**
     * A list of Dashboards held by the Dashboard Group
     */
    dashboardEntries?: DashboardGroupEntry[];
    /**
     * Deprecated: The old permission model describing the level of permissions for the current team. Pre-M125.
     */
    permission?: GroupMemberPermission;
    /**
     * A permissions bit mask describing the security permissions of the current team for dashboards. When this permission is the value None, use GroupMemberPermission. Permissions are evaluated based on the presence of a value other than None, else the GroupMemberPermission will be saved.
     */
    teamDashboardPermission?: TeamDashboardPermission;
    url?: string;
}

/**
 * Dashboard group entry, wrapping around Dashboard (needed?)
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

/**
 * identifies the scope of dashboard storage and permissions.
 */
export enum DashboardScope {
    /**
     * [DEPRECATED] Dashboard is scoped to the collection user.
     */
    Collection_User = 0,
    /**
     * Dashboard is scoped to the team.
     */
    Project_Team = 1,
    /**
     * Dashboard is scoped to the project.
     */
    Project = 2,
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
    height?: number;
    /**
     * True to allow lightbox resizing, false to disallow lightbox resizing, defaults to false.
     */
    resizable?: boolean;
    /**
     * Width of desired lightbox, in pixels
     */
    width?: number;
}

/**
 * versioning for an artifact as described at: http://semver.org/, of the form major.minor.patch.
 */
export interface SemanticVersion {
    /**
     * Major version when you make incompatible API changes
     */
    major?: number;
    /**
     * Minor version when you add functionality in a backwards-compatible manner
     */
    minor?: number;
    /**
     * Patch version when you make backwards-compatible bug fixes
     */
    patch?: number;
}

export enum TeamDashboardPermission {
    None = 0,
    Read = 1,
    Create = 2,
    Edit = 4,
    Delete = 8,
    ManagePermissions = 16,
}

/**
 * Widget data
 */
export interface Widget {
    _links?: any;
    /**
     * Refers to the allowed sizes for the widget. This gets populated when user wants to configure the widget
     */
    allowedSizes?: WidgetSize[];
    /**
     * Read-Only Property from Dashboard Service. Indicates if settings are blocked for the current user.
     */
    areSettingsBlockedForUser?: boolean;
    /**
     * Refers to unique identifier of a feature artifact. Used for pinning+unpinning a specific artifact.
     */
    artifactId?: string;
    configurationContributionId?: string;
    configurationContributionRelativeId?: string;
    contentUri?: string;
    /**
     * The id of the underlying contribution defining the supplied Widget Configuration.
     */
    contributionId?: string;
    /**
     * Optional partial dashboard content, to support exchanging dashboard-level version ETag for widget-level APIs
     */
    dashboard?: Dashboard;
    eTag?: string;
    id?: string;
    isEnabled?: boolean;
    isNameConfigurable?: boolean;
    lightboxOptions?: LightboxOptions;
    loadingImageUrl?: string;
    name?: string;
    position?: WidgetPosition;
    settings?: string;
    settingsVersion?: SemanticVersion;
    size?: WidgetSize;
    typeId?: string;
    url?: string;
}

/**
 * Contribution based information describing Dashboard Widgets.
 */
export interface WidgetMetadata {
    /**
     * Sizes supported by the Widget.
     */
    allowedSizes?: WidgetSize[];
    /**
     * Opt-in boolean that indicates if the widget requires the Analytics Service to function. Widgets requiring the analytics service are hidden from the catalog if the Analytics Service is not available.
     */
    analyticsServiceRequired?: boolean;
    /**
     * Resource for an icon in the widget catalog.
     */
    catalogIconUrl?: string;
    /**
     * Opt-in URL string pointing at widget information. Defaults to extension marketplace URL if omitted
     */
    catalogInfoUrl?: string;
    /**
     * The id of the underlying contribution defining the supplied Widget custom configuration UI. Null if custom configuration UI is not available.
     */
    configurationContributionId?: string;
    /**
     * The relative id of the underlying contribution defining the supplied Widget custom configuration UI. Null if custom configuration UI is not available.
     */
    configurationContributionRelativeId?: string;
    /**
     * Indicates if the widget requires configuration before being added to dashboard.
     */
    configurationRequired?: boolean;
    /**
     * Uri for the widget content to be loaded from .
     */
    contentUri?: string;
    /**
     * The id of the underlying contribution defining the supplied Widget.
     */
    contributionId?: string;
    /**
     * Optional default settings to be copied into widget settings.
     */
    defaultSettings?: string;
    /**
     * Summary information describing the widget.
     */
    description?: string;
    /**
     * Widgets can be disabled by the app store.  We'll need to gracefully handle for: - persistence (Allow) - Requests (Tag as disabled, and provide context)
     */
    isEnabled?: boolean;
    /**
     * Opt-out boolean that indicates if the widget supports widget name/title configuration. Widgets ignoring the name should set it to false in the manifest.
     */
    isNameConfigurable?: boolean;
    /**
     * Opt-out boolean indicating if the widget is hidden from the catalog. Commonly, this is used to allow developers to disable creation of a deprecated widget. A widget must have a functional default state, or have a configuration experience, in order to be visible from the catalog.
     */
    isVisibleFromCatalog?: boolean;
    /**
     * Keywords associated with this widget, non-filterable and invisible
     */
    keywords?: string[];
    /**
     * Opt-in properties for customizing widget presentation in a "lightbox" dialog.
     */
    lightboxOptions?: LightboxOptions;
    /**
     * Resource for a loading placeholder image on dashboard
     */
    loadingImageUrl?: string;
    /**
     * User facing name of the widget type. Each widget must use a unique value here.
     */
    name?: string;
    /**
     * Publisher Name of this kind of widget.
     */
    publisherName?: string;
    /**
     * Data contract required for the widget to function and to work in its container.
     */
    supportedScopes?: WidgetScope[];
    /**
     * Tags associated with this widget, visible on each widget and filterable.
     */
    tags?: string[];
    /**
     * Contribution target IDs
     */
    targets?: string[];
    /**
     * Deprecated: locally unique developer-facing id of this kind of widget. ContributionId provides a globally unique identifier for widget types.
     */
    typeId?: string;
}

export interface WidgetMetadataResponse {
    uri?: string;
    widgetMetadata?: WidgetMetadata;
}

export interface WidgetPosition {
    column?: number;
    row?: number;
}

/**
 * Response from RestAPI when saving and editing Widget
 */
export interface WidgetResponse extends Widget {
}

/**
 * data contract required for the widget to function in a webaccess area or page.
 */
export enum WidgetScope {
    Collection_User = 0,
    Project_Team = 1,
}

export interface WidgetSize {
    /**
     * The Width of the widget, expressed in dashboard grid columns.
     */
    columnSpan?: number;
    /**
     * The height of the widget, expressed in dashboard grid rows.
     */
    rowSpan?: number;
}

/**
 * Wrapper class to support HTTP header generation using CreateResponse, ClientHeaderParameter and ClientResponseType in WidgetV2Controller
 */
export interface WidgetsVersionedList {
    eTag?: string[];
    widgets?: Widget[];
}

export interface WidgetTypesResponse {
    _links?: any;
    uri?: string;
    widgetTypes?: WidgetMetadata[];
}

export var TypeInfo = {
    CopyDashboardOptions: <any>{
    },
    CopyDashboardResponse: <any>{
    },
    Dashboard: <any>{
    },
    DashboardGroup: <any>{
    },
    DashboardGroupEntry: <any>{
    },
    DashboardGroupEntryResponse: <any>{
    },
    DashboardResponse: <any>{
    },
    DashboardScope: {
        enumValues: {
            "collection_User": 0,
            "project_Team": 1,
            "project": 2
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
    TeamDashboardPermission: {
        enumValues: {
            "none": 0,
            "read": 1,
            "create": 2,
            "edit": 4,
            "delete": 8,
            "managePermissions": 16
        }
    },
    Widget: <any>{
    },
    WidgetMetadata: <any>{
    },
    WidgetMetadataResponse: <any>{
    },
    WidgetResponse: <any>{
    },
    WidgetScope: {
        enumValues: {
            "collection_User": 0,
            "project_Team": 1
        }
    },
    WidgetsVersionedList: <any>{
    },
    WidgetTypesResponse: <any>{
    },
};

TypeInfo.CopyDashboardOptions.fields = {
    copyDashboardScope: {
        enumType: TypeInfo.DashboardScope
    }
};

TypeInfo.CopyDashboardResponse.fields = {
    copiedDashboard: {
        typeInfo: TypeInfo.Dashboard
    },
    copyDashboardOptions: {
        typeInfo: TypeInfo.CopyDashboardOptions
    }
};

TypeInfo.Dashboard.fields = {
    dashboardScope: {
        enumType: TypeInfo.DashboardScope
    },
    widgets: {
        isArray: true,
        typeInfo: TypeInfo.Widget
    }
};

TypeInfo.DashboardGroup.fields = {
    dashboardEntries: {
        isArray: true,
        typeInfo: TypeInfo.DashboardGroupEntry
    },
    permission: {
        enumType: TypeInfo.GroupMemberPermission
    },
    teamDashboardPermission: {
        enumType: TypeInfo.TeamDashboardPermission
    }
};

TypeInfo.DashboardGroupEntry.fields = {
    dashboardScope: {
        enumType: TypeInfo.DashboardScope
    },
    widgets: {
        isArray: true,
        typeInfo: TypeInfo.Widget
    }
};

TypeInfo.DashboardGroupEntryResponse.fields = {
    dashboardScope: {
        enumType: TypeInfo.DashboardScope
    },
    widgets: {
        isArray: true,
        typeInfo: TypeInfo.Widget
    }
};

TypeInfo.DashboardResponse.fields = {
    dashboardScope: {
        enumType: TypeInfo.DashboardScope
    },
    widgets: {
        isArray: true,
        typeInfo: TypeInfo.Widget
    }
};

TypeInfo.Widget.fields = {
    dashboard: {
        typeInfo: TypeInfo.Dashboard
    }
};

TypeInfo.WidgetMetadata.fields = {
    supportedScopes: {
        isArray: true,
        enumType: TypeInfo.WidgetScope
    }
};

TypeInfo.WidgetMetadataResponse.fields = {
    widgetMetadata: {
        typeInfo: TypeInfo.WidgetMetadata
    }
};

TypeInfo.WidgetResponse.fields = {
    dashboard: {
        typeInfo: TypeInfo.Dashboard
    }
};

TypeInfo.WidgetsVersionedList.fields = {
    widgets: {
        isArray: true,
        typeInfo: TypeInfo.Widget
    }
};

TypeInfo.WidgetTypesResponse.fields = {
    widgetTypes: {
        isArray: true,
        typeInfo: TypeInfo.WidgetMetadata
    }
};
