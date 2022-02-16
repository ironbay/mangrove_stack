import { Entity, Model, Table } from "dynamodb-onetable";
import { Dynamo } from "../dynamo";

const Pipe = Dynamo.Table.getModel<PipeType>("Pipe");
type PipeType = Entity<typeof Dynamo.Schema.models.Pipe>;
const Pipe = Dynamo.Table.getModel<PipeType>("Pipe");

export async function get(user_id: string, id: string) {
  return Pipe.get({ user_id: user_id, id });
}

export async function list(user_id: string) {
  return Pipe.get({ user_id });
}
