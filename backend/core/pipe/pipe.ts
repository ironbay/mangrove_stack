import { Entity, Model, Table } from "dynamodb-onetable";
import { Dynamo } from "../dynamo";

const Pipe = Dynamo.Table.getModel<PipeType>("Pipe");
type PipeType = Entity<typeof Dynamo.Schema.models.Pipe>;

export async function get(user_id: string, id: string) {
  return Pipe.find({ pk: `user#${user_id}`, sk: { begins: `pipe#${id}` } });
}

export async function list(user_id: string) {
  return Pipe.find({ pk: `user#${user_id}` });
}
