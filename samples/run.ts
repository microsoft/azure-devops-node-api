
// do first just to ensure variables set
// export API_URL=https://buildcanary.visualstudio.com/DefaultCollection
// export export API_TOKEN=<yourAllScopesApiToken>
// export API_PROJECT=test
import * as cm from './common';
import * as nodeApi from 'azure-devops-node-api';
import * as coreApi from 'azure-devops-node-api/CoreApi';
import * as coreInterfaces from 'azure-devops-node-api/interfaces/CoreInterfaces'

let samples: string[] = require('./samples.json');

let selection: string = process.argv[2];
if (selection) {
    if (samples.indexOf(selection) == -1) {
        console.error('Not a valid sample.  See list of samples');
        process.exit(1);
    }

    samples = [selection];
}

async function createProject(projectId: string, coreApiObject: coreApi.ICoreApi) : Promise<void> {
    console.log('Cleaning up from last run');
    await destroyProject(projectId, coreApiObject);

    const projectToCreate: coreInterfaces.TeamProject = {name: projectId,
                                                         description: 'sample project created automatically by azure-devops-node-api.',
                                                         visibility: 1,
                                                         capabilities: {versioncontrol: {sourceControlType: 'Git'}, 
                                                                        processTemplate: {templateTypeId: '6b724908-ef14-45cf-84f8-768b5384da45'}},
                                                         _links: null,
                                                         defaultTeam: null,
                                                         abbreviation: null,
                                                         id: null,
                                                         revision: null,
                                                         state: null,
                                                         url: null};
    await coreApiObject.queueCreateProject(projectToCreate);

    //Poll until project exists
    let projIfExists: coreInterfaces.TeamProject = null;
    console.log('Waiting for project to spin up');
    while (!projIfExists) {
        projIfExists = await coreApiObject.getProject(projectId);
    }
}

async function destroyProject(projectId: string, coreApiObject: coreApi.ICoreApi){
    let projIfExists: coreInterfaces.TeamProject = await coreApiObject.getProject(projectId);
    if (!projIfExists) {
        //If no project to clean up, just return
        return;
    }
    let abc = coreApiObject.queueDeleteProject(projIfExists.id);
    abc.catch((err) => console.log(err));

    //Poll until project no longer exists
    console.log('Waiting for project to be deleted');
    while (projIfExists) {
        projIfExists = await coreApiObject.getProject(projectId);
    }
}

async function runSamples(selected?: string) {
    const webApi: nodeApi.WebApi = await cm.getWebApi();
    const coreApiObject: coreApi.ICoreApi = await webApi.getCoreApi();
    const projectId: string = 'azureDevopsNodeSampleProject';

    cm.heading('Creating example project');
    await createProject(projectId, coreApiObject);
    console.log('Project created');
    
    for (let i: number = 0; i < samples.length; i++) {
        let sample: string = samples[i];

        if (selected && sample !== selected) {
            continue;
        }

        cm.banner('Sample ' + sample);
        var sm = require('./' + sample + '.js');
        await sm.run();
    }

    cm.heading('Cleaning up project');
    await destroyProject(projectId, coreApiObject);
    console.log('Done');
}

function run() {
    runSamples();
}

runSamples(process.argv[2]);



