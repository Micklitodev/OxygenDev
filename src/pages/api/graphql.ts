import { ApolloServer } from "apollo-server-micro";
import { typeDefs } from "./typedefs";
import { resolvers } from "./resolvers";
import { NextApiRequest, NextApiResponse } from "next";
import db from "../../../datastore/config/connection";

const apolloServer = new ApolloServer({ typeDefs, resolvers });

const startServerPromise = apolloServer.start();

let isServerStarted = false;

db.once("open", () => {
  console.log("db connected");
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  await startServerPromise.then(() => {
    if (!isServerStarted) {
      console.log("apollo server started");
      isServerStarted = true;
    }
  });
  return apolloServer.createHandler({ path: "/api/graphql" })(req, res);
};
