//*******************************************************************************************************
// significant portions of this file copied from: VSO\src\Vssf\WebPlatform\Platform\Scripts\VSS\WebApi\RestClient.ts
//*******************************************************************************************************

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

    protected autoNegotiateApiVersion(location: ifm.ApiResourceLocation, requestedVersion: string): string {
        let negotiatedVersion: string;
        let apiVersion: number;
        let apiVersionString: string;

        if (requestedVersion) {
            let apiVersionRegEx = new RegExp('(\\d+(\\.\\d+)?)(-preview(\\.(\\d+))?)?');

            // Need to handle 3 types of api versions + invalid apiversion
            // '2.1-preview.1' = ["2.1-preview.1", "2.1", ".1", -preview.1", ".1", "1"]
            // '2.1-preview' = ["2.1-preview", "2.1", ".1", "-preview", undefined, undefined]
            // '2.1' = ["2.1", "2.1", ".1", undefined, undefined, undefined]

            let isPreview = false;
            let resourceVersion: number;

            let regExExecArray = apiVersionRegEx.exec(requestedVersion);
            if (regExExecArray) {
                if (regExExecArray[1]) {
                    // we have an api version
                    apiVersion = +regExExecArray[1];
                    apiVersionString = regExExecArray[1];
                    if (regExExecArray[3]) {
                        // requesting preview
                        isPreview = true;
                        if (regExExecArray[5]) { 
                            // we have a resource version
                            resourceVersion = +regExExecArray[5];
                        }
                    }

                    // compare the location version and requestedversion
                    if (apiVersion <= +location.releasedVersion
                        || (!resourceVersion && apiVersion <= +location.maxVersion && isPreview)
                        || (resourceVersion && apiVersion <= +location.maxVersion && resourceVersion <= +location.resourceVersion)) {
                        negotiatedVersion = requestedVersion;
                    }
                    // else fall back to latest version of the resource from location
                }
            }
        }
        if (!negotiatedVersion) {
            // Use the latest version of the resource if the api version was not specified in the request or if the requested version is higher then the location's supported version
            if (apiVersion < +location.maxVersion) {
                negotiatedVersion = apiVersionString + "-preview";
            }
            else if (location.maxVersion === location.releasedVersion) {
                negotiatedVersion = location.maxVersion;
            }
            else {
                negotiatedVersion = location.maxVersion + "-preview." + location.resourceVersion;
            }
        }
        return negotiatedVersion;
    }

    /**
     * Gets the route template for a resource based on its location ID and negotiates the api version
     */
    public getVersioningData(apiVersion: string, area: string, locationId: string, routeValues: any, queryParams?: any): Q.Promise<ClientVersioningData> {
        var requestUrl;
        var deferred = Q.defer<ClientVersioningData>();

        this.beginGetLocation(area, locationId)
        .then((location: ifm.ApiResourceLocation) => {
            if (!location) { 
                throw new Error("Failed to find api location for area: " + area + " id: " + locationId);
            }

            apiVersion = this.autoNegotiateApiVersion(location, apiVersion);
            requestUrl = this.getRequestUrl(location.routeTemplate, location.area, location.resourceName, routeValues, queryParams);

            var versionData = {
                apiVersion: apiVersion,
                requestUrl: requestUrl
            };
            deferred.resolve(versionData);
        })
        .fail((err) => {
            deferred.reject(err);
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
    public beginGetLocation(area: string, locationId: string): Q.Promise<ifm.ApiResourceLocation> {
        return this._initializationPromise.then(() => {
            return this.beginGetAreaLocations(area);
        }).then((areaLocations: VssApiResourceLocationLookup) => {
            return areaLocations[(locationId || "").toLowerCase()];
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

    private getSerializedObject(object: any): string {
        let value:string = "";
        let first:boolean = true;

        for (var property in object) {
            if (object.hasOwnProperty(property)) {
                let prop = object[property];
                if (first && prop !== undefined) {
                    value += property + "=" + encodeURIComponent(prop);
                    first = false;
                } else if (prop !== undefined) {
                    value += "&" + property +"=" + encodeURIComponent(prop);
                }
            }
        }

        return value;
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
                var value = queryParams[queryValue];
                var valueString = null;
                if (typeof(value) === 'object') {
                    valueString = this.getSerializedObject(value);
                } else {
                    valueString = queryValue + "=" + encodeURIComponent(queryParams[queryValue]);
                }
                if (first) {
                    relativeUrl += "?" + valueString;
                    first = false;
                } else {
                    relativeUrl += "&" + valueString;
                }
            }
        }

        //resolve the relative url with the base
        return url.resolve(this.baseUrl, path.join(this.basePath, relativeUrl));
    }

    // helper method copied directly from VSS\WebAPI\restclient.ts
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
}
