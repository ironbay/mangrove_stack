import { gql } from "graphql-tag";
export const typeDefs = gql`
  schema {
    query: Query
    mutation: Mutation
  }
  type BitcoinAccount {
    address: String!
    connection: BitcoinConnection!
    kind: String!
  }
  type BitcoinConnection {
    account: BitcoinAccount!
    id: ID!
    logo: String!
    name: String!
  }
  union Connection =
      BitcoinConnection
    | PlaidConnection
    | SlackConnection
    | TwilioConnection
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
  type PlaidConnection {
    accounts: [PlaidAccount!]!
    id: ID!
    logo: String!
    name: String!
  }
  type Query {
    debug: Debug!
    pipe(id: ID!): Pipe!
    session: Session!
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
  type SlackConnection {
    channels: [SlackChannel!]!
    id: ID!
    logo: String!
    name: String!
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
  type SlackTeam {
    id: ID!
    logo: String!
    name: String!
  }
  type Source {
    account: SourceAccount!
    filters: Filters!
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
  type TwilioAccount {
    connection: TwilioConnection!
    id: ID!
    phone: String!
  }
  type TwilioConnection {
    account: TwilioAccount!
    id: ID!
    logo: String!
    name: String!
  }
  type TwilioDestination {
    connection: TwilioConnection!
    id: ID!
    phone: String!
  }
  input TwilioDestinationInput {
    connection: String!
    id: ID!
    kind: String!
    phone: String!
  }
  type User {
    connections: [Connection!]!
    id: ID!
    pipes: [Pipe!]!
    todos: [Todo!]!
  }
`;
