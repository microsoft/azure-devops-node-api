// A sample showing how to list VSTS build artifacts, and how to download a zip of a VSTS build artifact.
import * as cm from "./common";
import * as vm from "azure-devops-node-api";
import * as fs from "fs";

import * as ba from "azure-devops-node-api/BuildApi";
import * as bi from "azure-devops-node-api/interfaces/BuildInterfaces";

export async function run() {
    try
    {
        const vsts: vm.WebApi = await cm.getWebApi();
        const vstsBuild: ba.IBuildApi = await vsts.getBuildApi();

        cm.banner("Build Artifact Samples");
        const project = cm.getProject();
        console.log("project", project);

        // get the latest successful build.
        cm.heading(`Get latest successful build for ${project} project`);
        const builds: bi.Build[] = await vstsBuild.getBuilds(
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
                        null,                       // properties: string[]
                        //bi.DefinitionType.Build,
                        1                           // top: number
                        );

        if (builds.length > 0) {
            const latestBuild: bi.Build = builds[0];
            console.log(`build ${latestBuild.id}`);

            // Retrieve the list of artifacts for the latest build.
            cm.heading(`Artifacts for build ${latestBuild.id}, ${project} project`);
            const artifacts: bi.BuildArtifact[] = await vstsBuild.getArtifacts(project, latestBuild.id);

            let downloadableArtifact;
            for (const artifact of artifacts) {
                let additionalInfo = "";
                if (artifact.resource.type === "FilePath") {
                    additionalInfo = `UNC Path: ${artifact.resource.data}`;
                }
                else if (artifact.resource.type === "Container") {
                    // As of June 2018, only `Container` artifacts can be downloaded as a zip.
                    additionalInfo = `Downloadable: true.`;
                    downloadableArtifact = artifact;
                }
                console.log(`Artifact: '${artifact.name}'. Type: ${artifact.resource.type}. Id: ${artifact.id}. ${additionalInfo}`);
            }

            // Download an artifact.
            if (downloadableArtifact) {
                cm.heading(`Download zip of artifact '${downloadableArtifact.name}' for build ${latestBuild.id}, ${project} project`);
                const artifactStream: NodeJS.ReadableStream = await vstsBuild.getArtifactContentZip(project, latestBuild.id, downloadableArtifact.name);

                const path = `${downloadableArtifact.name}.zip`;

                const fileStream = fs.createWriteStream(path);
                artifactStream.pipe(fileStream);

                fileStream.on("close", () => {
                    console.log(`Artifact '${downloadableArtifact.name}' downloaded to ${path}`);
                });
            }
            else {
                console.log("No downloadable artifact found.");
            }
        }
        else {
            console.log("No successful builds found.");
        }
    }
    catch (err) {
        console.error(`Error: ${err.stack}`);
    }
}
