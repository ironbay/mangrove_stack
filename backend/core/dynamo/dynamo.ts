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
      pk: { type: String, value: "user#${user_id}#pipe#${id}" },
      sk: { type: String, value: "pipe#" },
      id: { type: String },
      user_id: { type: String },
    } as const,
    Source: {
      pk: { type: String, value: "user#${user_id}#pipe${pipe_id}" },
      sk: { type: String, value: "source#${id}" },
      id: { type: String },
      user_id: { type: String },
      pipe_id: { type: String },
    } as const,
    Filter: {
      pk: { type: String, value: "user${user_id}#pipe#${id}" },
      sk: { type: String, value: "source#${source_id}#filter#${id}" },
      id: { type: String },
      user_id: { type: String },
      pipe_id: { type: String },
      source_id: { type: String },
    } as const,
  } as const,
} as const;

export const Table = new T({
  client,
  name: "MangroveStack",
  schema: Schema,
});
