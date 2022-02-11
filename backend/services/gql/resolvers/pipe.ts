import { Source } from "graphql";
import { Resolvers } from "./types";

export const PipeResolver: Resolvers = {
  Query: {
    pipe: async (parent, args, ctx) => {
      return {};
    },
  },
};
