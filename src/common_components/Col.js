import React from "react";

export default function Col({
  gap = "8px",
  alignItems = "stretch",
  justifyContent = "center",
  children,
}) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap,
        alignItems,
        justifyContent,
      }}
    >
      {children}
    </div>
  );
}
