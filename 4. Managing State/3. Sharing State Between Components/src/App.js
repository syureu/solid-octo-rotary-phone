import React, { useState } from "react";

export default function SyncedInputs() {
  return <Inputs />;
}

function Inputs() {
  const [text, setText] = useState("");

  function handleChange(e) {
    setText(e.target.value);
  }

  return (
    <React.Fragment>
      <Input label="First input" text={text} onChange={handleChange} />
      <Input label="Second input" text={text} onChange={handleChange} />
    </React.Fragment>
  );
}

function Input({ label, text, onChange }) {
  return (
    <label>
      {label} <input value={text} onChange={onChange} />
    </label>
  );
}
