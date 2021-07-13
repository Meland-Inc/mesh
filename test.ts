import { makeSdk } from "./src/config";
import * as dotenv from "dotenv";
import InMemoryLRUCache from '@graphql-mesh/cache-inmemory-lru';

/// 如果没有环境变量则直接载入 .env
if (!process.env.USER_SERVICE_URL) {
    dotenv.config();
}

async function test() {
    // @ts-ignore
    const sdk = await makeSdk({ cache: new InMemoryLRUCache() }, [
        {
            name: "UserService",
            handler: {
                graphql: {
                    endpoint: `${process.env.USER_SERVICE_URL}/graphql`,
                },
            },
        },
        {
            name: "CourseService",
            handler: {
                graphql: {
                    endpoint: `${process.env.COURSE_SERVICE_URL}/graphql`,
                },
            },
        },
        {
            name: "ResourceBoxService",
            handler: {
                graphql: {
                    endpoint: `${process.env.COURSE_SERVICE_URL}/graphql`,
                },
            },
        },
    ]);
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
            password: "Test",
        },
    });

    console.log(user.username);
}

test();


export default test;