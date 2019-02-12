import * as common from './common';
import * as nodeApi from 'azure-devops-node-api';

import * as ReleaseApi from 'azure-devops-node-api/ReleaseApi';
import * as ReleaseInterfaces from 'azure-devops-node-api/interfaces/ReleaseInterfaces';

export async function run() {
    const projectId: string = common.getProject();
    const webApi: nodeApi.WebApi = await common.getWebApi();
    const releaseApiObject: ReleaseApi.IReleaseApi = await webApi.getReleaseApi();
    
    common.banner('Release Samples');

    common.heading('Get releases');
    const releases: ReleaseInterfaces.Release[] = await releaseApiObject.getReleases(projectId);
    console.log('There are', releases.length, 'releases for this project');

    if(releases.length > 0) {
        const release = releases[0];
        console.log('Info for release', release.name);
        console.log('Logs for this release:', releaseApiObject.getLogs(projectId, release.id));
        const workItemRefs: ReleaseInterfaces.ReleaseWorkItemRef[] = await releaseApiObject.getReleaseWorkItemsRefs(projectId, release.id);
        console.log('There are', workItemRefs.length, 'work items associated with this release');
        if (workItemRefs.length > 0) {
            console.log('Example work item', workItemRefs[0]);
        }
    }
    else {
        console.log('Must have at least 1 release to do samples with releases');
    }

    common.heading('Get metadata');
    console.log('Release settings:', await releaseApiObject.getReleaseSettings(projectId));
    console.log('Tags:', await releaseApiObject.getTags(projectId));

    common.heading('Get Approval information');
    const approvals: ReleaseInterfaces.ReleaseApproval[] = await releaseApiObject.getApprovals(projectId);
    console.log('There are', approvals.length, 'approvals for this project');
    if (approvals.length > 0) {
        console.log('Sample approval:', approvals[0]);
    }
}