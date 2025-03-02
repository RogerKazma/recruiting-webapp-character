import React from "react";
import Col from "../common_components/Col";
import Attribute from "./Attribute";
import Card from "../common_components/Card";

export default function AttributeList({
  attributes,
  modifiers,
  onIncrement,
  onDecrement,
}) {
  return (
    <Card>
      <Col>
        <h2>Attributes</h2>
        {Object.entries(attributes).map(([name, value]) => (
          <Attribute
            name={name}
            value={value}
            modifier={modifiers[name]}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
          />
        ))}
      </Col>
    </Card>
  );
}
