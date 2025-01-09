import React from "react";
import { CORE_CONCEPTS } from "./data";
import CoreConcept from "./CoreConcept.jsx";
import Section from "./Section.jsx";

const CoreConcepts = () => {
  return (
    <>
      <Section id="core-concept" title="Core concept">
        {CORE_CONCEPTS.map((concept) => (
          <CoreConcept key={concept.title} {...concept}></CoreConcept>
        ))}
      </Section>
    </>
  );
};

export default CoreConcepts;
