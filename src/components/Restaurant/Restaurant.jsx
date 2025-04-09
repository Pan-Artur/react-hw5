import { Recipies } from "../Recipies/Recipies.jsx";

import { StyledRestaurant } from "./StyledRestaurant.js";

export const Restaurant = () => {
  return (
    <StyledRestaurant>
      <h1>Recipies from our restaurant</h1>
      <Recipies />
    </StyledRestaurant>
  );
};
