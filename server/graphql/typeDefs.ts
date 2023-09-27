import { gql } from "apollo-server";

const typeDefs = gql`
  type Recipe {
    name: String
    description: String
  }

  input RecipeInput {
    name: String
    description: String
  }

  type Query {
    getRecipes: [Recipe]
  }

  type Mutation {
    addRecipe(input: RecipeInput): Recipe!
  }
`;

export default typeDefs;
