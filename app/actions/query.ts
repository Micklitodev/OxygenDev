"use server";

import { getClient } from "@/apollo-client";

export async function query(inputQuery: any) {
  const client = getClient();
  const { data } = await client.query({
    query: inputQuery,
  });

  return {
    props: {
      serverRes: data,
    },
  };
}
