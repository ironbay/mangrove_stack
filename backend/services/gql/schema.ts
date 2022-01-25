import { gql } from "graphql-tag";
export const typeDefs = gql`
  schema {
    query: Query
    mutation: Mutation
  }
  type Account {
    id: ID!
    name: String!
  }
  type Connection {
    id: ID!
    name: String!
  }
  input CreateTodoInput {
    id: String!
    title: String!
  }
  type Debug {
    database: String!
  }
  type Destination {
    account: Account!
    connection: Connection!
  }
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
  type SlackTeam {
    id: ID!
    name: String!
  }
  type Source {
    account: Account!
    connection: Connection!
    filters: [Filter!]!
  }
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
