import * as common from './common';
import * as nodeApi from 'azure-devops-node-api';

import * as WorkApi from 'azure-devops-node-api/WorkApi';
import * as CoreApi from 'azure-devops-node-api/CoreApi';
import * as WorkInterfaces from 'azure-devops-node-api/interfaces/WorkInterfaces';
import * as CoreInterfaces from 'azure-devops-node-api/interfaces/CoreInterfaces';

export async function run() {
    const projectId: string = common.getProject();
    const webApi: nodeApi.WebApi = await common.getWebApi();
    const workApiObject: WorkApi.IWorkApi = await webApi.getWorkApi();
    const coreApiObject: CoreApi.CoreApi = await webApi.getCoreApi();
    const project: CoreInterfaces.TeamProject = await coreApiObject.getProject(projectId);
    const teamContext: CoreInterfaces.TeamContext = {project: project.name,
                                                     projectId: project.id,
                                                     team: project.defaultTeam.name,
                                                     teamId: project.defaultTeam.id};
    
    common.banner('Work Samples');

    common.heading('Get Backlog info');
    console.log('Backlog configuration', await workApiObject.getBacklogConfigurations(teamContext));

    common.heading('Board info');
    const boards: WorkInterfaces.BoardReference[] = await workApiObject.getBoards(teamContext);
    console.log('This project has', boards.length, 'boards');
    if (boards.length > 0) {
        const board: WorkInterfaces.BoardReference = boards[0];
        common.heading('Info for board: ' + board.name);
        console.log('Board user settings:', await workApiObject.getBoardUserSettings(teamContext, board.id));
        console.log('Board card settings:', await workApiObject.getBoardCardSettings(teamContext, board.id));
        const rows: WorkInterfaces.BoardRow[] = await workApiObject.getBoardRows(teamContext, board.id);
        console.log('Board has', rows.length, 'rows');
        if (rows.length > 0) {
            console.log('Sample row from board:', rows[0]);
        }
    }
    else {
        console.log('Must have at least 1 board to do samples with boards');
    }

    common.heading('Iteration info');
    const iterations: WorkInterfaces.TeamSettingsIteration[] = await workApiObject.getTeamIterations(teamContext);
    console.log('Project has', iterations.length, 'iterations');
    if(iterations.length > 0) {
        const iteration: WorkInterfaces.TeamSettingsIteration = iterations[0];
        common.heading('Info for iteration: ' + iteration.name);
        console.log('Days off during iteration', await workApiObject.getTeamDaysOff(teamContext, iteration.id));
        
    }
    else {
        console.log('Must have at least 1 iteration to do samples with iterations');
    }
}