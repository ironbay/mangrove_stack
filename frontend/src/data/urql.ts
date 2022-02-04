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

export type SlackDestinationInput = {
  channel: Scalars["String"];
  connection: Scalars["String"];
  id: Scalars["ID"];
  kind: Scalars["String"];
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
  filters: Filters;
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
  connection: TwilioConnection;
  id: Scalars["ID"];
  phone: Scalars["String"];
};

export type TwilioDestinationInput = {
  connection: Scalars["String"];
  id: Scalars["ID"];
  kind: Scalars["String"];
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
        destinations: Array<
          | {
              __typename?: "SlackDestination";
              team: { __typename?: "SlackTeam"; logo: string };
            }
          | { __typename?: "TwilioDestination"; id: string }
        >;
      }>;
    };
  };
};

export type UpdatePipeMutationVariables = Exact<{
  input: PipeInput;
}>;

export type UpdatePipeMutation = {
  __typename?: "Mutation";
  updatePipe: { __typename?: "Pipe"; id: string; name: string };
};

export type CreatePipeMutationVariables = Exact<{
  input: PipeInput;
}>;

export type CreatePipeMutation = {
  __typename?: "Mutation";
  createPipe: { __typename?: "Pipe"; id: string; name: string };
};

export type RemovePipeMutationVariables = Exact<{
  id: Scalars["String"];
}>;

export type RemovePipeMutation = {
  __typename?: "Mutation";
  removePipe: string;
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
          destinations {
            ... on SlackDestination {
              team {
                logo
              }
            }
            ... on TwilioDestination {
              id
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
export const UpdatePipeDocument = gql`
  mutation UpdatePipe($input: PipeInput!) {
    updatePipe(input: $input) {
      id
      name
    }
  }
`;

export function useUpdatePipeMutation() {
  return Urql.useMutation<UpdatePipeMutation, UpdatePipeMutationVariables>(
    UpdatePipeDocument
  );
}
export const CreatePipeDocument = gql`
  mutation CreatePipe($input: PipeInput!) {
    createPipe(input: $input) {
      id
      name
    }
  }
`;

export function useCreatePipeMutation() {
  return Urql.useMutation<CreatePipeMutation, CreatePipeMutationVariables>(
    CreatePipeDocument
  );
}
export const RemovePipeDocument = gql`
  mutation RemovePipe($id: String!) {
    removePipe(input: $id)
  }
`;

export function useRemovePipeMutation() {
  return Urql.useMutation<RemovePipeMutation, RemovePipeMutationVariables>(
    RemovePipeDocument
  );
}
