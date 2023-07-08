import React from "react";

import { useState } from "react";

export default function AddItem({ onAddItem }) {
  const [title, setTitle] = useState("");
  return (
    <React.Fragment>
      <input
        placeholder="Add item"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button
        onClick={() => {
          setTitle("");
          onAddItem(title);
        }}
      >
        Add
      </button>
    </React.Fragment>
  );
}
