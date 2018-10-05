import * as common from './common';
import * as nodeApi from 'azure-devops-node-api';

import * as DashboardApi from 'azure-devops-node-api/DashboardApi';
import * as CoreApi from 'azure-devops-node-api/CoreApi';
import * as DashboardInterfaces from 'azure-devops-node-api/interfaces/DashboardInterfaces';
import * as CoreInterfaces from 'azure-devops-node-api/interfaces/CoreInterfaces';

export async function run(projectId: string) {
    const webApi: nodeApi.WebApi = await common.getWebApi();
    const dashboardApiObject: DashboardApi.IDashboardApi = await webApi.getDashboardApi();
    const coreApiObject: CoreApi.CoreApi = await webApi.getCoreApi();
    const project: CoreInterfaces.TeamProject = await coreApiObject.getProject(projectId);

    common.banner('Dashboard Samples');

    common.heading('Create a Dashboard');
    const teamContext: CoreInterfaces.TeamContext = {project: project.name,
                                                     projectId: project.id,
                                                     team: project.defaultTeam.name,
                                                     teamId: project.defaultTeam.id};
    const createDashboardContext: DashboardInterfaces.Dashboard = {_links: null,
                                                                  description: 'fancy new dashboard',
                                                                  eTag: '',
                                                                  id: null,
                                                                  name: 'dash',
                                                                  ownerId: null,
                                                                  position: null,
                                                                  refreshInterval: 1,
                                                                  url: null,
                                                                  widgets: []};
    let dashboard: DashboardInterfaces.Dashboard = await dashboardApiObject.createDashboard(createDashboardContext, teamContext);
    //Ensure its been created and we can get it.
    dashboard = await dashboardApiObject.getDashboard(teamContext, dashboard.id);
    console.log('Created dashboard', dashboard.name);

    common.heading('Create a widget');
    let widget: DashboardInterfaces.Widget = {_links: null,
                                              allowedSizes: null,
                                              artifactId: null,
                                              configurationContributionId: null,
                                              configurationContributionRelativeId: null,
                                              contentUri: null,
                                              contributionId: 'ms.vss-dashboards-web.Microsoft.VisualStudioOnline.Dashboards.OtherLinksWidget',
                                              dashboard: dashboard,
                                              eTag: null,
                                              id: null,
                                              isEnabled: null,
                                              isNameConfigurable: null,
                                              lightboxOptions: null,
                                              loadingImageUrl: null,
                                              name: 'widge',
                                              position: {row: 1, column: 1},
                                              settings: null,
                                              settingsVersion: {major: 1, minor: 0, patch: 0},
                                              size: {rowSpan: 1, columnSpan: 2},
                                              typeId: null,
                                              url: null
                                              };
    const widgetMetadata: DashboardInterfaces.WidgetMetadataResponse = await dashboardApiObject.getWidgetMetadata('ms.vss-dashboards-web.Microsoft.VisualStudioOnline.Dashboards.OtherLinksWidget');
    console.log('Creating widget with metadata:', widgetMetadata);
    widget = await dashboardApiObject.createWidget(widget, teamContext, dashboard.id);
    //Ensure its been created and we can get it.
    widget = await dashboardApiObject.getWidget(teamContext, dashboard.id, widget.id);
    console.log('Created widget', widget.name);

    common.heading('Update a widget');
    widget.name = 'new name';
    widget = await dashboardApiObject.updateWidget(widget, teamContext, dashboard.id, widget.id);
    //Ensure its been updated and we can get it.
    widget = await dashboardApiObject.getWidget(teamContext, dashboard.id, widget.id);
    console.log('Widget name updated to', widget.name);

    common.heading('Get Widget data');
    const widgetTypes: DashboardInterfaces.WidgetTypesResponse = await dashboardApiObject.getWidgetTypes(DashboardInterfaces.WidgetScope.Project_Team);
    console.log('First widget type:', widgetTypes.widgetTypes[0]);

    common.heading('Delete a widget');
    await dashboardApiObject.deleteWidget(teamContext, dashboard.id, widget.id);
    widget = await dashboardApiObject.getWidget(teamContext, dashboard.id, widget.id);
    console.log('Widget deleted, trying to get it returns:', widget);

    common.heading('Delete dashboard');
    //Can't delete last dashboard for a team, will create a new one so we can delete the old one.
    createDashboardContext.description = 'this dashboard should survive';
    createDashboardContext.name = 'tempDash';
    await dashboardApiObject.createDashboard(createDashboardContext, teamContext);
    //Will delete old dashboard
    await dashboardApiObject.deleteDashboard(teamContext, dashboard.id);
    dashboard = await dashboardApiObject.getDashboard(teamContext, dashboard.id);
    console.log('Dashboard deleted, trying to get it returns:', dashboard);
}