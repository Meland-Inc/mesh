# mesh

连接所有 ICW 后端并对外提供 typescript sdk.

# dependencies

- nodejs@14.17.0

# 使用示例

```typescript
import { getSdk } from '@icodeworld/mesh';

async function test() {
    // 可选. 用于主动覆盖服务
    // SDK 默认请求的服务是线上
    const ovderrideServices = {
      "name": "UserService",
      "handler": {
        "graphql": {
          "endpoint": "http://127.0.0.1:3002/graphql"
        }
      }
    },
    {
      "name": "CourseService",
      "handler": {
        "graphql": {
          "endpoint": "http://127.0.0.1:3000/graphql"
        }
      }
    }

    const sdk = getSdk(ovderrideServices);
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