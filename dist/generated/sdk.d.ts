import { DocumentNode } from 'graphql';
export declare type Maybe<T> = T | null;
export declare type Exact<T extends {
    [key: string]: unknown;
}> = {
    [K in keyof T]: T[K];
};
export declare type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]?: Maybe<T[SubKey]>;
};
export declare type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]: Maybe<T[SubKey]>;
};
export declare type Scalars = {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
    DateTime: Date;
};
export declare type Query = {
    __typename?: 'Query';
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
export declare type QueryUserArgs = {
    id: Scalars['Int'];
};
export declare type QueryGetCoursePackagesArgs = {
    filter?: Maybe<CoursePackageFilter>;
    sortOrder?: Maybe<Scalars['String']>;
    sortField?: Maybe<Scalars['String']>;
    perPage?: Maybe<Scalars['Int']>;
    page?: Maybe<Scalars['Int']>;
};
export declare type Query_GetCoursePackagesMetaArgs = {
    perPage?: Maybe<Scalars['Int']>;
    page?: Maybe<Scalars['Int']>;
    filter?: Maybe<CoursePackageFilter>;
};
export declare type QueryGetCoursePackageArgs = {
    id: Scalars['Int'];
};
export declare type QueryGetCoursesArgs = {
    filter?: Maybe<CourseFilter>;
    sortOrder?: Maybe<Scalars['String']>;
    sortField?: Maybe<Scalars['String']>;
    perPage?: Maybe<Scalars['Int']>;
    page?: Maybe<Scalars['Int']>;
};
export declare type Query_GetCoursesMetaArgs = {
    perPage?: Maybe<Scalars['Int']>;
    page?: Maybe<Scalars['Int']>;
    filter?: Maybe<CourseFilter>;
};
export declare type QueryGetCourseArgs = {
    id: Scalars['Int'];
};
export declare type QueryQiniuArgs = {
    scope: Scalars['String'];
};
export declare type Mutation = {
    __typename?: 'Mutation';
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
export declare type MutationCreateUserArgs = {
    createUserInput: CreateUserInput;
};
export declare type MutationUpdateUserArgs = {
    updateUserInput: UpdateUserInput;
};
export declare type MutationRemoveUserArgs = {
    id: Scalars['Int'];
};
export declare type MutationCreateCoursePackageArgs = {
    createCoursePackageInput: CreateCoursePackageInput;
};
export declare type MutationUpdateCoursePackageArgs = {
    updateCoursePackageInput: UpdateCoursePackageInput;
};
export declare type MutationRemoveCoursePackageArgs = {
    id: Scalars['Int'];
};
export declare type MutationCreateCourseArgs = {
    createCourseInput: CreateCourseInput;
};
export declare type MutationUpdateCourseArgs = {
    updateCourseInput: UpdateCourseInput;
};
export declare type MutationRemoveCourseArgs = {
    id: Scalars['Int'];
};
export declare type User = {
    __typename?: 'User';
    id: Scalars['ID'];
    username: Scalars['String'];
    nickname: Scalars['String'];
    realname: Scalars['String'];
    usertype: Scalars['Float'];
    email: Scalars['String'];
    mobile: Scalars['String'];
    avatar: Scalars['String'];
};
export declare type CreateUserInput = {
    schoolId: Scalars['Float'];
    username: Scalars['String'];
    usertype: Scalars['Float'];
    nickname: Scalars['String'];
    realname: Scalars['String'];
    email: Scalars['String'];
    mobile: Scalars['String'];
    avatar: Scalars['String'];
    password: Scalars['String'];
};
export declare type UpdateUserInput = {
    schoolId?: Maybe<Scalars['Float']>;
    usertype?: Maybe<Scalars['Float']>;
    nickname?: Maybe<Scalars['String']>;
    realname?: Maybe<Scalars['String']>;
    email?: Maybe<Scalars['String']>;
    mobile?: Maybe<Scalars['String']>;
    avatar?: Maybe<Scalars['String']>;
    password?: Maybe<Scalars['String']>;
    id: Scalars['Int'];
};
export declare type CoursePackage = {
    __typename?: 'CoursePackage';
    id: Scalars['Float'];
    name: Scalars['String'];
    cover: Scalars['String'];
    introduce: Scalars['String'];
    level: Scalars['String'];
    tags: Scalars['String'];
    type: Scalars['String'];
    createdAt: Scalars['DateTime'];
    updatedAt: Scalars['DateTime'];
    remark: Scalars['String'];
    locked: Scalars['Float'];
};
export declare type CoursePageMeta = {
    __typename?: 'CoursePageMeta';
    count: Scalars['Int'];
};
export declare type Course = {
    __typename?: 'Course';
    id: Scalars['ID'];
    startedCover: Scalars['String'];
    noStartedCover: Scalars['String'];
    completedCover: Scalars['String'];
    name: Scalars['String'];
    mapId: Scalars['String'];
    mapType: Scalars['String'];
    creatorId: Scalars['ID'];
    description: Scalars['String'];
    teacherSuggest: Scalars['String'];
    remark: Scalars['String'];
    createdAt?: Maybe<Scalars['DateTime']>;
    updatedAt?: Maybe<Scalars['DateTime']>;
};
export declare type Qiniu = {
    __typename?: 'Qiniu';
    token: Scalars['String'];
};
export declare type CoursePackageFilter = {
    name?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['Int']>;
};
export declare type CourseFilter = {
    name?: Maybe<Scalars['String']>;
    packageId?: Maybe<Scalars['Float']>;
};
export declare type CreateCoursePackageInput = {
    name: Scalars['String'];
    cover: Scalars['String'];
    introduce: Scalars['String'];
    level: Scalars['String'];
    tags: Scalars['String'];
    type: Scalars['String'];
    createdAt: Scalars['DateTime'];
    updatedAt: Scalars['DateTime'];
    remark: Scalars['String'];
};
export declare type UpdateCoursePackageInput = {
    name?: Maybe<Scalars['String']>;
    cover?: Maybe<Scalars['String']>;
    introduce?: Maybe<Scalars['String']>;
    level?: Maybe<Scalars['String']>;
    tags?: Maybe<Scalars['String']>;
    type?: Maybe<Scalars['String']>;
    createdAt?: Maybe<Scalars['DateTime']>;
    updatedAt?: Maybe<Scalars['DateTime']>;
    remark?: Maybe<Scalars['String']>;
    id: Scalars['Int'];
    locked?: Maybe<Scalars['Float']>;
};
export declare type CreateCourseInput = {
    startedCover?: Maybe<Scalars['String']>;
    noStartedCover?: Maybe<Scalars['String']>;
    completedCover?: Maybe<Scalars['String']>;
    name: Scalars['String'];
    mapId: Scalars['String'];
    mapType?: Maybe<Scalars['String']>;
    creatorId?: Maybe<Scalars['Int']>;
    description?: Maybe<Scalars['String']>;
    teacherSuggest?: Maybe<Scalars['String']>;
};
export declare type UpdateCourseInput = {
    startedCover?: Maybe<Scalars['String']>;
    noStartedCover?: Maybe<Scalars['String']>;
    completedCover?: Maybe<Scalars['String']>;
    name?: Maybe<Scalars['String']>;
    mapId?: Maybe<Scalars['String']>;
    mapType?: Maybe<Scalars['String']>;
    creatorId?: Maybe<Scalars['Int']>;
    description?: Maybe<Scalars['String']>;
    teacherSuggest?: Maybe<Scalars['String']>;
    id: Scalars['Int'];
};
export declare type UsersQueryQueryVariables = Exact<{
    [key: string]: never;
}>;
export declare type UsersQueryQuery = ({
    __typename?: 'Query';
} & {
    users: Array<({
        __typename?: 'User';
    } & Pick<User, 'id' | 'username' | 'nickname' | 'realname' | 'usertype' | 'email' | 'mobile' | 'avatar'>)>;
});
export declare type UserQueryQueryVariables = Exact<{
    id: Scalars['Int'];
}>;
export declare type UserQueryQuery = ({
    __typename?: 'Query';
} & {
    user: ({
        __typename?: 'User';
    } & Pick<User, 'id' | 'username' | 'nickname' | 'realname' | 'usertype' | 'email' | 'mobile' | 'avatar'>);
});
export declare type GetCoursePackagesQueryQueryVariables = Exact<{
    filter?: Maybe<CoursePackageFilter>;
    sortOrder?: Maybe<Scalars['String']>;
    sortField?: Maybe<Scalars['String']>;
    perPage?: Maybe<Scalars['Int']>;
    page?: Maybe<Scalars['Int']>;
}>;
export declare type GetCoursePackagesQueryQuery = ({
    __typename?: 'Query';
} & {
    getCoursePackages: Array<({
        __typename?: 'CoursePackage';
    } & Pick<CoursePackage, 'id' | 'name' | 'cover' | 'introduce' | 'level' | 'tags' | 'type' | 'createdAt' | 'updatedAt' | 'remark' | 'locked'>)>;
});
export declare type GetCoursePackagesMetaQueryQueryVariables = Exact<{
    perPage?: Maybe<Scalars['Int']>;
    page?: Maybe<Scalars['Int']>;
    filter?: Maybe<CoursePackageFilter>;
}>;
export declare type GetCoursePackagesMetaQueryQuery = ({
    __typename?: 'Query';
} & {
    _getCoursePackagesMeta: ({
        __typename?: 'CoursePageMeta';
    } & Pick<CoursePageMeta, 'count'>);
});
export declare type GetCoursePackageQueryQueryVariables = Exact<{
    id: Scalars['Int'];
}>;
export declare type GetCoursePackageQueryQuery = ({
    __typename?: 'Query';
} & {
    getCoursePackage: ({
        __typename?: 'CoursePackage';
    } & Pick<CoursePackage, 'id' | 'name' | 'cover' | 'introduce' | 'level' | 'tags' | 'type' | 'createdAt' | 'updatedAt' | 'remark' | 'locked'>);
});
export declare type GetCoursesQueryQueryVariables = Exact<{
    filter?: Maybe<CourseFilter>;
    sortOrder?: Maybe<Scalars['String']>;
    sortField?: Maybe<Scalars['String']>;
    perPage?: Maybe<Scalars['Int']>;
    page?: Maybe<Scalars['Int']>;
}>;
export declare type GetCoursesQueryQuery = ({
    __typename?: 'Query';
} & {
    getCourses: Array<({
        __typename?: 'Course';
    } & Pick<Course, 'id' | 'startedCover' | 'noStartedCover' | 'completedCover' | 'name' | 'mapId' | 'mapType' | 'creatorId' | 'description' | 'teacherSuggest' | 'remark' | 'createdAt' | 'updatedAt'>)>;
});
export declare type GetCoursesMetaQueryQueryVariables = Exact<{
    perPage?: Maybe<Scalars['Int']>;
    page?: Maybe<Scalars['Int']>;
    filter?: Maybe<CourseFilter>;
}>;
export declare type GetCoursesMetaQueryQuery = ({
    __typename?: 'Query';
} & {
    _getCoursesMeta: ({
        __typename?: 'CoursePageMeta';
    } & Pick<CoursePageMeta, 'count'>);
});
export declare type GetCourseQueryQueryVariables = Exact<{
    id: Scalars['Int'];
}>;
export declare type GetCourseQueryQuery = ({
    __typename?: 'Query';
} & {
    getCourse: ({
        __typename?: 'Course';
    } & Pick<Course, 'id' | 'startedCover' | 'noStartedCover' | 'completedCover' | 'name' | 'mapId' | 'mapType' | 'creatorId' | 'description' | 'teacherSuggest' | 'remark' | 'createdAt' | 'updatedAt'>);
});
export declare type QiniuQueryQueryVariables = Exact<{
    scope: Scalars['String'];
}>;
export declare type QiniuQueryQuery = ({
    __typename?: 'Query';
} & {
    qiniu: ({
        __typename?: 'Qiniu';
    } & Pick<Qiniu, 'token'>);
});
export declare type CreateUserMutationMutationVariables = Exact<{
    createUserInput: CreateUserInput;
}>;
export declare type CreateUserMutationMutation = ({
    __typename?: 'Mutation';
} & {
    createUser: ({
        __typename?: 'User';
    } & Pick<User, 'id' | 'username' | 'nickname' | 'realname' | 'usertype' | 'email' | 'mobile' | 'avatar'>);
});
export declare type UpdateUserMutationMutationVariables = Exact<{
    updateUserInput: UpdateUserInput;
}>;
export declare type UpdateUserMutationMutation = ({
    __typename?: 'Mutation';
} & {
    updateUser: ({
        __typename?: 'User';
    } & Pick<User, 'id' | 'username' | 'nickname' | 'realname' | 'usertype' | 'email' | 'mobile' | 'avatar'>);
});
export declare type RemoveUserMutationMutationVariables = Exact<{
    id: Scalars['Int'];
}>;
export declare type RemoveUserMutationMutation = ({
    __typename?: 'Mutation';
} & {
    removeUser: ({
        __typename?: 'User';
    } & Pick<User, 'id' | 'username' | 'nickname' | 'realname' | 'usertype' | 'email' | 'mobile' | 'avatar'>);
});
export declare type CreateCoursePackageMutationMutationVariables = Exact<{
    createCoursePackageInput: CreateCoursePackageInput;
}>;
export declare type CreateCoursePackageMutationMutation = ({
    __typename?: 'Mutation';
} & {
    createCoursePackage: ({
        __typename?: 'CoursePackage';
    } & Pick<CoursePackage, 'id' | 'name' | 'cover' | 'introduce' | 'level' | 'tags' | 'type' | 'createdAt' | 'updatedAt' | 'remark' | 'locked'>);
});
export declare type UpdateCoursePackageMutationMutationVariables = Exact<{
    updateCoursePackageInput: UpdateCoursePackageInput;
}>;
export declare type UpdateCoursePackageMutationMutation = ({
    __typename?: 'Mutation';
} & {
    updateCoursePackage: ({
        __typename?: 'CoursePackage';
    } & Pick<CoursePackage, 'id' | 'name' | 'cover' | 'introduce' | 'level' | 'tags' | 'type' | 'createdAt' | 'updatedAt' | 'remark' | 'locked'>);
});
export declare type RemoveCoursePackageMutationMutationVariables = Exact<{
    id: Scalars['Int'];
}>;
export declare type RemoveCoursePackageMutationMutation = ({
    __typename?: 'Mutation';
} & {
    removeCoursePackage: ({
        __typename?: 'CoursePackage';
    } & Pick<CoursePackage, 'id' | 'name' | 'cover' | 'introduce' | 'level' | 'tags' | 'type' | 'createdAt' | 'updatedAt' | 'remark' | 'locked'>);
});
export declare type CreateCourseMutationMutationVariables = Exact<{
    createCourseInput: CreateCourseInput;
}>;
export declare type CreateCourseMutationMutation = ({
    __typename?: 'Mutation';
} & {
    createCourse: ({
        __typename?: 'Course';
    } & Pick<Course, 'id' | 'startedCover' | 'noStartedCover' | 'completedCover' | 'name' | 'mapId' | 'mapType' | 'creatorId' | 'description' | 'teacherSuggest' | 'remark' | 'createdAt' | 'updatedAt'>);
});
export declare type UpdateCourseMutationMutationVariables = Exact<{
    updateCourseInput: UpdateCourseInput;
}>;
export declare type UpdateCourseMutationMutation = ({
    __typename?: 'Mutation';
} & {
    updateCourse: ({
        __typename?: 'Course';
    } & Pick<Course, 'id' | 'startedCover' | 'noStartedCover' | 'completedCover' | 'name' | 'mapId' | 'mapType' | 'creatorId' | 'description' | 'teacherSuggest' | 'remark' | 'createdAt' | 'updatedAt'>);
});
export declare type RemoveCourseMutationMutationVariables = Exact<{
    id: Scalars['Int'];
}>;
export declare type RemoveCourseMutationMutation = ({
    __typename?: 'Mutation';
} & {
    removeCourse: ({
        __typename?: 'Course';
    } & Pick<Course, 'id' | 'startedCover' | 'noStartedCover' | 'completedCover' | 'name' | 'mapId' | 'mapType' | 'creatorId' | 'description' | 'teacherSuggest' | 'remark' | 'createdAt' | 'updatedAt'>);
});
export declare const UsersQueryDocument: DocumentNode;
export declare const UserQueryDocument: DocumentNode;
export declare const GetCoursePackagesQueryDocument: DocumentNode;
export declare const GetCoursePackagesMetaQueryDocument: DocumentNode;
export declare const GetCoursePackageQueryDocument: DocumentNode;
export declare const GetCoursesQueryDocument: DocumentNode;
export declare const GetCoursesMetaQueryDocument: DocumentNode;
export declare const GetCourseQueryDocument: DocumentNode;
export declare const QiniuQueryDocument: DocumentNode;
export declare const CreateUserMutationDocument: DocumentNode;
export declare const UpdateUserMutationDocument: DocumentNode;
export declare const RemoveUserMutationDocument: DocumentNode;
export declare const CreateCoursePackageMutationDocument: DocumentNode;
export declare const UpdateCoursePackageMutationDocument: DocumentNode;
export declare const RemoveCoursePackageMutationDocument: DocumentNode;
export declare const CreateCourseMutationDocument: DocumentNode;
export declare const UpdateCourseMutationDocument: DocumentNode;
export declare const RemoveCourseMutationDocument: DocumentNode;
export declare type Requester<C = {}> = <R, V>(doc: DocumentNode, vars?: V, options?: C) => Promise<R>;
export declare function getSdk<C>(requester: Requester<C>): {
    usersQuery(variables?: UsersQueryQueryVariables, options?: C): Promise<UsersQueryQuery>;
    userQuery(variables: UserQueryQueryVariables, options?: C): Promise<UserQueryQuery>;
    getCoursePackagesQuery(variables?: GetCoursePackagesQueryQueryVariables, options?: C): Promise<GetCoursePackagesQueryQuery>;
    getCoursePackagesMetaQuery(variables?: GetCoursePackagesMetaQueryQueryVariables, options?: C): Promise<GetCoursePackagesMetaQueryQuery>;
    getCoursePackageQuery(variables: GetCoursePackageQueryQueryVariables, options?: C): Promise<GetCoursePackageQueryQuery>;
    getCoursesQuery(variables?: GetCoursesQueryQueryVariables, options?: C): Promise<GetCoursesQueryQuery>;
    getCoursesMetaQuery(variables?: GetCoursesMetaQueryQueryVariables, options?: C): Promise<GetCoursesMetaQueryQuery>;
    getCourseQuery(variables: GetCourseQueryQueryVariables, options?: C): Promise<GetCourseQueryQuery>;
    qiniuQuery(variables: QiniuQueryQueryVariables, options?: C): Promise<QiniuQueryQuery>;
    createUserMutation(variables: CreateUserMutationMutationVariables, options?: C): Promise<CreateUserMutationMutation>;
    updateUserMutation(variables: UpdateUserMutationMutationVariables, options?: C): Promise<UpdateUserMutationMutation>;
    removeUserMutation(variables: RemoveUserMutationMutationVariables, options?: C): Promise<RemoveUserMutationMutation>;
    createCoursePackageMutation(variables: CreateCoursePackageMutationMutationVariables, options?: C): Promise<CreateCoursePackageMutationMutation>;
    updateCoursePackageMutation(variables: UpdateCoursePackageMutationMutationVariables, options?: C): Promise<UpdateCoursePackageMutationMutation>;
    removeCoursePackageMutation(variables: RemoveCoursePackageMutationMutationVariables, options?: C): Promise<RemoveCoursePackageMutationMutation>;
    createCourseMutation(variables: CreateCourseMutationMutationVariables, options?: C): Promise<CreateCourseMutationMutation>;
    updateCourseMutation(variables: UpdateCourseMutationMutationVariables, options?: C): Promise<UpdateCourseMutationMutation>;
    removeCourseMutation(variables: RemoveCourseMutationMutationVariables, options?: C): Promise<RemoveCourseMutationMutation>;
};
export declare type Sdk = ReturnType<typeof getSdk>;
