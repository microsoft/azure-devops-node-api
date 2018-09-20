import * as common from './common';
import * as nodeApi from 'azure-devops-node-api';

import * as GitApi from 'azure-devops-node-api/GitApi';
import * as GitInterfaces from 'azure-devops-node-api/interfaces/GitInterfaces';

export async function run() {
    let webApi: nodeApi.WebApi = await common.getWebApi();
    let gitApiObject: GitApi.IGitApi = await webApi.getGitApi();

    common.banner('Git Samples');
    let project: string = common.getProject();
    console.log('Project:', project);

    common.heading("Get Repositories");
    const repos: GitInterfaces.GitRepository[] = await gitApiObject.getRepositories(project);
    console.log("There are", repos.length, "repositories in this project");

    common.heading("Create a repository");
    const createOptions: GitInterfaces.GitRepositoryCreateOptions = <GitInterfaces.GitRepositoryCreateOptions>{name: 'new repo'};
    let newRepo: GitInterfaces.GitRepository = await gitApiObject.createRepository(createOptions, project);
    console.log("New repo:", newRepo.name);

    common.heading("Delete repository");
    await gitApiObject.deleteRepository(newRepo.id);
    console.log("Repo deleted");

    common.heading("Get commits for a repository");
    if (repos.length > 0) {
        const firstRepo = repos[0]
        console.log("The first repository in this project is named", firstRepo.name);
        const commitCriteria: GitInterfaces.GitQueryCommitsCriteria = <GitInterfaces.GitQueryCommitsCriteria> {$skip: 0, $top: 10};
        const commits: GitInterfaces.GitCommitRef[] =  await gitApiObject.getCommits(firstRepo.id, commitCriteria, project);
        const commitNames: string[] = commits.map((commit) => {return commit.comment});
        console.log("Top 10 commits in this repo:", commitNames);
    }
    else {
        console.log("Must have an active repository for this part of the sample");
    }

    common.heading("Get pull requests for a repository");
    if (repos.length > 0) {
        const firstRepo = repos[0]
        const pullRequestCriteria: GitInterfaces.GitPullRequestSearchCriteria = <GitInterfaces.GitPullRequestSearchCriteria>{};
        const pullRequests = await gitApiObject.getPullRequests(firstRepo.id, pullRequestCriteria);
        const pullRequestTitles = pullRequests.map((request) => {return request.title});
        console.log("Pull requests on this repo:", pullRequestTitles);

        common.heading("Create comment on a pull request");
        let threads: GitInterfaces.GitPullRequestCommentThread[] = [];
        if (pullRequests.length > 0) {
            threads = await gitApiObject.getThreads(firstRepo.id, pullRequests[0].pullRequestId);
        }
        if (pullRequests.length > 0 && threads.length > 0) {
            let comment: GitInterfaces.Comment = <GitInterfaces.Comment>{content: 'Hello comment'};
            comment = await gitApiObject.createComment(comment, firstRepo.id, pullRequests[0].pullRequestId, threads[0].id);
            console.log("Comment created:", comment.content);
            common.heading("Delete a comment on a pull request");
            await gitApiObject.deleteComment(firstRepo.id, pullRequests[0].pullRequestId, threads[0].id, comment.id);
            console.log("Comment deleted");
        }
        else {
            console.log("Must have an active pull request in repo with an active comment thread", firstRepo.name, "for this part of the sample");
        }
    }
    else {
        console.log("Must have an active repository for this part of the sample");
    }
}