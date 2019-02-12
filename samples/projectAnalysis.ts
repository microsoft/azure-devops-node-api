import * as common from './common';
import * as nodeApi from 'azure-devops-node-api';

import * as CoreApi from 'azure-devops-node-api/CoreApi';
import * as GitApi from 'azure-devops-node-api/GitApi';
import * as ProjectAnalysisApi from 'azure-devops-node-api/ProjectAnalysisApi';
import * as CoreInterfaces from 'azure-devops-node-api/interfaces/CoreInterfaces';
import * as GitInterfaces from 'azure-devops-node-api/interfaces/GitInterfaces';
import * as ProjectAnalysisInterfaces from 'azure-devops-node-api/interfaces/ProjectAnalysisInterfaces';

export async function run() {
    const webApi: nodeApi.WebApi = await common.getWebApi();
    const projectName: string = common.getProject();
    const coreApiObject: CoreApi.CoreApi = await webApi.getCoreApi();
    const project: CoreInterfaces.TeamProject = await coreApiObject.getProject(projectName);
    const projectAnalysisApiObject: ProjectAnalysisApi.IProjectAnalysisApi = await webApi.getProjectAnalysisApi();
    const gitApiObject: GitApi.IGitApi = await webApi.getGitApi();

    common.banner('Project Analytics Samples');

    common.heading('Get Language Analytics');
    console.log(await projectAnalysisApiObject.getProjectLanguageAnalytics(project.id));

    const startDate: Date = new Date();
    common.heading('Get Activity Metrics since the start of 2018');
    console.log(await projectAnalysisApiObject.getProjectActivityMetrics(project.id, startDate, ProjectAnalysisInterfaces.AggregationType.Daily));

    common.heading('Get Git Repositories Activity Metrics since the start of 2018');
    console.log(await projectAnalysisApiObject.getGitRepositoriesActivityMetrics(project.id, startDate, ProjectAnalysisInterfaces.AggregationType.Daily, 0, 10));

    common.heading('Get Repository Activity Metrics since the start of 2018 for a single repo');
    const repos: GitInterfaces.GitRepository[] = await gitApiObject.getRepositories(projectName);
    if(repos.length > 0) {
        console.log(await projectAnalysisApiObject.getRepositoryActivityMetrics(project.id, repos[0].id, startDate, ProjectAnalysisInterfaces.AggregationType.Daily));
    }
    else {
        console.log('No repos to analyze');
    }
}