import * as cm from './common';
import * as vm from 'vso-node-api';

import * as ba from 'vso-node-api/BuildApi';
import * as bi from 'vso-node-api/interfaces/BuildInterfaces';

let vsts: vm.WebApi = cm.getWebApi();
let vstsBuild: ba.IBuildApi = vsts.getBuildApi();

export async function run() {
    try
    {
        cm.banner('Build Samples');
        let project = cm.getProject();
        console.log('project', project);

        // list definitions
        cm.heading('Build Definitions for ' + project);
        let defs: bi.DefinitionReference[] = await vstsBuild.getDefinitions(project);
        
        console.log('You have ' + defs.length + ' build definition(s)');

        // save off last def to create a new definition below
        let lastDef: bi.BuildDefinition;
        for (let i: number = 0; i < defs.length; i++) {
            let defRef: bi.DefinitionReference = defs[i];

            let def: bi.BuildDefinition = await vstsBuild.getDefinition(defRef.id, project);
            lastDef = def;
            let rep: bi.BuildRepository = def.repository;

            console.log(defRef.name + ' (' + defRef.id + ') ' + 'repo ' + rep.type);
        }

        // get top 10 successfully completed builds since 2016
        cm.heading('top 10 successfully completed builds for ' + project + 'project');
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
                        10                          // top: number
                        );
        
        console.log(builds.length + ' builds returned');
        builds.forEach((build: bi.Build) => {
            console.log(build.buildNumber, bi.BuildResult[build.result], 'on', build.finishTime.toDateString());
        });

        // new definition
        if (lastDef && lastDef.build) {
            cm.heading('creating a new definition');
            let newDef: bi.BuildDefinition = <bi.BuildDefinition>{};
            
            let newName: string = "api copy of " + lastDef.name;
            console.log("name", newName);
            newDef.name = newName;

            console.log("repo", lastDef.repository.name);
            newDef.repository = lastDef.repository;

            let steps: bi.BuildDefinitionStep[] = [];
            lastDef.build.forEach((step: bi.BuildDefinitionStep) => {
                console.log("adding step", step.displayName);
                steps.push(step);
            });
            newDef.build = steps;
            
            newDef.comment = "copy of definition from sample";
            newDef.buildNumberFormat = lastDef.buildNumberFormat;
            
            console.log("project", project);
            newDef.project = lastDef.project;

            console.log("queue", lastDef.queue.name);
            newDef.queue = lastDef.queue;

            console.log("type", lastDef.type);
            newDef.type = lastDef.type;

            console.log("creating");
            let createdDef: bi.BuildDefinition = await vstsBuild.createDefinition(newDef, project);
            console.log("created", createdDef.name);

            console.log("reading history");
            let history = await vstsBuild.getDefinitionRevisions(project, createdDef.id);
            console.log(`last updated ${history[0].changedDate}`);

            // delete def
            console.log("deleting", createdDef.name);
            await vstsBuild.deleteDefinition(createdDef.id, project);
            console.log("deleted");
        }
    }
    catch (err) {
        console.error('Error: ' + err.stack);
    }

}
