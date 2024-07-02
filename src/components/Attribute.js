import React from "react";
import Row from "../common_components/Row";

export default function Attribute({ name, value, onIncrement, onDecrement }) {
  return (
    <Row>
      {`${name}: ${value}`}
      <button name={name} onClick={onIncrement}>
        +
      </button>
      <button name={name} onClick={onDecrement}>
        -
      </button>
    </Row>
  );
}
