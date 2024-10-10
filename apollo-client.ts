"use server";

import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
} from "@apollo/client";

let client: ApolloClient<NormalizedCacheObject> | null = null;

export const getClient = () => {
  if (!client) {
    client = new ApolloClient<NormalizedCacheObject>({
      uri: process.env.API_URI || "http://localhost:4000/",
      cache: new InMemoryCache(),
    });
  }
  return client;
};
