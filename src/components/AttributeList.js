import React from "react";
import Col from "../common_components/Col";
import Attribute from "./Attribute";
import Card from "../common_components/Card";

export default function AttributeList({
  attributes,
  onIncrement,
  onDecrement,
}) {
  return (
    <Card>
      <Col>
        {Object.entries(attributes).map(([name, value]) => (
          <Attribute
            name={name}
            value={value}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
          />
        ))}
      </Col>
    </Card>
  );
}
