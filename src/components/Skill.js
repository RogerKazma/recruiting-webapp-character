import React from "react";
import Row from "../common_components/Row";

export default function Skill({
  name,
  value,
  modifierName,
  modifierValue,
  onIncrement,
  onDecrement,
}) {
  return (
    <Row>
      {`${name}: ${value} (Modifier: ${modifierName}): ${modifierValue}`}
      <button name={name} onClick={onIncrement}>
        +
      </button>
      <button name={name} onClick={onDecrement}>
        -
      </button>
      {`total: ${value + modifierValue}`}
    </Row>
  );
}
