import { ApolloServer } from "apollo-server";
import db from "./config/connection";
import { typeDefs, resolvers } from "./graphql";

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

db.once("open", () => {
  console.log("sucess");
  return server.listen({ port: 4000 });
});
