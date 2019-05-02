import * as cm from "./common";
import * as vm from "azure-devops-node-api";

import * as ba from "azure-devops-node-api/BuildApi";
import * as bi from "azure-devops-node-api/interfaces/BuildInterfaces";

export async function run() {
    try
    {
        let vsts: vm.WebApi = await cm.getWebApi();
        let vstsBuild: ba.IBuildApi = await vsts.getBuildApi();

        cm.banner("Build Samples");
        let project = cm.getProject();
        console.log("project", project);

        // list definitions
        cm.heading(`Build Definitions for ${project}`);
        let defs: bi.DefinitionReference[] = await vstsBuild.getDefinitions(project);
        
        console.log(`You have ${defs.length} build definition(s)`);

        // save off last def to create a new definition below
        let lastDef: bi.BuildDefinition;
        for (let i: number = 0; i < defs.length; i++) {
            let defRef: bi.DefinitionReference = defs[i];

            let def: bi.BuildDefinition = await vstsBuild.getDefinition(project, defRef.id);
            lastDef = def;
            let rep: bi.BuildRepository = def.repository;

            console.log(`${defRef.name} (${defRef.id}) repo ${rep.type}`);
        }

        // get top 10 successfully completed builds since 2016
        cm.heading(`top 10 successfully completed builds for ${project}project`);
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
        
        console.log(`${builds.length} builds returned`);
        builds.forEach((build: bi.Build) => {
            console.log(build.buildNumber, bi.BuildResult[build.result], "on", build.finishTime.toDateString());
        });

        // new definition
        if (lastDef && lastDef.process && lastDef.process.type === 1 /* Designer */) {
            let process = lastDef.process as bi.DesignerProcess;
            if (process.phases && process.phases.length > 0) {
                let phase = process.phases[0];
                cm.heading("creating a new definition");
                let newDef: bi.BuildDefinition = <bi.BuildDefinition>{};
                
                let newName = `api copy of ${lastDef.name}`;
                console.log("name", newName);
                newDef.name = newName;

                console.log("repo", lastDef.repository.name);
                newDef.repository = lastDef.repository;

                newDef.comment = "copy of definition from sample";
                newDef.buildNumberFormat = lastDef.buildNumberFormat;
                
                console.log("project", project);
                newDef.project = lastDef.project;

                console.log("queue", lastDef.queue.name);
                newDef.queue = lastDef.queue;

                console.log("type", lastDef.type);
                newDef.type = lastDef.type;

                console.log("process", lastDef.process);
                newDef.process = lastDef.process;

                console.log("creating");                
                let createdDef: bi.BuildDefinition = await vstsBuild.createDefinition(newDef, project);
                console.log("created", createdDef.name);

                console.log("reading history");
                let history = await vstsBuild.getDefinitionRevisions(project, createdDef.id);
                console.log(`last updated ${history[0].changedDate}`);

                let document = [
                    {
                        op: "replace",
                        path: "/key1",
                        value: "/value1"
                    },
                    {
                        op: "replace",
                        path: "/key2",
                        value: "/value2"
                    }
                ];

                console.log("setting properties");
                let updatedProperties = await vstsBuild.updateDefinitionProperties(null, document, project, createdDef.id);
                console.log(`properties for definition ${createdDef.name}:`);
                for (let key in updatedProperties.value) {
                    console.log(`${key} = ${updatedProperties.value[key].$value}`);
                }

                // delete def
                console.log("deleting", createdDef.name);
                await vstsBuild.deleteDefinition(project, createdDef.id);
                console.log("deleted");
            }
        }
    }
    catch (err) {
        console.error(`Error: ${err.stack}`);
    }

}
