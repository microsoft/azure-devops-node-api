
// do first just to ensure variables set
// export API_URL=https://buildcanary.visualstudio.com/DefaultCollection
// export export API_TOKEN=<yourAllScopesApiToken>
// export API_PROJECT=test
import * as cm from './common';

let samples: string[] = require('./samples.json');

let selection: string = process.argv[2];
if (selection) {
    if (samples.indexOf(selection) == -1) {
        console.error('Not a valid sample.  See list of samples');
        process.exit(1);
    }

    samples = [selection];
}

async function runSamples(selected?: string) {
    for (let i: number = 0; i < samples.length; i++) {
        let sample: string = samples[i];

        if (selected && sample !== selected) {
            continue;
        }

        cm.banner('Sample ' + sample);
        var sm = require('./' + sample + '.js');
        await sm.run();
    }
}

function run() {
    runSamples();
}

runSamples(process.argv[2]);



