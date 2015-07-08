//----------------------------------------------------------
// Common interfaces specific to WebPlatform area
//----------------------------------------------------------

/**
* Interface for a class that can fetch auth tokens to be used in AJAX requests.
*/
interface IAuthTokenManager<TToken> {

    /**
     * Fetch a session token to use for the current user for the given application (or null/empty for an unscoped token).
     *
     * @param appId Id of the application.
     * @param name Metadata info to identify the token.
     * @param force Enables skipping cache and issue a brand new token.
     * @return Session token.
     */
    getToken(appId?: string, name?: string, force?: boolean): IPromise<TToken>;

    /**
     * Fetch an app session token to use for the current user for the given application.
     *
     * @param appId Id of the application.
     * @param name Metadata info to identify the token.
     * @param force Enables skipping cache and issue a brand new token.
     * @return Session token.
     */
    getAppToken(appId: string, name?: string, force?: boolean): IPromise<TToken>;
    
    /**
     * Gets the authorization header to use in a request from the given token
     *
     * @param sessionToken Used for token key.
     * @return the value to use for the Authorization header in a request.
     */
    getAuthorizationHeader(sessionToken: TToken): string;
}

/**
* A promise represents the eventual result of an asynchronous operation. The primary way of interacting with a promise is through its then method,
* which registers callbacks to receive either a promise’s eventual value or the reason why the promise cannot be fulfilled.
*/
interface IPromise<T> {
    /**
     * Then method which accepts a fulfill delegate which returns a promise or nothing and a reject delegate which returns a promise or nothing. Then returns a new promise.
     */
    then<U>(onFulfill: (value: T) => IPromise<U> | void, onReject?: (reason: any) => IPromise<U> | void): IPromise<U>;

    /**
     * Then method which accepts a fulfill delegate which returns a promise or nothing and a reject delegate which returns a reason value or nothing. Then returns a new promise.
     */
    then<U>(onFulfill: (value: T) => IPromise<U> | void, onReject?: (reason: any) => U | void): IPromise<U>;

    /**
     * Then method which accepts a fulfill delegate which returns a value or nothing and a reject delegate which returns a promise or nothing. Then returns a new promise.
     */
    then<U>(onFulfill: (value: T) => U | void, onReject?: (reason: any) => IPromise<U> | void): IPromise<U>;

    /**
     * Then method which accepts a fulfill delegate which returns a value or nothing and a reject delegate which returns a reason value or nothing. Then returns a new promise.
     */
    then<U>(onFulfill: (value: T) => U | void, onReject?: (reason: any) => U | void): IPromise<U>;
}
