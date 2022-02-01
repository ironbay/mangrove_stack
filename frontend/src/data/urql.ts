import gql from "graphql-tag";
import * as Urql from "urql";
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
  createTodo: Todo;
  removeTodo?: Maybe<Todo>;
  upload: Scalars["String"];
};

export type MutationCreateTodoArgs = {
  input: CreateTodoInput;
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

export type TodosQueryVariables = Exact<{ [key: string]: never }>;

export type TodosQuery = {
  __typename?: "Query";
  session: {
    __typename?: "Session";
    currentUser: {
      __typename?: "User";
      todos: Array<{ __typename?: "Todo"; id: string; title: string }>;
    };
  };
};

export type RemoveTodoMutationVariables = Exact<{
  id: Scalars["String"];
}>;

export type RemoveTodoMutation = {
  __typename?: "Mutation";
  removeTodo?:
    | { __typename?: "Todo"; id: string; title: string }
    | null
    | undefined;
};

export type CreateTodoMutationVariables = Exact<{
  id: Scalars["String"];
  title: Scalars["String"];
}>;

export type CreateTodoMutation = {
  __typename?: "Mutation";
  createTodo: { __typename?: "Todo"; id: string; title: string };
};

export type UploadMutationVariables = Exact<{
  name: Scalars["String"];
  type: Scalars["String"];
}>;

export type UploadMutation = { __typename?: "Mutation"; upload: string };

export type PipeListQueryVariables = Exact<{ [key: string]: never }>;

export type PipeListQuery = {
  __typename?: "Query";
  session: {
    __typename?: "Session";
    currentUser: {
      __typename?: "User";
      pipes: Array<{
        __typename?: "Pipe";
        id: string;
        sources: Array<{
          __typename?: "Source";
          account:
            | {
                __typename?: "BitcoinAccount";
                connection: { __typename?: "BitcoinConnection"; logo: string };
              }
            | {
                __typename?: "PlaidAccount";
                connection: { __typename?: "PlaidConnection"; logo: string };
              };
        }>;
      }>;
    };
  };
};

export const TodosDocument = gql`
  query Todos {
    session {
      currentUser {
        todos {
          id
          title
        }
      }
    }
  }
`;

export function useTodosQuery(
  options: Omit<Urql.UseQueryArgs<TodosQueryVariables>, "query"> = {}
) {
  return Urql.useQuery<TodosQuery>({ query: TodosDocument, ...options });
}
export const RemoveTodoDocument = gql`
  mutation RemoveTodo($id: String!) {
    removeTodo(id: $id) {
      id
      title
    }
  }
`;

export function useRemoveTodoMutation() {
  return Urql.useMutation<RemoveTodoMutation, RemoveTodoMutationVariables>(
    RemoveTodoDocument
  );
}
export const CreateTodoDocument = gql`
  mutation CreateTodo($id: String!, $title: String!) {
    createTodo(input: { id: $id, title: $title }) {
      id
      title
    }
  }
`;

export function useCreateTodoMutation() {
  return Urql.useMutation<CreateTodoMutation, CreateTodoMutationVariables>(
    CreateTodoDocument
  );
}
export const UploadDocument = gql`
  mutation Upload($name: String!, $type: String!) {
    upload(name: $name, type: $type)
  }
`;

export function useUploadMutation() {
  return Urql.useMutation<UploadMutation, UploadMutationVariables>(
    UploadDocument
  );
}
export const PipeListDocument = gql`
  query PipeList {
    session {
      currentUser {
        pipes {
          id
          sources {
            account {
              ... on PlaidAccount {
                connection {
                  logo
                }
              }
              ... on BitcoinAccount {
                connection {
                  logo
                }
              }
            }
          }
        }
      }
    }
  }
`;

export function usePipeListQuery(
  options: Omit<Urql.UseQueryArgs<PipeListQueryVariables>, "query"> = {}
) {
  return Urql.useQuery<PipeListQuery>({ query: PipeListDocument, ...options });
}
