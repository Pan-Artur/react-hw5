import React from "react";
import PropTypes from "prop-types";

import { StyledRecipe } from "./StyledRecipe";

import { BsAlarm } from "react-icons/bs";
import { BsPieChart } from "react-icons/bs";
import { BsBarChart } from "react-icons/bs";

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
            {time} min
          </p>
        </li>
        <li>
          <p>
            <span>
              <BsPieChart />
            </span>
            {servings} servings
          </p>
        </li>
        <li>
          <p>
            <span>
              <BsBarChart />
            </span>
            {calories} calories
          </p>
        </li>
      </ul>
      <div className="difficulty">
        <h2>Difficulty</h2>
        <ul>
        <li>
          <p className={difficulty === 0 ? "active" : ""}>Easy</p>
        </li>
        <li>
          <p className={difficulty === 1 ? "active" : ""}>Medium</p>
        </li>
        <li>
          <p className={difficulty === 2 ? "active" : ""}>Hard</p>
        </li>
        </ul>
      </div>
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
