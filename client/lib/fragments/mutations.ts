import { gql } from "@apollo/client";

export const ADD_RECIPE = gql`
  mutation Mutation($input: RecipeInput) {
    addRecipe(input: $input) {
      description
      name
    }
  }
`;
