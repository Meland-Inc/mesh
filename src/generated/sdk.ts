import { DocumentNode } from "graphql";
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: Date;
};

export type Query = {
  __typename?: "Query";
  users: Array<User>;
  user: User;
  getCoursePackages: Array<CoursePackage>;
  _getCoursePackagesMeta: CoursePageMeta;
  getCoursePackage: CoursePackage;
  getCourses: Array<Course>;
  _getCoursesMeta: CoursePageMeta;
  getCourse: Course;
  qiniu: Qiniu;
};

export type QueryUserArgs = {
  id: Scalars["Int"];
};

export type QueryGetCoursePackagesArgs = {
  filter?: Maybe<CoursePackageFilter>;
  sortOrder?: Maybe<Scalars["String"]>;
  sortField?: Maybe<Scalars["String"]>;
  perPage?: Maybe<Scalars["Int"]>;
  page?: Maybe<Scalars["Int"]>;
};

export type Query_GetCoursePackagesMetaArgs = {
  perPage?: Maybe<Scalars["Int"]>;
  page?: Maybe<Scalars["Int"]>;
  filter?: Maybe<CoursePackageFilter>;
};

export type QueryGetCoursePackageArgs = {
  id: Scalars["Int"];
};

export type QueryGetCoursesArgs = {
  filter?: Maybe<CourseFilter>;
  sortOrder?: Maybe<Scalars["String"]>;
  sortField?: Maybe<Scalars["String"]>;
  perPage?: Maybe<Scalars["Int"]>;
  page?: Maybe<Scalars["Int"]>;
};

export type Query_GetCoursesMetaArgs = {
  perPage?: Maybe<Scalars["Int"]>;
  page?: Maybe<Scalars["Int"]>;
  filter?: Maybe<CourseFilter>;
};

export type QueryGetCourseArgs = {
  id: Scalars["Int"];
};

export type QueryQiniuArgs = {
  scope: Scalars["String"];
};

export type Mutation = {
  __typename?: "Mutation";
  createUser: User;
  updateUser: User;
  removeUser: User;
  createCoursePackage: CoursePackage;
  updateCoursePackage: CoursePackage;
  removeCoursePackage: CoursePackage;
  createCourse: Course;
  updateCourse: Course;
  removeCourse: Course;
};

export type MutationCreateUserArgs = {
  createUserInput: CreateUserInput;
};

export type MutationUpdateUserArgs = {
  updateUserInput: UpdateUserInput;
};

export type MutationRemoveUserArgs = {
  id: Scalars["Int"];
};

export type MutationCreateCoursePackageArgs = {
  createCoursePackageInput: CreateCoursePackageInput;
};

export type MutationUpdateCoursePackageArgs = {
  updateCoursePackageInput: UpdateCoursePackageInput;
};

export type MutationRemoveCoursePackageArgs = {
  id: Scalars["Int"];
};

export type MutationCreateCourseArgs = {
  createCourseInput: CreateCourseInput;
};

export type MutationUpdateCourseArgs = {
  updateCourseInput: UpdateCourseInput;
};

export type MutationRemoveCourseArgs = {
  id: Scalars["Int"];
};

export type User = {
  __typename?: "User";
  id: Scalars["ID"];
  /** 用户账号 */
  username: Scalars["String"];
  /** 用户昵称 */
  nickname: Scalars["String"];
  /** 用户真实姓名 */
  realname: Scalars["String"];
  /** 用户类型 */
  usertype: Scalars["Float"];
  /** 用户邮箱 */
  email: Scalars["String"];
  /** 用户手机号码 */
  mobile: Scalars["String"];
  /** 用户头像 */
  avatar: Scalars["String"];
};

export type CreateUserInput = {
  /** 用户账号 */
  schoolId: Scalars["Float"];
  /** 用户账号 */
  username: Scalars["String"];
  /** 用户类型 */
  usertype: Scalars["Float"];
  /** 用户昵称 */
  nickname: Scalars["String"];
  /** 用户真实姓名 */
  realname: Scalars["String"];
  /** 用户邮箱 */
  email: Scalars["String"];
  /** 用户手机号码 */
  mobile: Scalars["String"];
  /** 用户头像 */
  avatar: Scalars["String"];
  /** 用户密码 */
  password: Scalars["String"];
};

export type UpdateUserInput = {
  /** 用户账号 */
  schoolId?: Maybe<Scalars["Float"]>;
  /** 用户类型 */
  usertype?: Maybe<Scalars["Float"]>;
  /** 用户昵称 */
  nickname?: Maybe<Scalars["String"]>;
  /** 用户真实姓名 */
  realname?: Maybe<Scalars["String"]>;
  /** 用户邮箱 */
  email?: Maybe<Scalars["String"]>;
  /** 用户手机号码 */
  mobile?: Maybe<Scalars["String"]>;
  /** 用户头像 */
  avatar?: Maybe<Scalars["String"]>;
  /** 用户密码 */
  password?: Maybe<Scalars["String"]>;
  id: Scalars["Int"];
};

export type CoursePackage = {
  __typename?: "CoursePackage";
  id: Scalars["Float"];
  name: Scalars["String"];
  cover: Scalars["String"];
  introduce: Scalars["String"];
  level: Scalars["String"];
  tags: Scalars["String"];
  type: Scalars["String"];
  createdAt: Scalars["DateTime"];
  updatedAt: Scalars["DateTime"];
  remark: Scalars["String"];
  locked: Scalars["Float"];
};

export type CoursePageMeta = {
  __typename?: "CoursePageMeta";
  count: Scalars["Int"];
};

export type Course = {
  __typename?: "Course";
  id: Scalars["ID"];
  /** 已开课课程封面 */
  startedCover: Scalars["String"];
  /** 未开课课程封面 */
  noStartedCover: Scalars["String"];
  /** 已完课课程封面 */
  completedCover: Scalars["String"];
  name: Scalars["String"];
  mapId: Scalars["String"];
  mapType: Scalars["String"];
  creatorId: Scalars["ID"];
  description: Scalars["String"];
  teacherSuggest: Scalars["String"];
  remark: Scalars["String"];
  createdAt?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type Qiniu = {
  __typename?: "Qiniu";
  /** 七牛上传token */
  token: Scalars["String"];
};

export type CoursePackageFilter = {
  name?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["Int"]>;
};

export type CourseFilter = {
  name?: Maybe<Scalars["String"]>;
  packageId?: Maybe<Scalars["Float"]>;
};

export type CreateCoursePackageInput = {
  name: Scalars["String"];
  cover: Scalars["String"];
  /** 课程包介绍 */
  introduce: Scalars["String"];
  level: Scalars["String"];
  tags: Scalars["String"];
  type: Scalars["String"];
  createdAt: Scalars["DateTime"];
  updatedAt: Scalars["DateTime"];
  remark: Scalars["String"];
};

export type UpdateCoursePackageInput = {
  name?: Maybe<Scalars["String"]>;
  cover?: Maybe<Scalars["String"]>;
  /** 课程包介绍 */
  introduce?: Maybe<Scalars["String"]>;
  level?: Maybe<Scalars["String"]>;
  tags?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  remark?: Maybe<Scalars["String"]>;
  id: Scalars["Int"];
  locked?: Maybe<Scalars["Float"]>;
};

export type CreateCourseInput = {
  /** 已开课课程封面 */
  startedCover?: Maybe<Scalars["String"]>;
  /** 未开课课程封面 */
  noStartedCover?: Maybe<Scalars["String"]>;
  /** 已完课课程封面 */
  completedCover?: Maybe<Scalars["String"]>;
  /** 课程名称 */
  name: Scalars["String"];
  /** 地图id */
  mapId: Scalars["String"];
  /** 地图类型 */
  mapType?: Maybe<Scalars["String"]>;
  /** 创建者id */
  creatorId?: Maybe<Scalars["Int"]>;
  /** 课程描述 */
  description?: Maybe<Scalars["String"]>;
  /** 教师建议 */
  teacherSuggest?: Maybe<Scalars["String"]>;
};

export type UpdateCourseInput = {
  /** 已开课课程封面 */
  startedCover?: Maybe<Scalars["String"]>;
  /** 未开课课程封面 */
  noStartedCover?: Maybe<Scalars["String"]>;
  /** 已完课课程封面 */
  completedCover?: Maybe<Scalars["String"]>;
  /** 课程名称 */
  name?: Maybe<Scalars["String"]>;
  /** 地图id */
  mapId?: Maybe<Scalars["String"]>;
  /** 地图类型 */
  mapType?: Maybe<Scalars["String"]>;
  /** 创建者id */
  creatorId?: Maybe<Scalars["Int"]>;
  /** 课程描述 */
  description?: Maybe<Scalars["String"]>;
  /** 教师建议 */
  teacherSuggest?: Maybe<Scalars["String"]>;
  id: Scalars["Int"];
};

export type UsersQueryQueryVariables = Exact<{ [key: string]: never }>;

export type UsersQueryQuery = { __typename?: "Query" } & {
  users: Array<
    { __typename?: "User" } & Pick<
      User,
      | "id"
      | "username"
      | "nickname"
      | "realname"
      | "usertype"
      | "email"
      | "mobile"
      | "avatar"
    >
  >;
};

export type UserQueryQueryVariables = Exact<{
  id: Scalars["Int"];
}>;

export type UserQueryQuery = { __typename?: "Query" } & {
  user: { __typename?: "User" } & Pick<
    User,
    | "id"
    | "username"
    | "nickname"
    | "realname"
    | "usertype"
    | "email"
    | "mobile"
    | "avatar"
  >;
};

export type GetCoursePackagesQueryQueryVariables = Exact<{
  filter?: Maybe<CoursePackageFilter>;
  sortOrder?: Maybe<Scalars["String"]>;
  sortField?: Maybe<Scalars["String"]>;
  perPage?: Maybe<Scalars["Int"]>;
  page?: Maybe<Scalars["Int"]>;
}>;

export type GetCoursePackagesQueryQuery = { __typename?: "Query" } & {
  getCoursePackages: Array<
    { __typename?: "CoursePackage" } & Pick<
      CoursePackage,
      | "id"
      | "name"
      | "cover"
      | "introduce"
      | "level"
      | "tags"
      | "type"
      | "createdAt"
      | "updatedAt"
      | "remark"
      | "locked"
    >
  >;
};

export type GetCoursePackagesMetaQueryQueryVariables = Exact<{
  perPage?: Maybe<Scalars["Int"]>;
  page?: Maybe<Scalars["Int"]>;
  filter?: Maybe<CoursePackageFilter>;
}>;

export type GetCoursePackagesMetaQueryQuery = { __typename?: "Query" } & {
  _getCoursePackagesMeta: { __typename?: "CoursePageMeta" } & Pick<
    CoursePageMeta,
    "count"
  >;
};

export type GetCoursePackageQueryQueryVariables = Exact<{
  id: Scalars["Int"];
}>;

export type GetCoursePackageQueryQuery = { __typename?: "Query" } & {
  getCoursePackage: { __typename?: "CoursePackage" } & Pick<
    CoursePackage,
    | "id"
    | "name"
    | "cover"
    | "introduce"
    | "level"
    | "tags"
    | "type"
    | "createdAt"
    | "updatedAt"
    | "remark"
    | "locked"
  >;
};

export type GetCoursesQueryQueryVariables = Exact<{
  filter?: Maybe<CourseFilter>;
  sortOrder?: Maybe<Scalars["String"]>;
  sortField?: Maybe<Scalars["String"]>;
  perPage?: Maybe<Scalars["Int"]>;
  page?: Maybe<Scalars["Int"]>;
}>;

export type GetCoursesQueryQuery = { __typename?: "Query" } & {
  getCourses: Array<
    { __typename?: "Course" } & Pick<
      Course,
      | "id"
      | "startedCover"
      | "noStartedCover"
      | "completedCover"
      | "name"
      | "mapId"
      | "mapType"
      | "creatorId"
      | "description"
      | "teacherSuggest"
      | "remark"
      | "createdAt"
      | "updatedAt"
    >
  >;
};

export type GetCoursesMetaQueryQueryVariables = Exact<{
  perPage?: Maybe<Scalars["Int"]>;
  page?: Maybe<Scalars["Int"]>;
  filter?: Maybe<CourseFilter>;
}>;

export type GetCoursesMetaQueryQuery = { __typename?: "Query" } & {
  _getCoursesMeta: { __typename?: "CoursePageMeta" } & Pick<
    CoursePageMeta,
    "count"
  >;
};

export type GetCourseQueryQueryVariables = Exact<{
  id: Scalars["Int"];
}>;

export type GetCourseQueryQuery = { __typename?: "Query" } & {
  getCourse: { __typename?: "Course" } & Pick<
    Course,
    | "id"
    | "startedCover"
    | "noStartedCover"
    | "completedCover"
    | "name"
    | "mapId"
    | "mapType"
    | "creatorId"
    | "description"
    | "teacherSuggest"
    | "remark"
    | "createdAt"
    | "updatedAt"
  >;
};

export type QiniuQueryQueryVariables = Exact<{
  scope: Scalars["String"];
}>;

export type QiniuQueryQuery = { __typename?: "Query" } & {
  qiniu: { __typename?: "Qiniu" } & Pick<Qiniu, "token">;
};

export type CreateUserMutationMutationVariables = Exact<{
  createUserInput: CreateUserInput;
}>;

export type CreateUserMutationMutation = { __typename?: "Mutation" } & {
  createUser: { __typename?: "User" } & Pick<
    User,
    | "id"
    | "username"
    | "nickname"
    | "realname"
    | "usertype"
    | "email"
    | "mobile"
    | "avatar"
  >;
};

export type UpdateUserMutationMutationVariables = Exact<{
  updateUserInput: UpdateUserInput;
}>;

export type UpdateUserMutationMutation = { __typename?: "Mutation" } & {
  updateUser: { __typename?: "User" } & Pick<
    User,
    | "id"
    | "username"
    | "nickname"
    | "realname"
    | "usertype"
    | "email"
    | "mobile"
    | "avatar"
  >;
};

export type RemoveUserMutationMutationVariables = Exact<{
  id: Scalars["Int"];
}>;

export type RemoveUserMutationMutation = { __typename?: "Mutation" } & {
  removeUser: { __typename?: "User" } & Pick<
    User,
    | "id"
    | "username"
    | "nickname"
    | "realname"
    | "usertype"
    | "email"
    | "mobile"
    | "avatar"
  >;
};

export type CreateCoursePackageMutationMutationVariables = Exact<{
  createCoursePackageInput: CreateCoursePackageInput;
}>;

export type CreateCoursePackageMutationMutation = {
  __typename?: "Mutation";
} & {
  createCoursePackage: { __typename?: "CoursePackage" } & Pick<
    CoursePackage,
    | "id"
    | "name"
    | "cover"
    | "introduce"
    | "level"
    | "tags"
    | "type"
    | "createdAt"
    | "updatedAt"
    | "remark"
    | "locked"
  >;
};

export type UpdateCoursePackageMutationMutationVariables = Exact<{
  updateCoursePackageInput: UpdateCoursePackageInput;
}>;

export type UpdateCoursePackageMutationMutation = {
  __typename?: "Mutation";
} & {
  updateCoursePackage: { __typename?: "CoursePackage" } & Pick<
    CoursePackage,
    | "id"
    | "name"
    | "cover"
    | "introduce"
    | "level"
    | "tags"
    | "type"
    | "createdAt"
    | "updatedAt"
    | "remark"
    | "locked"
  >;
};

export type RemoveCoursePackageMutationMutationVariables = Exact<{
  id: Scalars["Int"];
}>;

export type RemoveCoursePackageMutationMutation = {
  __typename?: "Mutation";
} & {
  removeCoursePackage: { __typename?: "CoursePackage" } & Pick<
    CoursePackage,
    | "id"
    | "name"
    | "cover"
    | "introduce"
    | "level"
    | "tags"
    | "type"
    | "createdAt"
    | "updatedAt"
    | "remark"
    | "locked"
  >;
};

export type CreateCourseMutationMutationVariables = Exact<{
  createCourseInput: CreateCourseInput;
}>;

export type CreateCourseMutationMutation = { __typename?: "Mutation" } & {
  createCourse: { __typename?: "Course" } & Pick<
    Course,
    | "id"
    | "startedCover"
    | "noStartedCover"
    | "completedCover"
    | "name"
    | "mapId"
    | "mapType"
    | "creatorId"
    | "description"
    | "teacherSuggest"
    | "remark"
    | "createdAt"
    | "updatedAt"
  >;
};

export type UpdateCourseMutationMutationVariables = Exact<{
  updateCourseInput: UpdateCourseInput;
}>;

export type UpdateCourseMutationMutation = { __typename?: "Mutation" } & {
  updateCourse: { __typename?: "Course" } & Pick<
    Course,
    | "id"
    | "startedCover"
    | "noStartedCover"
    | "completedCover"
    | "name"
    | "mapId"
    | "mapType"
    | "creatorId"
    | "description"
    | "teacherSuggest"
    | "remark"
    | "createdAt"
    | "updatedAt"
  >;
};

export type RemoveCourseMutationMutationVariables = Exact<{
  id: Scalars["Int"];
}>;

export type RemoveCourseMutationMutation = { __typename?: "Mutation" } & {
  removeCourse: { __typename?: "Course" } & Pick<
    Course,
    | "id"
    | "startedCover"
    | "noStartedCover"
    | "completedCover"
    | "name"
    | "mapId"
    | "mapType"
    | "creatorId"
    | "description"
    | "teacherSuggest"
    | "remark"
    | "createdAt"
    | "updatedAt"
  >;
};

export const UsersQueryDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "usersQuery" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "users" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "username" } },
                { kind: "Field", name: { kind: "Name", value: "nickname" } },
                { kind: "Field", name: { kind: "Name", value: "realname" } },
                { kind: "Field", name: { kind: "Name", value: "usertype" } },
                { kind: "Field", name: { kind: "Name", value: "email" } },
                { kind: "Field", name: { kind: "Name", value: "mobile" } },
                { kind: "Field", name: { kind: "Name", value: "avatar" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode;
export const UserQueryDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "userQuery" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "user" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "id" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "username" } },
                { kind: "Field", name: { kind: "Name", value: "nickname" } },
                { kind: "Field", name: { kind: "Name", value: "realname" } },
                { kind: "Field", name: { kind: "Name", value: "usertype" } },
                { kind: "Field", name: { kind: "Name", value: "email" } },
                { kind: "Field", name: { kind: "Name", value: "mobile" } },
                { kind: "Field", name: { kind: "Name", value: "avatar" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode;
export const GetCoursePackagesQueryDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "getCoursePackagesQuery" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "filter" },
          },
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "CoursePackageFilter" },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "sortOrder" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "sortField" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "perPage" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "page" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "getCoursePackages" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "filter" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "filter" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "sortOrder" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "sortOrder" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "sortField" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "sortField" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "perPage" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "perPage" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "page" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "page" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "cover" } },
                { kind: "Field", name: { kind: "Name", value: "introduce" } },
                { kind: "Field", name: { kind: "Name", value: "level" } },
                { kind: "Field", name: { kind: "Name", value: "tags" } },
                { kind: "Field", name: { kind: "Name", value: "type" } },
                { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
                { kind: "Field", name: { kind: "Name", value: "remark" } },
                { kind: "Field", name: { kind: "Name", value: "locked" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode;
export const GetCoursePackagesMetaQueryDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "getCoursePackagesMetaQuery" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "perPage" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "page" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "filter" },
          },
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "CoursePackageFilter" },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "_getCoursePackagesMeta" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "perPage" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "perPage" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "page" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "page" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "filter" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "filter" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "count" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode;
export const GetCoursePackageQueryDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "getCoursePackageQuery" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "getCoursePackage" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "id" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "cover" } },
                { kind: "Field", name: { kind: "Name", value: "introduce" } },
                { kind: "Field", name: { kind: "Name", value: "level" } },
                { kind: "Field", name: { kind: "Name", value: "tags" } },
                { kind: "Field", name: { kind: "Name", value: "type" } },
                { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
                { kind: "Field", name: { kind: "Name", value: "remark" } },
                { kind: "Field", name: { kind: "Name", value: "locked" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode;
export const GetCoursesQueryDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "getCoursesQuery" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "filter" },
          },
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "CourseFilter" },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "sortOrder" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "sortField" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "perPage" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "page" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "getCourses" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "filter" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "filter" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "sortOrder" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "sortOrder" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "sortField" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "sortField" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "perPage" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "perPage" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "page" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "page" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "startedCover" },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "noStartedCover" },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "completedCover" },
                },
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "mapId" } },
                { kind: "Field", name: { kind: "Name", value: "mapType" } },
                { kind: "Field", name: { kind: "Name", value: "creatorId" } },
                { kind: "Field", name: { kind: "Name", value: "description" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "teacherSuggest" },
                },
                { kind: "Field", name: { kind: "Name", value: "remark" } },
                { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode;
export const GetCoursesMetaQueryDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "getCoursesMetaQuery" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "perPage" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "page" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "filter" },
          },
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "CourseFilter" },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "_getCoursesMeta" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "perPage" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "perPage" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "page" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "page" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "filter" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "filter" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "count" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode;
export const GetCourseQueryDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "getCourseQuery" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "getCourse" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "id" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "startedCover" },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "noStartedCover" },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "completedCover" },
                },
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "mapId" } },
                { kind: "Field", name: { kind: "Name", value: "mapType" } },
                { kind: "Field", name: { kind: "Name", value: "creatorId" } },
                { kind: "Field", name: { kind: "Name", value: "description" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "teacherSuggest" },
                },
                { kind: "Field", name: { kind: "Name", value: "remark" } },
                { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode;
export const QiniuQueryDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "qiniuQuery" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "scope" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "qiniu" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "scope" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "scope" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "token" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode;
export const CreateUserMutationDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "createUserMutation" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "createUserInput" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "CreateUserInput" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "createUser" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "createUserInput" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "createUserInput" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "username" } },
                { kind: "Field", name: { kind: "Name", value: "nickname" } },
                { kind: "Field", name: { kind: "Name", value: "realname" } },
                { kind: "Field", name: { kind: "Name", value: "usertype" } },
                { kind: "Field", name: { kind: "Name", value: "email" } },
                { kind: "Field", name: { kind: "Name", value: "mobile" } },
                { kind: "Field", name: { kind: "Name", value: "avatar" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode;
export const UpdateUserMutationDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "updateUserMutation" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "updateUserInput" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "UpdateUserInput" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "updateUser" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "updateUserInput" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "updateUserInput" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "username" } },
                { kind: "Field", name: { kind: "Name", value: "nickname" } },
                { kind: "Field", name: { kind: "Name", value: "realname" } },
                { kind: "Field", name: { kind: "Name", value: "usertype" } },
                { kind: "Field", name: { kind: "Name", value: "email" } },
                { kind: "Field", name: { kind: "Name", value: "mobile" } },
                { kind: "Field", name: { kind: "Name", value: "avatar" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode;
export const RemoveUserMutationDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "removeUserMutation" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "removeUser" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "id" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "username" } },
                { kind: "Field", name: { kind: "Name", value: "nickname" } },
                { kind: "Field", name: { kind: "Name", value: "realname" } },
                { kind: "Field", name: { kind: "Name", value: "usertype" } },
                { kind: "Field", name: { kind: "Name", value: "email" } },
                { kind: "Field", name: { kind: "Name", value: "mobile" } },
                { kind: "Field", name: { kind: "Name", value: "avatar" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode;
export const CreateCoursePackageMutationDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "createCoursePackageMutation" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "createCoursePackageInput" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "CreateCoursePackageInput" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "createCoursePackage" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "createCoursePackageInput" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "createCoursePackageInput" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "cover" } },
                { kind: "Field", name: { kind: "Name", value: "introduce" } },
                { kind: "Field", name: { kind: "Name", value: "level" } },
                { kind: "Field", name: { kind: "Name", value: "tags" } },
                { kind: "Field", name: { kind: "Name", value: "type" } },
                { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
                { kind: "Field", name: { kind: "Name", value: "remark" } },
                { kind: "Field", name: { kind: "Name", value: "locked" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode;
export const UpdateCoursePackageMutationDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "updateCoursePackageMutation" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "updateCoursePackageInput" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "UpdateCoursePackageInput" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "updateCoursePackage" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "updateCoursePackageInput" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "updateCoursePackageInput" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "cover" } },
                { kind: "Field", name: { kind: "Name", value: "introduce" } },
                { kind: "Field", name: { kind: "Name", value: "level" } },
                { kind: "Field", name: { kind: "Name", value: "tags" } },
                { kind: "Field", name: { kind: "Name", value: "type" } },
                { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
                { kind: "Field", name: { kind: "Name", value: "remark" } },
                { kind: "Field", name: { kind: "Name", value: "locked" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode;
export const RemoveCoursePackageMutationDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "removeCoursePackageMutation" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "removeCoursePackage" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "id" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "cover" } },
                { kind: "Field", name: { kind: "Name", value: "introduce" } },
                { kind: "Field", name: { kind: "Name", value: "level" } },
                { kind: "Field", name: { kind: "Name", value: "tags" } },
                { kind: "Field", name: { kind: "Name", value: "type" } },
                { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
                { kind: "Field", name: { kind: "Name", value: "remark" } },
                { kind: "Field", name: { kind: "Name", value: "locked" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode;
export const CreateCourseMutationDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "createCourseMutation" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "createCourseInput" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "CreateCourseInput" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "createCourse" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "createCourseInput" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "createCourseInput" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "startedCover" },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "noStartedCover" },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "completedCover" },
                },
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "mapId" } },
                { kind: "Field", name: { kind: "Name", value: "mapType" } },
                { kind: "Field", name: { kind: "Name", value: "creatorId" } },
                { kind: "Field", name: { kind: "Name", value: "description" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "teacherSuggest" },
                },
                { kind: "Field", name: { kind: "Name", value: "remark" } },
                { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode;
export const UpdateCourseMutationDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "updateCourseMutation" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "updateCourseInput" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "UpdateCourseInput" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "updateCourse" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "updateCourseInput" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "updateCourseInput" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "startedCover" },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "noStartedCover" },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "completedCover" },
                },
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "mapId" } },
                { kind: "Field", name: { kind: "Name", value: "mapType" } },
                { kind: "Field", name: { kind: "Name", value: "creatorId" } },
                { kind: "Field", name: { kind: "Name", value: "description" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "teacherSuggest" },
                },
                { kind: "Field", name: { kind: "Name", value: "remark" } },
                { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode;
export const RemoveCourseMutationDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "removeCourseMutation" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "removeCourse" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "id" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "startedCover" },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "noStartedCover" },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "completedCover" },
                },
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "mapId" } },
                { kind: "Field", name: { kind: "Name", value: "mapType" } },
                { kind: "Field", name: { kind: "Name", value: "creatorId" } },
                { kind: "Field", name: { kind: "Name", value: "description" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "teacherSuggest" },
                },
                { kind: "Field", name: { kind: "Name", value: "remark" } },
                { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode;
export type Requester<C = {}> = <R, V>(
  doc: DocumentNode,
  vars?: V,
  options?: C
) => Promise<R>;
export function getSdk<C>(requester: Requester<C>) {
  return {
    usersQuery(
      variables?: UsersQueryQueryVariables,
      options?: C
    ): Promise<UsersQueryQuery> {
      return requester<UsersQueryQuery, UsersQueryQueryVariables>(
        UsersQueryDocument,
        variables,
        options
      );
    },
    userQuery(
      variables: UserQueryQueryVariables,
      options?: C
    ): Promise<UserQueryQuery> {
      return requester<UserQueryQuery, UserQueryQueryVariables>(
        UserQueryDocument,
        variables,
        options
      );
    },
    getCoursePackagesQuery(
      variables?: GetCoursePackagesQueryQueryVariables,
      options?: C
    ): Promise<GetCoursePackagesQueryQuery> {
      return requester<
        GetCoursePackagesQueryQuery,
        GetCoursePackagesQueryQueryVariables
      >(GetCoursePackagesQueryDocument, variables, options);
    },
    getCoursePackagesMetaQuery(
      variables?: GetCoursePackagesMetaQueryQueryVariables,
      options?: C
    ): Promise<GetCoursePackagesMetaQueryQuery> {
      return requester<
        GetCoursePackagesMetaQueryQuery,
        GetCoursePackagesMetaQueryQueryVariables
      >(GetCoursePackagesMetaQueryDocument, variables, options);
    },
    getCoursePackageQuery(
      variables: GetCoursePackageQueryQueryVariables,
      options?: C
    ): Promise<GetCoursePackageQueryQuery> {
      return requester<
        GetCoursePackageQueryQuery,
        GetCoursePackageQueryQueryVariables
      >(GetCoursePackageQueryDocument, variables, options);
    },
    getCoursesQuery(
      variables?: GetCoursesQueryQueryVariables,
      options?: C
    ): Promise<GetCoursesQueryQuery> {
      return requester<GetCoursesQueryQuery, GetCoursesQueryQueryVariables>(
        GetCoursesQueryDocument,
        variables,
        options
      );
    },
    getCoursesMetaQuery(
      variables?: GetCoursesMetaQueryQueryVariables,
      options?: C
    ): Promise<GetCoursesMetaQueryQuery> {
      return requester<
        GetCoursesMetaQueryQuery,
        GetCoursesMetaQueryQueryVariables
      >(GetCoursesMetaQueryDocument, variables, options);
    },
    getCourseQuery(
      variables: GetCourseQueryQueryVariables,
      options?: C
    ): Promise<GetCourseQueryQuery> {
      return requester<GetCourseQueryQuery, GetCourseQueryQueryVariables>(
        GetCourseQueryDocument,
        variables,
        options
      );
    },
    qiniuQuery(
      variables: QiniuQueryQueryVariables,
      options?: C
    ): Promise<QiniuQueryQuery> {
      return requester<QiniuQueryQuery, QiniuQueryQueryVariables>(
        QiniuQueryDocument,
        variables,
        options
      );
    },
    createUserMutation(
      variables: CreateUserMutationMutationVariables,
      options?: C
    ): Promise<CreateUserMutationMutation> {
      return requester<
        CreateUserMutationMutation,
        CreateUserMutationMutationVariables
      >(CreateUserMutationDocument, variables, options);
    },
    updateUserMutation(
      variables: UpdateUserMutationMutationVariables,
      options?: C
    ): Promise<UpdateUserMutationMutation> {
      return requester<
        UpdateUserMutationMutation,
        UpdateUserMutationMutationVariables
      >(UpdateUserMutationDocument, variables, options);
    },
    removeUserMutation(
      variables: RemoveUserMutationMutationVariables,
      options?: C
    ): Promise<RemoveUserMutationMutation> {
      return requester<
        RemoveUserMutationMutation,
        RemoveUserMutationMutationVariables
      >(RemoveUserMutationDocument, variables, options);
    },
    createCoursePackageMutation(
      variables: CreateCoursePackageMutationMutationVariables,
      options?: C
    ): Promise<CreateCoursePackageMutationMutation> {
      return requester<
        CreateCoursePackageMutationMutation,
        CreateCoursePackageMutationMutationVariables
      >(CreateCoursePackageMutationDocument, variables, options);
    },
    updateCoursePackageMutation(
      variables: UpdateCoursePackageMutationMutationVariables,
      options?: C
    ): Promise<UpdateCoursePackageMutationMutation> {
      return requester<
        UpdateCoursePackageMutationMutation,
        UpdateCoursePackageMutationMutationVariables
      >(UpdateCoursePackageMutationDocument, variables, options);
    },
    removeCoursePackageMutation(
      variables: RemoveCoursePackageMutationMutationVariables,
      options?: C
    ): Promise<RemoveCoursePackageMutationMutation> {
      return requester<
        RemoveCoursePackageMutationMutation,
        RemoveCoursePackageMutationMutationVariables
      >(RemoveCoursePackageMutationDocument, variables, options);
    },
    createCourseMutation(
      variables: CreateCourseMutationMutationVariables,
      options?: C
    ): Promise<CreateCourseMutationMutation> {
      return requester<
        CreateCourseMutationMutation,
        CreateCourseMutationMutationVariables
      >(CreateCourseMutationDocument, variables, options);
    },
    updateCourseMutation(
      variables: UpdateCourseMutationMutationVariables,
      options?: C
    ): Promise<UpdateCourseMutationMutation> {
      return requester<
        UpdateCourseMutationMutation,
        UpdateCourseMutationMutationVariables
      >(UpdateCourseMutationDocument, variables, options);
    },
    removeCourseMutation(
      variables: RemoveCourseMutationMutationVariables,
      options?: C
    ): Promise<RemoveCourseMutationMutation> {
      return requester<
        RemoveCourseMutationMutation,
        RemoveCourseMutationMutationVariables
      >(RemoveCourseMutationDocument, variables, options);
    },
  };
}
export type Sdk = ReturnType<typeof getSdk>;
