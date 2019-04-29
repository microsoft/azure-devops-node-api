import * as common from "./common";
import * as nodeApi from "azure-devops-node-api";

import * as ProfileApi from "azure-devops-node-api/ProfileApi";
import * as ProfileInterfaces from "azure-devops-node-api/interfaces/ProfileInterfaces";

export async function run(projectId: string) {
    let serverUrl = process.env["API_URL"];
    // Profile api can't be hit at the org level, has to be hit at the deployment level, so url should be structured like set API_URL=https://vssps.dev.azure.com/{orgName}
    serverUrl = serverUrl.replace('://dev.azure.com', '://vssps.dev.azure.com');
    console.log('serverUrl', serverUrl);
    const webApi: nodeApi.WebApi = await common.getWebApi(serverUrl);
    const profileApiObject: ProfileApi.IProfileApi = await webApi.getProfileApi();
    common.banner("Profile Samples");

    common.heading("Create a profile");
    const createProfileContext: ProfileInterfaces.CreateProfileContext = {cIData: null,
                                                                          contactWithOffers: false,
                                                                          countryName: "US",
                                                                          displayName: "displayedName",
                                                                          emailAddress: "sample@microsoft.com",
                                                                          hasAccount: false,
                                                                          language: "english",
                                                                          phoneNumber: "123456890"};
    let profile: ProfileInterfaces.Profile = await profileApiObject.createProfile(createProfileContext, false);
    console.log("Profile created for", profile.coreAttributes.DisplayName.value);
}
