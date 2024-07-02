import { useState } from "react";
import { ATTRIBUTE_LIST, CLASS_LIST, DEFAULT_ATTRIBUTE_VALUE } from "../consts";
import AttributeList from "./AttributeList";
import React from "react";
import Card from "../common_components/Card";
import Col from "../common_components/Col";
import Row from "../common_components/Row";
import ClassList from "./ClassList";
import ClassRequirements from "./ClassRequirements";

const initialAttributes = ATTRIBUTE_LIST.reduce((obj, attribute) => {
  obj[attribute] = DEFAULT_ATTRIBUTE_VALUE;
  return obj;
}, {});

export default function CharacterSheet({ characterName }) {
  const [attributes, setAttributes] = useState(initialAttributes);
  const [selectedClass, setSelectedClass] = useState(null);

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

  function handleSelectClass(className, classAttributes) {
    setSelectedClass({
      className,
      classAttributes,
    });
  }

  function handleCloseClassRequirements() {
    setSelectedClass(null);
  }

  return (
    <Card>
      <Col>
        <h1>{characterName}</h1>
        <Row>
          <AttributeList
            attributes={attributes}
            onIncrement={handleIncrement}
            onDecrement={handleDecrement}
          />
          <ClassList
            classes={CLASS_LIST}
            attributes={attributes}
            onSelectClass={handleSelectClass}
          />
          {selectedClass !== null && (
            <ClassRequirements
              className={selectedClass.className}
              classAttributes={selectedClass.classAttributes}
              onClose={handleCloseClassRequirements}
            />
          )}
        </Row>
      </Col>
    </Card>
  );
}
