import { Recipe } from "../models";
import { Recipes } from "../lib/types";

const resolvers = {
  Query: {
    async getRecipes() {
      return await Recipe.find().limit(10);
    },
  },

  Mutation: {
    async addRecipe(_: null, args: Recipes) {
      const createdRecipe = new Recipe({
        ...args,
      });
      const res = await createdRecipe.save();

      return {
        res,
      };
    },
  },
};

export default resolvers;
