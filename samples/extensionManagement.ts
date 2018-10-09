import * as common from './common';
import * as nodeApi from 'azure-devops-node-api';

import * as ExtensionManagementApi from 'azure-devops-node-api/ExtensionManagementApi';
import * as ExtensionManagementInterfaces from 'azure-devops-node-api/interfaces/ExtensionManagementInterfaces';

export async function run() {
    const webApi: nodeApi.WebApi = await common.getWebApi();
    const extensionManagementApiObject: ExtensionManagementApi.IExtensionManagementApi = await webApi.getExtensionManagementApi();

    common.banner('Extension Management Samples');

    common.heading('Get state information');
    console.log('States:', await extensionManagementApiObject.getStates(true, true, true));
    const publisherName = 'ms';
    const extensionName = 'vss-releaseartifact';
    const version = '0.1.35';
    let alreadyInstalled = false;
    if (await extensionManagementApiObject.getInstalledExtensionByName(publisherName, extensionName)) {
        console.log('Extension has already been installed');
        alreadyInstalled = true;
    }
    else {
        common.heading('Install an extension');
        await extensionManagementApiObject.installExtensionByName(publisherName, extensionName, version);
    }
    
    // Verify extension was actually created
    let installedExtension: ExtensionManagementInterfaces.InstalledExtension = await extensionManagementApiObject.getInstalledExtensionByName(publisherName, extensionName);
    console.log('The following extension was installed', installedExtension);

    if(!alreadyInstalled){
        common.heading('Uninstall the extension');
        await extensionManagementApiObject.uninstallExtensionByName(publisherName, extensionName);
        installedExtension = await extensionManagementApiObject.getInstalledExtensionByName(publisherName, extensionName);
        console.log('Extension was uninstalled, looking for it returns', installedExtension);
    }

    common.heading('Get a token');
    console.log('Token:' , await extensionManagementApiObject.getToken())
}