import { Schema, model } from "mongoose";

const recipeSchema = new Schema({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
});

const Recipe = model("Recipe", recipeSchema);

export default Recipe;
