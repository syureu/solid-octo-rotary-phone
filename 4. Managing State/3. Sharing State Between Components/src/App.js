import React, { useState } from "react";

export default function SyncedInputs() {
  return (
    <React.Fragment>
      <Input label="First input" />
      <Input label="Second input" />
    </React.Fragment>
  );
}

function Input({ label }) {
  const [text, setText] = useState("");

  function handleChange(e) {
    setText(e.target.value);
  }

  return (
    <label>
      {label} <input value={text} onChange={handleChange} />
    </label>
  );
}
