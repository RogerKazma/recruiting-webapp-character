import React from "react";

export default function Row({
  gap = "8px",
  alignItems = "center",
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
