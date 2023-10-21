"use server";

import createApolloClient from "@/apollo-client";
import { revalidatePath } from "next/cache";

export async function mutate(inputMutation: any, vari: any) {
  const client = createApolloClient();
  const { data } = await client.mutate({
    mutation: inputMutation,
    variables: vari,
  });

  if (data) {
    console.log("revalidatedpath /");
    revalidatePath("/");
  }
  return {
    props: {
      serverRes: data,
    },
  };
}
