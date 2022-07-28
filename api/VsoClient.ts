//*******************************************************************************************************
// significant portions of this file copied from: VSO\src\Vssf\WebPlatform\Platform\Scripts\VSS\WebApi\RestClient.ts
//*******************************************************************************************************

/// Imports of 3rd Party ///
import url = require("url");
import path = require("path");
/// Import base rest class ///
import * as restm from 'typed-rest-client/RestClient';
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
    private _locationsByAreaPromises: { [areaName: string]: Promise<VssApiResourceLocationLookup>; };
    private _initializationPromise: Promise<any>;

    restClient: restm.RestClient;
    baseUrl: string;
    basePath: string;

    constructor(baseUrl: string, restClient: restm.RestClient) {
        this.baseUrl = baseUrl;
        this.basePath = url.parse(baseUrl).pathname;
        this.restClient = restClient;
        this._locationsByAreaPromises = {};
        this._initializationPromise = Promise.resolve(true);
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
    public getVersioningData(apiVersion: string, area: string, locationId: string, routeValues: any, queryParams?: any): Promise<ClientVersioningData> {
        let requestUrl;

        return this.beginGetLocation(area, locationId)
            .then((location: ifm.ApiResourceLocation): ClientVersioningData => {
                if (!location) {
                    throw new Error("Failed to find api location for area: " + area + " id: " + locationId);
                }

                apiVersion = this.autoNegotiateApiVersion(location, apiVersion);
                requestUrl = this.getRequestUrl(location.routeTemplate, location.area, location.resourceName, routeValues, queryParams);

                return {
                    apiVersion: apiVersion,
                    requestUrl: requestUrl
                };
            });
    }

    /**
     * Sets a promise that is waited on before any requests are issued. Can be used to asynchronously
     * set the request url and auth token manager.
     */
    public _setInitializationPromise(promise: Promise<any>) {
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
    public beginGetLocation(area: string, locationId: string): Promise<ifm.ApiResourceLocation> {
        return this._initializationPromise.then(() => {
            return this.beginGetAreaLocations(area);
        }).then((areaLocations: VssApiResourceLocationLookup) => {
            return areaLocations[(locationId || "").toLowerCase()];
        });
    }

    private beginGetAreaLocations(area: string): Promise<VssApiResourceLocationLookup> {
        let areaLocationsPromise = this._locationsByAreaPromises[area];
        if (!areaLocationsPromise) {
            let requestUrl = this.resolveUrl(VsoClient.APIS_RELATIVE_PATH + "/" + area);
            areaLocationsPromise = this.restClient.options<any>(requestUrl)
                .then((res:restm.IRestResponse<any>) => {
                    let locationsLookup: VssApiResourceLocationLookup = {};
                    let resourceLocations: ifm.ApiResourceLocation[] = res.result.value;
                    let i;
                    for (i = 0; i < resourceLocations.length; i++) {
                        let resourceLocation = resourceLocations[i];
                        locationsLookup[resourceLocation.id.toLowerCase()] = resourceLocation;
                    }
                    // If we have completed successfully, cache the response.
                    this._locationsByAreaPromises[area] = areaLocationsPromise;

                    return locationsLookup;
                });
        }

        return areaLocationsPromise;
    }

    public resolveUrl(relativeUrl: string): string {
        return url.resolve(this.baseUrl, path.join(this.basePath, relativeUrl));
    }

    private queryParamsToStringHelper(queryParams: any, prefix: string): string {
        if (queryParams == null || queryParams.length === 0) {
            return '';
        }
        let queryString: string = '';

        if (typeof(queryParams) !== 'string') {
            for (let property in queryParams) {
                if (queryParams.hasOwnProperty(property)) {
                    const prop = queryParams[property];
                    const newPrefix = prefix + encodeURIComponent(property.toString()) + '.';
                    queryString += this.queryParamsToStringHelper(prop, newPrefix);
                }
            }
        }

        if (queryString === '' && prefix.length > 0){
            // Date.prototype.toString() returns a string that is not valid for the REST API.
            // Need to specially call `toUTCString()` instead for such cases
            const queryValue = typeof queryParams === 'object' && 'toUTCString' in queryParams ? (queryParams as Date).toUTCString() : queryParams.toString();


            // Will always need to chop period off of end of prefix
            queryString = prefix.slice(0,-1) + '=' + encodeURIComponent(queryValue) + '&';
        }
        return queryString;
    }

    private queryParamsToString(queryParams: any): string {
        const queryString: string = '?' + this.queryParamsToStringHelper(queryParams, '');

        // Will always need to slice either a ? or & off of the end
        return queryString.slice(0,-1);
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
        let relativeUrl = this.replaceRouteValues(routeTemplate, routeValues);

        // Append query parameters to the end
        if (queryParams) {
            relativeUrl += this.queryParamsToString(queryParams);
        }

        // Resolve the relative url with the base
        return url.resolve(this.baseUrl, path.join(this.basePath, relativeUrl));
    }

    // helper method copied directly from VSS\WebAPI\restclient.ts
    private replaceRouteValues(routeTemplate: string, routeValues: any): string {

        let result = "",
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
                        let strippedParamName = paramName.replace(/[^a-z0-9]/ig, '');
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
