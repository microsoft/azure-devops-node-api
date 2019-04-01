import * as common from "./common";
import * as vsoNodeApi from "azure-devops-node-api";

import { Build } from "azure-devops-node-api/interfaces/BuildInterfaces";
import { ContributedFeature } from "azure-devops-node-api/interfaces/FeatureManagementInterfaces";
import { FileContainer } from "azure-devops-node-api/interfaces/FileContainerInterfaces";
import { GitRepository, TfvcChangesetRef } from "azure-devops-node-api/interfaces/TfvcInterfaces";
import { Plan } from "azure-devops-node-api/interfaces/WorkInterfaces";
import { PolicyType } from "azure-devops-node-api/interfaces/PolicyInterfaces";
import { ProfileRegions } from "azure-devops-node-api/interfaces/ProfileInterfaces";
import { ProjectLanguageAnalytics } from "azure-devops-node-api/interfaces/ProjectAnalysisInterfaces";
import { Release } from "azure-devops-node-api/interfaces/ReleaseInterfaces";
import { ResourceAreaInfo } from "azure-devops-node-api/interfaces/LocationsInterfaces";
import { RequestedExtension } from "azure-devops-node-api/interfaces/ExtensionManagementInterfaces";
import { SecurityRole } from "azure-devops-node-api/interfaces/SecurityRolesInterfaces";
import { TaskAgentPool } from "azure-devops-node-api/interfaces/TaskAgentInterfaces";
import { TestRun } from "azure-devops-node-api/interfaces/TestInterfaces";
import { Timeline as TaskAgentTimeline } from "azure-devops-node-api/interfaces/TaskAgentInterfaces";
import { WebApiTeam } from "azure-devops-node-api/interfaces/CoreInterfaces";
import { WidgetScope, WidgetTypesResponse } from "azure-devops-node-api/interfaces/DashboardInterfaces";
import { WorkItemField } from "azure-devops-node-api/interfaces/WorkItemTrackingInterfaces";
import { ProcessModel } from "azure-devops-node-api/interfaces/WorkItemTrackingProcessInterfaces";
import { PickListMetadataModel } from "azure-devops-node-api/interfaces/WorkItemTrackingProcessDefinitionsInterfaces";
import { WikiV2 } from "azure-devops-node-api/interfaces/WikiInterfaces";

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
        const vstsCollectionLevel: vsoNodeApi.WebApi = await common.getWebApi();
        
        /********** Build **********/
        printSectionStart("Build");
        const buildApi = await vstsCollectionLevel.getBuildApi();
        const builds: Build[] = await buildApi.getBuilds(common.getProject());

        if (builds) {
            console.log(`found ${builds.length} builds`);
        }

        /********** Core **********/
        printSectionStart("Core");
        const coreApi = await vstsCollectionLevel.getCoreApi();
        const teams: WebApiTeam[] = await coreApi.getAllTeams();

        if (teams) {
            console.log(`found ${teams.length} teams`);
        }

        /********** Dashboard **********/
        printSectionStart("Dashboard");
        const dashboardApi = await vstsCollectionLevel.getDashboardApi();
        const widgetTypes: WidgetTypesResponse = await dashboardApi.getWidgetTypes(WidgetScope.Collection_User);

        if (widgetTypes) {
            console.log(`found ${widgetTypes.widgetTypes.length} widget types`);
        }

        /********** Extension Management **********/
        printSectionStart("Extension Management");
        const extensionManagementApi = await vstsCollectionLevel.getExtensionManagementApi();
        const requests:RequestedExtension[] = await extensionManagementApi.getRequests();

        if (requests) {
            console.log(`found ${requests.length} requests`);
        }

        /********** Feature Management **********/
        printSectionStart("Feature Management");
        const featureManagementApi = await vstsCollectionLevel.getFeatureManagementApi();
        const features: ContributedFeature[] = await featureManagementApi.getFeatures();

        if (features) {
            console.log(`found ${features.length} features`);
        }

        /********** File Container **********/
        printSectionStart("File Container");
        const fileContainerApi = await vstsCollectionLevel.getFileContainerApi();
        const containers: FileContainer[] = await fileContainerApi.getContainers();

        if (containers) {
            console.log(`found ${containers.length} containers`);
        }

        /********** Gallery **********/
        printSectionStart('Gallery - Deployment Level');
        const galleryApi = await vstsCollectionLevel.getGalleryApi();
        const categories: string[] = await galleryApi.getCategories();

        if (categories) {
            console.log(`found ${categories.length} categories`);
        }

        /********** Git **********/
        printSectionStart("Git");
        const gitApi = await vstsCollectionLevel.getGitApi();
        const respositories: GitRepository[] = await gitApi.getRepositories();

        if (respositories) {
            console.log(`found ${respositories.length} respositories`);
        }

        /********** Locations **********/
        printSectionStart("Locations");
        const locationsApi = await vstsCollectionLevel.getLocationsApi();
        const resourceAreas: ResourceAreaInfo[] = await locationsApi.getResourceAreas();

        if (resourceAreas) {
            console.log(`found ${resourceAreas.length} resource areas`);
        }

        /********** Notifications **********/
        printSectionStart("Notifications");
        const notificationsApi = await vstsCollectionLevel.getNotificationApi();
        const subscriptions = await notificationsApi.listSubscriptions();

        if (subscriptions) {
            console.log(`found ${subscriptions.length} subscriptions`);
        }

        /********** Policy **********/
        printSectionStart("Policy");
        const policyApi = await vstsCollectionLevel.getPolicyApi();
        const policyTypes: PolicyType[] = await policyApi.getPolicyTypes(common.getProject());

        if (policyTypes) {
            console.log(`found ${policyTypes.length} policy types`);
        }

        /********** Profile **********/
        printSectionStart("Profile");
        const profileApi = await vstsCollectionLevel.getProfileApi();
        const regions: ProfileRegions = await profileApi.getRegions();

        if (regions && regions.regions) {
            console.log(`found ${regions.regions.length} regions`);
        }

        /********** Project Analysis **********/
        printSectionStart("Project Analysis");
        const projectAnalysisApi = await vstsCollectionLevel.getProjectAnalysisApi();
        const languageAnalytics: ProjectLanguageAnalytics = await projectAnalysisApi.getProjectLanguageAnalytics(common.getProject());

        if (languageAnalytics) {
            console.log(`language analytics id ${languageAnalytics.id}`);
        }

        /********** Release **********/
        printSectionStart("Release");
        const releaseApi = await vstsCollectionLevel.getReleaseApi();
        const releases: Release[] = await releaseApi.getReleases();

        if (releases) {
            console.log(`found ${releases.length} releases`);
        }

        /********** Security **********/
        printSectionStart("Security");
        const securityApi = await vstsCollectionLevel.getSecurityRolesApi();
        const roleDefinitions: SecurityRole[] = await securityApi.getRoleDefinitions("");

        if (roleDefinitions) {
            console.log(`found ${roleDefinitions.length} role definitions`);
        } else {
            console.log("role definitions is null");
        }

        /********** Task **********/
        printSectionStart("Task");
        const taskApi = await vstsCollectionLevel.getTaskApi();
        const timelines: TaskAgentTimeline[] = await taskApi.getTimelines("", "", "");

        if (timelines) {
            console.log(`found ${timelines.length} timelines`);
        } else {
            console.log("timelines is null");
        }

        /********** Task Agent **********/
        printSectionStart("Task Agent");
        const taskAgentApi = await vstsCollectionLevel.getTaskAgentApi();
        const agentPools: TaskAgentPool[] = await taskAgentApi.getAgentPools();

        if (agentPools) {
            console.log(`found ${agentPools.length} agent pools`);
        }

        /********** Test **********/
        printSectionStart("Test");
        const testApi = await vstsCollectionLevel.getTestApi();
        const runs: TestRun[] = await testApi.getTestRuns(common.getProject());

        if (runs) {
            console.log(`found ${runs.length} test runs`);
        }

        /********** Tfvc **********/
        printSectionStart("Tfvc");
        const tfvcApi = await vstsCollectionLevel.getTfvcApi();
        const changesets: TfvcChangesetRef[] = await tfvcApi.getChangesets();

        if (changesets) {
            console.log(`found ${changesets.length} changesets`);
        }

        /********** Wiki **********/
        printSectionStart("Wiki");
        const wikiApi = await vstsCollectionLevel.getWikiApi();
        const wikis: WikiV2[] = await wikiApi.getAllWikis();

        if (wikis) {
            console.log(`found ${wikis.length} wikis`);
        }

        /********** Work **********/
        printSectionStart("Work");
        const workApi = await vstsCollectionLevel.getWorkApi();
        const workPlans: Plan[] = await workApi.getPlans(common.getProject());

        if (workPlans) {
            console.log(`found ${workPlans.length} work plans`);
        } else {
            console.log("work plans is null");
        }

        /********** Work Item Tracking **********/
        printSectionStart("Work Item Tracking");
        const workItemTrackingApi = await vstsCollectionLevel.getWorkItemTrackingApi();
        const workItemFields: WorkItemField[] = await workItemTrackingApi.getFields();

        if (workItemFields) {
            console.log(`found ${workItemFields.length} work item fields`);
        }
        
        /********** Work Item Tracking Process **********/
        printSectionStart("Work Item Tracking Process");
        const workItemTrackingProcessApi = await vstsCollectionLevel.getWorkItemTrackingProcessApi();
        const processes: ProcessModel[] = await workItemTrackingProcessApi.getListOfProcesses();

        if (processes) {
            console.log(`found ${processes.length} processes`);
        }

        /********** Work Item Tracking Process Definitions **********/
        printSectionStart("Work Item Tracking Process Definitions");
        const workItemTrackingProcessDefinitionApi = await vstsCollectionLevel.getWorkItemTrackingProcessDefinitionApi();
        const listsMetadata: PickListMetadataModel[] = await workItemTrackingProcessDefinitionApi.getListsMetadata();

        if (listsMetadata) {
            console.log(`found ${listsMetadata.length} work items`);
        }
    }
    catch (err) {
        console.error(`Error: ${err.stack}`);
    }

}

function printSectionStart(sectionName: string) {
    console.log(`********** ${sectionName} **********`);
}
