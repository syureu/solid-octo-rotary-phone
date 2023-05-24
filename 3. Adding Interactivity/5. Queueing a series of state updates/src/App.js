import React, { useState } from "react";

export default function Counter() {
  const [number, setNumber] = useState(0);

  return (
    <React.Fragment>
      <h1>{number}</h1>
      <button
        onClick={() => {
          setNumber(number + 1);
          setNumber(number + 1);
          setNumber(number + 1);
        }}
      >
        +3
      </button>
    </React.Fragment>
  );
}
