//*******************************************************************************************************
// significant portions of this file copied from: VSO\src\Vssf\WebPlatform\Platform\Scripts\VSS\WebApi\RestClient.ts
//*******************************************************************************************************

/// <reference path="../q/Q.d.ts"/>

/// Imports of 3rd Party ///
import Q = require("q");
import url = require("url");
import path = require("path");
/// Import base rest class ///
import restm = require("./RestClient");
import httpm = require("./HttpClient");
import ifm = require("./interfaces/common/VsoBaseInterfaces");

interface VssApiResourceLocationLookup {
    [locationId: string]: ifm.ApiResourceLocation;
}

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

export class InvalidApiResourceVersionError implements Error {
    public name: string = "Invalid resource version";
    public message: string;

    constructor(message?: string) {
        this.message = message;
    }
}

/**
* Base class that should be used (derived from) to make requests to VSS REST apis
*/
export class VsoClient {

    private static APIS_RELATIVE_PATH = "_apis";
    private static PREVIEW_INDICATOR = "-preview.";
    private _locationsByAreaPromises: { [areaName: string]: Q.Promise<VssApiResourceLocationLookup>; };
    private _initializationPromise: Q.Promise<any>;

    restClient: ifm.IRestClient;
    baseUrl: string;
    basePath: string;

    constructor(baseUrl: string, restClient: restm.RestClient) {
        this.baseUrl = baseUrl;
        this.basePath = url.parse(baseUrl).pathname;
        this.restClient = restClient;
        this._locationsByAreaPromises = {};
        this._initializationPromise = Q.fcall(() => true);
    }

    /**
    * Compares the version on the server (locationVersion) to the api version given by the client (apiVersion).
    * Returns a negative value if the location version is older (less than) the api version
    * Returns 0 if the two are equal
    * Returns a positive value if the location version is newer (greater than) the api version
    */
    private compareResourceVersions(locationVersion: string, apiVersion: string) {
        // escape early if versions are the same
        if (locationVersion == apiVersion) {
            return 0;
        }
        // otherwise replaces the '-preview' flag and compares each .-separated piece of the string individually
        locationVersion = locationVersion.replace(VsoClient.PREVIEW_INDICATOR, "");
        apiVersion = apiVersion.replace(VsoClient.PREVIEW_INDICATOR, "");
        var splitLocationVersion: string[] = locationVersion.split('.');
        var splitApiVersion: string[] = apiVersion.split('.');
        var i;
        for (i = 0; i < Math.min(splitLocationVersion.length, splitApiVersion.length); i++) {
            var locationVersionPart: number = parseInt(splitLocationVersion[i]);
            var apiVersionPart: number = parseInt(splitApiVersion[i]);
            if (locationVersionPart != apiVersionPart) {
                return locationVersionPart - apiVersionPart;
            }
        }
        // if the strings aren't equal, but were the same all the way through the loop, then one version is longer (and thus newer) than the other
        return splitLocationVersion.length - splitApiVersion.length;
    }

    /**
    * Gets the route template for a resource based on its location ID and negotiates the api version
    */
    public getVersioningData(apiVersion: string, area: string, locationId: string, routeValues: any, queryParams?: any): Q.Promise<ClientVersioningData> {
        var requestUrl;
        var deferred = Q.defer<ClientVersioningData>();

        this._beginGetLocation(area, locationId).then((location: ifm.ApiResourceLocation) => {
            if (!apiVersion) {
                // Use the latest version of the resource if the api version was not specified in the request.
                apiVersion = location.maxVersion + VsoClient.PREVIEW_INDICATOR + location.resourceVersion;
            }
            else {
                if (this.compareResourceVersions(location.minVersion, apiVersion) > 1) {
                    // Client is older than the server. The server no longer supports this resource (deprecated).
                    throw new InvalidApiResourceVersionError("The client being used is older than the server. The server no longer supports this resource (deprecated). Update the client.");
                }
                else if (this.compareResourceVersions(location.maxVersion, apiVersion) < 1) {
                    // Client is newer than the server. Negotiate down to the latest version on the server
                    apiVersion = location.maxVersion + VsoClient.PREVIEW_INDICATOR + location.resourceVersion;
                }
            }

            requestUrl = this.getRequestUrl(location.routeTemplate, location.area, location.resourceName, routeValues, queryParams);

            var versionData = {
                apiVersion: apiVersion,
                requestUrl: requestUrl
            };
            deferred.resolve(versionData);
        });

        return deferred.promise;
    }
    
    /**
     * Sets a promise that is waited on before any requests are issued. Can be used to asynchronously
     * set the request url and auth token manager.
     */
    public _setInitializationPromise(promise: Q.Promise<any>) {
        if (promise) {
            this._initializationPromise = promise;
        }
    }

    /**
     * Gets information about an API resource location (route template, supported versions, etc.)
     * 
     * @param area resource area name
     * @param locationId Guid of the location to get
     */
    public _beginGetLocation(area: string, locationId: string): Q.Promise<ifm.ApiResourceLocation> {
        return this._initializationPromise.then(() => {
                return this.beginGetAreaLocations(area);
            }).then((areaLocations: VssApiResourceLocationLookup) => {
                var location = areaLocations[(locationId || "").toLowerCase()];
                if (!location) {
                    throw new Error("Failed to find api location for area: " + area + " id: " + locationId);
                }
                return location;
            });
    }

    private beginGetAreaLocations(area: string): Q.Promise<VssApiResourceLocationLookup> {
        var areaLocationsPromise = this._locationsByAreaPromises[area];
        if (!areaLocationsPromise) {

            var deferred = Q.defer<VssApiResourceLocationLookup>();
            areaLocationsPromise = deferred.promise;

            var requestUrl = this.resolveUrl(VsoClient.APIS_RELATIVE_PATH + "/" + area);

            this._issueOptionsRequest(requestUrl, (err: any, statusCode: number, locationsResult: any) => {
                if (err) {
                    err.statusCode = statusCode;
                    deferred.reject(err);
                }
                else {
                    var locationsLookup: VssApiResourceLocationLookup = {};

                    var resourceLocations: ifm.ApiResourceLocation[] = locationsResult.value;

                    var i;
                    for (i = 0; i < locationsResult.count; i++) {
                        var resourceLocation = resourceLocations[i];
                        locationsLookup[resourceLocation.id.toLowerCase()] = resourceLocation;
                    }

                    deferred.resolve(locationsLookup);
                }
            });

            this._locationsByAreaPromises[area] = areaLocationsPromise;
        }

        return areaLocationsPromise;
    }

    public resolveUrl(relativeUrl: string): string {
        return url.resolve(this.baseUrl, path.join(this.basePath, relativeUrl));
    }

    /**
    * Issues an OPTIONS request to get location objects from a location id
    */
    public _issueOptionsRequest(requestUrl: string, onResult: (err: any, statusCode: number, locationsResult: any) => void): void {
        return this.restClient.options(requestUrl, onResult);
    }

    protected getRequestUrl(routeTemplate: string, area: string, resource: string, routeValues: any, queryParams?: any): string {

        // Add area/resource route values (based on the location)
        routeValues = routeValues || {};
        if (!routeValues.area) {
            routeValues.area = area;
        }
        if (!routeValues.resource) {
            routeValues.resource = resource;
        }

        // Replace templated route values
        var relativeUrl = this.replaceRouteValues(routeTemplate, routeValues);

        //append query parameters to the end
        var first = true;
        for (var queryValue in queryParams) {
            if (queryParams[queryValue] != null) {
                if (first) {
                    relativeUrl += "?" + queryValue + "=" + queryParams[queryValue];
                    first = false;
                }
                else {
                    relativeUrl += "&" + queryValue + "=" + queryParams[queryValue];
                }
            }
        }

        //resolve the relative url with the base
        return url.resolve(this.baseUrl, path.join(this.basePath, relativeUrl));
    }

    /*
    * helper method copied directly from VSS\WebAPI\restclient.ts
    */
    private replaceRouteValues(routeTemplate: string, routeValues: any): string {

        var result = "",
            currentPathPart = "",
            paramName = "",
            insideParam = false,
            charIndex: number,
            routeTemplateLength = routeTemplate.length,
            c: string;

        for (charIndex = 0; charIndex < routeTemplateLength; charIndex++) {
            c = routeTemplate[charIndex];

            if (insideParam) {
                if (c == "}") {
                    insideParam = false;
                    if (routeValues[paramName]) {
                        currentPathPart += encodeURIComponent(routeValues[paramName]);
                    } else {
                        // Normalize param name in order to capture wild-card routes
                        var strippedParamName = paramName.replace(/[^a-z0-9]/ig, '');
                        if (routeValues[strippedParamName]) {
                            currentPathPart += encodeURIComponent(routeValues[strippedParamName]);
                        }
                    }
                    paramName = "";
                }
                else {
                    paramName += c;
                }
            }
            else {
                if (c == "/") {
                    if (currentPathPart) {
                        if (result) {
                            result += "/";
                        }
                        result += currentPathPart;
                        currentPathPart = "";
                    }
                }
                else if (c == "{") {
                    if ((charIndex + 1) < routeTemplateLength && routeTemplate[charIndex + 1] == "{") {
                        // Escaped '{'
                        currentPathPart += c;
                        charIndex++;
                    }
                    else {
                        insideParam = true;
                    }
                }
                else if (c == '}') {
                    currentPathPart += c;
                    if ((charIndex + 1) < routeTemplateLength && routeTemplate[charIndex + 1] == "}") {
                        // Escaped '}'
                        charIndex++;
                    }
                }
                else {
                    currentPathPart += c;
                }
            }
        }

        if (currentPathPart) {
            if (result) {
                result += "/";
            }
            result += currentPathPart;
        }

        return result;
    }

    public _getLinkResponseHeaders(xhr: XMLHttpRequest): { [relName: string]: string; } {
        var results: { [relName: string]: string; } = {},
            responseHeadersString = xhr.getAllResponseHeaders(), // cannot use xhr.getResponseHeader('Link') because jquery/IE bug
            rheaders = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg, // IE leaves an \r character at EOL
            linkRegExp = /\<(.*?)\>;rel=\"(.*?)\"/g,
            headerMatch: any,
            linkMatch: any;

        // In IE, the Link headers will be distinct, where as in Chrome, the Link headers will be comma delimited
        if (responseHeadersString) {
            while (headerMatch = rheaders.exec(responseHeadersString)) {
                if (headerMatch[1].toLowerCase() === 'link') {
                    while (linkMatch = linkRegExp.exec(headerMatch[2])) {
                        results[linkMatch[2]] = linkMatch[1];
                    }
                }
            }
        }

        return results;
    }
}
