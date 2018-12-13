import * as common from "./common";
import * as nodeApi from "azure-devops-node-api";

import * as CoreApi from "azure-devops-node-api/CoreApi"
import * as CoreInterfaces from "azure-devops-node-api/interfaces/CoreInterfaces"
import * as WikiApi from "azure-devops-node-api/WikiApi";
import * as WikiInterfaces from "azure-devops-node-api/interfaces/WikiInterfaces";

export async function run() { 
    const webApi: nodeApi.WebApi = await common.getWebApi();
    const wikiApiObject: WikiApi.IWikiApi = await webApi.getWikiApi();
    const coreApiObject: CoreApi.ICoreApi = await webApi.getCoreApi();

    common.banner("Wiki Samples");
    const project = common.getProject();
    const projectObject: CoreInterfaces.TeamProject = await coreApiObject.getProject(project);
    console.log("Project:", project);

    common.heading("Get all wikis");
    const wikis: WikiInterfaces.WikiV2[] = await wikiApiObject.getAllWikis(project);
    console.log("Wikis", wikis.map((wiki) => wiki.name));

    let wikiId: string;
    const createNewWiki = (wikis.length === 0);
    if (createNewWiki) {
        common.heading("Create a wiki");
        const wikiParams: WikiInterfaces.WikiCreateParametersV2 = <WikiInterfaces.WikiCreateParametersV2>{name: "Hello Wiki", projectId: projectObject.id};
        const newWiki = await wikiApiObject.createWiki(wikiParams, project);
        console.log("Wiki created:", newWiki.name);
        wikiId = newWiki.id;
    } else {
        wikiId = wikis[0].id;
    }

    common.heading("Get the text from a wiki");
    const pageText: NodeJS.ReadableStream = await wikiApiObject.getPageText(project, wikiId)
    console.log("Wiki text", pageText.read().toString());

    if (createNewWiki) {
        common.heading("Delete the created wiki");
        const deletedWiki: WikiInterfaces.WikiV2 = await wikiApiObject.deleteWiki(wikiId, project);
        console.log("Wiki", deletedWiki.name, "deleted");
    }
}