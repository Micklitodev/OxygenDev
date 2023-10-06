"use server";

import createApolloClient from "@/apollo-client";

export async function useQuery(inputQuery: any) {
  const client = createApolloClient();
  const { data } = await client.query({
    query: inputQuery,
  });

  return {
    props: {
      serverRes: data,
    },
  };
}
