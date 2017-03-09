import * as Q from 'q';
import * as fs from 'fs';
import * as path from 'path';

import * as cm from './common';
import * as vm from 'vso-node-api';

import * as ta from 'vso-node-api/TaskAgentApi';
import * as ti from 'vso-node-api/interfaces/TaskAgentInterfaces';

let vsts: vm.WebApi = cm.getWebApi();
let vstsTask: ta.ITaskAgentApi = vsts.getTaskAgentApi();

let sampleFilePath: string = path.join(process.cwd(), 'taskdefinition.zip');

export async function run() {
    try
    {
        cm.banner('Task Samples');

        // list tasks
        cm.heading('Task Definitions');
        let tasks: ti.TaskDefinition[] = await vstsTask.getTaskDefinitions();
        console.log(`You have ${tasks.length} task definition(s)`);

        // download a task
        if (tasks.length > 0) {
            let taskDefinition = tasks[0];
            let file: NodeJS.WritableStream = fs.createWriteStream(sampleFilePath);
            let stream = (await vstsTask.getTaskContentZip(taskDefinition.id, `${taskDefinition.version.major}.${taskDefinition.version.minor}.${taskDefinition.version.patch}`)).pipe(file);
            let promise = Q.defer();
            stream.on('finish', () => {
                promise.resolve();
            });
            await promise;
            console.log(`Downloaded task ${taskDefinition.name}`);
        }
    }
    catch (err) {
        console.error('Error: ' + err.stack);
    }

}
