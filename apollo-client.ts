'use server'

import { ApolloClient, InMemoryCache } from "@apollo/client";

const createApolloClient = () => {
  return new ApolloClient({
    uri: "https://oxygen-dev-server-fzji.vercel.app/graphql",
    cache: new InMemoryCache(),
  });
};

export default createApolloClient;

