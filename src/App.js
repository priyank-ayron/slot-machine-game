import React from "react";
import "./App.css";
import "./index.css";
import Slot from "./Slot";

const App = () => {
  return (
    <>
      <h1 className="heading_style">
        <span role="img" aria-label="slot_machine">
          🎰
        </span>
        Welcome to the
        <span style={{ fontWeight: "bold" }}> slot machine game</span>{" "}
        <span role="img" aria-label="slot_machine">
          🎰
        </span>
      </h1>
      <div className="slotMachine">
        <Slot x="😄" y="😄" z="😄"></Slot>
        <Slot x="😄" y="🎅" z="😄"></Slot>
        <Slot x="🎅" y="😄" z="🎅"></Slot>
        <Slot x="🎅" y="🎅" z="🎅"></Slot>
      </div>
    </>
  );
};

export default App;
