import * as common from './common';
import * as nodeApi from 'azure-devops-node-api';

import * as ProfileApi from 'azure-devops-node-api/ProfileApi';
import * as ProfileInterfaces from 'azure-devops-node-api/interfaces/ProfileInterfaces';

export async function run(projectId: string) {
    const webApi: nodeApi.WebApi = await common.getWebApi();
    const profileApiObject: ProfileApi.IProfileApi = await webApi.getProfileApi();
    common.banner('Profile Samples');

    common.heading('Create a profile');
    const createProfileContext: ProfileInterfaces.CreateProfileContext = {cIData: null,
                                                                          contactWithOffers: false,
                                                                          countryName: 'US',
                                                                          displayName: null,
                                                                          emailAddress: 'sample@microsoft.com',
                                                                          hasAccount: false,
                                                                          language: 'english',
                                                                          phoneNumber: '123456890'};
    let profile: ProfileInterfaces.Profile = await profileApiObject.createProfile(createProfileContext, false);
    console.log('Profile created for', profile.coreAttributes.DisplayName.value);

    common.heading('Update the profile');
    const email = profile.coreAttributes.UnconfirmedEmailAddress.value;
    profile.coreAttributes.UnconfirmedEmailAddress.value = 'Changed@microsoft.com';
    await profileApiObject.updateProfile(profile, profile.id);
    profile = await profileApiObject.getProfile(profile.id, true, true);
    console.log('Profile now has email', profile.coreAttributes.UnconfirmedEmailAddress.value);
    console.log('Reverting name');
    profile.coreAttributes.UnconfirmedEmailAddress.value = email;
    await profileApiObject.updateProfile(profile, profile.id);
    console.log('Profile email reverted to', profile.coreAttributes.UnconfirmedEmailAddress.value);

    common.heading('Get the avatar');
    const avatar: ProfileInterfaces.Avatar = await profileApiObject.getAvatar(profile.id);
    console.log("Avatar value:", avatar.value);

    common.heading('Get region information');
    const regions: ProfileInterfaces.ProfileRegions = await profileApiObject.getRegions();
    console.log(`There are ${regions.regions.length} regions found including regions like ${regions.regions[0].name}`);
}