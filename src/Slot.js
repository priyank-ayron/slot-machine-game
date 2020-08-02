import React from "react";
import "./index.css";
import Condition from "./Condition";

const Slot = (props) => {
  let { x, y, z } = props;
  return x === y && y === z ? (
    <Condition a={x} b={y} c={z} text="This is matching"></Condition>
  ) : (
    <Condition a={x} b={y} c={z} text="This is not matching"></Condition>
  );
};

export default Slot;
