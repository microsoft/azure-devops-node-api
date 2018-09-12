import * as common from './common';
import * as nodeApi from 'azure-devops-node-api';

import * as CoreApi from 'azure-devops-node-api/CoreApi'
import * as CoreInterfaces from 'azure-devops-node-api/interfaces/CoreInterfaces'
import * as WikiApi from 'azure-devops-node-api/WikiApi';
import * as WikiInterfaces from 'azure-devops-node-api/interfaces/WikiInterfaces';

export async function run() { 
    let webApi: nodeApi.WebApi = await common.getWebApi();
    let wikiApiObject: WikiApi.IWikiApi = await webApi.getWikiApi();
    let coreApiObject: CoreApi.ICoreApi = await webApi.getCoreApi();

    common.banner('Wiki Samples');
    let project: string = common.getProject();
    let projectObject: CoreInterfaces.TeamProject = await coreApiObject.getProject(project);
    console.log('Project:', project);

    common.heading('Get all wikis');
    const wikis: WikiInterfaces.WikiV2[] = await wikiApiObject.getAllWikis(project);
    console.log("Wikis", wikis.map((wiki) => wiki.name));

    let wikiId: string;
    if (wikis.length > 0) {
        wikiId = wikis[0].id;
    }
    else {
        common.heading("Create a wiki");
        const wikiParams: WikiInterfaces.WikiCreateParametersV2 = <WikiInterfaces.WikiCreateParametersV2>{name: "Hello Wiki", projectId: projectObject.id};
        const newWiki = await wikiApiObject.createWiki(wikiParams, project);
        console.log("Wiki created:", newWiki.name);
        wikiId = newWiki.id;
    }

    common.heading("Get the text from a wiki");
    const textStream: NodeJS.ReadableStream = await wikiApiObject.getPageText(project, wikiId)
    console.log("Wiki text", textStream.read().toString());

    if (wikis.length == 0) {
        common.heading("Delete the created wiki");
        await wikiApiObject.deleteWiki(wikiId, project);
        console.log("Wiki deleted");
    }
}