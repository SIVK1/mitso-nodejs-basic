import { Worker } from 'worker_threads';
import os from 'os';

const performCalculations = async () => {
    const numWorkers = os.cpus().length;
    const results = [];

    const workerPromises = [];

    for (let i = 0; i < numWorkers; i++) {
        const worker = new Worker('./src/wt/worker.js');

        workerPromises.push(
            new Promise((resolve) => {
                worker.on('message', (result) => {
                    results.push(result);
                    resolve();
                });

                worker.on('error', () => {
                    results.push({ status: 'error', data: null });
                    resolve();
                });

                worker.on('exit', (code) => {
                    if (code !== 0) {
                        results.push({ status: 'error', data: null });
                        resolve();
                    }
                });

                worker.postMessage(10 + i);
            })
        );
    }

    await Promise.all(workerPromises);
    console.log(results);
};

await performCalculations();