import React from "react";

export default function Row({
  gap = "8px",
  alignItems = "stretch",
  justifyContent = "center",
  children,
}) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        gap,
        alignItems,
        justifyContent,
      }}
    >
      {children}
    </div>
  );
}
