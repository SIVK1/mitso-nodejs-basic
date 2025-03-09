import { createReadStream } from 'node:fs';
import { createHash } from 'node:crypto';
import { resolve } from 'node:path';

const calculateHash = async () => {
    const filePath = resolve('src/hash/files/fileToCalculateHashFor.txt');
    const hash = createHash('sha256');
    const stream = createReadStream(filePath);
    
    stream.pipe(hash);
    
    await new Promise((resolve, reject) => {
        hash.on('finish', () => {
            process.stdout.write(hash.digest('hex') + '\n');
            resolve();
        });
        stream.on('error', reject);
    });
};

await calculateHash();