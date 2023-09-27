"use server";

import createApolloClient from "../../apollo-client";

const client = createApolloClient();

export async function serverActions(queryInput: any) {
  try {
    const { data } = await client.query({
      query: queryInput
    });

    return {
      recipe: data.getRecipes,
    };
  } catch (error) {
    console.error("Error");
  }
}
