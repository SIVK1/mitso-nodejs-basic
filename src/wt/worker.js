import { parentPort } from 'worker_threads';

parentPort.on('message', (n) => {
    try {
        const result = nthFibonacci(n);
        parentPort.postMessage({ status: 'resolved', data: result });
    } catch (error) {
        parentPort.postMessage({ status: 'error', data: null });
    }
});

const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);