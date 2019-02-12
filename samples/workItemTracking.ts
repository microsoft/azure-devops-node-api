import * as common from './common';
import * as nodeApi from 'azure-devops-node-api';

import * as WorkItemTrackingApi from 'azure-devops-node-api/WorkItemTrackingApi';
import * as CoreApi from 'azure-devops-node-api/CoreApi';
import * as WorkItemTrackingInterfaces from 'azure-devops-node-api/interfaces/WorkItemTrackingInterfaces';
import * as CoreInterfaces from 'azure-devops-node-api/interfaces/CoreInterfaces';

export async function run() {
    const projectId: string = common.getProject();
    const webApi: nodeApi.WebApi = await common.getWebApi();
    const witApi: WorkItemTrackingApi.IWorkItemTrackingApi = await webApi.getWorkItemTrackingApi();
    const coreApiObject: CoreApi.CoreApi = await webApi.getCoreApi();
    const project: CoreInterfaces.TeamProject = await coreApiObject.getProject(projectId);
    const teamContext: CoreInterfaces.TeamContext = {project: project.name,
                                                     projectId: project.id,
                                                     team: project.defaultTeam.name,
                                                     teamId: project.defaultTeam.id};

    common.banner('Work Item Tracking Samples');

    common.heading('Overview of recent activity');
    console.log('Work data in progress', await witApi.getAccountMyWorkData(WorkItemTrackingInterfaces.QueryOption.Doing));
    console.log('Recent Activity:', await witApi.getRecentActivityData());
    console.log('Recent Mentions:', await witApi.getRecentMentions());

    common.heading('Get work item info');
    const queries: WorkItemTrackingInterfaces.QueryHierarchyItem[] = await witApi.getQueries(project.id);
    console.log('There are', queries.length, 'queries');
    if (queries.length > 0) {
        console.log('Sample query:', queries[0]);
    }
    const areaNode: WorkItemTrackingInterfaces.WorkItemClassificationNode = await witApi.getClassificationNode(project.id, WorkItemTrackingInterfaces.TreeStructureGroup.Areas);
    console.log('Area classification node:', areaNode);
    const fields: WorkItemTrackingInterfaces.WorkItemField[] = await witApi.getFields(project.id);
    console.log('There are', fields.length, 'fields');
    console.log('Example field');

    common.heading('Create Template');
    const templateToCreate: WorkItemTrackingInterfaces.WorkItemTemplate = {fields: {},
                                                                 description: 'a template',
                                                                 id: null,
                                                                 name: 'myTemplate',
                                                                 workItemTypeName: 'Bug',
                                                                 _links: null,
                                                                 url: null};
    const returnedTemplate: WorkItemTrackingInterfaces.WorkItemTemplate = await witApi.createTemplate(templateToCreate, teamContext);
    console.log('Created template', returnedTemplate);

    common.heading('Get templates');
    console.log('There are', (await witApi.getTemplates(teamContext)).length, 'templates in this project')

    common.heading('Delete Template');
    await witApi.deleteTemplate(teamContext, returnedTemplate.id);
    try {
        if (await witApi.getTemplate(teamContext, returnedTemplate.id)) {
            console.log('ERROR template was found after deletion');
        }
    }
    catch (err) {
        console.log('Template could no longer be found, was successfully deleted');
    }

    common.heading('Get work item info');
    const workItemTypes: WorkItemTrackingInterfaces.WorkItemType[] = await witApi.getWorkItemTypes(project.id);
    console.log('Work item types:', workItemTypes.map((item) => item.name));
    if (workItemTypes.length > 0) {
        const type: WorkItemTrackingInterfaces.WorkItemType = workItemTypes[0];
        common.heading('Info for type' + type.name);
        console.log(type.name, 'has', (await witApi.getWorkItemTypeFields(project.id, type.name)).length, 'fields');
    }
}