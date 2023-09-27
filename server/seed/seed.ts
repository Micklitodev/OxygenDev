import db from "../config/connection";
import { Recipe } from "../models";
import recipeData from "./recipedata.json";

db.once("open", async () => {
  await Recipe.deleteMany({});

  await Recipe.insertMany(recipeData);

  console.log("all done!");
  process.exit(0);
});
