'use server'

import { ApolloClient, InMemoryCache } from "@apollo/client";

const createApolloClient = () => {
  return new ApolloClient({
    uri: "https://oxygen-dev-server-f3a3a37f7daa.herokuapp.com/graphql",
    cache: new InMemoryCache(),
  });
};

export default createApolloClient;

