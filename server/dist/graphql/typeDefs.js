"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_1 = require("apollo-server");
const typeDefs = (0, apollo_server_1.gql) `
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
exports.default = typeDefs;
