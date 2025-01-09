import { useState } from "react";
import Header from "./Header.jsx";
import CoreConcepts from "./CoreConcepts.jsx";
import Examples from "./Examples.jsx";

function CoreConcept({ title, description }) {
  return (
    <>
      <h1>Name : {title}</h1>
      <h2>Age: {description}</h2>
    </>
  );
}

function App() {
  return (
    <div>
      <Header></Header>
      <main>
        <h2>Time to get started!</h2>
      </main>
      <CoreConcepts></CoreConcepts>
      <Examples></Examples>
    </div>
  );
}

export default App;
