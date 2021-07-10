import { getSdk } from './src/generated/sdk';
import { parseConfig } from '@graphql-mesh/config';
import { getMesh } from '@graphql-mesh/runtime';
import { config } from './src/config';

async function test() {
    const meshConfig = await parseConfig(config);
    const { sdkRequester } = await getMesh(meshConfig);
    const sdk = getSdk(sdkRequester);
    const { createUser: user } = await sdk.createUserMutation({
        createUserInput: {
            schoolId: 1,
            username: `Test${Math.floor(Math.random() * 1000)}`,
            usertype: 4,
            nickname: "Test",
            realname: "Test",
            email: "",
            mobile: "",
            avatar: "",
            password: "Test"
        }
    });

    console.log(user.username);
}

test();