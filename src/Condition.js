import React from "react";
import "./index.css";

const Condition = (props) => {
  let x = props.a;
  let y = props.b;
  let z = props.c;
  let text = props.text;

  return (
    <>
      <div className="slot_inner">
        <h1>
          {x} {y} {z}
        </h1>
        <h3>{text}</h3>
        <hr></hr>
      </div>
    </>
  );
};

export default Condition;
