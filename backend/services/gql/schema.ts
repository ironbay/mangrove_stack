import { gql } from "graphql-tag";
export const typeDefs = gql`
  schema {
    query: Query
    mutation: Mutation
  }
  union Account = BitcoinAccount | PlaidAccount
  type BitcoinAccount {
    address: String!
    connection: BitcoinConnection!
    kind: String!
  }
  type BitcoinConnection {
    account: BitcoinAccount!
    logo: String!
  }
  input CreateTodoInput {
    id: String!
    title: String!
  }
  type Debug {
    database: String!
  }
  union Destination = SlackDestination | TwilioDestination
  union Filter = NumberFilter | StringFilter
  type Flags {
    enabled: Boolean!
  }
  type Mutation {
    createTodo(input: CreateTodoInput!): Todo!
    removeTodo(id: String!): Todo
    upload(name: String!, type: String!): String!
  }
  type NumberFilter {
    id: ID!
    int: Int!
    kind: String!
    op: String!
  }
  type Pipe {
    destinations: [Destination!]!
    flags: Flags!
    id: ID!
    name: String!
    sources: [Source!]!
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
    logo: String!
  }
  type Query {
    debug: Debug!
    pipe: Pipe!
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
    logo: String!
    team: SlackTeam!
  }
  type SlackDestination {
    channel: SlackChannel!
    id: ID!
    team: SlackTeam!
  }
  type SlackTeam {
    id: ID!
    name: String!
  }
  type Source {
    account: Account!
    filters: [Filter!]!
  }
  type StringFilter {
    id: ID!
    kind: String!
    op: String!
    word: String!
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
    logo: String!
  }
  type TwilioDestination {
    id: ID!
    phone: String!
  }
  type User {
    bitcoin_connections: [BitcoinConnection!]!
    id: ID!
    pipes: [Pipe!]!
    plaid_connections: [PlaidConnection!]!
    slack_connections: [SlackConnection!]!
    todos: [Todo!]!
  }
`;
