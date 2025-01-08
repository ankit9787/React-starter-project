import React from "react";

const TabButton = (props) => {
  return (
    <>
      {" "}
      <li>
        <button onClick={props.onSelect}>{props.children}</button>
      </li>
    </>
  );
};

export default TabButton;
