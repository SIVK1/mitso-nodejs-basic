import { createWriteStream } from 'fs';
import { join } from 'path';

const write = async () => {
    const filePath = join('src', 'streams', 'files', 'fileToWrite.txt');
    const writableStream = createWriteStream(filePath);

    process.stdin.pipe(writableStream);
};

await write();