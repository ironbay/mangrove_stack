import { gql } from "graphql-tag";
export const typeDefs = gql`
  schema {
    query: Query
    mutation: Mutation
  }
  input CreateTodoInput {
    id: String!
    title: String!
  }
  type Debug {
    database: String!
  }
  union Destination = SlackDestination
  interface Filter {
    id: ID!
    kind: String!
    op: String!
  }
  type Flags {
    enabled: Boolean!
  }
  type Mutation {
    createTodo(input: CreateTodoInput!): Todo!
    removeTodo(id: String!): Todo
    upload(name: String!, type: String!): String!
  }
  type NumberFilter implements Filter {
    id: ID!
    int: Int!
    kind: String!
    op: String!
  }
  type Pipe {
    destinations: [Destination!]!
    flags: Flags!
    name: String!
    sources: [Source!]!
  }
  type PlaidAccount {
    id: ID!
    kind: String!
    name: String!
    subKind: String!
  }
  type PlaidConnection {
    accounts: [PlaidAccount!]!
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
    count_members: Int!
    id: ID!
    name: String!
    topic: String!
  }
  type SlackConnection {
    channels: [SlackChannel!]!
    team: SlackTeam!
  }
  type SlackDestination {
    channel: SlackChannel!
    team: SlackTeam!
  }
  type SlackTeam {
    id: ID!
    name: String!
  }
  type Source {
    account: SourceAccount!
    filters: [Filter!]!
  }
  union SourceAccount = PlaidAccount
  type StringFilter implements Filter {
    id: ID!
    kind: String!
    op: String!
    word: String!
  }
  type Todo {
    id: ID!
    title: String!
  }
  type User {
    id: ID!
    plaid_connections: [PlaidConnection!]!
    slack_connections: [SlackConnection!]!
    todos: [Todo!]!
  }
`;
