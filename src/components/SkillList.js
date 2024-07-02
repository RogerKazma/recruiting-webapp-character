import React from "react";
import Col from "../common_components/Col";
import Card from "../common_components/Card";
import Skill from "./Skill";

export default function SkillList({
  skills,
  skillValues,
  modifiers,
  onIncrement,
  onDecrement,
}) {
  return (
    <Card>
      <Col>
        <h2>Skills</h2>
        {skills.map(({ name, attributeModifier }) => (
          <Skill
            name={name}
            value={skillValues[name]}
            modifierName={attributeModifier}
            modifierValue={modifiers[attributeModifier]}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
          />
        ))}
      </Col>
    </Card>
  );
}
