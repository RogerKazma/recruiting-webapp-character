import React from "react";
import Card from "../common_components/Card";
import Col from "../common_components/Col";

export default function ClassRequirements({
  className,
  classAttributes,
  onClose,
}) {
  return (
    <Card>
      <Col>
        <h2>{`${className} Minimum Requirements`}</h2>
        {Object.entries(classAttributes).map(
          ([attributeName, attributeValue]) => (
            <div>{`${attributeName}: ${attributeValue}`}</div>
          )
        )}
        <div>
          <button onClick={onClose}>Close Requirement View</button>
        </div>
      </Col>
    </Card>
  );
}
