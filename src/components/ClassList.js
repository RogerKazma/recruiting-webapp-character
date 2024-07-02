import React from "react";
import Card from "../common_components/Card";
import Col from "../common_components/Col";
import Class from "./Class";

export default function ClassList({ classes, attributes, onSelectClass }) {
  return (
    <Card>
      <Col>
        <h2>Classes</h2>
        {Object.entries(classes).map(([className, classAttributes]) => (
          <Class
            className={className}
            classAttributes={classAttributes}
            characterAttributes={attributes}
            onSelect={onSelectClass}
          />
        ))}
      </Col>
    </Card>
  );
}
