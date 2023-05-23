import React from "react";
import { useState } from "react";

export default function TrafficLight() {
  const [walk, setWalk] = useState(true);

  function getwalkStateString(toggleReturn) {
    if (toggleReturn) {
      return walk ? "Walk" : "Stop";
    } else {
      return walk ? "Stop" : "Walk";
    }
  }

  function handleClick() {
    setWalk(!walk);
    alert(getwalkStateString() + " is next");
  }

  return (
    <React.Fragment>
      <button onClick={handleClick}>Change to {getwalkStateString()}</button>
      <h1
        style={{
          color: walk ? "darkgreen" : "darkred",
        }}
      >
        {getwalkStateString(true)}
      </h1>
    </React.Fragment>
  );
}
