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
    flags: Flags!
    name: String!
    sources: [Source!]!
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
  type Source {
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
    todos: [Todo!]!
  }
`;
