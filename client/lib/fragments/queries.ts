import { gql } from "@apollo/client";

export const GET_RECIPES = gql`
  {
    getRecipes {
      description
      name
    }
  }
`;
