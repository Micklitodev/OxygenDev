"use server";

import createApolloClient from "../../apollo-client";
import { UserInput } from "@/lib/types";

const client = createApolloClient();

export async function addRecipeServerAction(
  mutationInput: any,
  userInput: UserInput
) {
  try {
    const { data } = await client.mutate({
      mutation: mutationInput,
      variables: {
        input: userInput,
      },
    });

    return {
      addedRecipe: data.addRecipe,
    };
  } catch (error) {
    console.error("Error", error);
    throw error;
  }
}
