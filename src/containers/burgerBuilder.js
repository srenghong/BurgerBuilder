import React, { Component } from "react";

import Burger from "../components/Burger/burger";
import BuildControls from "../components/Burger/buildControls";

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1,
  bacon: 0.8
};

class BurgerBuilder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients: {
        salad: 0,
        bacon: 0,
        cheese: 0,
        meat: 0
      },
      totalPrice: 0
    };
  }

  addIngredientHandler = type => {
    const oldCount = this.state.ingredients[type];
    const updatedIngredient = {
      ...this.state.ingredients
    };
    updatedIngredient[type] = oldCount + 1;
    // Update price
    const priceAddition = INGREDIENT_PRICES[type];
    const newPrice = this.state.totalPrice + priceAddition;
    this.setState({ totalPrice: newPrice, ingredients: updatedIngredient });
  };

  removeIngredientHandler = type => {
    const oldCount = this.state.ingredients[type];
    if (oldCount > 0) {
      const updatedIngredient = {
        ...this.state.ingredients
      };
      updatedIngredient[type] = oldCount - 1;
      // Update price
      const priceSubtraction = INGREDIENT_PRICES[type];
      const newPrice = this.state.totalPrice - priceSubtraction;
      this.setState({ totalPrice: newPrice, ingredients: updatedIngredient });
    }
  };

  orderedHandler = () => {
    alert("Ordered!");
    const resetIngredient = { ...this.state.ingredients };
    for (let ingredient in resetIngredient) {
      resetIngredient[ingredient] = 0;
    }
    this.setState({ totalPrice: 0, ingredients: resetIngredient });
  };

  render() {
    const disabledInfo = {
      ...this.state.ingredients
    };

    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }

    return (
      <>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          totalPrice={this.state.totalPrice}
          addIngredient={this.addIngredientHandler}
          removeIngredient={this.removeIngredientHandler}
          disabledInfo={disabledInfo}
          canOrder={this.state.totalPrice > 0 ? true : false}
          ordered={this.orderedHandler}
        />
      </>
    );
  }
}

export default BurgerBuilder;
