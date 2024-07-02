import { useState } from "react";
import {
  ATTRIBUTE_LIST,
  CLASS_LIST,
  DEFAULT_ATTRIBUTE_VALUE,
  DEFAULT_SKILL_VALUE,
  SKILL_LIST,
} from "../consts";
import AttributeList from "./AttributeList";
import React from "react";
import Card from "../common_components/Card";
import Col from "../common_components/Col";
import Row from "../common_components/Row";
import ClassList from "./ClassList";
import ClassRequirements from "./ClassRequirements";
import SkillList from "./SkillList";

const initialAttributes = ATTRIBUTE_LIST.reduce((obj, attribute) => {
  obj[attribute] = DEFAULT_ATTRIBUTE_VALUE;
  return obj;
}, {});

const initialSkills = SKILL_LIST.reduce((obj, skill) => {
  obj[skill.name] = DEFAULT_SKILL_VALUE;
  return obj;
}, {});

function computeModifier(value) {
  return Math.floor((value - 10) / 2);
}

function computeModifiers(attributes) {
  const modifiers = {};
  Object.entries(attributes).forEach(([name, value]) => {
    modifiers[name] = computeModifier(value);
  });

  return modifiers;
}

export default function CharacterSheet({ characterName }) {
  const [attributes, setAttributes] = useState(initialAttributes);
  const [selectedClass, setSelectedClass] = useState(null);
  const [skills, setSkills] = useState(initialSkills);

  const modifiers = computeModifiers(attributes);

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

  function handleSkillIncrement(e) {
    setSkills({
      ...skills,
      [e.target.name]: skills[e.target.name] + 1,
    });
  }

  function handleSkillDecrement(e) {
    setSkills({
      ...skills,
      [e.target.name]: skills[e.target.name] - 1,
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
            modifiers={modifiers}
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
          <SkillList
            skills={SKILL_LIST}
            skillValues={skills}
            modifiers={modifiers}
            onIncrement={handleSkillIncrement}
            onDecrement={handleSkillDecrement}
          />
        </Row>
      </Col>
    </Card>
  );
}
