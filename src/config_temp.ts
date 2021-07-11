import GraphQLHandler from '@graphql-mesh/graphql';
import { PubSub } from 'graphql-subscriptions';
import { KeyValueCache, GetMeshSourceOptions, YamlConfig } from '@graphql-mesh/types';
import BareMerger from '@graphql-mesh/merger-bare';
import { getMesh } from "@graphql-mesh/runtime";
import { getSdk, Sdk } from "./generated/sdk";
import * as _ from "lodash";
import { Source } from "@graphql-mesh/types/config";

export const defaultConfig: YamlConfig.Config = {
    serve: { port: 5000 },
    sources: [
        { name: "UserService", handler: { graphql: { endpoint: "/graphql" } } },
        { name: "CourseService", handler: { graphql: { endpoint: "/graphql" } } },
    ],
};

export type sourcesConfig =
    | {
        name: "UserService";
        handler: {
            graphql: {
                endpoint: string;
            };
        };
    }
    | {
        name: "CourseService";
        handler: {
            graphql: {
                endpoint: string;
            };
        };
    };

const asProcessConfig = (config: Source, cache: KeyValueCache) => {
    const handler = new GraphQLHandler({
        name: config.name,
        config: {
            endpoint: config.handler.graphql.endpoint
        },
        cache: cache,
        pubsub: new PubSub(),
        introspectionCache: {}
    });

    return {
        name: config.name,
        handler,
    };
}

/// 允许覆盖默认配置构建 Sdk
export const makeSdk = async (
    { cache }: { cache: KeyValueCache },
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

    const processConfig = sources.map(s => {
        return asProcessConfig(s, cache);
    });
    const { sdkRequester } = await getMesh({
        sources: processConfig,
        cache,
        pubsub: new PubSub(),
        merger: BareMerger
    });
    return getSdk(sdkRequester);
};