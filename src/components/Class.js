import React from "react";

function classIsUsable(classAttributes, characterAttributes) {
  for (let attributeName in classAttributes) {
    if (
      !characterAttributes.hasOwnProperty(attributeName) ||
      characterAttributes[attributeName] < classAttributes[attributeName]
    ) {
      return false;
    }
  }
  return true;
}

export default function Class({
  className,
  classAttributes,
  characterAttributes,
  onSelect,
}) {
  const usableClass = classIsUsable(classAttributes, characterAttributes);

  return (
    <div onClick={() => onSelect(className, classAttributes)} style={usableClass ? { color: "green" } : {}}>
      {className}
    </div>
  );
}
