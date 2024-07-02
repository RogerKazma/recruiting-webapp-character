import React from "react";
import Row from "../common_components/Row";

function computeModifier(value) {
  return Math.floor((value - 10) / 2);
}

export default function Attribute({ name, value, onIncrement, onDecrement }) {
  const modifier = computeModifier(value);

  return (
    <Row>
      {`${name}: ${value} (Modifier: ${modifier})`}
      <button name={name} onClick={onIncrement}>
        +
      </button>
      <button name={name} onClick={onDecrement}>
        -
      </button>
    </Row>
  );
}
