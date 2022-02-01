import { GraphQLResolveInfo } from "graphql";
import { Context } from "@acme/core";
import { DeepPartial } from "utility-types";
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
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type RequireFields<T, K extends keyof T> = {
  [X in Exclude<keyof T, K>]?: T[X];
} & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Account = BitcoinAccount | PlaidAccount;

export type BitcoinAccount = {
  __typename?: "BitcoinAccount";
  address: Scalars["String"];
  connection: BitcoinConnection;
  kind: Scalars["String"];
};

export type BitcoinConnection = {
  __typename?: "BitcoinConnection";
  account: BitcoinAccount;
  logo: Scalars["String"];
};

export type CreatePipeInput = {
  __typename?: "CreatePipeInput";
  destinations: Array<Destination>;
  flags: Flags;
  id: Scalars["ID"];
  name: Scalars["String"];
  sources: Array<Source>;
};

export type CreateTodoInput = {
  id: Scalars["String"];
  title: Scalars["String"];
};

export type Debug = {
  __typename?: "Debug";
  database: Scalars["String"];
};

export type Destination = SlackDestination | TwilioDestination;

export type Filter = NumberFilter | StringFilter;

export type Flags = {
  __typename?: "Flags";
  enabled: Scalars["Boolean"];
};

export type Mutation = {
  __typename?: "Mutation";
  createPipe: Pipe;
  createTodo: Todo;
  removePipe: Pipe;
  removeTodo?: Maybe<Todo>;
  upload: Scalars["String"];
};

export type MutationCreatePipeArgs = {
  input: Scalars["String"];
};

export type MutationCreateTodoArgs = {
  input: CreateTodoInput;
};

export type MutationRemovePipeArgs = {
  input: Scalars["ID"];
};

export type MutationRemoveTodoArgs = {
  id: Scalars["String"];
};

export type MutationUploadArgs = {
  name: Scalars["String"];
  type: Scalars["String"];
};

export type NumberFilter = {
  __typename?: "NumberFilter";
  id: Scalars["ID"];
  int: Scalars["Int"];
  kind: Scalars["String"];
  op: Scalars["String"];
};

export type Pipe = {
  __typename?: "Pipe";
  destinations: Array<Destination>;
  flags: Flags;
  id: Scalars["ID"];
  name: Scalars["String"];
  sources: Array<Source>;
};

export type PlaidAccount = {
  __typename?: "PlaidAccount";
  category: Scalars["String"];
  connection: PlaidConnection;
  id: Scalars["ID"];
  kind: Scalars["String"];
  name: Scalars["String"];
  subCategory: Scalars["String"];
};

export type PlaidConnection = {
  __typename?: "PlaidConnection";
  accounts: Array<PlaidAccount>;
  logo: Scalars["String"];
};

export type Query = {
  __typename?: "Query";
  debug: Debug;
  pipe: Pipe;
  session: Session;
  user: User;
};

export type QueryPipeArgs = {
  id: Scalars["ID"];
};

export type QueryUserArgs = {
  id: Scalars["ID"];
};

export type Session = {
  __typename?: "Session";
  currentUser: User;
};

export type SlackChannel = {
  __typename?: "SlackChannel";
  connection: SlackConnection;
  count_members: Scalars["Int"];
  id: Scalars["ID"];
  name: Scalars["String"];
  topic: Scalars["String"];
};

export type SlackConnection = {
  __typename?: "SlackConnection";
  channels: Array<SlackChannel>;
  logo: Scalars["String"];
  team: SlackTeam;
};

export type SlackDestination = {
  __typename?: "SlackDestination";
  channel: SlackChannel;
  id: Scalars["ID"];
  team: SlackTeam;
};

export type SlackTeam = {
  __typename?: "SlackTeam";
  id: Scalars["ID"];
  logo: Scalars["String"];
  name: Scalars["String"];
};

export type Source = {
  __typename?: "Source";
  account: Account;
  filters: Array<Filter>;
};

export type StringFilter = {
  __typename?: "StringFilter";
  id: Scalars["ID"];
  kind: Scalars["String"];
  op: Scalars["String"];
  word: Scalars["String"];
};

export type Todo = {
  __typename?: "Todo";
  id: Scalars["ID"];
  title: Scalars["String"];
};

export type TwilioAccount = {
  __typename?: "TwilioAccount";
  connection: TwilioConnection;
  id: Scalars["ID"];
  phone: Scalars["String"];
};

export type TwilioConnection = {
  __typename?: "TwilioConnection";
  account: TwilioAccount;
  logo: Scalars["String"];
};

export type TwilioDestination = {
  __typename?: "TwilioDestination";
  id: Scalars["ID"];
  phone: Scalars["String"];
};

export type User = {
  __typename?: "User";
  bitcoin_connections: Array<BitcoinConnection>;
  id: Scalars["ID"];
  pipes: Array<Pipe>;
  plaid_connections: Array<PlaidConnection>;
  slack_connections: Array<SlackConnection>;
  todos: Array<Todo>;
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type Resolver<
  TResult,
  TParent = {},
  TContext = {},
  TArgs = {}
> = ResolverFn<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
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
  TArgs
> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {}
> =
  | ((
      ...args: any[]
    ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {}
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Account: DeepPartial<
    ResolversTypes["BitcoinAccount"] | ResolversTypes["PlaidAccount"]
  >;
  BitcoinAccount: ResolverTypeWrapper<DeepPartial<BitcoinAccount>>;
  BitcoinConnection: ResolverTypeWrapper<DeepPartial<BitcoinConnection>>;
  Boolean: ResolverTypeWrapper<DeepPartial<Scalars["Boolean"]>>;
  CreatePipeInput: ResolverTypeWrapper<
    DeepPartial<
      Omit<CreatePipeInput, "destinations"> & {
        destinations: Array<ResolversTypes["Destination"]>;
      }
    >
  >;
  CreateTodoInput: ResolverTypeWrapper<DeepPartial<CreateTodoInput>>;
  Debug: ResolverTypeWrapper<DeepPartial<Debug>>;
  Destination: DeepPartial<
    ResolversTypes["SlackDestination"] | ResolversTypes["TwilioDestination"]
  >;
  Filter: DeepPartial<
    ResolversTypes["NumberFilter"] | ResolversTypes["StringFilter"]
  >;
  Flags: ResolverTypeWrapper<DeepPartial<Flags>>;
  ID: ResolverTypeWrapper<DeepPartial<Scalars["ID"]>>;
  Int: ResolverTypeWrapper<DeepPartial<Scalars["Int"]>>;
  Mutation: ResolverTypeWrapper<{}>;
  NumberFilter: ResolverTypeWrapper<DeepPartial<NumberFilter>>;
  Pipe: ResolverTypeWrapper<
    DeepPartial<
      Omit<Pipe, "destinations"> & {
        destinations: Array<ResolversTypes["Destination"]>;
      }
    >
  >;
  PlaidAccount: ResolverTypeWrapper<DeepPartial<PlaidAccount>>;
  PlaidConnection: ResolverTypeWrapper<DeepPartial<PlaidConnection>>;
  Query: ResolverTypeWrapper<{}>;
  Session: ResolverTypeWrapper<DeepPartial<Session>>;
  SlackChannel: ResolverTypeWrapper<DeepPartial<SlackChannel>>;
  SlackConnection: ResolverTypeWrapper<DeepPartial<SlackConnection>>;
  SlackDestination: ResolverTypeWrapper<DeepPartial<SlackDestination>>;
  SlackTeam: ResolverTypeWrapper<DeepPartial<SlackTeam>>;
  Source: ResolverTypeWrapper<
    DeepPartial<
      Omit<Source, "account" | "filters"> & {
        account: ResolversTypes["Account"];
        filters: Array<ResolversTypes["Filter"]>;
      }
    >
  >;
  String: ResolverTypeWrapper<DeepPartial<Scalars["String"]>>;
  StringFilter: ResolverTypeWrapper<DeepPartial<StringFilter>>;
  Todo: ResolverTypeWrapper<DeepPartial<Todo>>;
  TwilioAccount: ResolverTypeWrapper<DeepPartial<TwilioAccount>>;
  TwilioConnection: ResolverTypeWrapper<DeepPartial<TwilioConnection>>;
  TwilioDestination: ResolverTypeWrapper<DeepPartial<TwilioDestination>>;
  User: ResolverTypeWrapper<DeepPartial<User>>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Account: DeepPartial<
    | ResolversParentTypes["BitcoinAccount"]
    | ResolversParentTypes["PlaidAccount"]
  >;
  BitcoinAccount: DeepPartial<BitcoinAccount>;
  BitcoinConnection: DeepPartial<BitcoinConnection>;
  Boolean: DeepPartial<Scalars["Boolean"]>;
  CreatePipeInput: DeepPartial<
    Omit<CreatePipeInput, "destinations"> & {
      destinations: Array<ResolversParentTypes["Destination"]>;
    }
  >;
  CreateTodoInput: DeepPartial<CreateTodoInput>;
  Debug: DeepPartial<Debug>;
  Destination: DeepPartial<
    | ResolversParentTypes["SlackDestination"]
    | ResolversParentTypes["TwilioDestination"]
  >;
  Filter: DeepPartial<
    ResolversParentTypes["NumberFilter"] | ResolversParentTypes["StringFilter"]
  >;
  Flags: DeepPartial<Flags>;
  ID: DeepPartial<Scalars["ID"]>;
  Int: DeepPartial<Scalars["Int"]>;
  Mutation: {};
  NumberFilter: DeepPartial<NumberFilter>;
  Pipe: DeepPartial<
    Omit<Pipe, "destinations"> & {
      destinations: Array<ResolversParentTypes["Destination"]>;
    }
  >;
  PlaidAccount: DeepPartial<PlaidAccount>;
  PlaidConnection: DeepPartial<PlaidConnection>;
  Query: {};
  Session: DeepPartial<Session>;
  SlackChannel: DeepPartial<SlackChannel>;
  SlackConnection: DeepPartial<SlackConnection>;
  SlackDestination: DeepPartial<SlackDestination>;
  SlackTeam: DeepPartial<SlackTeam>;
  Source: DeepPartial<
    Omit<Source, "account" | "filters"> & {
      account: ResolversParentTypes["Account"];
      filters: Array<ResolversParentTypes["Filter"]>;
    }
  >;
  String: DeepPartial<Scalars["String"]>;
  StringFilter: DeepPartial<StringFilter>;
  Todo: DeepPartial<Todo>;
  TwilioAccount: DeepPartial<TwilioAccount>;
  TwilioConnection: DeepPartial<TwilioConnection>;
  TwilioDestination: DeepPartial<TwilioDestination>;
  User: DeepPartial<User>;
}>;

export type AccountResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes["Account"] = ResolversParentTypes["Account"]
> = ResolversObject<{
  __resolveType: TypeResolveFn<
    "BitcoinAccount" | "PlaidAccount",
    ParentType,
    ContextType
  >;
}>;

export type BitcoinAccountResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes["BitcoinAccount"] = ResolversParentTypes["BitcoinAccount"]
> = ResolversObject<{
  address?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  connection?: Resolver<
    ResolversTypes["BitcoinConnection"],
    ParentType,
    ContextType
  >;
  kind?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BitcoinConnectionResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes["BitcoinConnection"] = ResolversParentTypes["BitcoinConnection"]
> = ResolversObject<{
  account?: Resolver<ResolversTypes["BitcoinAccount"], ParentType, ContextType>;
  logo?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CreatePipeInputResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes["CreatePipeInput"] = ResolversParentTypes["CreatePipeInput"]
> = ResolversObject<{
  destinations?: Resolver<
    Array<ResolversTypes["Destination"]>,
    ParentType,
    ContextType
  >;
  flags?: Resolver<ResolversTypes["Flags"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  sources?: Resolver<Array<ResolversTypes["Source"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DebugResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes["Debug"] = ResolversParentTypes["Debug"]
> = ResolversObject<{
  database?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DestinationResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes["Destination"] = ResolversParentTypes["Destination"]
> = ResolversObject<{
  __resolveType: TypeResolveFn<
    "SlackDestination" | "TwilioDestination",
    ParentType,
    ContextType
  >;
}>;

export type FilterResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes["Filter"] = ResolversParentTypes["Filter"]
> = ResolversObject<{
  __resolveType: TypeResolveFn<
    "NumberFilter" | "StringFilter",
    ParentType,
    ContextType
  >;
}>;

export type FlagsResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes["Flags"] = ResolversParentTypes["Flags"]
> = ResolversObject<{
  enabled?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MutationResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes["Mutation"] = ResolversParentTypes["Mutation"]
> = ResolversObject<{
  createPipe?: Resolver<
    ResolversTypes["Pipe"],
    ParentType,
    ContextType,
    RequireFields<MutationCreatePipeArgs, "input">
  >;
  createTodo?: Resolver<
    ResolversTypes["Todo"],
    ParentType,
    ContextType,
    RequireFields<MutationCreateTodoArgs, "input">
  >;
  removePipe?: Resolver<
    ResolversTypes["Pipe"],
    ParentType,
    ContextType,
    RequireFields<MutationRemovePipeArgs, "input">
  >;
  removeTodo?: Resolver<
    Maybe<ResolversTypes["Todo"]>,
    ParentType,
    ContextType,
    RequireFields<MutationRemoveTodoArgs, "id">
  >;
  upload?: Resolver<
    ResolversTypes["String"],
    ParentType,
    ContextType,
    RequireFields<MutationUploadArgs, "name" | "type">
  >;
}>;

export type NumberFilterResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes["NumberFilter"] = ResolversParentTypes["NumberFilter"]
> = ResolversObject<{
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  int?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  kind?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  op?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PipeResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes["Pipe"] = ResolversParentTypes["Pipe"]
> = ResolversObject<{
  destinations?: Resolver<
    Array<ResolversTypes["Destination"]>,
    ParentType,
    ContextType
  >;
  flags?: Resolver<ResolversTypes["Flags"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  sources?: Resolver<Array<ResolversTypes["Source"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PlaidAccountResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes["PlaidAccount"] = ResolversParentTypes["PlaidAccount"]
> = ResolversObject<{
  category?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  connection?: Resolver<
    ResolversTypes["PlaidConnection"],
    ParentType,
    ContextType
  >;
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  kind?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  subCategory?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PlaidConnectionResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes["PlaidConnection"] = ResolversParentTypes["PlaidConnection"]
> = ResolversObject<{
  accounts?: Resolver<
    Array<ResolversTypes["PlaidAccount"]>,
    ParentType,
    ContextType
  >;
  logo?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes["Query"] = ResolversParentTypes["Query"]
> = ResolversObject<{
  debug?: Resolver<ResolversTypes["Debug"], ParentType, ContextType>;
  pipe?: Resolver<
    ResolversTypes["Pipe"],
    ParentType,
    ContextType,
    RequireFields<QueryPipeArgs, "id">
  >;
  session?: Resolver<ResolversTypes["Session"], ParentType, ContextType>;
  user?: Resolver<
    ResolversTypes["User"],
    ParentType,
    ContextType,
    RequireFields<QueryUserArgs, "id">
  >;
}>;

export type SessionResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes["Session"] = ResolversParentTypes["Session"]
> = ResolversObject<{
  currentUser?: Resolver<ResolversTypes["User"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SlackChannelResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes["SlackChannel"] = ResolversParentTypes["SlackChannel"]
> = ResolversObject<{
  connection?: Resolver<
    ResolversTypes["SlackConnection"],
    ParentType,
    ContextType
  >;
  count_members?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  topic?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SlackConnectionResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes["SlackConnection"] = ResolversParentTypes["SlackConnection"]
> = ResolversObject<{
  channels?: Resolver<
    Array<ResolversTypes["SlackChannel"]>,
    ParentType,
    ContextType
  >;
  logo?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  team?: Resolver<ResolversTypes["SlackTeam"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SlackDestinationResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes["SlackDestination"] = ResolversParentTypes["SlackDestination"]
> = ResolversObject<{
  channel?: Resolver<ResolversTypes["SlackChannel"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  team?: Resolver<ResolversTypes["SlackTeam"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SlackTeamResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes["SlackTeam"] = ResolversParentTypes["SlackTeam"]
> = ResolversObject<{
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  logo?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SourceResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes["Source"] = ResolversParentTypes["Source"]
> = ResolversObject<{
  account?: Resolver<ResolversTypes["Account"], ParentType, ContextType>;
  filters?: Resolver<Array<ResolversTypes["Filter"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type StringFilterResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes["StringFilter"] = ResolversParentTypes["StringFilter"]
> = ResolversObject<{
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  kind?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  op?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  word?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TodoResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes["Todo"] = ResolversParentTypes["Todo"]
> = ResolversObject<{
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  title?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TwilioAccountResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes["TwilioAccount"] = ResolversParentTypes["TwilioAccount"]
> = ResolversObject<{
  connection?: Resolver<
    ResolversTypes["TwilioConnection"],
    ParentType,
    ContextType
  >;
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  phone?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TwilioConnectionResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes["TwilioConnection"] = ResolversParentTypes["TwilioConnection"]
> = ResolversObject<{
  account?: Resolver<ResolversTypes["TwilioAccount"], ParentType, ContextType>;
  logo?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TwilioDestinationResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes["TwilioDestination"] = ResolversParentTypes["TwilioDestination"]
> = ResolversObject<{
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  phone?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes["User"] = ResolversParentTypes["User"]
> = ResolversObject<{
  bitcoin_connections?: Resolver<
    Array<ResolversTypes["BitcoinConnection"]>,
    ParentType,
    ContextType
  >;
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  pipes?: Resolver<Array<ResolversTypes["Pipe"]>, ParentType, ContextType>;
  plaid_connections?: Resolver<
    Array<ResolversTypes["PlaidConnection"]>,
    ParentType,
    ContextType
  >;
  slack_connections?: Resolver<
    Array<ResolversTypes["SlackConnection"]>,
    ParentType,
    ContextType
  >;
  todos?: Resolver<Array<ResolversTypes["Todo"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = Context> = ResolversObject<{
  Account?: AccountResolvers<ContextType>;
  BitcoinAccount?: BitcoinAccountResolvers<ContextType>;
  BitcoinConnection?: BitcoinConnectionResolvers<ContextType>;
  CreatePipeInput?: CreatePipeInputResolvers<ContextType>;
  Debug?: DebugResolvers<ContextType>;
  Destination?: DestinationResolvers<ContextType>;
  Filter?: FilterResolvers<ContextType>;
  Flags?: FlagsResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  NumberFilter?: NumberFilterResolvers<ContextType>;
  Pipe?: PipeResolvers<ContextType>;
  PlaidAccount?: PlaidAccountResolvers<ContextType>;
  PlaidConnection?: PlaidConnectionResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Session?: SessionResolvers<ContextType>;
  SlackChannel?: SlackChannelResolvers<ContextType>;
  SlackConnection?: SlackConnectionResolvers<ContextType>;
  SlackDestination?: SlackDestinationResolvers<ContextType>;
  SlackTeam?: SlackTeamResolvers<ContextType>;
  Source?: SourceResolvers<ContextType>;
  StringFilter?: StringFilterResolvers<ContextType>;
  Todo?: TodoResolvers<ContextType>;
  TwilioAccount?: TwilioAccountResolvers<ContextType>;
  TwilioConnection?: TwilioConnectionResolvers<ContextType>;
  TwilioDestination?: TwilioDestinationResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
}>;
