import { findAndParseConfig } from '@graphql-mesh/config';
import { write, open } from 'fs';
import * as path from 'path';
import * as dotenv from "dotenv";

/// 如果没有环境变量则直接载入 .env
if (!process.env.USER_SERVICE_URL) {
    dotenv.config();
}

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
    return config.config;
}).then(config => {
    return promiseOpen(configPath).then(fd => {
        const services = config.sources.map(s => s.name);
        const configJson = JSON.stringify(config);
        const codeTypeSourcesConfig = `
        export type sourcesConfig = ${services.map(s => {
            return `{
                name: "${s}";
                handler: {
                    graphql: {
                        endpoint: string;
                    };
                };
            }`;
        }).join('|')}
        `;
        const code = `
import { parseConfig } from '@graphql-mesh/config';
import { getMesh } from '@graphql-mesh/runtime';
import { YamlConfig } from "@graphql-mesh/types";
import { getSdk, Sdk } from './generated/sdk';
import * as _ from "lodash";
        
export const defaultConfig: YamlConfig.Config = ${configJson}
${codeTypeSourcesConfig}

/// 允许覆盖默认配置构建 Sdk
export const makeSdk = async (
    overrides: sourcesConfig[] = []
): Promise<Sdk> => {
    const config = _.cloneDeep(defaultConfig);
    const sources = config.sources;

    for (const i in sources) {
        const source = sources[i];

        const overrideSource = _.find<sourcesConfig>(overrides, [
            "name",
            source.name,
        ]);

        if (overrideSource != undefined) {
            sources[i] = _.assign(source, overrideSource);
        }
    }

    config.sources = sources;

    const processConfig = await parseConfig(config);
    const { sdkRequester } = await getMesh(processConfig);
    return getSdk(sdkRequester);
};
        `;
        const buffer = Buffer.from(code);
        write(fd, buffer, 0, buffer.length, 0, function (error) {
            if (error) {
                throw error;
            }
        });
    })
});