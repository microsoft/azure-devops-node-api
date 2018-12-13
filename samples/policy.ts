import * as common from "./common";
import * as nodeApi from "azure-devops-node-api";

import * as PolicyApi from "azure-devops-node-api/PolicyApi";
import * as PolicyInterfaces from "azure-devops-node-api/interfaces/PolicyInterfaces";
import * as VSSInterfaces from "azure-devops-node-api/interfaces/common/VSSInterfaces";

export async function run(projectId: string) {
    const webApi: nodeApi.WebApi = await common.getWebApi();
    const policyApiObject: PolicyApi.IPolicyApi = await webApi.getPolicyApi();

    common.banner("Policy Samples");

    common.heading("Create Policy Configuration for this Project");
    const newConfiguration: PolicyInterfaces.PolicyConfiguration = {isEnabled: true,
                                                                    isBlocking: false,
                                                                    type: {
                                                                        id: "fa4e907d-c16b-4a4c-9dfa-4906e5d171dd",
                                                                        displayName: undefined,
                                                                        url: undefined
                                                                      },
                                                                    settings: {
                                                                        minimumApproverCount: 1,
                                                                        creatorVoteCounts: false,
                                                                        scope: [{
                                                                            repositoryId: null,
                                                                            refName: "refs/heads/master",
                                                                            matchKind: "exact"
                                                                        }]},
                                                                    _links: undefined,
                                                                    createdBy: undefined,
                                                                    createdDate: undefined,
                                                                    isDeleted: undefined,
                                                                    revision: undefined,
                                                                    id: undefined,
                                                                    url: undefined
                                                                    };
    await policyApiObject.createPolicyConfiguration(newConfiguration, projectId);

    common.heading("Get Policy Configurations for this Project");
    const configurations: PolicyInterfaces.PolicyConfiguration[] = await policyApiObject.getPolicyConfigurations(projectId);
    const firstConfig: PolicyInterfaces.PolicyConfiguration = configurations[0];
    const creatorIdentity: VSSInterfaces.IdentityRef = firstConfig.createdBy;
    console.log("Configuration created by", creatorIdentity.displayName);

    common.heading("Get revisions for this configuration");
    const revisions: PolicyInterfaces.PolicyConfiguration[] = await policyApiObject.getPolicyConfigurationRevisions(projectId, firstConfig.id);
    console.log("Revisions:", revisions);

    common.heading("Get Policy Types for this Project");
    const policies: PolicyInterfaces.PolicyType[] = await policyApiObject.getPolicyTypes(projectId);
    console.log("Policy Types:", policies);

    common.heading("Delete Policy Configuration");
    await policyApiObject.deletePolicyConfiguration(projectId, firstConfig.id);
    const deletedConfiguration: PolicyInterfaces.PolicyConfiguration = await policyApiObject.getPolicyConfiguration(projectId, firstConfig.id);
    if (deletedConfiguration.isDeleted) {
        console.log("Policy configuration successfully deleted");
    }
    else {
        console.log("Unable to delete policy");
    }
}