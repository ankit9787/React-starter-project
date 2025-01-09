import React from "react";

const Tabs = (props) => {
  return (
    <>
      <h2>{props.title}</h2>
      <menu></menu>
      {props.children}
    </>
  );
};

export default Tabs;
