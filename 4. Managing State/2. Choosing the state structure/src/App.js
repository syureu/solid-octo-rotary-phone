import React from "react";

import { useState } from "react";
import { letters } from "./data.js";
import Letter from "./Letter.js";

export default function MailClient() {
  const [selectedIds, setSelectedIds] = useState(new Set());

  function handleToggle(toggledId) {
    // TODO: allow multiple selection
    let newSet = new Set(selectedIds);
    if (selectedIds.has(toggledId)) {
      newSet.delete(toggledId);
    } else {
      newSet.add(toggledId);
    }
    setSelectedIds(newSet);
  }

  return (
    <React.Fragment>
      <h2>Inbox</h2>
      <ul>
        {letters.map((letter) => (
          <Letter
            key={letter.id}
            letter={letter}
            isSelected={
              // TODO: allow multiple selection
              selectedIds.has(letter.id)
            }
            onToggle={handleToggle}
          />
        ))}
        <hr />
        <p>
          <b>You selected {selectedIds.size} letters</b>
        </p>
      </ul>
    </React.Fragment>
  );
}
