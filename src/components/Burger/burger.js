import React from "react";
import "./burger.css";

import BurgerIngredient from "./burgerIngredient";

const Burger = props => {
  let ingredients = Object.keys(props.ingredients).map(key => {
    return [...Array(props.ingredients[key])].map((_, i) => {
      return <BurgerIngredient key={key + i} type={key} />;
    });
  });

  if (ingredients.flat().length === 0) {
    ingredients = <p>Please add ingredients</p>;
  }

  return (
    <div className="Burger">
      <BurgerIngredient type="bread-top" />
      {ingredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default Burger;
