import React from "react";
import Row from "../common_components/Row";

export default function Attribute({
  name,
  value,
  modifier,
  onIncrement,
  onDecrement,
}) {
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
