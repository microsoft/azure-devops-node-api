import * as common from './common';
import * as fs from 'fs';
import * as path from 'path';
import * as stream from 'stream';
import * as vsoNodeApi from 'vso-node-api';

import { Build, Timeline } from 'vso-node-api/interfaces/BuildInterfaces';
import { Collection } from 'vso-node-api/interfaces/OrganizationInterfaces';
import { Consumer } from 'vso-node-api/interfaces/ServiceHooksInterfaces';
import { ContributedFeature } from 'vso-node-api/interfaces/FeatureManagementInterfaces';
import { FileContainer } from 'vso-node-api/interfaces/FileContainerInterfaces';
import { GitRepository, TfvcChangesetRef } from 'vso-node-api/interfaces/TfvcInterfaces';
import { Identity, IdentitySelf } from 'vso-node-api/interfaces/IdentitiesInterfaces';
import { InstalledExtension } from 'vso-node-api/interfaces/ContributionsInterfaces';
import { Plan } from 'vso-node-api/interfaces/WorkInterfaces';
import { PolicyType } from 'vso-node-api/interfaces/PolicyInterfaces';
import { ProfileRegions } from 'vso-node-api/interfaces/ProfileInterfaces';
import { ProjectLanguageAnalytics } from 'vso-node-api/interfaces/ProjectAnalysisInterfaces';
import { Registration as TokenRegistration } from 'vso-node-api/interfaces/TokenInterfaces';
import { Release } from 'vso-node-api/interfaces/ReleaseInterfaces';
import { ResourceAreaInfo } from 'vso-node-api/interfaces/LocationsInterfaces';
import { RequestedExtension } from 'vso-node-api/interfaces/ExtensionManagementInterfaces';
import { Room } from 'vso-node-api/interfaces/ChatInterfaces';
import { SecurityRole } from 'vso-node-api/interfaces/SecurityRolesInterfaces';
import { ServiceHooksApi } from 'vso-node-api/ServiceHooksApi';
import { TaskAgentPool } from 'vso-node-api/interfaces/TaskAgentInterfaces';
import { TestPlan } from 'vso-node-api/interfaces/TestInterfaces';
import { Timeline as TaskAgentTimeline } from "vso-node-api/interfaces/TaskAgentInterfaces";
import { WebApiTeam } from 'vso-node-api/interfaces/CoreInterfaces';
import { WidgetScope, WidgetTypesResponse } from 'vso-node-api/interfaces/DashboardInterfaces';
import { WorkItemField } from 'vso-node-api/interfaces/WorkItemTrackingInterfaces';
import { ProcessModel } from 'vso-node-api/interfaces/WorkItemTrackingProcessInterfaces';
import { WorkItemTypeModel } from 'vso-node-api/interfaces/WorkItemTrackingProcessDefinitionsInterfaces';

// In order for this to run you will need to set the following environment variables:
// 
// API_URL
// API_TOKEN
// API_PROJECT
// 
// For more information, see:
// https://github.com/Microsoft/vsts-node-api
export async function run() {
    try
    {
        let vsts: vsoNodeApi.WebApi = await common.getWebApi();

        /********** Build **********/
        printSectionStart('Build');
        const buildApi = await vsts.getBuildApi();
        const builds: Build[] = await buildApi.getBuilds(common.getProject());

        if (builds) {
            console.log(`found ${builds.length} builds`);
        }

        /********** Core **********/
        printSectionStart('Core');
        const coreApi = await vsts.getCoreApi();
        const teams: WebApiTeam[] = await coreApi.getAllTeams();

        if (teams) {
            console.log(`found ${teams.length} teams`);
        }

        /********** Dashboard **********/
        printSectionStart('Dashboard');
        const dashboardApi = await vsts.getDashboardApi();
        const widgetTypes: WidgetTypesResponse = await dashboardApi.getWidgetTypes(WidgetScope.Collection_User);

        if (widgetTypes) {
            console.log(`found ${widgetTypes.widgetTypes.length} widget types`);
        }

        /********** Extension Management **********/
        printSectionStart('Extension Management');
        const extensionManagementApi = await vsts.getExtensionManagementApi();
        const requests:RequestedExtension[] = await extensionManagementApi.getRequests();

        if (requests) {
            console.log(`found ${requests.length} requests`);
        }

        /********** Feature Management **********/
        printSectionStart('Feature Management');
        const featureManagementApi = await vsts.getFeatureManagementApi();
        const features: ContributedFeature[] = await featureManagementApi.getFeatures();

        if (features) {
            console.log(`found ${features.length} features`);
        }

        /********** File Container **********/
        printSectionStart('File Container');
        const fileContainerApi = await vsts.getFileContainerApi();
        const containers: FileContainer[] = await fileContainerApi.getContainers();

        if (containers) {
            console.log(`found ${containers.length} containers`);
        }

        /********** Git **********/
        printSectionStart('Git');
        const gitApi = await vsts.getGitApi();
        const respositories: GitRepository[] = await gitApi.getRepositories();

        if (respositories) {
            console.log(`found ${respositories.length} respositories`);
        }

        /********** Locations **********/
        printSectionStart('Locations');
        const locationsApi = await vsts.getLocationsApi();
        const resourceAreas: ResourceAreaInfo[] = await locationsApi.getResourceAreas();

        if (resourceAreas) {
            console.log(`found ${resourceAreas.length} resource areas`);
        }

        /********** Notifications **********/
        printSectionStart('Notifications');
        const notificationsApi = await vsts.getNotificationApi();
        const subscriptions = await notificationsApi.listSubscriptions();

        if (subscriptions) {
            console.log(`found ${subscriptions.length} subscriptions`);
        }

        /********** Policy **********/
        printSectionStart('Policy');
        const policyApi = await vsts.getPolicyApi();
        const policyTypes: PolicyType[] = await policyApi.getPolicyTypes(common.getProject());

        if (policyTypes) {
            console.log(`found ${policyTypes.length} policy types`);
        }

        /********** Profile **********/
        printSectionStart('Profile');
        const profileApi = await vsts.getProfileApi();
        const regions: ProfileRegions = await profileApi.getRegions();

        if (regions && regions.regions) {
            console.log(`found ${regions.regions.length} regions`);
        }

        /********** Project Analysis **********/
        printSectionStart('Project Analysis');
        const projectAnalysisApi = await vsts.getProjectAnalysisApi();
        const languageAnalytics: ProjectLanguageAnalytics = await projectAnalysisApi.getProjectLanguageAnalytics(common.getProject());

        if (languageAnalytics) {
            console.log(`language analytics id ${languageAnalytics.id}`);
        }

        /********** Release **********/
        printSectionStart('Release');
        const releaseApi = await vsts.getReleaseApi();
        const releases: Release[] = await releaseApi.getReleases();

        if (releases) {
            console.log(`found ${releases.length} releases`);
        }

        /********** Security **********/
        printSectionStart('Security');
        const securityApi = await vsts.getSecurityRolesApi();
        const roleDefinitions: SecurityRole[] = await securityApi.getRoleDefinitions("");

        if (roleDefinitions) {
            console.log(`found ${roleDefinitions.length} role definitions`);
        }

        /********** Task **********/
        printSectionStart('Task');
        const taskApi = await vsts.getTaskApi();
        const timelines: TaskAgentTimeline[] = await taskApi.getTimelines("", "", "");

        if (timelines) {
            console.log(`found ${timelines.length} timelines`);
        }

        /********** Task Agent **********/
        printSectionStart('Task Agent');
        const taskAgentApi = await vsts.getTaskAgentApi();
        const agentPools: TaskAgentPool[] = await taskAgentApi.getAgentPools();

        if (agentPools) {
            console.log(`found ${agentPools.length} agent pools`);
        }

        /********** Test **********/
        printSectionStart('Test');
        const testApi = await vsts.getTestApi();
        const plans: TestPlan[] = await testApi.getPlans(common.getProject());

        if (plans) {
            console.log(`found ${plans.length} plans`);
        }

        /********** Tfvc **********/
        printSectionStart('Tfvc');
        const tfvcApi = await vsts.getTfvcApi();
        const changesets: TfvcChangesetRef[] = await tfvcApi.getChangesets();

        if (changesets) {
            console.log(`found ${changesets.length} changesets`);
        }

        /********** Work **********/
        printSectionStart('Work');
        const workApi = await vsts.getWorkApi();
        const workPlans: Plan[] = await workApi.getPlans(common.getProject());

        if (workPlans) {
            console.log(`found ${workPlans.length} work plans`);
        }

        /********** Work Item Tracking **********/
        printSectionStart('Work Item Tracking');
        const workItemTrackingApi = await vsts.getWorkItemTrackingApi();
        const workItemFields: WorkItemField[] = await workItemTrackingApi.getFields();

        if (workItemFields) {
            console.log(`found ${workItemFields.length} work item fields`);
        }
        
        /********** Work Item Tracking Process **********/
        printSectionStart('Work Item Tracking Process');
        const workItemTrackingProcessApi = vsts.getWorkItemTrackingProcessApi();
        const processes: ProcessModel[] = await workItemTrackingProcessApi.getWorkItemTypes();

        if (processes) {
            console.log(`found ${processes.length} processes`);
        }

        /********** Work Item Tracking Process Definitions **********/
        printSectionStart('Work Item Tracking Process Definitions');
        const workItemTrackingProcessDefinitionApi = vsts.getWorkItemTrackingProcessDefinitionApi();
        const workItemTypes: WorkItemTypeModel[] = await workItemTrackingProcessDefinitionApi.getWorkItemTypes();

        if (workItemTypes) {
            console.log(`found ${workItemTypes.length} work items`);
        }
    }
    catch (err) {
        console.error('Error: ' + err.stack);
    }

}

function printSectionStart(sectionName: string) {
    console.log(`********** ${sectionName} **********`);
}
