import { parseConfig } from "@graphql-mesh/config";
import { getMesh } from "@graphql-mesh/runtime";
import { YamlConfig } from "@graphql-mesh/types";
import { getSdk, Sdk } from "./generated/sdk";
import * as _ from "lodash";

export const defaultConfig: YamlConfig.Config = {
  serve: { port: 5000 },
  sources: [
    {
      name: "UserService",
      handler: { graphql: { endpoint: "http://127.0.0.1:3003/graphql" } },
    },
    {
      name: "CourseService",
      handler: { graphql: { endpoint: "http://127.0.0.1:3002/graphql" } },
    },
    {
      name: "ResourceBoxService",
      handler: { graphql: { endpoint: "http://127.0.0.1:3001/graphql" } },
    },
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
    }
  | {
      name: "ResourceBoxService";
      handler: {
        graphql: {
          endpoint: string;
        };
      };
    };

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
