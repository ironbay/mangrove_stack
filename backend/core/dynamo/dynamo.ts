import { Dynamo as DynamoOnetable } from "dynamodb-onetable/Dynamo";
import { Table as T } from "dynamodb-onetable";
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";

const client = new DynamoOnetable({ client: new DynamoDBClient({}) });

export const Schema = {
  format: "onetable:1.1.0",
  version: "0.0.1",
  indexes: {
    primary: { hask: "pk", sort: "sk" },
  },
  models: {
    Pipe: {
      object: { type: String },
      pk: { type: String, value: "user#${user_id}" },
      sk: { type: String, value: "pipe#${id}" },
      user_id: { type: String },
      id: { type: String },
    },
    Flag: {
      object: { type: String },
      pk: { type: String, value: "user#{user_id}" },
      sk: { type: String, value: "pipe#${pipe_id}" },
      user_id: { type: String },
      pipe_id: { type: String },
      enabled: { type: Boolean },
    },
    NumberFilter: {
      object: { type: String },
      pk: { type: String, value: "user#${user_id}" },
      sk: {
        type: String,
        value: "pipe#${pipe_id}#source#${source_id}#filter#${filter}",
      },
      user_id: { type: String },
      pipe_id: { type: String },
      source_id: { type: String },
      id: { type: String },
      account: { type: String },
      kind: { type: String },
      op: { type: String },
      value: { type: Number },
    },
    StringFilter: {
      object: { type: String },
      pk: { type: String, value: "user#${user_id}" },
      sk: {
        type: String,
        value: "pipe#${pipe_id}#source#${source_id}#filter#${id}",
      },
      user_id: { type: String },
      pipe_id: { type: String },
      source_id: { type: String },
      id: { type: String },
      account: { type: String },
      kind: { type: String },
      op: { type: String },
      value: { type: String },
    },
    Connection: {
      object: { type: String },
      pk: { type: String, value: "user#${user_id}" },
      sk: { type: String, value: "connection#${id}" },
      id: { type: String },
      kind: { type: String },
      token: { type: String },
    },
  } as const,
} as const;

export const Table = new T({
  client,
  name: "MangroveStack",
  schema: Schema,
});
