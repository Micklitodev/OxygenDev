"use server";

import { revalidatePath } from "next/cache";
import { getClient } from "@/apollo-client";

export async function mutate(inputMutation: any, vari: any) {
  const client = getClient();
  const { data } = await client.mutate({
    mutation: inputMutation,
    variables: vari,
  });

  if (data) {
    console.log("revalidated path /");
    revalidatePath("/");
  }
  return {
    props: {
      serverRes: data,
    },
  };
}
