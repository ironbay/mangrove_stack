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

export type BitcoinAccount = {
  __typename?: "BitcoinAccount";
  address: Scalars["String"];
  connection: BitcoinConnection;
  id: Scalars["ID"];
  kind: Scalars["String"];
};

export type BitcoinConnection = {
  __typename?: "BitcoinConnection";
  account: BitcoinAccount;
  id: Scalars["ID"];
  logo: Scalars["String"];
  name: Scalars["String"];
};

export type Connection =
  | BitcoinConnection
  | PlaidConnection
  | SlackConnection
  | TwilioConnection;

export type CreateTodoInput = {
  id: Scalars["String"];
  title: Scalars["String"];
};

export type Debug = {
  __typename?: "Debug";
  database: Scalars["String"];
};

export type Destination = SlackDestination | TwilioDestination;

export type DestinationInput = {
  slack: Array<InputMaybe<SlackDestinationInput>>;
  twilio: Array<InputMaybe<TwilioDestinationInput>>;
};

export type Filter = {
  id: Scalars["ID"];
  kind: Scalars["String"];
  op: Scalars["String"];
};

export type FilterInput = {
  number: Array<InputMaybe<NumberFilterInput>>;
  string: Array<StringFilterInput>;
};

export type FilterUnion = NumberFilter | StringFilter;

export type Filters = {
  __typename?: "Filters";
  number: Array<NumberFilter>;
  string: Array<StringFilter>;
};

export type Flags = {
  __typename?: "Flags";
  enabled: Scalars["Boolean"];
};

export type FlagsInput = {
  enabled: Scalars["Boolean"];
};

export type Mutation = {
  __typename?: "Mutation";
  createPipe: Pipe;
  createTodo: Todo;
  removeConnection: Connection;
  removePipe: Scalars["ID"];
  removeTodo?: Maybe<Todo>;
  updatePipe: Pipe;
  upload: Scalars["String"];
};

export type MutationCreatePipeArgs = {
  input: PipeInput;
};

export type MutationCreateTodoArgs = {
  input: CreateTodoInput;
};

export type MutationRemoveConnectionArgs = {
  input: Scalars["String"];
};

export type MutationRemovePipeArgs = {
  input: Scalars["String"];
};

export type MutationRemoveTodoArgs = {
  id: Scalars["String"];
};

export type MutationUpdatePipeArgs = {
  input: PipeInput;
};

export type MutationUploadArgs = {
  name: Scalars["String"];
  type: Scalars["String"];
};

export type NumberFilter = Filter & {
  __typename?: "NumberFilter";
  id: Scalars["ID"];
  kind: Scalars["String"];
  op: Scalars["String"];
  value: Scalars["Int"];
};

export type NumberFilterInput = {
  id: Scalars["ID"];
  kind: Scalars["String"];
  op: Scalars["String"];
  value: Scalars["Int"];
};

export type Pipe = {
  __typename?: "Pipe";
  destinations: Array<Destination>;
  flags: Flags;
  id: Scalars["ID"];
  name: Scalars["String"];
  sources: Array<Source>;
};

export type PipeInput = {
  flags: FlagsInput;
  id: Scalars["ID"];
  name: Scalars["String"];
  slack_destinations: Array<SlackDestinationInput>;
  sources: Array<SourceInput>;
  twilio_destinations: Array<TwilioDestinationInput>;
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
  id: Scalars["ID"];
  logo: Scalars["String"];
  name: Scalars["String"];
};

export type PlaidLink = {
  __typename?: "PlaidLink";
  link: Scalars["String"];
};

export type Query = {
  __typename?: "Query";
  connection: Connection;
  debug: Debug;
  pipe: Pipe;
  plaid_link: PlaidLink;
  session: Session;
  slack_link: SlackLink;
  user: User;
};

export type QueryConnectionArgs = {
  id: Scalars["ID"];
};

export type QueryPipeArgs = {
  id: Scalars["ID"];
};

export type QueryPlaid_LinkArgs = {
  user: Scalars["ID"];
};

export type QuerySlack_LinkArgs = {
  user: Scalars["ID"];
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
  id: Scalars["ID"];
  logo: Scalars["String"];
  name: Scalars["String"];
  team: SlackTeam;
};

export type SlackDestination = {
  __typename?: "SlackDestination";
  channel: SlackChannel;
  id: Scalars["ID"];
  team: SlackTeam;
};

export type SlackDestinationInput = {
  channel: Scalars["String"];
  connection: Scalars["String"];
  id: Scalars["ID"];
  kind: Scalars["String"];
};

export type SlackLink = {
  __typename?: "SlackLink";
  link: Scalars["String"];
};

export type SlackTeam = {
  __typename?: "SlackTeam";
  id: Scalars["ID"];
  logo: Scalars["String"];
  name: Scalars["String"];
};

export type Source = {
  __typename?: "Source";
  account: SourceAccount;
  filters: Array<Maybe<FilterUnion>>;
  id: Scalars["ID"];
};

export type SourceAccount = BitcoinAccount | PlaidAccount;

export type SourceInput = {
  account: Scalars["String"];
  connection: Scalars["String"];
  filters: FilterInput;
  id: Scalars["ID"];
};

export type StringFilter = Filter & {
  __typename?: "StringFilter";
  id: Scalars["ID"];
  kind: Scalars["String"];
  op: Scalars["String"];
  value: Scalars["String"];
};

export type StringFilterInput = {
  id: Scalars["ID"];
  kind: Scalars["String"];
  op: Scalars["String"];
  value: Scalars["String"];
};

export type Todo = {
  __typename?: "Todo";
  id: Scalars["ID"];
  title: Scalars["String"];
};

export type TwilioConnection = {
  __typename?: "TwilioConnection";
  id: Scalars["ID"];
  logo: Scalars["String"];
  name: Scalars["String"];
  phone: TwilioPhone;
};

export type TwilioDestination = {
  __typename?: "TwilioDestination";
  connection: TwilioConnection;
  id: Scalars["ID"];
  phone: TwilioPhone;
};

export type TwilioDestinationInput = {
  connection: Scalars["String"];
  id: Scalars["ID"];
  kind: Scalars["String"];
  phone: Scalars["String"];
};

export type TwilioPhone = {
  __typename?: "TwilioPhone";
  format: Scalars["String"];
  raw: Scalars["String"];
};

export type User = {
  __typename?: "User";
  connections: Array<Connection>;
  id: Scalars["ID"];
  pipes: Array<Pipe>;
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
  BitcoinAccount: ResolverTypeWrapper<DeepPartial<BitcoinAccount>>;
  BitcoinConnection: ResolverTypeWrapper<DeepPartial<BitcoinConnection>>;
  Boolean: ResolverTypeWrapper<DeepPartial<Scalars["Boolean"]>>;
  Connection: DeepPartial<
    | ResolversTypes["BitcoinConnection"]
    | ResolversTypes["PlaidConnection"]
    | ResolversTypes["SlackConnection"]
    | ResolversTypes["TwilioConnection"]
  >;
  CreateTodoInput: ResolverTypeWrapper<DeepPartial<CreateTodoInput>>;
  Debug: ResolverTypeWrapper<DeepPartial<Debug>>;
  Destination: DeepPartial<
    ResolversTypes["SlackDestination"] | ResolversTypes["TwilioDestination"]
  >;
  DestinationInput: ResolverTypeWrapper<DeepPartial<DestinationInput>>;
  Filter: ResolversTypes["NumberFilter"] | ResolversTypes["StringFilter"];
  FilterInput: ResolverTypeWrapper<DeepPartial<FilterInput>>;
  FilterUnion: DeepPartial<
    ResolversTypes["NumberFilter"] | ResolversTypes["StringFilter"]
  >;
  Filters: ResolverTypeWrapper<DeepPartial<Filters>>;
  Flags: ResolverTypeWrapper<DeepPartial<Flags>>;
  FlagsInput: ResolverTypeWrapper<DeepPartial<FlagsInput>>;
  ID: ResolverTypeWrapper<DeepPartial<Scalars["ID"]>>;
  Int: ResolverTypeWrapper<DeepPartial<Scalars["Int"]>>;
  Mutation: ResolverTypeWrapper<{}>;
  NumberFilter: ResolverTypeWrapper<DeepPartial<NumberFilter>>;
  NumberFilterInput: ResolverTypeWrapper<DeepPartial<NumberFilterInput>>;
  Pipe: ResolverTypeWrapper<
    DeepPartial<
      Omit<Pipe, "destinations"> & {
        destinations: Array<ResolversTypes["Destination"]>;
      }
    >
  >;
  PipeInput: ResolverTypeWrapper<DeepPartial<PipeInput>>;
  PlaidAccount: ResolverTypeWrapper<DeepPartial<PlaidAccount>>;
  PlaidConnection: ResolverTypeWrapper<DeepPartial<PlaidConnection>>;
  PlaidLink: ResolverTypeWrapper<DeepPartial<PlaidLink>>;
  Query: ResolverTypeWrapper<{}>;
  Session: ResolverTypeWrapper<DeepPartial<Session>>;
  SlackChannel: ResolverTypeWrapper<DeepPartial<SlackChannel>>;
  SlackConnection: ResolverTypeWrapper<DeepPartial<SlackConnection>>;
  SlackDestination: ResolverTypeWrapper<DeepPartial<SlackDestination>>;
  SlackDestinationInput: ResolverTypeWrapper<
    DeepPartial<SlackDestinationInput>
  >;
  SlackLink: ResolverTypeWrapper<DeepPartial<SlackLink>>;
  SlackTeam: ResolverTypeWrapper<DeepPartial<SlackTeam>>;
  Source: ResolverTypeWrapper<
    DeepPartial<
      Omit<Source, "account" | "filters"> & {
        account: ResolversTypes["SourceAccount"];
        filters: Array<Maybe<ResolversTypes["FilterUnion"]>>;
      }
    >
  >;
  SourceAccount: DeepPartial<
    ResolversTypes["BitcoinAccount"] | ResolversTypes["PlaidAccount"]
  >;
  SourceInput: ResolverTypeWrapper<DeepPartial<SourceInput>>;
  String: ResolverTypeWrapper<DeepPartial<Scalars["String"]>>;
  StringFilter: ResolverTypeWrapper<DeepPartial<StringFilter>>;
  StringFilterInput: ResolverTypeWrapper<DeepPartial<StringFilterInput>>;
  Todo: ResolverTypeWrapper<DeepPartial<Todo>>;
  TwilioConnection: ResolverTypeWrapper<DeepPartial<TwilioConnection>>;
  TwilioDestination: ResolverTypeWrapper<DeepPartial<TwilioDestination>>;
  TwilioDestinationInput: ResolverTypeWrapper<
    DeepPartial<TwilioDestinationInput>
  >;
  TwilioPhone: ResolverTypeWrapper<DeepPartial<TwilioPhone>>;
  User: ResolverTypeWrapper<
    DeepPartial<
      Omit<User, "connections"> & {
        connections: Array<ResolversTypes["Connection"]>;
      }
    >
  >;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  BitcoinAccount: DeepPartial<BitcoinAccount>;
  BitcoinConnection: DeepPartial<BitcoinConnection>;
  Boolean: DeepPartial<Scalars["Boolean"]>;
  Connection: DeepPartial<
    | ResolversParentTypes["BitcoinConnection"]
    | ResolversParentTypes["PlaidConnection"]
    | ResolversParentTypes["SlackConnection"]
    | ResolversParentTypes["TwilioConnection"]
  >;
  CreateTodoInput: DeepPartial<CreateTodoInput>;
  Debug: DeepPartial<Debug>;
  Destination: DeepPartial<
    | ResolversParentTypes["SlackDestination"]
    | ResolversParentTypes["TwilioDestination"]
  >;
  DestinationInput: DeepPartial<DestinationInput>;
  Filter:
    | ResolversParentTypes["NumberFilter"]
    | ResolversParentTypes["StringFilter"];
  FilterInput: DeepPartial<FilterInput>;
  FilterUnion: DeepPartial<
    ResolversParentTypes["NumberFilter"] | ResolversParentTypes["StringFilter"]
  >;
  Filters: DeepPartial<Filters>;
  Flags: DeepPartial<Flags>;
  FlagsInput: DeepPartial<FlagsInput>;
  ID: DeepPartial<Scalars["ID"]>;
  Int: DeepPartial<Scalars["Int"]>;
  Mutation: {};
  NumberFilter: DeepPartial<NumberFilter>;
  NumberFilterInput: DeepPartial<NumberFilterInput>;
  Pipe: DeepPartial<
    Omit<Pipe, "destinations"> & {
      destinations: Array<ResolversParentTypes["Destination"]>;
    }
  >;
  PipeInput: DeepPartial<PipeInput>;
  PlaidAccount: DeepPartial<PlaidAccount>;
  PlaidConnection: DeepPartial<PlaidConnection>;
  PlaidLink: DeepPartial<PlaidLink>;
  Query: {};
  Session: DeepPartial<Session>;
  SlackChannel: DeepPartial<SlackChannel>;
  SlackConnection: DeepPartial<SlackConnection>;
  SlackDestination: DeepPartial<SlackDestination>;
  SlackDestinationInput: DeepPartial<SlackDestinationInput>;
  SlackLink: DeepPartial<SlackLink>;
  SlackTeam: DeepPartial<SlackTeam>;
  Source: DeepPartial<
    Omit<Source, "account" | "filters"> & {
      account: ResolversParentTypes["SourceAccount"];
      filters: Array<Maybe<ResolversParentTypes["FilterUnion"]>>;
    }
  >;
  SourceAccount: DeepPartial<
    | ResolversParentTypes["BitcoinAccount"]
    | ResolversParentTypes["PlaidAccount"]
  >;
  SourceInput: DeepPartial<SourceInput>;
  String: DeepPartial<Scalars["String"]>;
  StringFilter: DeepPartial<StringFilter>;
  StringFilterInput: DeepPartial<StringFilterInput>;
  Todo: DeepPartial<Todo>;
  TwilioConnection: DeepPartial<TwilioConnection>;
  TwilioDestination: DeepPartial<TwilioDestination>;
  TwilioDestinationInput: DeepPartial<TwilioDestinationInput>;
  TwilioPhone: DeepPartial<TwilioPhone>;
  User: DeepPartial<
    Omit<User, "connections"> & {
      connections: Array<ResolversParentTypes["Connection"]>;
    }
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
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  kind?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BitcoinConnectionResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes["BitcoinConnection"] = ResolversParentTypes["BitcoinConnection"]
> = ResolversObject<{
  account?: Resolver<ResolversTypes["BitcoinAccount"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  logo?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ConnectionResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes["Connection"] = ResolversParentTypes["Connection"]
> = ResolversObject<{
  __resolveType: TypeResolveFn<
    | "BitcoinConnection"
    | "PlaidConnection"
    | "SlackConnection"
    | "TwilioConnection",
    ParentType,
    ContextType
  >;
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
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  kind?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  op?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
}>;

export type FilterUnionResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes["FilterUnion"] = ResolversParentTypes["FilterUnion"]
> = ResolversObject<{
  __resolveType: TypeResolveFn<
    "NumberFilter" | "StringFilter",
    ParentType,
    ContextType
  >;
}>;

export type FiltersResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes["Filters"] = ResolversParentTypes["Filters"]
> = ResolversObject<{
  number?: Resolver<
    Array<ResolversTypes["NumberFilter"]>,
    ParentType,
    ContextType
  >;
  string?: Resolver<
    Array<ResolversTypes["StringFilter"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
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
  removeConnection?: Resolver<
    ResolversTypes["Connection"],
    ParentType,
    ContextType,
    RequireFields<MutationRemoveConnectionArgs, "input">
  >;
  removePipe?: Resolver<
    ResolversTypes["ID"],
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
  updatePipe?: Resolver<
    ResolversTypes["Pipe"],
    ParentType,
    ContextType,
    RequireFields<MutationUpdatePipeArgs, "input">
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
  kind?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  op?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  value?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
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
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  logo?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PlaidLinkResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes["PlaidLink"] = ResolversParentTypes["PlaidLink"]
> = ResolversObject<{
  link?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes["Query"] = ResolversParentTypes["Query"]
> = ResolversObject<{
  connection?: Resolver<
    ResolversTypes["Connection"],
    ParentType,
    ContextType,
    RequireFields<QueryConnectionArgs, "id">
  >;
  debug?: Resolver<ResolversTypes["Debug"], ParentType, ContextType>;
  pipe?: Resolver<
    ResolversTypes["Pipe"],
    ParentType,
    ContextType,
    RequireFields<QueryPipeArgs, "id">
  >;
  plaid_link?: Resolver<
    ResolversTypes["PlaidLink"],
    ParentType,
    ContextType,
    RequireFields<QueryPlaid_LinkArgs, "user">
  >;
  session?: Resolver<ResolversTypes["Session"], ParentType, ContextType>;
  slack_link?: Resolver<
    ResolversTypes["SlackLink"],
    ParentType,
    ContextType,
    RequireFields<QuerySlack_LinkArgs, "user">
  >;
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
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  logo?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
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

export type SlackLinkResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes["SlackLink"] = ResolversParentTypes["SlackLink"]
> = ResolversObject<{
  link?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
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
  account?: Resolver<ResolversTypes["SourceAccount"], ParentType, ContextType>;
  filters?: Resolver<
    Array<Maybe<ResolversTypes["FilterUnion"]>>,
    ParentType,
    ContextType
  >;
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SourceAccountResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes["SourceAccount"] = ResolversParentTypes["SourceAccount"]
> = ResolversObject<{
  __resolveType: TypeResolveFn<
    "BitcoinAccount" | "PlaidAccount",
    ParentType,
    ContextType
  >;
}>;

export type StringFilterResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes["StringFilter"] = ResolversParentTypes["StringFilter"]
> = ResolversObject<{
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  kind?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  op?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  value?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
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

export type TwilioConnectionResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes["TwilioConnection"] = ResolversParentTypes["TwilioConnection"]
> = ResolversObject<{
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  logo?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  phone?: Resolver<ResolversTypes["TwilioPhone"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TwilioDestinationResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes["TwilioDestination"] = ResolversParentTypes["TwilioDestination"]
> = ResolversObject<{
  connection?: Resolver<
    ResolversTypes["TwilioConnection"],
    ParentType,
    ContextType
  >;
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  phone?: Resolver<ResolversTypes["TwilioPhone"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TwilioPhoneResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes["TwilioPhone"] = ResolversParentTypes["TwilioPhone"]
> = ResolversObject<{
  format?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  raw?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes["User"] = ResolversParentTypes["User"]
> = ResolversObject<{
  connections?: Resolver<
    Array<ResolversTypes["Connection"]>,
    ParentType,
    ContextType
  >;
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  pipes?: Resolver<Array<ResolversTypes["Pipe"]>, ParentType, ContextType>;
  todos?: Resolver<Array<ResolversTypes["Todo"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = Context> = ResolversObject<{
  BitcoinAccount?: BitcoinAccountResolvers<ContextType>;
  BitcoinConnection?: BitcoinConnectionResolvers<ContextType>;
  Connection?: ConnectionResolvers<ContextType>;
  Debug?: DebugResolvers<ContextType>;
  Destination?: DestinationResolvers<ContextType>;
  Filter?: FilterResolvers<ContextType>;
  FilterUnion?: FilterUnionResolvers<ContextType>;
  Filters?: FiltersResolvers<ContextType>;
  Flags?: FlagsResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  NumberFilter?: NumberFilterResolvers<ContextType>;
  Pipe?: PipeResolvers<ContextType>;
  PlaidAccount?: PlaidAccountResolvers<ContextType>;
  PlaidConnection?: PlaidConnectionResolvers<ContextType>;
  PlaidLink?: PlaidLinkResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Session?: SessionResolvers<ContextType>;
  SlackChannel?: SlackChannelResolvers<ContextType>;
  SlackConnection?: SlackConnectionResolvers<ContextType>;
  SlackDestination?: SlackDestinationResolvers<ContextType>;
  SlackLink?: SlackLinkResolvers<ContextType>;
  SlackTeam?: SlackTeamResolvers<ContextType>;
  Source?: SourceResolvers<ContextType>;
  SourceAccount?: SourceAccountResolvers<ContextType>;
  StringFilter?: StringFilterResolvers<ContextType>;
  Todo?: TodoResolvers<ContextType>;
  TwilioConnection?: TwilioConnectionResolvers<ContextType>;
  TwilioDestination?: TwilioDestinationResolvers<ContextType>;
  TwilioPhone?: TwilioPhoneResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
}>;
