import { useState } from "react";
import { ATTRIBUTE_LIST, DEFAULT_ATTRIBUTE_VALUE } from "../consts";
import AttributeList from "./AttributeList";
import React from "react";
import Card from "../common_components/Card";
import Col from "../common_components/Col";
import Row from "../common_components/Row";

const initialAttributes = ATTRIBUTE_LIST.reduce((obj, attribute) => {
  obj[attribute] = DEFAULT_ATTRIBUTE_VALUE;
  return obj;
}, {});

export default function CharacterSheet({ characterName }) {
  const [attributes, setAttributes] = useState(initialAttributes);

  function handleIncrement(e) {
    setAttributes({
      ...attributes,
      [e.target.name]: attributes[e.target.name] + 1,
    });
  }

  function handleDecrement(e) {
    setAttributes({
      ...attributes,
      [e.target.name]: attributes[e.target.name] - 1,
    });
  }

  return (
    <Card>
      <Col>
        {characterName}
        <Row>
          <AttributeList
            attributes={attributes}
            onIncrement={handleIncrement}
            onDecrement={handleDecrement}
          />
        </Row>
      </Col>
    </Card>
  );
}
