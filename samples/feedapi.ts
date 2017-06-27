import * as fs from 'fs';
import * as path from 'path';
import * as stream from 'stream';
import * as restm from 'typed-rest-client/RestClient';

import * as cm from './common';
import * as vm from 'vso-node-api';

import * as fa from 'vso-node-api/FeedApi';
import * as fi from 'vso-node-api/interfaces/FeedInterfaces';

const SAMPLE_FEED_NAME = 'vsoNodeApiSampleFeed5';
const SAMPLE_FEED_DESCRIPTION = 'description for vsoNodeApiSampleFeed';
const SAMPLE_FEED_VIEW_NAME = 'beta';

let feedApi: fa.FeedApi;
let sampleFeed: fi.Feed;

/**
 * Print the name and URI of each feed in the given feed ary.
 * @param {FeedInterfaces.Feed[]} feeds - An array of feeds.
 */
function printFeeds(feeds: fi.Feed[]) {
    if (!feeds) {
        console.warn('No feeds found in ' + process.env.API_URL);
        return;
    }
    console.log('Found %d feeds.', feeds.length);
    feeds.map(function (feed) {
        console.log('Feed - name(%s) url(%s)', feed.name, feed.url);
    });
}


/**
 * Removes the given feed
 * @param {FeedInterfaces.Feed} feed - A feed to remove.
 */
async function removeFeed(feed: fi.Feed) {
    if (!feed) {
        console.error('The feeds array is empty.');
        return;
    }
    console.log('Removing name(%s) feedid(%s)', feed.name, feed.id);
    try {
        let res = await feedApi.deleteFeed(feed.id);
    } catch (err) {
        console.error('Error: %s', err);
    }
}


/**
 * Removes any feed from the supplied feed array that have a name which
 * matches the supplied pattern.
 * @param {FeedInterfaces.Feed[]} feeds - An array of feeds.
 * @param {string} prefix - The feed name prefix to match
 */
async function removeFeeds(feeds: fi.Feed[], prefix: string) {
    if (!feeds && feeds.length) {
        console.error('The array of feeds is %s.', feeds);
        return;
    }
    if (!prefix) {
        console.error('The feed name prefix cannot be empty.');
        return;
    }

    for (const feed of feeds) {
        if (feed.name.startsWith(prefix)) {
            console.log('Removing name(%s) feedid(%s)', feed.name, feed.id);
            try {
                let res = await feedApi.deleteFeed(feed.id);
            } catch (err) {
                console.error('Error: %s', err);
            }
        }
    }
}


/**
 *
 * @param {string} feedName The name of the feed to be created.
 * @param {string} feedDescription A description for the feed
 */
async function createFeed(feedName: string,
    feedDescription = SAMPLE_FEED_DESCRIPTION): Promise<fi.Feed> {
    if (!feedName) {
        console.error('The feed\'s feed name cannot be empty.');
        return;
    }
    let res;
    let feed: fi.Feed = <fi.Feed>{};
    feed.name = feedName;
    feed.description = feedDescription;
    try {
        res = await feedApi.createFeed(feed);
        console.log('Feed successfully created: %s', JSON.stringify(res, null, 4));
    } catch (err) {
        console.error('Error: %s', err);
    }
    return res;
}


/**
 * Create a release view in a feed.
 * @param {string} viewName The name of the release view
 * @param {FeedInterfaces.Feed} feed The feed into which the view will be created.
 */
async function createView(viewName: string, feed: fi.Feed): Promise<fi.FeedView> {
    let res;
    if (!viewName) {
        console.error('The view name cannot be empty.');
        return;
    }
    if (!feed) {
        console.error('The feed cannot be %s', feed);
        return;
    }
    try {
        let feedView: fi.FeedView = <fi.FeedView>{};
        feedView.name = viewName;
        feedView.type = fi.FeedViewType.Release;
        res = await feedApi.createFeedView(feedView, feed.id);
        console.log('Feed view successfully created: %s', JSON.stringify(res, null, 4));
    } catch (err) {
        console.error('Error: %s', err);
    }
    return res;
}


async function printViews(feed: fi.Feed) {
    let res;
    if (!feed) {
        console.error('The feed cannot be %s', feed);
        return;
    }
    try {
        res = await feedApi.getFeedViews(feed.id);
        if (res) {
            res.map((view: fi.FeedView) => {
                console.log('Found view(%s) with (%s) in feed(%s) an a url of (%s)',
                    view.name, view.id, feed.name, view.url);
            });
        } else {
            console.log('There are no views in feed %s', feed.name);
        }
    } catch (err) {
        console.error('Error: %s', err);
    }
}


export async function run() {
    try {
        let vsts: vm.WebApi = await cm.getWebApi();
        feedApi = vsts.getFeedApi();
        let feeds: fi.Feed[] = await feedApi.getFeeds();

        //
        // Print existing feeds.
        //
        printFeeds(feeds);


        //
        // Create a feed
        //
        sampleFeed = await createFeed(SAMPLE_FEED_NAME, SAMPLE_FEED_DESCRIPTION);

        //
        // Create a view
        //
        await createView(SAMPLE_FEED_VIEW_NAME, sampleFeed);

        //
        // Print all of the feed's views
        //
        await printViews(sampleFeed);

    }
    catch (err) {
        console.error('Error: ' + err.stack);
    } finally {
        // Cleanup
        await removeFeed(sampleFeed);
    }

}
