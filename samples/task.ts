import * as Q from 'q';
import * as fs from 'fs';
import * as path from 'path';
import * as stream from 'stream';

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
        let project = cm.getProject();
        console.log('project', project);

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

        // upload a secure file
        let s = new stream.Readable();
        s._read = function noop() {};
        s.push("test file contents");
        s.push(null);
        let name = `vstsnodeapitest${new Date().getTime()}`;
        console.log('uploading file');
        let secureFile = await vstsTask.uploadSecureFile(null, s, project, name);
        console.log(`uploaded secure file ${secureFile.name}`);

        // delete it
        await vstsTask.deleteSecureFile(project, secureFile.id);
        console.log(`deleted secure file ${secureFile.name}`);
    }
    catch (err) {
        console.error('Error: ' + err.stack);
    }

}
