import React from "react";

const CoreConcept = (props) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column", // Ensures title and description are vertical
        justifyContent: "center",
        alignItems: "center",
        background: "red",
        padding: "10px",
        gap: "10px",
        margin: "10px",
        width: "200px", // Fixed width for uniform tiles
      }}
    >
      <li>props.title </li>
      <li>props.description</li>
    </div>
  );
};

export default CoreConcept;
