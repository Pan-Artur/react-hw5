import React from "react";
import PropTypes from "prop-types";

import { StyledRecipe } from "./StyledRecipe";

import { BsAlarm } from "react-icons/bs";

export const Recipe = ({
  name,
  time,
  servings,
  calories,
  difficulty,
  image,
}) => {
  return (
    <StyledRecipe>
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <ul class="info">
        <li>
          <p>
            <span>
              <BsAlarm />
            </span>
            {time}
          </p>
        </li>
        <li>
          <p>{servings}</p>
        </li>
        <li>
          <p>{calories}</p>
        </li>
      </ul>
      <ul>
        <li>
          <p>Easy</p>
        </li>
        <li>
          <p>Medium</p>
        </li>
        <li>
          <p>Hard</p>
        </li>
      </ul>
    </StyledRecipe>
  );
};

Recipe.propTypes = {
  name: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  servings: PropTypes.number.isRequired,
  calories: PropTypes.number.isRequired,
  difficulty: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
};
