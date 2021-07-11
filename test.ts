import { makeSdk } from "./src/config";
import * as dotenv from "dotenv";

dotenv.config();

async function test() {
  const sdk = await makeSdk([
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
