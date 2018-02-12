import * as fs from 'fs';
import * as path from 'path';
import * as stream from 'stream';

import * as cm from './common';
import * as vm from 'vso-node-api';

import * as ta from 'vso-node-api/FileContainerApi';
import * as ti from 'vso-node-api/interfaces/FileContainerInterfaces';

export async function run() {
    try
    {
        let vsts: vm.WebApi = await cm.getWebApi();
        let fileContainerApi = await vsts.getFileContainerApi();

        let containers = await fileContainerApi.getContainers(null, null);
        if (containers.length > 0) {
            let container = containers[0];
            console.log("found container " + container.name);
            let containerId = container.id;

            let items = await fileContainerApi.getItems(containerId, null, null, null, null, null, null, false);
            console.log("found " + items.length + " items");

            let item = items.filter((item) => {
                return item.itemType === ti.ContainerItemType.File;
            })[0];

            if (item) {
                console.log("downloading " + item.path);
                let restResponse = await fileContainerApi.getItem(containerId, null, item.path, item.path.substring(item.path.lastIndexOf('/') + 1));
                
                let output = "";
                await new Promise((resolve, reject) => {
                    restResponse.result.on('data', (chunk) => {
                        output += chunk;
                    });
                    restResponse.result.on('end', () => {
                        resolve(output);
                    });
                });
                console.log("downloaded " + item.path);
                console.log(output);
            }
        }
    }
    catch (err) {
        console.error('Error: ' + err.stack);
    }

}
