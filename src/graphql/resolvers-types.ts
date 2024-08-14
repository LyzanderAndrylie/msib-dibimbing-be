import {
  GraphQLResolveInfo,
  GraphQLScalarType,
  GraphQLScalarTypeConfig,
} from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never;
    };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & {
  [P in K]-?: NonNullable<T[P]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  body_String_NotNull_minLength_1: { input: any; output: any };
  title_String_NotNull_minLength_1: { input: any; output: any };
};

export type Mutation = {
  __typename?: 'Mutation';
  createNote?: Maybe<Note>;
  deleteNote?: Maybe<Note>;
  updateNote?: Maybe<Note>;
};

export type MutationCreateNoteArgs = {
  input: NoteInput;
};

export type MutationDeleteNoteArgs = {
  id: Scalars['ID']['input'];
};

export type MutationUpdateNoteArgs = {
  id: Scalars['ID']['input'];
  input: NoteInput;
};

export type Note = {
  __typename?: 'Note';
  body: Scalars['String']['output'];
  createdAt: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  title: Scalars['String']['output'];
};

export type NoteInput = {
  body: Scalars['body_String_NotNull_minLength_1']['input'];
  title: Scalars['title_String_NotNull_minLength_1']['input'];
};

export type NoteOrderByInput = {
  createdAt?: InputMaybe<Order>;
};

export enum Order {
  Asc = 'asc',
  Desc = 'desc',
}

export type Query = {
  __typename?: 'Query';
  note?: Maybe<Note>;
  notes: Array<Note>;
};

export type QueryNoteArgs = {
  id: Scalars['ID']['input'];
};

export type QueryNotesArgs = {
  orderBy?: InputMaybe<NoteOrderByInput>;
};

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs,
> {
  subscribe: SubscriptionSubscribeFn<
    { [key in TKey]: TResult },
    TParent,
    TContext,
    TArgs
  >;
  resolve?: SubscriptionResolveFn<
    TResult,
    { [key in TKey]: TResult },
    TContext,
    TArgs
  >;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs,
> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {},
> =
  | ((
      ...args: any[]
    ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo,
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo,
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {},
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Float: ResolverTypeWrapper<Scalars['Float']['output']>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Mutation: ResolverTypeWrapper<{}>;
  Note: ResolverTypeWrapper<Note>;
  NoteInput: NoteInput;
  NoteOrderByInput: NoteOrderByInput;
  Order: Order;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  body_String_NotNull_minLength_1: ResolverTypeWrapper<
    Scalars['body_String_NotNull_minLength_1']['output']
  >;
  title_String_NotNull_minLength_1: ResolverTypeWrapper<
    Scalars['title_String_NotNull_minLength_1']['output']
  >;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean']['output'];
  Float: Scalars['Float']['output'];
  ID: Scalars['ID']['output'];
  Int: Scalars['Int']['output'];
  Mutation: {};
  Note: Note;
  NoteInput: NoteInput;
  NoteOrderByInput: NoteOrderByInput;
  Query: {};
  String: Scalars['String']['output'];
  body_String_NotNull_minLength_1: Scalars['body_String_NotNull_minLength_1']['output'];
  title_String_NotNull_minLength_1: Scalars['title_String_NotNull_minLength_1']['output'];
};

export type ConstraintDirectiveArgs = {
  contains?: Maybe<Scalars['String']['input']>;
  endsWith?: Maybe<Scalars['String']['input']>;
  exclusiveMax?: Maybe<Scalars['Float']['input']>;
  exclusiveMin?: Maybe<Scalars['Float']['input']>;
  format?: Maybe<Scalars['String']['input']>;
  max?: Maybe<Scalars['Float']['input']>;
  maxItems?: Maybe<Scalars['Int']['input']>;
  maxLength?: Maybe<Scalars['Int']['input']>;
  min?: Maybe<Scalars['Float']['input']>;
  minItems?: Maybe<Scalars['Int']['input']>;
  minLength?: Maybe<Scalars['Int']['input']>;
  multipleOf?: Maybe<Scalars['Float']['input']>;
  notContains?: Maybe<Scalars['String']['input']>;
  pattern?: Maybe<Scalars['String']['input']>;
  startsWith?: Maybe<Scalars['String']['input']>;
  uniqueTypeName?: Maybe<Scalars['String']['input']>;
};

export type ConstraintDirectiveResolver<
  Result,
  Parent,
  ContextType = any,
  Args = ConstraintDirectiveArgs,
> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type MutationResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation'],
> = {
  createNote?: Resolver<
    Maybe<ResolversTypes['Note']>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateNoteArgs, 'input'>
  >;
  deleteNote?: Resolver<
    Maybe<ResolversTypes['Note']>,
    ParentType,
    ContextType,
    RequireFields<MutationDeleteNoteArgs, 'id'>
  >;
  updateNote?: Resolver<
    Maybe<ResolversTypes['Note']>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdateNoteArgs, 'id' | 'input'>
  >;
};

export type NoteResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['Note'] = ResolversParentTypes['Note'],
> = {
  body?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['Query'] = ResolversParentTypes['Query'],
> = {
  note?: Resolver<
    Maybe<ResolversTypes['Note']>,
    ParentType,
    ContextType,
    RequireFields<QueryNoteArgs, 'id'>
  >;
  notes?: Resolver<
    Array<ResolversTypes['Note']>,
    ParentType,
    ContextType,
    Partial<QueryNotesArgs>
  >;
};

export interface Body_String_NotNull_MinLength_1ScalarConfig
  extends GraphQLScalarTypeConfig<
    ResolversTypes['body_String_NotNull_minLength_1'],
    any
  > {
  name: 'body_String_NotNull_minLength_1';
}

export interface Title_String_NotNull_MinLength_1ScalarConfig
  extends GraphQLScalarTypeConfig<
    ResolversTypes['title_String_NotNull_minLength_1'],
    any
  > {
  name: 'title_String_NotNull_minLength_1';
}

export type Resolvers<ContextType = any> = {
  Mutation?: MutationResolvers<ContextType>;
  Note?: NoteResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  body_String_NotNull_minLength_1?: GraphQLScalarType;
  title_String_NotNull_minLength_1?: GraphQLScalarType;
};

export type DirectiveResolvers<ContextType = any> = {
  constraint?: ConstraintDirectiveResolver<any, any, ContextType>;
};
