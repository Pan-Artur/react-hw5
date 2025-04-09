import recipies from "../../recipies.json";
import { Recipe } from "../Recipe/Recipe.jsx";

import { StyledRecipies } from "./StyledRecipies.js";

export const Recipies = () => {
  return (
    <StyledRecipies>
      {recipies.map((recipe) => (
        <Recipe
          key={recipe.id}
          name={recipe.name}
          time={recipe.time}
          servings={recipe.servings}
          calories={recipe.calories}
          difficulty={recipe.difficulty}
          image={recipe.image}
        />
      ))}
    </StyledRecipies>
  );
};
