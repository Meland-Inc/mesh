import { DocumentNode } from 'graphql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
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
  __typename?: 'Query';
  users: Array<User>;
  user: User;
  profile: User;
  getCoursePackages: Array<CoursePackage>;
  _getCoursePackagesMeta: CoursePageMeta;
  getCoursePackage: CoursePackage;
  getCourses: Array<Course>;
  _getCoursesMeta: CoursePageMeta;
  getCourse: Course;
  qiniu: Qiniu;
  resourceBox: ResourceBox;
  puzzle: Puzzle;
  diy: Diy;
  getRewards: Array<Reward>;
  _getRewardsMeta: RewardPageMeta;
  reward: Reward;
  rewardLog: RewardLog;
};


export type QueryUserArgs = {
  id: Scalars['Int'];
};


export type QueryGetCoursePackagesArgs = {
  filter?: Maybe<CoursePackageFilter>;
  sortOrder?: Maybe<Scalars['String']>;
  sortField?: Maybe<Scalars['String']>;
  perPage?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
};


export type Query_GetCoursePackagesMetaArgs = {
  perPage?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  filter?: Maybe<CoursePackageFilter>;
};


export type QueryGetCoursePackageArgs = {
  id: Scalars['Int'];
};


export type QueryGetCoursesArgs = {
  filter?: Maybe<CourseFilter>;
  sortOrder?: Maybe<Scalars['String']>;
  sortField?: Maybe<Scalars['String']>;
  perPage?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
};


export type Query_GetCoursesMetaArgs = {
  perPage?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  filter?: Maybe<CourseFilter>;
};


export type QueryGetCourseArgs = {
  id: Scalars['Int'];
};


export type QueryQiniuArgs = {
  scope: Scalars['String'];
};


export type QueryResourceBoxArgs = {
  id: Scalars['Int'];
};


export type QueryPuzzleArgs = {
  id: Scalars['Int'];
};


export type QueryDiyArgs = {
  id: Scalars['Int'];
};


export type QueryGetRewardsArgs = {
  filter?: Maybe<RewardFilter>;
  sortOrder?: Maybe<Scalars['String']>;
  sortField?: Maybe<Scalars['String']>;
  perPage?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
};


export type Query_GetRewardsMetaArgs = {
  perPage?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  filter?: Maybe<RewardFilter>;
};


export type QueryRewardArgs = {
  id: Scalars['Int'];
};


export type QueryRewardLogArgs = {
  id: Scalars['Int'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createUser: User;
  updateUser: User;
  removeUser: User;
  login: Auth;
  createCoursePackage: CoursePackage;
  updateCoursePackage: CoursePackage;
  removeCoursePackage: CoursePackage;
  updateCoursesInPackage: Array<CoursePackageMap>;
  createCourse: Course;
  updateCourse: Course;
  removeCourse: Course;
  createResourceBox: ResourceBox;
  updateResourceBox: ResourceBox;
  removeResourceBox: ResourceBox;
  createPuzzle: Puzzle;
  updatePuzzle: Puzzle;
  removePuzzle: Puzzle;
  createDiy: Diy;
  updateDiy: Diy;
  removeDiy: Diy;
  createReward: Reward;
  removeReward: Scalars['Int'];
  createRewardLog: RewardLog;
};


export type MutationCreateUserArgs = {
  createUserInput: CreateUserInput;
};


export type MutationUpdateUserArgs = {
  updateUserInput: UpdateUserInput;
};


export type MutationRemoveUserArgs = {
  id: Scalars['Int'];
};


export type MutationLoginArgs = {
  loginInput: LoginInput;
};


export type MutationCreateCoursePackageArgs = {
  createCoursePackageInput: CreateCoursePackageInput;
};


export type MutationUpdateCoursePackageArgs = {
  updateCoursePackageInput: UpdateCoursePackageInput;
};


export type MutationRemoveCoursePackageArgs = {
  id: Scalars['Int'];
};


export type MutationUpdateCoursesInPackageArgs = {
  updateCoursesInPackageInput: Array<UpdateCoursePackageMapInput>;
  packageId: Scalars['Int'];
};


export type MutationCreateCourseArgs = {
  createCourseInput: CreateCourseInput;
};


export type MutationUpdateCourseArgs = {
  updateCourseInput: UpdateCourseInput;
};


export type MutationRemoveCourseArgs = {
  id: Scalars['Int'];
};


export type MutationCreateResourceBoxArgs = {
  createResourceBoxInput: CreateResourceBoxInput;
};


export type MutationUpdateResourceBoxArgs = {
  updateResourceBoxInput: UpdateResourceBoxInput;
};


export type MutationRemoveResourceBoxArgs = {
  id: Scalars['Int'];
};


export type MutationCreatePuzzleArgs = {
  createPuzzleInput: CreatePuzzleInput;
};


export type MutationUpdatePuzzleArgs = {
  updatePuzzleInput: UpdatePuzzleInput;
};


export type MutationRemovePuzzleArgs = {
  id: Scalars['Int'];
};


export type MutationCreateDiyArgs = {
  createDiyInput: CreateDiyInput;
};


export type MutationUpdateDiyArgs = {
  updateDiyInput: UpdateDiyInput;
};


export type MutationRemoveDiyArgs = {
  id: Scalars['Int'];
};


export type MutationCreateRewardArgs = {
  createRewardInput: CreateRewardInput;
};


export type MutationRemoveRewardArgs = {
  id: Scalars['Int'];
};


export type MutationCreateRewardLogArgs = {
  createRewardLogInput: CreateRewardLogInput;
};

export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  /** 用户账号 */
  username: Scalars['String'];
  /** 用户昵称 */
  nickname: Scalars['String'];
  /** 用户真实姓名 */
  realname: Scalars['String'];
  /** 用户类型 */
  usertype: Scalars['Float'];
  /** 用户邮箱 */
  email: Scalars['String'];
  /** 用户手机号码 */
  mobile: Scalars['String'];
  /** 用户头像 */
  avatar: Scalars['String'];
};

export type Auth = {
  __typename?: 'Auth';
  /**
   * /// 用户登陆后的 accessToken.
   * /// 前端可以存储在localStorage或Cookie.
   * /// 在每次请求的的时候携带到 headers 上
   * /// Authorization: Bearer ${accessToken}
   */
  accessToken: Scalars['String'];
};

export type CreateUserInput = {
  /** 用户账号 */
  schoolId: Scalars['Float'];
  /** 用户账号 */
  username: Scalars['String'];
  /** 用户类型 */
  usertype: Scalars['Float'];
  /** 用户昵称 */
  nickname: Scalars['String'];
  /** 用户真实姓名 */
  realname: Scalars['String'];
  /** 用户邮箱 */
  email: Scalars['String'];
  /** 用户手机号码 */
  mobile: Scalars['String'];
  /** 用户头像 */
  avatar: Scalars['String'];
  /** 用户密码 */
  password: Scalars['String'];
};

export type UpdateUserInput = {
  /** 用户账号 */
  schoolId?: Maybe<Scalars['Float']>;
  /** 用户类型 */
  usertype?: Maybe<Scalars['Float']>;
  /** 用户昵称 */
  nickname?: Maybe<Scalars['String']>;
  /** 用户真实姓名 */
  realname?: Maybe<Scalars['String']>;
  /** 用户邮箱 */
  email?: Maybe<Scalars['String']>;
  /** 用户手机号码 */
  mobile?: Maybe<Scalars['String']>;
  /** 用户头像 */
  avatar?: Maybe<Scalars['String']>;
  /** 用户密码 */
  password?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
};

export type LoginInput = {
  /** 用户名称 */
  username: Scalars['String'];
  /** 用户密码 */
  password: Scalars['String'];
};

export type CoursePageMeta = {
  __typename?: 'CoursePageMeta';
  count: Scalars['Int'];
};

export type CoursePackageMap = {
  __typename?: 'CoursePackageMap';
  id: Scalars['Float'];
  courseId: Scalars['Float'];
  packageId: Scalars['Float'];
  index: Scalars['Float'];
};

export type CoursePackage = {
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


export type Course = {
  __typename?: 'Course';
  id: Scalars['ID'];
  /** 已开课课程封面 */
  startedCover: Scalars['String'];
  /** 未开课课程封面 */
  noStartedCover: Scalars['String'];
  /** 已完课课程封面 */
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

export type Qiniu = {
  __typename?: 'Qiniu';
  /** 七牛上传token */
  token: Scalars['String'];
};

export type CoursePackageFilter = {
  name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
};

export type CourseFilter = {
  name?: Maybe<Scalars['String']>;
};

export type CreateCoursePackageInput = {
  name: Scalars['String'];
  cover: Scalars['String'];
  /** 课程包介绍 */
  introduce: Scalars['String'];
  level: Scalars['String'];
  tags: Scalars['String'];
  type: Scalars['String'];
  remark: Scalars['String'];
};

export type UpdateCoursePackageInput = {
  name?: Maybe<Scalars['String']>;
  cover?: Maybe<Scalars['String']>;
  /** 课程包介绍 */
  introduce?: Maybe<Scalars['String']>;
  level?: Maybe<Scalars['String']>;
  tags?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  remark?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  locked?: Maybe<Scalars['Float']>;
};

export type UpdateCoursePackageMapInput = {
  courseId: Scalars['Int'];
  index: Scalars['Int'];
};

export type CreateCourseInput = {
  /** 已开课课程封面 */
  startedCover?: Maybe<Scalars['String']>;
  /** 未开课课程封面 */
  noStartedCover?: Maybe<Scalars['String']>;
  /** 已完课课程封面 */
  completedCover?: Maybe<Scalars['String']>;
  /** 课程名称 */
  name: Scalars['String'];
  /** 地图id */
  mapId: Scalars['String'];
  /** 地图类型 */
  mapType?: Maybe<Scalars['String']>;
  /** 创建者id */
  creatorId?: Maybe<Scalars['Int']>;
  /** 课程描述 */
  description?: Maybe<Scalars['String']>;
  /** 教师建议 */
  teacherSuggest?: Maybe<Scalars['String']>;
  /** 备注 */
  remark?: Maybe<Scalars['String']>;
};

export type UpdateCourseInput = {
  /** 已开课课程封面 */
  startedCover?: Maybe<Scalars['String']>;
  /** 未开课课程封面 */
  noStartedCover?: Maybe<Scalars['String']>;
  /** 已完课课程封面 */
  completedCover?: Maybe<Scalars['String']>;
  /** 课程名称 */
  name?: Maybe<Scalars['String']>;
  /** 地图id */
  mapId?: Maybe<Scalars['String']>;
  /** 地图类型 */
  mapType?: Maybe<Scalars['String']>;
  /** 创建者id */
  creatorId?: Maybe<Scalars['Int']>;
  /** 课程描述 */
  description?: Maybe<Scalars['String']>;
  /** 教师建议 */
  teacherSuggest?: Maybe<Scalars['String']>;
  /** 备注 */
  remark?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
};

export type ResourceBox = {
  __typename?: 'ResourceBox';
  id: Scalars['Int'];
  description: Scalars['String'];
};

export type Puzzle = {
  __typename?: 'Puzzle';
  id: Scalars['Float'];
  studentProjectId: Scalars['Float'];
  type: Scalars['String'];
  answerProjectId: Scalars['Float'];
  name: Scalars['String'];
  cover: Scalars['String'];
  codeBlocks: Scalars['String'];
  baseBlocks: Scalars['String'];
  roles: Scalars['String'];
  backgroundDesc: Scalars['String'];
  backgroundDescVoiceUrl: Scalars['String'];
  targetTime: Scalars['Float'];
  answerCover: Scalars['String'];
  answerM: Scalars['Float'];
  answerN: Scalars['Float'];
  resolveDelayTime: Scalars['Float'];
  rejectDelayTime: Scalars['Float'];
  expectCompleteTime: Scalars['Float'];
  notOperationTalkingRole: Scalars['String'];
  timeOutTalkingRole: Scalars['String'];
  extraInfo: Scalars['String'];
  puzzleStatus: Scalars['String'];
  status: Scalars['Float'];
};

export type Diy = {
  __typename?: 'Diy';
  id: Scalars['Float'];
  name: Scalars['String'];
};

export type RewardCodenum = {
  __typename?: 'RewardCodenum';
  id: Scalars['Int'];
  count: Scalars['Int'];
};

export type RewardGoldenum = {
  __typename?: 'RewardGoldenum';
  id: Scalars['Int'];
  count: Scalars['Int'];
};

export type Reward = {
  __typename?: 'Reward';
  id: Scalars['Int'];
  type: Scalars['String'];
  typeId: Scalars['Float'];
  receiveType: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  goldnum?: Maybe<RewardGoldenum>;
  codenum?: Maybe<RewardCodenum>;
};

export type RewardLog = {
  __typename?: 'RewardLog';
  id: Scalars['Int'];
  type: Scalars['String'];
  typeId: Scalars['Float'];
  receiveType: Scalars['String'];
  creatorId: Scalars['Float'];
  receiverId: Scalars['Float'];
  state: Scalars['String'];
  createdAt: Scalars['DateTime'];
  receivedAt: Scalars['DateTime'];
  goldnum?: Maybe<RewardGoldenum>;
  codenum?: Maybe<RewardCodenum>;
};

export type RewardPageMeta = {
  __typename?: 'RewardPageMeta';
  count: Scalars['Int'];
};

export type RewardFilter = {
  type?: Maybe<Scalars['String']>;
};

export type CreateResourceBoxInput = {
  /** 资源名称 */
  name: Scalars['String'];
  /** 资源描述 */
  description: Scalars['String'];
  /** 资源类型 */
  type: Scalars['String'];
  /** 对应的资源ID */
  typeId: Scalars['String'];
};

export type UpdateResourceBoxInput = {
  /** 资源名称 */
  name?: Maybe<Scalars['String']>;
  /** 资源描述 */
  description?: Maybe<Scalars['String']>;
  /** 资源类型 */
  type?: Maybe<Scalars['String']>;
  /** 对应的资源ID */
  typeId?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
};

export type CreatePuzzleInput = {
  studentProjectId: Scalars['Float'];
  type: Scalars['String'];
  answerProjectId: Scalars['Float'];
  name: Scalars['String'];
  cover: Scalars['String'];
  codeBlocks?: Maybe<Scalars['String']>;
  baseBlocks?: Maybe<Scalars['String']>;
  roles: Scalars['String'];
  backgroundDesc?: Maybe<Scalars['String']>;
  backgroundDescVoiceUrl: Scalars['String'];
  targetTime: Scalars['Float'];
  answerCover: Scalars['String'];
  answerM: Scalars['Float'];
  answerN: Scalars['Float'];
  resolveDelayTime?: Maybe<Scalars['Float']>;
  rejectDelayTime: Scalars['Float'];
  expectCompleteTime: Scalars['Float'];
  notOperationTalkingRole: Scalars['String'];
  timeOutTalkingRole: Scalars['String'];
  extraInfo: Scalars['String'];
  puzzleStatus: Scalars['String'];
};

export type UpdatePuzzleInput = {
  studentProjectId?: Maybe<Scalars['Float']>;
  type?: Maybe<Scalars['String']>;
  answerProjectId?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  cover?: Maybe<Scalars['String']>;
  codeBlocks?: Maybe<Scalars['String']>;
  baseBlocks?: Maybe<Scalars['String']>;
  roles?: Maybe<Scalars['String']>;
  backgroundDesc?: Maybe<Scalars['String']>;
  backgroundDescVoiceUrl?: Maybe<Scalars['String']>;
  targetTime?: Maybe<Scalars['Float']>;
  answerCover?: Maybe<Scalars['String']>;
  answerM?: Maybe<Scalars['Float']>;
  answerN?: Maybe<Scalars['Float']>;
  resolveDelayTime?: Maybe<Scalars['Float']>;
  rejectDelayTime?: Maybe<Scalars['Float']>;
  expectCompleteTime?: Maybe<Scalars['Float']>;
  notOperationTalkingRole?: Maybe<Scalars['String']>;
  timeOutTalkingRole?: Maybe<Scalars['String']>;
  extraInfo?: Maybe<Scalars['String']>;
  puzzleStatus?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
};

export type CreateDiyInput = {
  /** name */
  name: Scalars['String'];
  /** project_id */
  projectId: Scalars['Int'];
  /** answer_project_id */
  answerProjectId: Scalars['Int'];
  /** 备注 */
  remark?: Maybe<Scalars['String']>;
  diyTarget?: Maybe<Scalars['String']>;
  guide?: Maybe<Scalars['String']>;
  recordedMediaGuide?: Maybe<Scalars['String']>;
};

export type UpdateDiyInput = {
  /** name */
  name?: Maybe<Scalars['String']>;
  /** project_id */
  projectId?: Maybe<Scalars['Int']>;
  /** answer_project_id */
  answerProjectId?: Maybe<Scalars['Int']>;
  /** 备注 */
  remark?: Maybe<Scalars['String']>;
  diyTarget?: Maybe<Scalars['String']>;
  guide?: Maybe<Scalars['String']>;
  recordedMediaGuide?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
};

export type CreateRewardInput = {
  goldnum?: Maybe<RewardGodenumInput>;
  codenum?: Maybe<RewardCodenumInput>;
  receiveType: Scalars['String'];
};

export type RewardGodenumInput = {
  count: Scalars['Int'];
};

export type RewardCodenumInput = {
  count: Scalars['Int'];
};

export type CreateRewardLogInput = {
  creatorId: Scalars['Float'];
  receiverId: Scalars['Float'];
  createRewardInput?: Maybe<CreateRewardInput>;
  rewardId?: Maybe<Scalars['Float']>;
};

export type UsersQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type UsersQueryQuery = (
  { __typename?: 'Query' }
  & { users: Array<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'username' | 'nickname' | 'realname' | 'usertype' | 'email' | 'mobile' | 'avatar'>
  )> }
);

export type UserQueryQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type UserQueryQuery = (
  { __typename?: 'Query' }
  & { user: (
    { __typename?: 'User' }
    & Pick<User, 'id' | 'username' | 'nickname' | 'realname' | 'usertype' | 'email' | 'mobile' | 'avatar'>
  ) }
);

export type ProfileQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type ProfileQueryQuery = (
  { __typename?: 'Query' }
  & { profile: (
    { __typename?: 'User' }
    & Pick<User, 'id' | 'username' | 'nickname' | 'realname' | 'usertype' | 'email' | 'mobile' | 'avatar'>
  ) }
);

export type GetCoursePackagesQueryQueryVariables = Exact<{
  filter?: Maybe<CoursePackageFilter>;
  sortOrder?: Maybe<Scalars['String']>;
  sortField?: Maybe<Scalars['String']>;
  perPage?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
}>;


export type GetCoursePackagesQueryQuery = (
  { __typename?: 'Query' }
  & { getCoursePackages: Array<(
    { __typename?: 'CoursePackage' }
    & Pick<CoursePackage, 'id' | 'name' | 'cover' | 'introduce' | 'level' | 'tags' | 'type' | 'createdAt' | 'updatedAt' | 'remark' | 'locked'>
  )> }
);

export type GetCoursePackagesMetaQueryQueryVariables = Exact<{
  perPage?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  filter?: Maybe<CoursePackageFilter>;
}>;


export type GetCoursePackagesMetaQueryQuery = (
  { __typename?: 'Query' }
  & { _getCoursePackagesMeta: (
    { __typename?: 'CoursePageMeta' }
    & Pick<CoursePageMeta, 'count'>
  ) }
);

export type GetCoursePackageQueryQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type GetCoursePackageQueryQuery = (
  { __typename?: 'Query' }
  & { getCoursePackage: (
    { __typename?: 'CoursePackage' }
    & Pick<CoursePackage, 'id' | 'name' | 'cover' | 'introduce' | 'level' | 'tags' | 'type' | 'createdAt' | 'updatedAt' | 'remark' | 'locked'>
  ) }
);

export type GetCoursesQueryQueryVariables = Exact<{
  filter?: Maybe<CourseFilter>;
  sortOrder?: Maybe<Scalars['String']>;
  sortField?: Maybe<Scalars['String']>;
  perPage?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
}>;


export type GetCoursesQueryQuery = (
  { __typename?: 'Query' }
  & { getCourses: Array<(
    { __typename?: 'Course' }
    & Pick<Course, 'id' | 'startedCover' | 'noStartedCover' | 'completedCover' | 'name' | 'mapId' | 'mapType' | 'creatorId' | 'description' | 'teacherSuggest' | 'remark' | 'createdAt' | 'updatedAt'>
  )> }
);

export type GetCoursesMetaQueryQueryVariables = Exact<{
  perPage?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  filter?: Maybe<CourseFilter>;
}>;


export type GetCoursesMetaQueryQuery = (
  { __typename?: 'Query' }
  & { _getCoursesMeta: (
    { __typename?: 'CoursePageMeta' }
    & Pick<CoursePageMeta, 'count'>
  ) }
);

export type GetCourseQueryQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type GetCourseQueryQuery = (
  { __typename?: 'Query' }
  & { getCourse: (
    { __typename?: 'Course' }
    & Pick<Course, 'id' | 'startedCover' | 'noStartedCover' | 'completedCover' | 'name' | 'mapId' | 'mapType' | 'creatorId' | 'description' | 'teacherSuggest' | 'remark' | 'createdAt' | 'updatedAt'>
  ) }
);

export type QiniuQueryQueryVariables = Exact<{
  scope: Scalars['String'];
}>;


export type QiniuQueryQuery = (
  { __typename?: 'Query' }
  & { qiniu: (
    { __typename?: 'Qiniu' }
    & Pick<Qiniu, 'token'>
  ) }
);

export type ResourceBoxQueryQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type ResourceBoxQueryQuery = (
  { __typename?: 'Query' }
  & { resourceBox: (
    { __typename?: 'ResourceBox' }
    & Pick<ResourceBox, 'id' | 'description'>
  ) }
);

export type PuzzleQueryQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type PuzzleQueryQuery = (
  { __typename?: 'Query' }
  & { puzzle: (
    { __typename?: 'Puzzle' }
    & Pick<Puzzle, 'id' | 'studentProjectId' | 'type' | 'answerProjectId' | 'name' | 'cover' | 'codeBlocks' | 'baseBlocks' | 'roles' | 'backgroundDesc' | 'backgroundDescVoiceUrl' | 'targetTime' | 'answerCover' | 'answerM' | 'answerN' | 'resolveDelayTime' | 'rejectDelayTime' | 'expectCompleteTime' | 'notOperationTalkingRole' | 'timeOutTalkingRole' | 'extraInfo' | 'puzzleStatus' | 'status'>
  ) }
);

export type DiyQueryQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type DiyQueryQuery = (
  { __typename?: 'Query' }
  & { diy: (
    { __typename?: 'Diy' }
    & Pick<Diy, 'id' | 'name'>
  ) }
);

export type GetRewardsQueryQueryVariables = Exact<{
  filter?: Maybe<RewardFilter>;
  sortOrder?: Maybe<Scalars['String']>;
  sortField?: Maybe<Scalars['String']>;
  perPage?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
}>;


export type GetRewardsQueryQuery = (
  { __typename?: 'Query' }
  & { getRewards: Array<(
    { __typename?: 'Reward' }
    & Pick<Reward, 'id' | 'type' | 'typeId' | 'receiveType' | 'createdAt' | 'updatedAt'>
  )> }
);

export type GetRewardsMetaQueryQueryVariables = Exact<{
  perPage?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  filter?: Maybe<RewardFilter>;
}>;


export type GetRewardsMetaQueryQuery = (
  { __typename?: 'Query' }
  & { _getRewardsMeta: (
    { __typename?: 'RewardPageMeta' }
    & Pick<RewardPageMeta, 'count'>
  ) }
);

export type RewardQueryQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type RewardQueryQuery = (
  { __typename?: 'Query' }
  & { reward: (
    { __typename?: 'Reward' }
    & Pick<Reward, 'id' | 'type' | 'typeId' | 'receiveType' | 'createdAt' | 'updatedAt'>
  ) }
);

export type RewardLogQueryQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type RewardLogQueryQuery = (
  { __typename?: 'Query' }
  & { rewardLog: (
    { __typename?: 'RewardLog' }
    & Pick<RewardLog, 'id' | 'type' | 'typeId' | 'receiveType' | 'creatorId' | 'receiverId' | 'state' | 'createdAt' | 'receivedAt'>
  ) }
);

export type CreateUserMutationMutationVariables = Exact<{
  createUserInput: CreateUserInput;
}>;


export type CreateUserMutationMutation = (
  { __typename?: 'Mutation' }
  & { createUser: (
    { __typename?: 'User' }
    & Pick<User, 'id' | 'username' | 'nickname' | 'realname' | 'usertype' | 'email' | 'mobile' | 'avatar'>
  ) }
);

export type UpdateUserMutationMutationVariables = Exact<{
  updateUserInput: UpdateUserInput;
}>;


export type UpdateUserMutationMutation = (
  { __typename?: 'Mutation' }
  & { updateUser: (
    { __typename?: 'User' }
    & Pick<User, 'id' | 'username' | 'nickname' | 'realname' | 'usertype' | 'email' | 'mobile' | 'avatar'>
  ) }
);

export type RemoveUserMutationMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type RemoveUserMutationMutation = (
  { __typename?: 'Mutation' }
  & { removeUser: (
    { __typename?: 'User' }
    & Pick<User, 'id' | 'username' | 'nickname' | 'realname' | 'usertype' | 'email' | 'mobile' | 'avatar'>
  ) }
);

export type LoginMutationMutationVariables = Exact<{
  loginInput: LoginInput;
}>;


export type LoginMutationMutation = (
  { __typename?: 'Mutation' }
  & { login: (
    { __typename?: 'Auth' }
    & Pick<Auth, 'accessToken'>
  ) }
);

export type CreateCoursePackageMutationMutationVariables = Exact<{
  createCoursePackageInput: CreateCoursePackageInput;
}>;


export type CreateCoursePackageMutationMutation = (
  { __typename?: 'Mutation' }
  & { createCoursePackage: (
    { __typename?: 'CoursePackage' }
    & Pick<CoursePackage, 'id' | 'name' | 'cover' | 'introduce' | 'level' | 'tags' | 'type' | 'createdAt' | 'updatedAt' | 'remark' | 'locked'>
  ) }
);

export type UpdateCoursePackageMutationMutationVariables = Exact<{
  updateCoursePackageInput: UpdateCoursePackageInput;
}>;


export type UpdateCoursePackageMutationMutation = (
  { __typename?: 'Mutation' }
  & { updateCoursePackage: (
    { __typename?: 'CoursePackage' }
    & Pick<CoursePackage, 'id' | 'name' | 'cover' | 'introduce' | 'level' | 'tags' | 'type' | 'createdAt' | 'updatedAt' | 'remark' | 'locked'>
  ) }
);

export type RemoveCoursePackageMutationMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type RemoveCoursePackageMutationMutation = (
  { __typename?: 'Mutation' }
  & { removeCoursePackage: (
    { __typename?: 'CoursePackage' }
    & Pick<CoursePackage, 'id' | 'name' | 'cover' | 'introduce' | 'level' | 'tags' | 'type' | 'createdAt' | 'updatedAt' | 'remark' | 'locked'>
  ) }
);

export type UpdateCoursesInPackageMutationMutationVariables = Exact<{
  updateCoursesInPackageInput: Array<UpdateCoursePackageMapInput> | UpdateCoursePackageMapInput;
  packageId: Scalars['Int'];
}>;


export type UpdateCoursesInPackageMutationMutation = (
  { __typename?: 'Mutation' }
  & { updateCoursesInPackage: Array<(
    { __typename?: 'CoursePackageMap' }
    & Pick<CoursePackageMap, 'id' | 'courseId' | 'packageId' | 'index'>
  )> }
);

export type CreateCourseMutationMutationVariables = Exact<{
  createCourseInput: CreateCourseInput;
}>;


export type CreateCourseMutationMutation = (
  { __typename?: 'Mutation' }
  & { createCourse: (
    { __typename?: 'Course' }
    & Pick<Course, 'id' | 'startedCover' | 'noStartedCover' | 'completedCover' | 'name' | 'mapId' | 'mapType' | 'creatorId' | 'description' | 'teacherSuggest' | 'remark' | 'createdAt' | 'updatedAt'>
  ) }
);

export type UpdateCourseMutationMutationVariables = Exact<{
  updateCourseInput: UpdateCourseInput;
}>;


export type UpdateCourseMutationMutation = (
  { __typename?: 'Mutation' }
  & { updateCourse: (
    { __typename?: 'Course' }
    & Pick<Course, 'id' | 'startedCover' | 'noStartedCover' | 'completedCover' | 'name' | 'mapId' | 'mapType' | 'creatorId' | 'description' | 'teacherSuggest' | 'remark' | 'createdAt' | 'updatedAt'>
  ) }
);

export type RemoveCourseMutationMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type RemoveCourseMutationMutation = (
  { __typename?: 'Mutation' }
  & { removeCourse: (
    { __typename?: 'Course' }
    & Pick<Course, 'id' | 'startedCover' | 'noStartedCover' | 'completedCover' | 'name' | 'mapId' | 'mapType' | 'creatorId' | 'description' | 'teacherSuggest' | 'remark' | 'createdAt' | 'updatedAt'>
  ) }
);

export type CreateResourceBoxMutationMutationVariables = Exact<{
  createResourceBoxInput: CreateResourceBoxInput;
}>;


export type CreateResourceBoxMutationMutation = (
  { __typename?: 'Mutation' }
  & { createResourceBox: (
    { __typename?: 'ResourceBox' }
    & Pick<ResourceBox, 'id' | 'description'>
  ) }
);

export type UpdateResourceBoxMutationMutationVariables = Exact<{
  updateResourceBoxInput: UpdateResourceBoxInput;
}>;


export type UpdateResourceBoxMutationMutation = (
  { __typename?: 'Mutation' }
  & { updateResourceBox: (
    { __typename?: 'ResourceBox' }
    & Pick<ResourceBox, 'id' | 'description'>
  ) }
);

export type RemoveResourceBoxMutationMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type RemoveResourceBoxMutationMutation = (
  { __typename?: 'Mutation' }
  & { removeResourceBox: (
    { __typename?: 'ResourceBox' }
    & Pick<ResourceBox, 'id' | 'description'>
  ) }
);

export type CreatePuzzleMutationMutationVariables = Exact<{
  createPuzzleInput: CreatePuzzleInput;
}>;


export type CreatePuzzleMutationMutation = (
  { __typename?: 'Mutation' }
  & { createPuzzle: (
    { __typename?: 'Puzzle' }
    & Pick<Puzzle, 'id' | 'studentProjectId' | 'type' | 'answerProjectId' | 'name' | 'cover' | 'codeBlocks' | 'baseBlocks' | 'roles' | 'backgroundDesc' | 'backgroundDescVoiceUrl' | 'targetTime' | 'answerCover' | 'answerM' | 'answerN' | 'resolveDelayTime' | 'rejectDelayTime' | 'expectCompleteTime' | 'notOperationTalkingRole' | 'timeOutTalkingRole' | 'extraInfo' | 'puzzleStatus' | 'status'>
  ) }
);

export type UpdatePuzzleMutationMutationVariables = Exact<{
  updatePuzzleInput: UpdatePuzzleInput;
}>;


export type UpdatePuzzleMutationMutation = (
  { __typename?: 'Mutation' }
  & { updatePuzzle: (
    { __typename?: 'Puzzle' }
    & Pick<Puzzle, 'id' | 'studentProjectId' | 'type' | 'answerProjectId' | 'name' | 'cover' | 'codeBlocks' | 'baseBlocks' | 'roles' | 'backgroundDesc' | 'backgroundDescVoiceUrl' | 'targetTime' | 'answerCover' | 'answerM' | 'answerN' | 'resolveDelayTime' | 'rejectDelayTime' | 'expectCompleteTime' | 'notOperationTalkingRole' | 'timeOutTalkingRole' | 'extraInfo' | 'puzzleStatus' | 'status'>
  ) }
);

export type RemovePuzzleMutationMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type RemovePuzzleMutationMutation = (
  { __typename?: 'Mutation' }
  & { removePuzzle: (
    { __typename?: 'Puzzle' }
    & Pick<Puzzle, 'id' | 'studentProjectId' | 'type' | 'answerProjectId' | 'name' | 'cover' | 'codeBlocks' | 'baseBlocks' | 'roles' | 'backgroundDesc' | 'backgroundDescVoiceUrl' | 'targetTime' | 'answerCover' | 'answerM' | 'answerN' | 'resolveDelayTime' | 'rejectDelayTime' | 'expectCompleteTime' | 'notOperationTalkingRole' | 'timeOutTalkingRole' | 'extraInfo' | 'puzzleStatus' | 'status'>
  ) }
);

export type CreateDiyMutationMutationVariables = Exact<{
  createDiyInput: CreateDiyInput;
}>;


export type CreateDiyMutationMutation = (
  { __typename?: 'Mutation' }
  & { createDiy: (
    { __typename?: 'Diy' }
    & Pick<Diy, 'id' | 'name'>
  ) }
);

export type UpdateDiyMutationMutationVariables = Exact<{
  updateDiyInput: UpdateDiyInput;
}>;


export type UpdateDiyMutationMutation = (
  { __typename?: 'Mutation' }
  & { updateDiy: (
    { __typename?: 'Diy' }
    & Pick<Diy, 'id' | 'name'>
  ) }
);

export type RemoveDiyMutationMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type RemoveDiyMutationMutation = (
  { __typename?: 'Mutation' }
  & { removeDiy: (
    { __typename?: 'Diy' }
    & Pick<Diy, 'id' | 'name'>
  ) }
);

export type CreateRewardMutationMutationVariables = Exact<{
  createRewardInput: CreateRewardInput;
}>;


export type CreateRewardMutationMutation = (
  { __typename?: 'Mutation' }
  & { createReward: (
    { __typename?: 'Reward' }
    & Pick<Reward, 'id' | 'type' | 'typeId' | 'receiveType' | 'createdAt' | 'updatedAt'>
  ) }
);

export type RemoveRewardMutationMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type RemoveRewardMutationMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'removeReward'>
);

export type CreateRewardLogMutationMutationVariables = Exact<{
  createRewardLogInput: CreateRewardLogInput;
}>;


export type CreateRewardLogMutationMutation = (
  { __typename?: 'Mutation' }
  & { createRewardLog: (
    { __typename?: 'RewardLog' }
    & Pick<RewardLog, 'id' | 'type' | 'typeId' | 'receiveType' | 'creatorId' | 'receiverId' | 'state' | 'createdAt' | 'receivedAt'>
  ) }
);


export const UsersQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"usersQuery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"users"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"nickname"}},{"kind":"Field","name":{"kind":"Name","value":"realname"}},{"kind":"Field","name":{"kind":"Name","value":"usertype"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"mobile"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}}]}}]} as unknown as DocumentNode;
export const UserQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"userQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"nickname"}},{"kind":"Field","name":{"kind":"Name","value":"realname"}},{"kind":"Field","name":{"kind":"Name","value":"usertype"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"mobile"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}}]}}]} as unknown as DocumentNode;
export const ProfileQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"profileQuery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"profile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"nickname"}},{"kind":"Field","name":{"kind":"Name","value":"realname"}},{"kind":"Field","name":{"kind":"Name","value":"usertype"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"mobile"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}}]}}]} as unknown as DocumentNode;
export const GetCoursePackagesQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getCoursePackagesQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"CoursePackageFilter"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sortOrder"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sortField"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"perPage"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getCoursePackages"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}},{"kind":"Argument","name":{"kind":"Name","value":"sortOrder"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sortOrder"}}},{"kind":"Argument","name":{"kind":"Name","value":"sortField"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sortField"}}},{"kind":"Argument","name":{"kind":"Name","value":"perPage"},"value":{"kind":"Variable","name":{"kind":"Name","value":"perPage"}}},{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"cover"}},{"kind":"Field","name":{"kind":"Name","value":"introduce"}},{"kind":"Field","name":{"kind":"Name","value":"level"}},{"kind":"Field","name":{"kind":"Name","value":"tags"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"remark"}},{"kind":"Field","name":{"kind":"Name","value":"locked"}}]}}]}}]} as unknown as DocumentNode;
export const GetCoursePackagesMetaQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getCoursePackagesMetaQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"perPage"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"CoursePackageFilter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_getCoursePackagesMeta"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"perPage"},"value":{"kind":"Variable","name":{"kind":"Name","value":"perPage"}}},{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}}]} as unknown as DocumentNode;
export const GetCoursePackageQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getCoursePackageQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getCoursePackage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"cover"}},{"kind":"Field","name":{"kind":"Name","value":"introduce"}},{"kind":"Field","name":{"kind":"Name","value":"level"}},{"kind":"Field","name":{"kind":"Name","value":"tags"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"remark"}},{"kind":"Field","name":{"kind":"Name","value":"locked"}}]}}]}}]} as unknown as DocumentNode;
export const GetCoursesQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getCoursesQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"CourseFilter"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sortOrder"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sortField"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"perPage"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getCourses"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}},{"kind":"Argument","name":{"kind":"Name","value":"sortOrder"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sortOrder"}}},{"kind":"Argument","name":{"kind":"Name","value":"sortField"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sortField"}}},{"kind":"Argument","name":{"kind":"Name","value":"perPage"},"value":{"kind":"Variable","name":{"kind":"Name","value":"perPage"}}},{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"startedCover"}},{"kind":"Field","name":{"kind":"Name","value":"noStartedCover"}},{"kind":"Field","name":{"kind":"Name","value":"completedCover"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"mapId"}},{"kind":"Field","name":{"kind":"Name","value":"mapType"}},{"kind":"Field","name":{"kind":"Name","value":"creatorId"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"teacherSuggest"}},{"kind":"Field","name":{"kind":"Name","value":"remark"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode;
export const GetCoursesMetaQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getCoursesMetaQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"perPage"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"CourseFilter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_getCoursesMeta"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"perPage"},"value":{"kind":"Variable","name":{"kind":"Name","value":"perPage"}}},{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}}]} as unknown as DocumentNode;
export const GetCourseQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getCourseQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getCourse"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"startedCover"}},{"kind":"Field","name":{"kind":"Name","value":"noStartedCover"}},{"kind":"Field","name":{"kind":"Name","value":"completedCover"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"mapId"}},{"kind":"Field","name":{"kind":"Name","value":"mapType"}},{"kind":"Field","name":{"kind":"Name","value":"creatorId"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"teacherSuggest"}},{"kind":"Field","name":{"kind":"Name","value":"remark"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode;
export const QiniuQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"qiniuQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"scope"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"qiniu"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"scope"},"value":{"kind":"Variable","name":{"kind":"Name","value":"scope"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"token"}}]}}]}}]} as unknown as DocumentNode;
export const ResourceBoxQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"resourceBoxQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"resourceBox"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}}]} as unknown as DocumentNode;
export const PuzzleQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"puzzleQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"puzzle"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"studentProjectId"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"answerProjectId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"cover"}},{"kind":"Field","name":{"kind":"Name","value":"codeBlocks"}},{"kind":"Field","name":{"kind":"Name","value":"baseBlocks"}},{"kind":"Field","name":{"kind":"Name","value":"roles"}},{"kind":"Field","name":{"kind":"Name","value":"backgroundDesc"}},{"kind":"Field","name":{"kind":"Name","value":"backgroundDescVoiceUrl"}},{"kind":"Field","name":{"kind":"Name","value":"targetTime"}},{"kind":"Field","name":{"kind":"Name","value":"answerCover"}},{"kind":"Field","name":{"kind":"Name","value":"answerM"}},{"kind":"Field","name":{"kind":"Name","value":"answerN"}},{"kind":"Field","name":{"kind":"Name","value":"resolveDelayTime"}},{"kind":"Field","name":{"kind":"Name","value":"rejectDelayTime"}},{"kind":"Field","name":{"kind":"Name","value":"expectCompleteTime"}},{"kind":"Field","name":{"kind":"Name","value":"notOperationTalkingRole"}},{"kind":"Field","name":{"kind":"Name","value":"timeOutTalkingRole"}},{"kind":"Field","name":{"kind":"Name","value":"extraInfo"}},{"kind":"Field","name":{"kind":"Name","value":"puzzleStatus"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]} as unknown as DocumentNode;
export const DiyQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"diyQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"diy"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode;
export const GetRewardsQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getRewardsQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"RewardFilter"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sortOrder"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sortField"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"perPage"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getRewards"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}},{"kind":"Argument","name":{"kind":"Name","value":"sortOrder"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sortOrder"}}},{"kind":"Argument","name":{"kind":"Name","value":"sortField"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sortField"}}},{"kind":"Argument","name":{"kind":"Name","value":"perPage"},"value":{"kind":"Variable","name":{"kind":"Name","value":"perPage"}}},{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"typeId"}},{"kind":"Field","name":{"kind":"Name","value":"receiveType"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode;
export const GetRewardsMetaQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getRewardsMetaQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"perPage"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"RewardFilter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_getRewardsMeta"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"perPage"},"value":{"kind":"Variable","name":{"kind":"Name","value":"perPage"}}},{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}}]} as unknown as DocumentNode;
export const RewardQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"rewardQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"reward"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"typeId"}},{"kind":"Field","name":{"kind":"Name","value":"receiveType"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode;
export const RewardLogQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"rewardLogQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"rewardLog"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"typeId"}},{"kind":"Field","name":{"kind":"Name","value":"receiveType"}},{"kind":"Field","name":{"kind":"Name","value":"creatorId"}},{"kind":"Field","name":{"kind":"Name","value":"receiverId"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"receivedAt"}}]}}]}}]} as unknown as DocumentNode;
export const CreateUserMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createUserMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"createUserInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateUserInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"createUserInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"createUserInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"nickname"}},{"kind":"Field","name":{"kind":"Name","value":"realname"}},{"kind":"Field","name":{"kind":"Name","value":"usertype"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"mobile"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}}]}}]} as unknown as DocumentNode;
export const UpdateUserMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateUserMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateUserInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateUserInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"updateUserInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateUserInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"nickname"}},{"kind":"Field","name":{"kind":"Name","value":"realname"}},{"kind":"Field","name":{"kind":"Name","value":"usertype"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"mobile"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}}]}}]} as unknown as DocumentNode;
export const RemoveUserMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"removeUserMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"removeUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"nickname"}},{"kind":"Field","name":{"kind":"Name","value":"realname"}},{"kind":"Field","name":{"kind":"Name","value":"usertype"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"mobile"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}}]}}]} as unknown as DocumentNode;
export const LoginMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"loginMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"loginInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"LoginInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"login"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"loginInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"loginInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"accessToken"}}]}}]}}]} as unknown as DocumentNode;
export const CreateCoursePackageMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createCoursePackageMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"createCoursePackageInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateCoursePackageInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createCoursePackage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"createCoursePackageInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"createCoursePackageInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"cover"}},{"kind":"Field","name":{"kind":"Name","value":"introduce"}},{"kind":"Field","name":{"kind":"Name","value":"level"}},{"kind":"Field","name":{"kind":"Name","value":"tags"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"remark"}},{"kind":"Field","name":{"kind":"Name","value":"locked"}}]}}]}}]} as unknown as DocumentNode;
export const UpdateCoursePackageMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateCoursePackageMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateCoursePackageInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateCoursePackageInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateCoursePackage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"updateCoursePackageInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateCoursePackageInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"cover"}},{"kind":"Field","name":{"kind":"Name","value":"introduce"}},{"kind":"Field","name":{"kind":"Name","value":"level"}},{"kind":"Field","name":{"kind":"Name","value":"tags"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"remark"}},{"kind":"Field","name":{"kind":"Name","value":"locked"}}]}}]}}]} as unknown as DocumentNode;
export const RemoveCoursePackageMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"removeCoursePackageMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"removeCoursePackage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"cover"}},{"kind":"Field","name":{"kind":"Name","value":"introduce"}},{"kind":"Field","name":{"kind":"Name","value":"level"}},{"kind":"Field","name":{"kind":"Name","value":"tags"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"remark"}},{"kind":"Field","name":{"kind":"Name","value":"locked"}}]}}]}}]} as unknown as DocumentNode;
export const UpdateCoursesInPackageMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateCoursesInPackageMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateCoursesInPackageInput"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateCoursePackageMapInput"}}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"packageId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateCoursesInPackage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"updateCoursesInPackageInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateCoursesInPackageInput"}}},{"kind":"Argument","name":{"kind":"Name","value":"packageId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"packageId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"courseId"}},{"kind":"Field","name":{"kind":"Name","value":"packageId"}},{"kind":"Field","name":{"kind":"Name","value":"index"}}]}}]}}]} as unknown as DocumentNode;
export const CreateCourseMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createCourseMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"createCourseInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateCourseInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createCourse"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"createCourseInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"createCourseInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"startedCover"}},{"kind":"Field","name":{"kind":"Name","value":"noStartedCover"}},{"kind":"Field","name":{"kind":"Name","value":"completedCover"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"mapId"}},{"kind":"Field","name":{"kind":"Name","value":"mapType"}},{"kind":"Field","name":{"kind":"Name","value":"creatorId"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"teacherSuggest"}},{"kind":"Field","name":{"kind":"Name","value":"remark"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode;
export const UpdateCourseMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateCourseMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateCourseInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateCourseInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateCourse"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"updateCourseInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateCourseInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"startedCover"}},{"kind":"Field","name":{"kind":"Name","value":"noStartedCover"}},{"kind":"Field","name":{"kind":"Name","value":"completedCover"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"mapId"}},{"kind":"Field","name":{"kind":"Name","value":"mapType"}},{"kind":"Field","name":{"kind":"Name","value":"creatorId"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"teacherSuggest"}},{"kind":"Field","name":{"kind":"Name","value":"remark"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode;
export const RemoveCourseMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"removeCourseMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"removeCourse"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"startedCover"}},{"kind":"Field","name":{"kind":"Name","value":"noStartedCover"}},{"kind":"Field","name":{"kind":"Name","value":"completedCover"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"mapId"}},{"kind":"Field","name":{"kind":"Name","value":"mapType"}},{"kind":"Field","name":{"kind":"Name","value":"creatorId"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"teacherSuggest"}},{"kind":"Field","name":{"kind":"Name","value":"remark"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode;
export const CreateResourceBoxMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createResourceBoxMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"createResourceBoxInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateResourceBoxInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createResourceBox"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"createResourceBoxInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"createResourceBoxInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}}]} as unknown as DocumentNode;
export const UpdateResourceBoxMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateResourceBoxMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateResourceBoxInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateResourceBoxInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateResourceBox"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"updateResourceBoxInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateResourceBoxInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}}]} as unknown as DocumentNode;
export const RemoveResourceBoxMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"removeResourceBoxMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"removeResourceBox"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}}]} as unknown as DocumentNode;
export const CreatePuzzleMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createPuzzleMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"createPuzzleInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreatePuzzleInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createPuzzle"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"createPuzzleInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"createPuzzleInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"studentProjectId"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"answerProjectId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"cover"}},{"kind":"Field","name":{"kind":"Name","value":"codeBlocks"}},{"kind":"Field","name":{"kind":"Name","value":"baseBlocks"}},{"kind":"Field","name":{"kind":"Name","value":"roles"}},{"kind":"Field","name":{"kind":"Name","value":"backgroundDesc"}},{"kind":"Field","name":{"kind":"Name","value":"backgroundDescVoiceUrl"}},{"kind":"Field","name":{"kind":"Name","value":"targetTime"}},{"kind":"Field","name":{"kind":"Name","value":"answerCover"}},{"kind":"Field","name":{"kind":"Name","value":"answerM"}},{"kind":"Field","name":{"kind":"Name","value":"answerN"}},{"kind":"Field","name":{"kind":"Name","value":"resolveDelayTime"}},{"kind":"Field","name":{"kind":"Name","value":"rejectDelayTime"}},{"kind":"Field","name":{"kind":"Name","value":"expectCompleteTime"}},{"kind":"Field","name":{"kind":"Name","value":"notOperationTalkingRole"}},{"kind":"Field","name":{"kind":"Name","value":"timeOutTalkingRole"}},{"kind":"Field","name":{"kind":"Name","value":"extraInfo"}},{"kind":"Field","name":{"kind":"Name","value":"puzzleStatus"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]} as unknown as DocumentNode;
export const UpdatePuzzleMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updatePuzzleMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updatePuzzleInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdatePuzzleInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updatePuzzle"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"updatePuzzleInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updatePuzzleInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"studentProjectId"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"answerProjectId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"cover"}},{"kind":"Field","name":{"kind":"Name","value":"codeBlocks"}},{"kind":"Field","name":{"kind":"Name","value":"baseBlocks"}},{"kind":"Field","name":{"kind":"Name","value":"roles"}},{"kind":"Field","name":{"kind":"Name","value":"backgroundDesc"}},{"kind":"Field","name":{"kind":"Name","value":"backgroundDescVoiceUrl"}},{"kind":"Field","name":{"kind":"Name","value":"targetTime"}},{"kind":"Field","name":{"kind":"Name","value":"answerCover"}},{"kind":"Field","name":{"kind":"Name","value":"answerM"}},{"kind":"Field","name":{"kind":"Name","value":"answerN"}},{"kind":"Field","name":{"kind":"Name","value":"resolveDelayTime"}},{"kind":"Field","name":{"kind":"Name","value":"rejectDelayTime"}},{"kind":"Field","name":{"kind":"Name","value":"expectCompleteTime"}},{"kind":"Field","name":{"kind":"Name","value":"notOperationTalkingRole"}},{"kind":"Field","name":{"kind":"Name","value":"timeOutTalkingRole"}},{"kind":"Field","name":{"kind":"Name","value":"extraInfo"}},{"kind":"Field","name":{"kind":"Name","value":"puzzleStatus"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]} as unknown as DocumentNode;
export const RemovePuzzleMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"removePuzzleMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"removePuzzle"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"studentProjectId"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"answerProjectId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"cover"}},{"kind":"Field","name":{"kind":"Name","value":"codeBlocks"}},{"kind":"Field","name":{"kind":"Name","value":"baseBlocks"}},{"kind":"Field","name":{"kind":"Name","value":"roles"}},{"kind":"Field","name":{"kind":"Name","value":"backgroundDesc"}},{"kind":"Field","name":{"kind":"Name","value":"backgroundDescVoiceUrl"}},{"kind":"Field","name":{"kind":"Name","value":"targetTime"}},{"kind":"Field","name":{"kind":"Name","value":"answerCover"}},{"kind":"Field","name":{"kind":"Name","value":"answerM"}},{"kind":"Field","name":{"kind":"Name","value":"answerN"}},{"kind":"Field","name":{"kind":"Name","value":"resolveDelayTime"}},{"kind":"Field","name":{"kind":"Name","value":"rejectDelayTime"}},{"kind":"Field","name":{"kind":"Name","value":"expectCompleteTime"}},{"kind":"Field","name":{"kind":"Name","value":"notOperationTalkingRole"}},{"kind":"Field","name":{"kind":"Name","value":"timeOutTalkingRole"}},{"kind":"Field","name":{"kind":"Name","value":"extraInfo"}},{"kind":"Field","name":{"kind":"Name","value":"puzzleStatus"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]} as unknown as DocumentNode;
export const CreateDiyMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createDiyMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"createDiyInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateDiyInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createDiy"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"createDiyInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"createDiyInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode;
export const UpdateDiyMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateDiyMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateDiyInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateDiyInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateDiy"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"updateDiyInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateDiyInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode;
export const RemoveDiyMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"removeDiyMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"removeDiy"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode;
export const CreateRewardMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createRewardMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"createRewardInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateRewardInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createReward"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"createRewardInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"createRewardInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"typeId"}},{"kind":"Field","name":{"kind":"Name","value":"receiveType"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode;
export const RemoveRewardMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"removeRewardMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"removeReward"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}]}}]} as unknown as DocumentNode;
export const CreateRewardLogMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createRewardLogMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"createRewardLogInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateRewardLogInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createRewardLog"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"createRewardLogInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"createRewardLogInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"typeId"}},{"kind":"Field","name":{"kind":"Name","value":"receiveType"}},{"kind":"Field","name":{"kind":"Name","value":"creatorId"}},{"kind":"Field","name":{"kind":"Name","value":"receiverId"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"receivedAt"}}]}}]}}]} as unknown as DocumentNode;
export type Requester<C= {}> = <R, V>(doc: DocumentNode, vars?: V, options?: C) => Promise<R>
export function getSdk<C>(requester: Requester<C>) {
  return {
    usersQuery(variables?: UsersQueryQueryVariables, options?: C): Promise<UsersQueryQuery> {
      return requester<UsersQueryQuery, UsersQueryQueryVariables>(UsersQueryDocument, variables, options);
    },
    userQuery(variables: UserQueryQueryVariables, options?: C): Promise<UserQueryQuery> {
      return requester<UserQueryQuery, UserQueryQueryVariables>(UserQueryDocument, variables, options);
    },
    profileQuery(variables?: ProfileQueryQueryVariables, options?: C): Promise<ProfileQueryQuery> {
      return requester<ProfileQueryQuery, ProfileQueryQueryVariables>(ProfileQueryDocument, variables, options);
    },
    getCoursePackagesQuery(variables?: GetCoursePackagesQueryQueryVariables, options?: C): Promise<GetCoursePackagesQueryQuery> {
      return requester<GetCoursePackagesQueryQuery, GetCoursePackagesQueryQueryVariables>(GetCoursePackagesQueryDocument, variables, options);
    },
    getCoursePackagesMetaQuery(variables?: GetCoursePackagesMetaQueryQueryVariables, options?: C): Promise<GetCoursePackagesMetaQueryQuery> {
      return requester<GetCoursePackagesMetaQueryQuery, GetCoursePackagesMetaQueryQueryVariables>(GetCoursePackagesMetaQueryDocument, variables, options);
    },
    getCoursePackageQuery(variables: GetCoursePackageQueryQueryVariables, options?: C): Promise<GetCoursePackageQueryQuery> {
      return requester<GetCoursePackageQueryQuery, GetCoursePackageQueryQueryVariables>(GetCoursePackageQueryDocument, variables, options);
    },
    getCoursesQuery(variables?: GetCoursesQueryQueryVariables, options?: C): Promise<GetCoursesQueryQuery> {
      return requester<GetCoursesQueryQuery, GetCoursesQueryQueryVariables>(GetCoursesQueryDocument, variables, options);
    },
    getCoursesMetaQuery(variables?: GetCoursesMetaQueryQueryVariables, options?: C): Promise<GetCoursesMetaQueryQuery> {
      return requester<GetCoursesMetaQueryQuery, GetCoursesMetaQueryQueryVariables>(GetCoursesMetaQueryDocument, variables, options);
    },
    getCourseQuery(variables: GetCourseQueryQueryVariables, options?: C): Promise<GetCourseQueryQuery> {
      return requester<GetCourseQueryQuery, GetCourseQueryQueryVariables>(GetCourseQueryDocument, variables, options);
    },
    qiniuQuery(variables: QiniuQueryQueryVariables, options?: C): Promise<QiniuQueryQuery> {
      return requester<QiniuQueryQuery, QiniuQueryQueryVariables>(QiniuQueryDocument, variables, options);
    },
    resourceBoxQuery(variables: ResourceBoxQueryQueryVariables, options?: C): Promise<ResourceBoxQueryQuery> {
      return requester<ResourceBoxQueryQuery, ResourceBoxQueryQueryVariables>(ResourceBoxQueryDocument, variables, options);
    },
    puzzleQuery(variables: PuzzleQueryQueryVariables, options?: C): Promise<PuzzleQueryQuery> {
      return requester<PuzzleQueryQuery, PuzzleQueryQueryVariables>(PuzzleQueryDocument, variables, options);
    },
    diyQuery(variables: DiyQueryQueryVariables, options?: C): Promise<DiyQueryQuery> {
      return requester<DiyQueryQuery, DiyQueryQueryVariables>(DiyQueryDocument, variables, options);
    },
    getRewardsQuery(variables?: GetRewardsQueryQueryVariables, options?: C): Promise<GetRewardsQueryQuery> {
      return requester<GetRewardsQueryQuery, GetRewardsQueryQueryVariables>(GetRewardsQueryDocument, variables, options);
    },
    getRewardsMetaQuery(variables?: GetRewardsMetaQueryQueryVariables, options?: C): Promise<GetRewardsMetaQueryQuery> {
      return requester<GetRewardsMetaQueryQuery, GetRewardsMetaQueryQueryVariables>(GetRewardsMetaQueryDocument, variables, options);
    },
    rewardQuery(variables: RewardQueryQueryVariables, options?: C): Promise<RewardQueryQuery> {
      return requester<RewardQueryQuery, RewardQueryQueryVariables>(RewardQueryDocument, variables, options);
    },
    rewardLogQuery(variables: RewardLogQueryQueryVariables, options?: C): Promise<RewardLogQueryQuery> {
      return requester<RewardLogQueryQuery, RewardLogQueryQueryVariables>(RewardLogQueryDocument, variables, options);
    },
    createUserMutation(variables: CreateUserMutationMutationVariables, options?: C): Promise<CreateUserMutationMutation> {
      return requester<CreateUserMutationMutation, CreateUserMutationMutationVariables>(CreateUserMutationDocument, variables, options);
    },
    updateUserMutation(variables: UpdateUserMutationMutationVariables, options?: C): Promise<UpdateUserMutationMutation> {
      return requester<UpdateUserMutationMutation, UpdateUserMutationMutationVariables>(UpdateUserMutationDocument, variables, options);
    },
    removeUserMutation(variables: RemoveUserMutationMutationVariables, options?: C): Promise<RemoveUserMutationMutation> {
      return requester<RemoveUserMutationMutation, RemoveUserMutationMutationVariables>(RemoveUserMutationDocument, variables, options);
    },
    loginMutation(variables: LoginMutationMutationVariables, options?: C): Promise<LoginMutationMutation> {
      return requester<LoginMutationMutation, LoginMutationMutationVariables>(LoginMutationDocument, variables, options);
    },
    createCoursePackageMutation(variables: CreateCoursePackageMutationMutationVariables, options?: C): Promise<CreateCoursePackageMutationMutation> {
      return requester<CreateCoursePackageMutationMutation, CreateCoursePackageMutationMutationVariables>(CreateCoursePackageMutationDocument, variables, options);
    },
    updateCoursePackageMutation(variables: UpdateCoursePackageMutationMutationVariables, options?: C): Promise<UpdateCoursePackageMutationMutation> {
      return requester<UpdateCoursePackageMutationMutation, UpdateCoursePackageMutationMutationVariables>(UpdateCoursePackageMutationDocument, variables, options);
    },
    removeCoursePackageMutation(variables: RemoveCoursePackageMutationMutationVariables, options?: C): Promise<RemoveCoursePackageMutationMutation> {
      return requester<RemoveCoursePackageMutationMutation, RemoveCoursePackageMutationMutationVariables>(RemoveCoursePackageMutationDocument, variables, options);
    },
    updateCoursesInPackageMutation(variables: UpdateCoursesInPackageMutationMutationVariables, options?: C): Promise<UpdateCoursesInPackageMutationMutation> {
      return requester<UpdateCoursesInPackageMutationMutation, UpdateCoursesInPackageMutationMutationVariables>(UpdateCoursesInPackageMutationDocument, variables, options);
    },
    createCourseMutation(variables: CreateCourseMutationMutationVariables, options?: C): Promise<CreateCourseMutationMutation> {
      return requester<CreateCourseMutationMutation, CreateCourseMutationMutationVariables>(CreateCourseMutationDocument, variables, options);
    },
    updateCourseMutation(variables: UpdateCourseMutationMutationVariables, options?: C): Promise<UpdateCourseMutationMutation> {
      return requester<UpdateCourseMutationMutation, UpdateCourseMutationMutationVariables>(UpdateCourseMutationDocument, variables, options);
    },
    removeCourseMutation(variables: RemoveCourseMutationMutationVariables, options?: C): Promise<RemoveCourseMutationMutation> {
      return requester<RemoveCourseMutationMutation, RemoveCourseMutationMutationVariables>(RemoveCourseMutationDocument, variables, options);
    },
    createResourceBoxMutation(variables: CreateResourceBoxMutationMutationVariables, options?: C): Promise<CreateResourceBoxMutationMutation> {
      return requester<CreateResourceBoxMutationMutation, CreateResourceBoxMutationMutationVariables>(CreateResourceBoxMutationDocument, variables, options);
    },
    updateResourceBoxMutation(variables: UpdateResourceBoxMutationMutationVariables, options?: C): Promise<UpdateResourceBoxMutationMutation> {
      return requester<UpdateResourceBoxMutationMutation, UpdateResourceBoxMutationMutationVariables>(UpdateResourceBoxMutationDocument, variables, options);
    },
    removeResourceBoxMutation(variables: RemoveResourceBoxMutationMutationVariables, options?: C): Promise<RemoveResourceBoxMutationMutation> {
      return requester<RemoveResourceBoxMutationMutation, RemoveResourceBoxMutationMutationVariables>(RemoveResourceBoxMutationDocument, variables, options);
    },
    createPuzzleMutation(variables: CreatePuzzleMutationMutationVariables, options?: C): Promise<CreatePuzzleMutationMutation> {
      return requester<CreatePuzzleMutationMutation, CreatePuzzleMutationMutationVariables>(CreatePuzzleMutationDocument, variables, options);
    },
    updatePuzzleMutation(variables: UpdatePuzzleMutationMutationVariables, options?: C): Promise<UpdatePuzzleMutationMutation> {
      return requester<UpdatePuzzleMutationMutation, UpdatePuzzleMutationMutationVariables>(UpdatePuzzleMutationDocument, variables, options);
    },
    removePuzzleMutation(variables: RemovePuzzleMutationMutationVariables, options?: C): Promise<RemovePuzzleMutationMutation> {
      return requester<RemovePuzzleMutationMutation, RemovePuzzleMutationMutationVariables>(RemovePuzzleMutationDocument, variables, options);
    },
    createDiyMutation(variables: CreateDiyMutationMutationVariables, options?: C): Promise<CreateDiyMutationMutation> {
      return requester<CreateDiyMutationMutation, CreateDiyMutationMutationVariables>(CreateDiyMutationDocument, variables, options);
    },
    updateDiyMutation(variables: UpdateDiyMutationMutationVariables, options?: C): Promise<UpdateDiyMutationMutation> {
      return requester<UpdateDiyMutationMutation, UpdateDiyMutationMutationVariables>(UpdateDiyMutationDocument, variables, options);
    },
    removeDiyMutation(variables: RemoveDiyMutationMutationVariables, options?: C): Promise<RemoveDiyMutationMutation> {
      return requester<RemoveDiyMutationMutation, RemoveDiyMutationMutationVariables>(RemoveDiyMutationDocument, variables, options);
    },
    createRewardMutation(variables: CreateRewardMutationMutationVariables, options?: C): Promise<CreateRewardMutationMutation> {
      return requester<CreateRewardMutationMutation, CreateRewardMutationMutationVariables>(CreateRewardMutationDocument, variables, options);
    },
    removeRewardMutation(variables: RemoveRewardMutationMutationVariables, options?: C): Promise<RemoveRewardMutationMutation> {
      return requester<RemoveRewardMutationMutation, RemoveRewardMutationMutationVariables>(RemoveRewardMutationDocument, variables, options);
    },
    createRewardLogMutation(variables: CreateRewardLogMutationMutationVariables, options?: C): Promise<CreateRewardLogMutationMutation> {
      return requester<CreateRewardLogMutationMutation, CreateRewardLogMutationMutationVariables>(CreateRewardLogMutationDocument, variables, options);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;