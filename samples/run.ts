
// do first just to ensure variables set
// export API_URL=https://buildcanary.visualstudio.com/DefaultCollection
// export export API_TOKEN=<yourAllScopesApiToken>
// export API_PROJECT=test
import * as cm from "./common";
import * as nodeApi from "azure-devops-node-api";
import * as cApi from "azure-devops-node-api/CoreApi";
import * as coreInterfaces from "azure-devops-node-api/interfaces/CoreInterfaces"

let samples: string[] = require("./samples.json");
let coreApi: cApi.ICoreApi;
const maxLoops: number = 500;

let selection: string = process.argv[2];
if (selection) {
    if (samples.indexOf(selection) == -1) {
        console.error("Not a valid sample.  See list of samples");
        process.exit(1);
    }

    samples = [selection];
}

async function createProject(projectId: string): Promise<boolean> {
    console.log("Cleaning up from last run");
    if (!(await deleteProject(projectId))) {
        console.log("Failed to delete previous project");
        return false;
    }

    const projectToCreate: coreInterfaces.TeamProject = {name: projectId,
                                                         description: "sample project created automatically by azure-devops-node-api.",
                                                         visibility: coreInterfaces.ProjectVisibility.Private,
                                                         capabilities: {versioncontrol: {sourceControlType: "Git"}, 
                                                                        processTemplate: {templateTypeId: "6b724908-ef14-45cf-84f8-768b5384da45"}},
                                                         _links: null,
                                                         defaultTeam: null,
                                                         abbreviation: null,
                                                         id: null,
                                                         revision: null,
                                                         state: null,
                                                         url: null};
    await coreApi.queueCreateProject(projectToCreate);

    //Poll until project exists
    let project: coreInterfaces.TeamProject = null;
    console.log("Waiting for project to spin up");
    let numLoops = 0;
    while (numLoops < maxLoops) {
        project = await coreApi.getProject(projectId);
        numLoops += 1;
        if (project) {
            return true;
        }
    }
    return false;
}

async function deleteProject(projectId: string): Promise<boolean> {
    let project: coreInterfaces.TeamProject = await coreApi.getProject(projectId);
    if (!project) {
        //If no project to clean up, just return
        console.log("Nothing to clean up");
        return true;
    }
    await coreApi.queueDeleteProject(project.id);

    //Poll until project no longer exists
    console.log("Waiting for project to be deleted");
    let numLoops = 0;
    while (project && numLoops < maxLoops) {
        project = await coreApi.getProject(projectId);
        numLoops += 1;
        if (!project) {
            return true;
        }
    }
    return false;
}

async function runSamples(selected?: string) {
    const webApi: nodeApi.WebApi = await cm.getWebApi();
    coreApi = await webApi.getCoreApi();
    const projectId: string = "azureDevopsNodeSampleProject";

    cm.heading("Creating example project");
    if (await createProject(projectId)) {
        console.log("Project created");
    }
    else {
        console.log("Failed to create project, exiting");
        return;
    }
    
    for (let i: number = 0; i < samples.length; i++) {
        let sample: string = samples[i];

        if (selected && sample !== selected) {
            continue;
        }

        cm.banner(`Sample ${sample}`);
        var sm = require(`./${sample}.js`);
        await sm.run(projectId);
    }

    cm.heading("Cleaning up project");
    if (await deleteProject(projectId)) {
        console.log("Done");
    }
    else {
        console.log("Failed to delete project");
    }
}

function run() {
    runSamples();
}

runSamples(process.argv[2]);



