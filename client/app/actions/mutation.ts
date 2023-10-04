"use server";

import createApolloClient from "@/apollo-client";

export async function useMutation(inputMutation: any, vari: any) {
  const client = createApolloClient();
  const { data } = await client.mutate({
    mutation: inputMutation,
    variables: vari
  });

  return {
    props: {
      serverRes: data,
    },
  };
}
