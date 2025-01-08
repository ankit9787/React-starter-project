import { useState } from "react";
import { CORE_CONCEPTS } from "./data";
import Header from "./Header";
import TabButton from "./TabButton";

function CoreConcept({ title, description }) {
  return (
    <>
      <h1>Name : {title}</h1>
      <h2>Age: {description}</h2>
    </>
  );
}

function App() {
  const [tabContent, setTabContent] = useState();

  const handleClick = (selectedButton) => {
    setTabContent("hello world app js " + selectedButton);
  };

  return (
    <div>
      <Header></Header>
      <main>
        <h2>Time to get started!</h2>
      </main>
      <section>
        {CORE_CONCEPTS.map((concept) => (
          <CoreConcept key={concept.title} {...concept}></CoreConcept>
        ))}
      </section>
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
    </div>
  );
}

export default App;
