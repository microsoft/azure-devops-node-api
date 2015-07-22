/// <reference path="../../src/api/definitions/Q.d.ts" />
import Q = require("q");
import restm = require("./RestClient");
import ifm = require("./interfaces/common/VsoBaseInterfaces");
export interface ClientVersioningData {
    /**
    * The api version string to send in the request (e.g. "1.0" or "2.0-preview.2")
    */
    apiVersion?: string;
    /**
    * The request path string to send the request to.  Looked up via an options request with the location id.
    */
    requestUrl?: string;
}
export declare class InvalidApiResourceVersionError implements Error {
    name: string;
    message: string;
    constructor(message?: string);
}
/**
* Base class that should be used (derived from) to make requests to VSS REST apis
*/
export declare class VsoClient {
    private static APIS_RELATIVE_PATH;
    private static PREVIEW_INDICATOR;
    private _locationsByAreaPromises;
    private _initializationPromise;
    restClient: ifm.IRestClient;
    baseUrl: string;
    basePath: string;
    constructor(baseUrl: string, restClient: restm.RestClient);
    /**
    * Compares the version on the server (locationVersion) to the api version given by the client (apiVersion).
    * Returns a negative value if the location version is older (less than) the api version
    * Returns 0 if the two are equal
    * Returns a positive value if the location version is newer (greater than) the api version
    */
    private compareResourceVersions(locationVersion, apiVersion);
    /**
    * Gets the route template for a resource based on its location ID and negotiates the api version
    */
    getVersioningData(apiVersion: string, area: string, locationId: string, routeValues: any, queryParams?: any): Q.Promise<ClientVersioningData>;
    /**
     * Sets a promise that is waited on before any requests are issued. Can be used to asynchronously
     * set the request url and auth token manager.
     */
    _setInitializationPromise(promise: Q.Promise<any>): void;
    /**
     * Gets information about an API resource location (route template, supported versions, etc.)
     *
     * @param area resource area name
     * @param locationId Guid of the location to get
     */
    _beginGetLocation(area: string, locationId: string): Q.Promise<ifm.ApiResourceLocation>;
    private beginGetAreaLocations(area);
    resolveUrl(relativeUrl: string): string;
    /**
    * Issues an OPTIONS request to get location objects from a location id
    */
    _issueOptionsRequest(requestUrl: string, onResult: (err: any, statusCode: number, locationsResult: any) => void): void;
    protected getRequestUrl(routeTemplate: string, area: string, resource: string, routeValues: any, queryParams?: any): string;
    private replaceRouteValues(routeTemplate, routeValues);
    _getLinkResponseHeaders(xhr: XMLHttpRequest): {
        [relName: string]: string;
    };
}
