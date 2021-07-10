import { findAndParseConfig } from '@graphql-mesh/config';
import { write, open } from 'fs';
import * as path from 'path';

const configPath = path.join(process.cwd(), "src", "config.ts");

// 'a': Open file for appending. The file is created if it does not exist.
// 'ax': Like 'a' but fails if the path exists.
// 'a+': Open file for reading and appending. The file is created if it does not exist.
// 'ax+': Like 'a+' but fails if the path exists.
// 'as': Open file for appending in synchronous mode. The file is created if it does not exist.
// 'as+': Open file for reading and appending in synchronous mode. The file is created if it does not exist.
// 'r': Open file for reading. An exception occurs if the file does not exist.
// 'r+': Open file for reading and writing. An exception occurs if the file does not exist.
// 'rs+': Open file for reading and writing in synchronous mode. Instructs the operating system to bypass the local file system cache.
// This is primarily useful for opening files on NFS mounts as it allows skipping the potentially stale local cache. It has a very real impact on I/O performance so using this flag is not recommended unless it is needed.
// This doesn't turn fs.open() or fsPromises.open() into a synchronous blocking call. If synchronous operation is desired, something like fs.openSync() should be used.
// 'w': Open file for writing. The file is created (if it does not exist) or truncated (if it exists).
// 'wx': Like 'w' but fails if the path exists.
// 'w+': Open file for reading and writing. The file is created (if it does not exist) or truncated (if it exists).
// 'wx+': Like 'w+' but fails if the path exists.
type filemode = 'w' | 'w+' | 'wx+' | 'r' | 'r+' | 'rs+';
const promiseOpen = (filePath: string, mode: filemode = 'w'): Promise<number> => {
    return new Promise((resolve, reject) => {
        open(filePath, mode, (error, fd) => {
            if (error) {
                return reject(error);
            }
            return resolve(fd);
        });
    })
};

findAndParseConfig().then(config => {
    const configJsonStr = JSON.stringify(config.config);
    return configJsonStr;
}).then(configJson => {
    return promiseOpen(configPath).then(fd => {
        const code = `export const config = ${configJson}`;
        const buffer = Buffer.from(code);
        write(fd, buffer, 0, buffer.length, 0, function (error) {
            if (error) {
                throw error;
            }
        });
    })
});