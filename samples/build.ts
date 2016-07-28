import * as cm from './common';
import * as vm from 'vso-node-api';

import * as ba from 'vso-node-api/BuildApi';
import * as bi from 'vso-node-api/interfaces/BuildInterfaces';

let vsts: vm.WebApi = cm.getWebApi();
let vstsBuild: ba.IBuildApi = vsts.getBuildApi();

async function buildSample() {
    try
    {
        cm.banner('Build Samples');
        let project = cm.getProject();

        // list definitions
        cm.heading('Build Definitions for ' + project);
        let defs: bi.DefinitionReference[] = await vstsBuild.getDefinitions(project);
        
        console.log('You have ' + defs.length + ' build definition(s)');
        defs.forEach((defRef: bi.DefinitionReference) => {
            console.log(defRef.name + ' (' + defRef.id + ')');
        });

        // get top 25 successfully completed builds since 2016
        cm.heading('top 25 successfully completed builds for ' + project + 'project');
        let builds: bi.Build[] = await vstsBuild.getBuilds(
                        project, 
                        null,                       // definitions: number[] 
                        null,                       // queues: number[]
                        null,                       // buildNumber
                        null, //new Date(2016, 1, 1),       // minFinishTime
                        null,                       // maxFinishTime
                        null,                       // requestedFor: string
                        bi.BuildReason.All,         // reason
                        bi.BuildStatus.Completed,
                        bi.BuildResult.Succeeded,
                        null,                       // tagFilters: string[]
                        null,                        // properties: string[]
                        //bi.DefinitionType.Build,
                        25                          // top: number
                        );
        
        
        console.log(builds.length + ' builds returned');
        builds.forEach((build: bi.Build) => {
            console.log(build.buildNumber, bi.BuildResult[build.result], 'on', build.finishTime.toDateString());
        });
    }
    catch (err) {
        console.error('Error: ' + err.message);
    }

}

export function run() {
    buildSample();
}


