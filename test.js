"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sdk_1 = require("./src/generated/sdk");
const config_1 = require("@graphql-mesh/config");
const runtime_1 = require("@graphql-mesh/runtime");
const config_2 = require("./src/config");
async function test() {
    const meshConfig = await config_1.parseConfig(config_2.config);
    const { sdkRequester } = await runtime_1.getMesh(meshConfig);
    const sdk = sdk_1.getSdk(sdkRequester);
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
//# sourceMappingURL=test.js.map