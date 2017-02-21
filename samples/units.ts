import * as vc from 'vso-node-api/VsoClient';
import * as rm from 'vso-node-api/RestClient';
import * as hm from 'vso-node-api/HttpClient';
import * as ifm from 'vso-node-api/interfaces/common/VsoBaseInterfaces';

const unreleasedApiResourceLocation: ifm.ApiResourceLocation = {
    area: "Foo",
    id: "123",
    maxVersion: "2.2",
    minVersion: "1.0",
    releasedVersion: "0.0",
    resourceName: "MyResource",
    resourceVersion: 3,
    routeTemplate: "{resource}"
}

const releasedApiResourceLocation: ifm.ApiResourceLocation = {
    area: "Foo",
    id: "123",
    maxVersion: "2.2",
    minVersion: "2.0",
    releasedVersion: "2.1",
    resourceName: "MyResource",
    resourceVersion: 3,
    routeTemplate: "{resource}"
}

const releasedApiResourceLocationForRegExTest: ifm.ApiResourceLocation = {
    area: "Foo",
    id: "123",
    maxVersion: "251.267",
    minVersion: "248.123",
    releasedVersion: "249.123",
    resourceName: "MyResource",
    resourceVersion: 3029,
    routeTemplate: "{resource}"
}

class TestVsoClient extends vc.VsoClient {
    public testNegotiateApiVersion(serverVersion: ifm.ApiResourceLocation, clientVersion: string): string {
        return super.autoNegotiateApiVersion(serverVersion, clientVersion);
    }
}

const client = new TestVsoClient("http://localhost", new rm.RestClient(new hm.HttpClient("test-user-agent")));
function testAutoNegotiateApiVersion(location: ifm.ApiResourceLocation, requestedVersion: string, expectedVersion: string): void {
    let negotiatedVersion = client.testNegotiateApiVersion(location, requestedVersion);
    assertAreEqual(negotiatedVersion, expectedVersion, "Requested version: '" + requestedVersion + "'  Negotiated version: '" + negotiatedVersion + "'  Expected version: '" + expectedVersion + "'");
}

export function run() {
    testAutoNegotiateApiVersion(unreleasedApiResourceLocation, null, "2.2-preview.3");
    testAutoNegotiateApiVersion(unreleasedApiResourceLocation, undefined, "2.2-preview.3");
    testAutoNegotiateApiVersion(unreleasedApiResourceLocation, "", "2.2-preview.3");
    testAutoNegotiateApiVersion(unreleasedApiResourceLocation, "1.0", "1.0-preview");
    testAutoNegotiateApiVersion(unreleasedApiResourceLocation, "2", "2-preview");
    testAutoNegotiateApiVersion(unreleasedApiResourceLocation, "2.0", "2.0-preview");
    testAutoNegotiateApiVersion(unreleasedApiResourceLocation, "2.2", "2.2-preview.3");
    testAutoNegotiateApiVersion(unreleasedApiResourceLocation, "2.2-preview", "2.2-preview");
    testAutoNegotiateApiVersion(unreleasedApiResourceLocation, "2.2-preview.2", "2.2-preview.2");
    testAutoNegotiateApiVersion(unreleasedApiResourceLocation, "2.2-preview.3", "2.2-preview.3");
    testAutoNegotiateApiVersion(unreleasedApiResourceLocation, "2.2-preview.4", "2.2-preview.3");
    testAutoNegotiateApiVersion(unreleasedApiResourceLocation, "2.3-preview.2", "2.2-preview.3");
    testAutoNegotiateApiVersion(unreleasedApiResourceLocation, "3.0", "2.2-preview.3");
    testAutoNegotiateApiVersion(unreleasedApiResourceLocation, "3.0-preview", "2.2-preview.3");

    testAutoNegotiateApiVersion(releasedApiResourceLocation, "", "2.2-preview.3");
    testAutoNegotiateApiVersion(releasedApiResourceLocation, "1", "1"); // doesn't exist at 1.0
    testAutoNegotiateApiVersion(releasedApiResourceLocation, "1.0", "1.0"); // doesn't exist at 1.0
    testAutoNegotiateApiVersion(releasedApiResourceLocation, "2", "2");
    testAutoNegotiateApiVersion(releasedApiResourceLocation, "2.0", "2.0");
    testAutoNegotiateApiVersion(releasedApiResourceLocation, "2.1", "2.1");
    testAutoNegotiateApiVersion(releasedApiResourceLocation, "2.1-preview", "2.1-preview");
    testAutoNegotiateApiVersion(releasedApiResourceLocation, "2.1-preview.3", "2.1-preview.3");
    testAutoNegotiateApiVersion(releasedApiResourceLocation, "2.2", "2.2-preview.3");
    testAutoNegotiateApiVersion(releasedApiResourceLocation, "2.2-preview", "2.2-preview");
    testAutoNegotiateApiVersion(releasedApiResourceLocation, "2.2-preview.2", "2.2-preview.2");
    testAutoNegotiateApiVersion(releasedApiResourceLocation, "2.2-preview.3", "2.2-preview.3");
    testAutoNegotiateApiVersion(releasedApiResourceLocation, "2.2-preview.4", "2.2-preview.3");
    testAutoNegotiateApiVersion(releasedApiResourceLocation, "2.3-preview.3", "2.2-preview.3");
    testAutoNegotiateApiVersion(releasedApiResourceLocation, "3.0", "2.2-preview.3");
    testAutoNegotiateApiVersion(releasedApiResourceLocation, "3.0-preview.3", "2.2-preview.3");

    testAutoNegotiateApiVersion(releasedApiResourceLocationForRegExTest, "249", "249");
    testAutoNegotiateApiVersion(releasedApiResourceLocationForRegExTest, "249.123", "249.123");
    testAutoNegotiateApiVersion(releasedApiResourceLocationForRegExTest, "249.124", "249.124-preview"); 
    testAutoNegotiateApiVersion(releasedApiResourceLocationForRegExTest, "251.268", "251.267-preview.3029"); 
    testAutoNegotiateApiVersion(releasedApiResourceLocationForRegExTest, "251.267-preview.3028", "251.267-preview.3028");
}

function assertAreEqual(actual, expected, message): void {
    test(actual === expected, message);
}

function test(condition: boolean, message: string): void {
    if (condition) {
        console.log("\x1b[32m%s\x1b[0m", message);
    }
    else {
        console.log("\x1b[31m%s\x1b[0m", message);
    }
}