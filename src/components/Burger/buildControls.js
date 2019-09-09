import React from "react";
import "./buildControls.css";

import BuildControl from "./buildControl";

const controls = [
  {
    label: "Bacon",
    type: "bacon"
  },
  {
    label: "Cheese",
    type: "cheese"
  },
  {
    label: "Meat",
    type: "meat"
  },
  {
    label: "Salad",
    type: "salad"
  }
];

const BuildControls = props => {
  return (
    <div className="BuildControls">
      <p>
        Current Price : <strong>{props.totalPrice.toFixed(2)}$</strong>
      </p>
      {controls.map(ctrl => (
        <BuildControl
          key={ctrl.label}
          label={ctrl.label}
          add={() => props.addIngredient(ctrl.type)}
          remove={() => props.removeIngredient(ctrl.type)}
          disabled={props.disabledInfo[ctrl.type]}
        />
      ))}
      {console.log(props.canOrder)}
      <button
        className="OrderButton"
        disabled={!props.canOrder}
        onClick={props.ordered}
      >
        Order Now
      </button>
    </div>
  );
};

export default BuildControls;
