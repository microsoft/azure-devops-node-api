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

import DistributedTaskCommonInterfaces = require("../interfaces/DistributedTaskCommonInterfaces");
import FormInputInterfaces = require("../interfaces/common/FormInputInterfaces");
import VSSInterfaces = require("../interfaces/common/VSSInterfaces");


export enum AadLoginPromptOption {
    /**
     * Do not provide a prompt option
     */
    NoOption = 0,
    /**
     * Force the user to login again.
     */
    Login = 1,
    /**
     * Force the user to select which account they are logging in with instead of automatically picking the user up from the session state. NOTE: This does not work for switching between the variants of a dual-homed user.
     */
    SelectAccount = 2,
    /**
     * Force the user to login again. <remarks> Ignore current authentication state and force the user to authenticate again. This option should be used instead of Login. </remarks>
     */
    FreshLogin = 3,
    /**
     * Force the user to login again with mfa. <remarks> Ignore current authentication state and force the user to authenticate again. This option should be used instead of Login, if MFA is required. </remarks>
     */
    FreshLoginWithMfa = 4,
}

export interface AadOauthTokenRequest {
    refresh?: boolean;
    resource?: string;
    tenantId?: string;
    token?: string;
}

export interface AadOauthTokenResult {
    accessToken?: string;
    refreshTokenCache?: string;
}

export enum AccessTokenRequestType {
    None = 0,
    Oauth = 1,
    Direct = 2,
}

export interface AuthConfiguration extends OAuthConfiguration {
    /**
     * Gets or sets parameters contained in configuration object.
     */
    parameters?: { [key: string] : Parameter; };
}

/**
 * Specifies the authentication scheme to be used for authentication.
 */
export interface AuthenticationSchemeReference {
    /**
     * Gets or sets the key and value of the fields used for authentication.
     */
    inputs?: { [key: string] : string; };
    /**
     * Gets or sets the type of authentication scheme of an endpoint.
     */
    type?: string;
}

/**
 * Represents the header of the REST request.
 */
export interface AuthorizationHeader {
    /**
     * Gets or sets the name of authorization header.
     */
    name?: string;
    /**
     * Gets or sets the value of authorization header.
     */
    value?: string;
}

export interface AzureAppService {
    id?: string;
    name?: string;
}

export interface AzureKeyVaultPermission extends AzureResourcePermission {
    vault?: string;
}

/**
 * Azure Management Group
 */
export interface AzureManagementGroup {
    /**
     * Display name of azure management group
     */
    displayName?: string;
    /**
     * Id of azure management group
     */
    id?: string;
    /**
     * Azure management group name
     */
    name?: string;
    /**
     * Id of tenant from which azure management group belogs
     */
    tenantId?: string;
}

/**
 * Azure management group query result
 */
export interface AzureManagementGroupQueryResult {
    /**
     * Error message in case of an exception
     */
    errorMessage?: string;
    /**
     * List of azure management groups
     */
    value?: AzureManagementGroup[];
}

export interface AzureMLWorkspace {
    id?: string;
    location?: string;
    name?: string;
}

export interface AzurePermission {
    provisioned?: boolean;
    resourceProvider?: string;
}

export interface AzureResourcePermission extends AzurePermission {
    resourceGroup?: string;
}

export interface AzureRoleAssignmentPermission extends AzurePermission {
    roleAssignmentId?: string;
}

export interface AzureSpnOperationStatus {
    state?: string;
    statusMessage?: string;
}

export interface AzureSubscription {
    displayName?: string;
    subscriptionId?: string;
    subscriptionTenantId?: string;
    subscriptionTenantName?: string;
}

export interface AzureSubscriptionQueryResult {
    errorMessage?: string;
    value?: AzureSubscription[];
}

/**
 * Specifies the client certificate to be used for the endpoint request.
 */
export interface ClientCertificate {
    /**
     * Gets or sets the value of client certificate.
     */
    value?: string;
}

/**
 * Specifies the data sources for this endpoint.
 */
export interface DataSource {
    /**
     * Gets or sets the authentication scheme for the endpoint request.
     */
    authenticationScheme?: AuthenticationSchemeReference;
    /**
     * Gets or sets the pagination format supported by this data source(ContinuationToken/SkipTop).
     */
    callbackContextTemplate?: string;
    /**
     * Gets or sets the template to check if subsequent call is needed.
     */
    callbackRequiredTemplate?: string;
    /**
     * Gets or sets the endpoint url of the data source.
     */
    endpointUrl?: string;
    /**
     * Gets or sets the authorization headers of the request.
     */
    headers?: AuthorizationHeader[];
    /**
     * Gets or sets the initial value of the query params.
     */
    initialContextTemplate?: string;
    /**
     * Gets or sets the name of the data source.
     */
    name?: string;
    /**
     * Gets or sets the request content of the endpoint request.
     */
    requestContent?: string;
    /**
     * Gets or sets the request method of the endpoint request.
     */
    requestVerb?: string;
    /**
     * Gets or sets the resource url of the endpoint request.
     */
    resourceUrl?: string;
    /**
     * Gets or sets the result selector to filter the response of the endpoint request.
     */
    resultSelector?: string;
}

/**
 * Represents the data source binding of the endpoint.
 */
export interface DataSourceBinding extends DistributedTaskCommonInterfaces.DataSourceBindingBase {
}

/**
 * Represents details of the service endpoint data source.
 */
export interface DataSourceDetails {
    /**
     * Gets or sets the data source name.
     */
    dataSourceName?: string;
    /**
     * Gets or sets the data source url.
     */
    dataSourceUrl?: string;
    /**
     * Gets or sets the request headers.
     */
    headers?: AuthorizationHeader[];
    /**
     * Gets or sets the initialization context used for the initial call to the data source
     */
    initialContextTemplate?: string;
    /**
     * Gets the parameters of data source.
     */
    parameters?: { [key: string] : string; };
    /**
     * Gets or sets the data source request content.
     */
    requestContent?: string;
    /**
     * Gets or sets the data source request verb. Get/Post are the only implemented types
     */
    requestVerb?: string;
    /**
     * Gets or sets the resource url of data source.
     */
    resourceUrl?: string;
    /**
     * Gets or sets the result selector.
     */
    resultSelector?: string;
}

/**
 * Represents the details of the input on which a given input is dependent.
 */
export interface DependencyBinding {
    /**
     * Gets or sets the value of the field on which url is dependent.
     */
    key?: string;
    /**
     * Gets or sets the corresponding value of url.
     */
    value?: string;
}

/**
 * Represents the dependency data for the endpoint inputs.
 */
export interface DependencyData {
    /**
     * Gets or sets the category of dependency data.
     */
    input?: string;
    /**
     * Gets or sets the key-value pair to specify properties and their values.
     */
    map?: { key: string; value: { key: string; value: string }[] }[];
}

/**
 * Represents the inputs on which any given input is dependent.
 */
export interface DependsOn {
    /**
     * Gets or sets the ID of the field on which URL's value is dependent.
     */
    input?: string;
    /**
     * Gets or sets key-value pair containing other's field value and corresponding url value.
     */
    map?: DependencyBinding[];
}

/**
 * Represents the authorization used for service endpoint.
 */
export interface EndpointAuthorization {
    /**
     * Gets or sets the parameters for the selected authorization scheme.
     */
    parameters?: { [key: string] : string; };
    /**
     * Gets or sets the scheme used for service endpoint authentication.
     */
    scheme?: string;
}

export interface EndpointOperationStatus {
    state?: string;
    statusMessage?: string;
}

/**
 * Represents url of the service endpoint.
 */
export interface EndpointUrl {
    /**
     * Gets or sets the dependency bindings.
     */
    dependsOn?: DependsOn;
    /**
     * Gets or sets the display name of service endpoint url.
     */
    displayName?: string;
    /**
     * Gets or sets the format of the url.
     */
    format?: string;
    /**
     * Gets or sets the help text of service endpoint url.
     */
    helpText?: string;
    /**
     * Gets or sets the visibility of service endpoint url.
     */
    isVisible?: string;
    /**
     * Gets or sets the value of service endpoint url.
     */
    value?: string;
}

/**
 * Specifies the public url of the help documentation.
 */
export interface HelpLink {
    /**
     * Gets or sets the help text.
     */
    text?: string;
    /**
     * Gets or sets the public url of the help documentation.
     */
    url?: string;
}

export interface OAuth2TokenResult {
    accessToken?: string;
    error?: string;
    errorDescription?: string;
    expiresIn?: string;
    issuedAt?: string;
    refreshToken?: string;
    scope?: string;
}

export interface OAuthConfiguration {
    /**
     * Gets or sets the ClientId
     */
    clientId: string;
    /**
     * Gets or sets the ClientSecret
     */
    clientSecret: string;
    /**
     * Gets or sets the identity who created the config.
     */
    createdBy?: VSSInterfaces.IdentityRef;
    /**
     * Gets or sets the time when config was created.
     */
    createdOn?: Date;
    /**
     * Gets or sets the type of the endpoint.
     */
    endpointType: string;
    /**
     * Gets or sets the unique identifier of this field
     */
    id?: string;
    /**
     * Gets or sets the identity who modified the config.
     */
    modifiedBy?: VSSInterfaces.IdentityRef;
    /**
     * Gets or sets the time when variable group was modified
     */
    modifiedOn?: Date;
    /**
     * Gets or sets the name
     */
    name: string;
    /**
     * Gets or sets the Url
     */
    url: string;
}

export enum OAuthConfigurationActionFilter {
    None = 0,
    Manage = 2,
    Use = 16,
}

export interface OAuthConfigurationParams {
    /**
     * Gets or sets the ClientId
     */
    clientId: string;
    /**
     * Gets or sets the ClientSecret
     */
    clientSecret: string;
    /**
     * Gets or sets the type of the endpoint.
     */
    endpointType: string;
    /**
     * Gets or sets the name
     */
    name: string;
    /**
     * Gets or sets the Url
     */
    url: string;
}

export interface OAuthEndpointStatus {
    state?: string;
    statusMessage?: string;
}

export interface Parameter {
    isSecret?: boolean;
    value?: string;
}

export interface ProjectReference {
    id?: string;
    name?: string;
}

/**
 * Specify the properties for refreshing the endpoint authentication object being queried
 */
export interface RefreshAuthenticationParameters {
    /**
     * EndpointId which needs new authentication params
     */
    endpointId?: string;
    /**
     * Scope of the token requested. For GitHub marketplace apps, scope contains repository Ids
     */
    scope?: number[];
    /**
     * The requested endpoint authentication should be valid for _ minutes. Authentication params will not be refreshed if the token contained in endpoint already has active token.
     */
    tokenValidityInMinutes?: number;
}

/**
 * Represents template to transform the result data.
 */
export interface ResultTransformationDetails {
    /**
     * Gets or sets the template for callback parameters
     */
    callbackContextTemplate?: string;
    /**
     * Gets or sets the template to decide whether to callback or not
     */
    callbackRequiredTemplate?: string;
    /**
     * Gets or sets the template for result transformation.
     */
    resultTemplate?: string;
}

/**
 * Represents an endpoint which may be used by an orchestration job.
 */
export interface ServiceEndpoint {
    /**
     * This is a deprecated field.
     */
    administratorsGroup?: VSSInterfaces.IdentityRef;
    /**
     * Gets or sets the authorization data for talking to the endpoint.
     */
    authorization?: EndpointAuthorization;
    /**
     * Gets or sets the identity reference for the user who created the Service endpoint.
     */
    createdBy?: VSSInterfaces.IdentityRef;
    data?: { [key: string] : string; };
    /**
     * Gets or sets the description of endpoint.
     */
    description?: string;
    /**
     * This is a deprecated field.
     */
    groupScopeId?: string;
    /**
     * Gets or sets the identifier of this endpoint.
     */
    id?: string;
    /**
     * EndPoint state indicator
     */
    isReady?: boolean;
    /**
     * Indicates whether service endpoint is shared with other projects or not.
     */
    isShared?: boolean;
    /**
     * Gets or sets the friendly name of the endpoint.
     */
    name?: string;
    /**
     * Error message during creation/deletion of endpoint
     */
    operationStatus?: any;
    /**
     * Owner of the endpoint Supported values are "library", "agentcloud"
     */
    owner?: string;
    /**
     * Gets or sets the identity reference for the readers group of the service endpoint.
     */
    readersGroup?: VSSInterfaces.IdentityRef;
    /**
     * All other project references where the service endpoint is shared.
     */
    serviceEndpointProjectReferences?: ServiceEndpointProjectReference[];
    /**
     * Gets or sets the type of the endpoint.
     */
    type?: string;
    /**
     * Gets or sets the url of the endpoint.
     */
    url?: string;
}

export enum ServiceEndpointActionFilter {
    None = 0,
    Manage = 2,
    Use = 16,
    View = 32,
}

/**
 * Represents the authentication scheme used to authenticate the endpoint.
 */
export interface ServiceEndpointAuthenticationScheme {
    /**
     * Gets or sets the authorization headers of service endpoint authentication scheme.
     */
    authorizationHeaders?: AuthorizationHeader[];
    /**
     * Gets or sets the Authorization url required to authenticate using OAuth2
     */
    authorizationUrl?: string;
    /**
     * Gets or sets the certificates of service endpoint authentication scheme.
     */
    clientCertificates?: ClientCertificate[];
    /**
     * Gets or sets the data source bindings of the endpoint.
     */
    dataSourceBindings?: DataSourceBinding[];
    /**
     * Gets or sets the display name for the service endpoint authentication scheme.
     */
    displayName?: string;
    /**
     * Gets or sets the input descriptors for the service endpoint authentication scheme.
     */
    inputDescriptors?: FormInputInterfaces.InputDescriptor[];
    /**
     * Gets or sets the properties of service endpoint authentication scheme.
     */
    properties?: { [key: string] : string; };
    /**
     * Gets or sets whether this auth scheme requires OAuth2 configuration or not.
     */
    requiresOAuth2Configuration?: boolean;
    /**
     * Gets or sets the scheme for service endpoint authentication.
     */
    scheme?: string;
}

/**
 * Represents details of the service endpoint.
 */
export interface ServiceEndpointDetails {
    /**
     * Gets or sets the authorization of service endpoint.
     */
    authorization?: EndpointAuthorization;
    /**
     * Gets or sets the data of service endpoint.
     */
    data?: { [key: string] : string; };
    /**
     * Gets or sets the type of service endpoint.
     */
    type?: string;
    /**
     * Gets or sets the connection url of service endpoint.
     */
    url?: string;
}

/**
 * Represents service endpoint execution data.
 */
export interface ServiceEndpointExecutionData {
    /**
     * Gets the definition of service endpoint execution owner.
     */
    definition?: ServiceEndpointExecutionOwner;
    /**
     * Gets the finish time of service endpoint execution.
     */
    finishTime?: Date;
    /**
     * Gets the Id of service endpoint execution data.
     */
    id?: number;
    /**
     * Gets the owner of service endpoint execution data.
     */
    owner?: ServiceEndpointExecutionOwner;
    /**
     * Gets the plan type of service endpoint execution data.
     */
    planType?: string;
    /**
     * Gets the result of service endpoint execution.
     */
    result?: ServiceEndpointExecutionResult;
    /**
     * Gets the start time of service endpoint execution.
     */
    startTime?: Date;
}

/**
 * Represents execution owner of the service endpoint.
 */
export interface ServiceEndpointExecutionOwner {
    _links?: any;
    /**
     * Gets or sets the Id of service endpoint execution owner.
     */
    id?: number;
    /**
     * Gets or sets the name of service endpoint execution owner.
     */
    name?: string;
}

/**
 * Represents the details of service endpoint execution.
 */
export interface ServiceEndpointExecutionRecord {
    /**
     * Gets the execution data of service endpoint execution.
     */
    data?: ServiceEndpointExecutionData;
    /**
     * Gets the Id of service endpoint.
     */
    endpointId?: string;
}

export interface ServiceEndpointExecutionRecordsInput {
    data?: ServiceEndpointExecutionData;
    endpointIds?: string[];
}

export enum ServiceEndpointExecutionResult {
    /**
     * "Service endpoint request succeeded.
     */
    Succeeded = 0,
    /**
     * "Service endpoint request succeeded but with some issues.
     */
    SucceededWithIssues = 1,
    /**
     * "Service endpoint request failed.
     */
    Failed = 2,
    /**
     * "Service endpoint request was cancelled.
     */
    Canceled = 3,
    /**
     * "Service endpoint request was skipped.
     */
    Skipped = 4,
    /**
     * "Service endpoint request was abandoned.
     */
    Abandoned = 5,
}

export interface ServiceEndpointOAuthConfigurationReference {
    configurationId?: string;
    serviceEndpointId?: string;
    serviceEndpointProjectId?: string;
}

export interface ServiceEndpointProjectReference {
    /**
     * Gets or sets description of the service endpoint.
     */
    description?: string;
    /**
     * Gets or sets name of the service endpoint.
     */
    name?: string;
    /**
     * Gets or sets project reference of the service endpoint.
     */
    projectReference?: ProjectReference;
}

export interface ServiceEndpointRequest {
    /**
     * Gets or sets the data source details for the service endpoint request.
     */
    dataSourceDetails?: DataSourceDetails;
    /**
     * Gets or sets the result transformation details for the service endpoint request.
     */
    resultTransformationDetails?: ResultTransformationDetails;
    /**
     * Gets or sets the service endpoint details for the service endpoint request.
     */
    serviceEndpointDetails?: ServiceEndpointDetails;
}

/**
 * Represents result of the service endpoint request.
 */
export interface ServiceEndpointRequestResult {
    /**
     * Gets or sets the parameters used to make subsequent calls to the data source
     */
    callbackContextParameters?: { [key: string] : string; };
    /**
     * Gets or sets the flat that decides if another call to the data source is to be made
     */
    callbackRequired?: boolean;
    /**
     * Gets or sets the error message of the service endpoint request result.
     */
    errorMessage?: string;
    /**
     * Gets or sets the result of service endpoint request.
     */
    result?: any;
    /**
     * Gets or sets the status code of the service endpoint request result.
     */
    statusCode?: string;
}

/**
 * Represents type of the service endpoint.
 */
export interface ServiceEndpointType {
    /**
     * Authentication scheme of service endpoint type.
     */
    authenticationSchemes?: ServiceEndpointAuthenticationScheme[];
    /**
     * Data sources of service endpoint type.
     */
    dataSources?: DataSource[];
    /**
     * Dependency data of service endpoint type.
     */
    dependencyData?: DependencyData[];
    /**
     * Gets or sets the description of service endpoint type.
     */
    description?: string;
    /**
     * Gets or sets the display name of service endpoint type.
     */
    displayName?: string;
    /**
     * Gets or sets the endpoint url of service endpoint type.
     */
    endpointUrl?: EndpointUrl;
    /**
     * Gets or sets the help link of service endpoint type.
     */
    helpLink?: HelpLink;
    /**
     * Gets or sets the help text shown at the endpoint create dialog.
     */
    helpMarkDown?: string;
    /**
     * Gets or sets the icon url of service endpoint type.
     */
    iconUrl?: string;
    /**
     * Input descriptor of service endpoint type.
     */
    inputDescriptors?: FormInputInterfaces.InputDescriptor[];
    /**
     * Gets or sets the name of service endpoint type.
     */
    name?: string;
    /**
     * Trusted hosts of a service endpoint type.
     */
    trustedHosts?: string[];
    /**
     * Gets or sets the ui contribution id of service endpoint type.
     */
    uiContributionId?: string;
}

export var TypeInfo = {
    AadLoginPromptOption: {
        enumValues: {
            "noOption": 0,
            "login": 1,
            "selectAccount": 2,
            "freshLogin": 3,
            "freshLoginWithMfa": 4
        }
    },
    AccessTokenRequestType: {
        enumValues: {
            "none": 0,
            "oauth": 1,
            "direct": 2
        }
    },
    AuthConfiguration: <any>{
    },
    OAuthConfiguration: <any>{
    },
    OAuthConfigurationActionFilter: {
        enumValues: {
            "none": 0,
            "manage": 2,
            "use": 16
        }
    },
    ServiceEndpointActionFilter: {
        enumValues: {
            "none": 0,
            "manage": 2,
            "use": 16,
            "view": 32
        }
    },
    ServiceEndpointAuthenticationScheme: <any>{
    },
    ServiceEndpointExecutionData: <any>{
    },
    ServiceEndpointExecutionRecord: <any>{
    },
    ServiceEndpointExecutionRecordsInput: <any>{
    },
    ServiceEndpointExecutionResult: {
        enumValues: {
            "succeeded": 0,
            "succeededWithIssues": 1,
            "failed": 2,
            "canceled": 3,
            "skipped": 4,
            "abandoned": 5
        }
    },
    ServiceEndpointRequestResult: <any>{
    },
    ServiceEndpointType: <any>{
    },
};

TypeInfo.AuthConfiguration.fields = {
    createdOn: {
        isDate: true,
    },
    modifiedOn: {
        isDate: true,
    }
};

TypeInfo.OAuthConfiguration.fields = {
    createdOn: {
        isDate: true,
    },
    modifiedOn: {
        isDate: true,
    }
};

TypeInfo.ServiceEndpointAuthenticationScheme.fields = {
    inputDescriptors: {
        isArray: true,
        typeInfo: FormInputInterfaces.TypeInfo.InputDescriptor
    }
};

TypeInfo.ServiceEndpointExecutionData.fields = {
    finishTime: {
        isDate: true,
    },
    result: {
        enumType: TypeInfo.ServiceEndpointExecutionResult
    },
    startTime: {
        isDate: true,
    }
};

TypeInfo.ServiceEndpointExecutionRecord.fields = {
    data: {
        typeInfo: TypeInfo.ServiceEndpointExecutionData
    }
};

TypeInfo.ServiceEndpointExecutionRecordsInput.fields = {
    data: {
        typeInfo: TypeInfo.ServiceEndpointExecutionData
    }
};

TypeInfo.ServiceEndpointRequestResult.fields = {
};

TypeInfo.ServiceEndpointType.fields = {
    authenticationSchemes: {
        isArray: true,
        typeInfo: TypeInfo.ServiceEndpointAuthenticationScheme
    },
    inputDescriptors: {
        isArray: true,
        typeInfo: FormInputInterfaces.TypeInfo.InputDescriptor
    }
};
