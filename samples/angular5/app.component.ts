import { Component, OnInit } from '@angular/core';
import * as vstsApi from 'vso-node-api'
import * as gitApiProvider from 'vso-node-api/GitApi';
import * as coreApiProvider from 'vso-node-api/CoreApi'
import * as WebApiProvider from 'vso-node-api/WebApi'
import { TeamProjectReference, TeamProject, TeamProjectCollection, TeamProjectCollectionReference } from 'vso-node-api/interfaces/CoreInterfaces';
import { GitRepository } from 'vso-node-api/interfaces/TfvcInterfaces';
import { GitPullRequestSearchCriteria, PullRequestStatus, GitPullRequest } from 'vso-node-api/interfaces/GitInterfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  //Apis
  apiProvider: WebApiProvider.WebApi
  coreApi: coreApiProvider.CoreApi;
  gitApi: gitApiProvider.GitApi;

  //Component vars
  projects: TeamProjectReference[] = [];

  //UI selectors
  selectedProjectId: string;
  selectedRepoId: string;
  selectedProjectRepositories: GitRepository[] = [];

  //Pull request info 
  selectedRepoPullRequests: GitPullRequest[] = [];
  pullRequestReporter: PullRequestReporter;

  constructor() {
  }

  async ngOnInit() {

    const collectionUrl = "https://fabrikam.visualstudio.com/defaultcollection";
    const personalAccessToken = "cbdeb34vzyuk5l4gxc4qfczn3lko3avfkfqyb47etahq6axpcqha";

    // Get the personal access token string and craft the basic header with PAT
    const authHandler = vstsApi.getPersonalAccessTokenHandler(personalAccessToken);
    this.apiProvider = new vstsApi.WebApi(collectionUrl, authHandler);

    // This is how you instantiate different vso Apis 
    this.coreApi = await this.apiProvider.getCoreApi();
    this.gitApi = await this.apiProvider.getGitApi();

    this.loadAllProjects();
  }

  //Loads all project in the collection Url provider above
  async loadAllProjects() {
    this.projects = await this.coreApi.getProjects(null, 99999, 0);

    if (this.projects && this.projects.length > 0) {

      //sort by project name
      this.projects.sort((a, b) => {
        return a.name > b.name ? 1 : -1;
      });

      // Update UI to select the first project from the projects list
      this.selectedProjectId = this.projects[0].id;
      this.onProjectSelected();
    }
  }

  // The projects dropdown selection change handler 
  async onProjectSelected() {
    // Load all repositories associated with the selected project
    this.selectedProjectRepositories = await this.gitApi.getRepositories(this.selectedProjectId, true, true, true);

    if (this.selectedProjectRepositories && this.selectedProjectRepositories.length > 0) {

      //sort by repo name
      this.selectedProjectRepositories.sort((a, b) => {
        return a.name > b.name ? 1 : -1;
      });

      // Update UI to select the first repo from the project's repos list
      this.selectedRepoId = this.selectedProjectRepositories[0].id;
      this.onRepoSelected();
    }
  }

  async onRepoSelected() {
    const searchCriteria = <GitPullRequestSearchCriteria>
      {
        status: PullRequestStatus.All
      };

    this.selectedRepoPullRequests = await this.gitApi.getPullRequests(this.selectedRepoId, searchCriteria, null, 99999, 0, 99999);

    this.pullRequestReporter = new PullRequestReporter(this.selectedRepoPullRequests);
  }
}

export class PullRequestReporter {

  private _allPullRequests: GitPullRequest[] = [];
  private _abandonedPullRequests: GitPullRequest[] = [];
  private _activePullRequests: GitPullRequest[] = [];
  private _completedPullRequests: GitPullRequest[] = [];

  constructor(pullRequests: GitPullRequest[]) {
    if (pullRequests && pullRequests.length > 0) {
      this._allPullRequests = pullRequests;
      this._completedPullRequests = pullRequests.filter(p => p.status === PullRequestStatus.Completed);
      this._abandonedPullRequests = pullRequests.filter(p => p.status === PullRequestStatus.Abandoned);
      this._activePullRequests = pullRequests.filter(p => p.status === PullRequestStatus.Active);
    }
  }

  get AllPullRequest(): GitPullRequest[] {
    return this._allPullRequests;
  }

  get AbandonedPullRequests(): GitPullRequest[] {
    return this._abandonedPullRequests;
  }

  get CompletedPullRequests(): GitPullRequest[] {
    return this._completedPullRequests;
  }

  get ActivePullRequests(): GitPullRequest[] {
    return this._activePullRequests;
  }

  /**
   * Returns average time for completing one Pull request in hours
   */
  get AverageCompletionTime(): number {
    if (this._completedPullRequests.length === 0) {
      return 0;
    }

    let allTime = 0;
    this._completedPullRequests.forEach(p => {
      allTime += (p.closedDate.getTime() - p.creationDate.getTime());
    });

    const averageInHours = allTime / this._completedPullRequests.length / (1000 * 60 * 60);
    
    return Math.ceil(averageInHours);
  }
}
