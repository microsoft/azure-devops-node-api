import * as common from './common';
import * as nodeApi from 'azure-devops-node-api';

import * as BuildApi from 'azure-devops-node-api/BuildApi';
import * as CoreApi from 'azure-devops-node-api/CoreApi';
import * as TestResultsApi from 'azure-devops-node-api/TestResultsApi';
import * as BuildInterfaces from 'azure-devops-node-api/interfaces/BuildInterfaces';
import * as CoreInterfaces from 'azure-devops-node-api/interfaces/CoreInterfaces';
import * as TestInterfaces from 'azure-devops-node-api/interfaces/TestInterfaces';

export async function run(createdProjectId: string) {
    const projectId: string = common.getProject();
    const webApi: nodeApi.WebApi = await common.getWebApi();
    const testResultsApiObject: TestResultsApi.ITestResultsApi = await webApi.getTestResultsApi();
    const coreApiObject: CoreApi.CoreApi = await webApi.getCoreApi();
    const project: CoreInterfaces.TeamProject = await coreApiObject.getProject(projectId);
    
    common.banner('Testing Samples');

    common.heading('Get test suite runs');
    const runs: TestInterfaces.TestRun[] = await testResultsApiObject.getTestRuns(projectId);
    console.log('Current Runs:', runs);

    common.heading('Get code coverage');
    const buildApiObject: BuildApi.IBuildApi = await webApi.getBuildApi();
    const defs: BuildInterfaces.DefinitionReference[] = await buildApiObject.getDefinitions(projectId);
    console.log('Code coverage for build' + defs[0].id + ':', await testResultsApiObject.getCodeCoverageSummary(projectId, defs[0].id));
}