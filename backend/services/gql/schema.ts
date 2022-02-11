import { gql } from "graphql-tag"
export const typeDefs = gql`
  schema {
    query: Query
    mutation: Mutation
  }
  type BitcoinAccount {
    address: String!
    connection: BitcoinConnection!
    id: ID!
    kind: String!
  }
  type BitcoinConnection implements Connection {
    account: BitcoinAccount!
    id: ID!
    logo: String!
    name: String!
    pipes: [Pipe!]!
  }
  interface Connection {
    id: ID!
    logo: String!
    pipes: [Pipe!]!
  }
  input CreateTodoInput {
    id: String!
    title: String!
  }
  type Debug {
    database: String!
  }
  union Destination = SlackDestination | TwilioDestination
  input DestinationInput {
    slack: [SlackDestinationInput]!
    twilio: [TwilioDestinationInput]!
  }
  interface Filter {
    id: ID!
    kind: String!
    op: String!
  }
  input FilterInput {
    number: [NumberFilterInput]!
    string: [StringFilterInput!]!
  }
  union FilterUnion = NumberFilter | StringFilter
  type Filters {
    number: [NumberFilter!]!
    string: [StringFilter!]!
  }
  type Flags {
    enabled: Boolean!
  }
  input FlagsInput {
    enabled: Boolean!
  }
  type Mutation {
    createPipe(input: PipeInput!): Pipe!
    createTodo(input: CreateTodoInput!): Todo!
    removeConnection(input: String!): Connection!
    removePipe(input: String!): ID!
    removeTodo(id: String!): Todo
    updatePipe(input: PipeInput!): Pipe!
    upload(name: String!, type: String!): String!
  }
  type NumberFilter implements Filter {
    id: ID!
    kind: String!
    op: String!
    value: Int!
  }
  input NumberFilterInput {
    id: ID!
    kind: String!
    op: String!
    value: Int!
  }
  type Pipe {
    destinations: [Destination!]!
    flags: Flags!
    id: ID!
    name: String!
    sources: [Source!]!
  }
  input PipeInput {
    flags: FlagsInput!
    id: ID!
    name: String!
    slack_destinations: [SlackDestinationInput!]!
    sources: [SourceInput!]!
    twilio_destinations: [TwilioDestinationInput!]!
  }
  type PlaidAccount {
    category: String!
    connection: PlaidConnection!
    id: ID!
    kind: String!
    name: String!
    subCategory: String!
  }
  type PlaidConnection implements Connection {
    accounts: [PlaidAccount!]!
    id: ID!
    logo: String!
    name: String!
    pipes: [Pipe!]!
  }
  type PlaidLink {
    link: String!
  }
  type Query {
    connection(id: ID!): Connection!
    debug: Debug!
    pipe(id: ID!): Pipe!
    plaid_link(user: ID!): PlaidLink!
    session: Session!
    slack_link(user: ID!): SlackLink!
    user(id: ID!): User!
  }
  type Session {
    currentUser: User!
  }
  type SlackChannel {
    connection: SlackConnection!
    count_members: Int!
    id: ID!
    name: String!
    topic: String!
  }
  type SlackConnection implements Connection {
    channels: [SlackChannel!]!
    id: ID!
    logo: String!
    name: String!
    pipes: [Pipe!]!
    team: SlackTeam!
  }
  type SlackDestination {
    channel: SlackChannel!
    id: ID!
    team: SlackTeam!
  }
  input SlackDestinationInput {
    channel: String!
    connection: String!
    id: ID!
    kind: String!
  }
  type SlackLink {
    link: String!
  }
  type SlackTeam {
    id: ID!
    logo: String!
    name: String!
  }
  type Source {
    account: SourceAccount!
    filters: [FilterUnion]!
    id: ID!
  }
  union SourceAccount = BitcoinAccount | PlaidAccount
  input SourceInput {
    account: String!
    connection: String!
    filters: FilterInput!
    id: ID!
  }
  type StringFilter implements Filter {
    id: ID!
    kind: String!
    op: String!
    value: String!
  }
  input StringFilterInput {
    id: ID!
    kind: String!
    op: String!
    value: String!
  }
  type Todo {
    id: ID!
    title: String!
  }
  type TwilioConnection implements Connection {
    id: ID!
    logo: String!
    name: String!
    phone: TwilioPhone!
    pipes: [Pipe!]!
  }
  type TwilioDestination {
    connection: TwilioConnection!
    id: ID!
    phone: TwilioPhone!
  }
  input TwilioDestinationInput {
    connection: String!
    id: ID!
    kind: String!
    phone: String!
  }
  type TwilioPhone {
    format: String!
    raw: String!
  }
  type User {
    connections: [Connection!]!
    id: ID!
    pipes: [Pipe!]!
    todos: [Todo!]!
  }
`
