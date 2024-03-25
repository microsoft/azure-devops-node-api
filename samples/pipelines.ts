import * as common from './common';
import * as nodeApi from 'azure-devops-node-api';

import * as PipelinesApi from 'azure-devops-node-api/PipelinesApi';
import * as PipelinesInterfaces from 'azure-devops-node-api/interfaces/PipelinesInterfaces';

export async function run() {
  const projectId: string = common.getProject();
      const webApi: nodeApi.WebApi = await common.getWebApi();
      const pipelineApi: PipelinesApi.IPipelinesApi = await webApi.getPipelinesApi();
  
      common.banner(`Pipelines Samples`)
      common.heading("List Pipelines");

      const pipelinesList: PipelinesInterfaces.Pipeline[] = await pipelineApi.listPipelines(projectId);
      console.log(pipelinesList)

}  