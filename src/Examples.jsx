import React, { useState } from "react";
import TabButton from "./TabButton.jsx";

const Examples = () => {
  const [tabContent, setTabContent] = useState();

  const handleClick = (selectedButton) => {
    setTabContent("hello world app js " + selectedButton);
  };
  return (
    <section id="examples">
      <h2>Examples</h2>
      <menu>
        <TabButton onSelect={() => handleClick("Components")}>
          Components
        </TabButton>
        <TabButton onSelect={() => handleClick("Core")}>Core</TabButton>
      </menu>
      <section>{tabContent}</section>
    </section>
  );
};

export default Examples;
