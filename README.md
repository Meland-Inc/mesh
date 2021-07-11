# mesh

连接所有 ICW 后端并对外提供 typescript sdk.

# dependencies

- nodejs@14.17.0

# 使用示例
```typescript
import { makeSdk } from "./src/config";
import * as dotenv from "dotenv";
import InMemoryLRUCache from '@graphql-mesh/cache-inmemory-lru';

dotenv.config();

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
```
# scripts

### 生成 sdk

```bash
yarn sdk
```

### 生成 客户端配置文件

```bash
yarn make:config
```

### 发布npm

```bash
yarn publish
```