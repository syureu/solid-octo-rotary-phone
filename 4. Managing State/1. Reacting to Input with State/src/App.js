import React from "react";

import { useState } from "react";

export default function Picture() {
  let [isHighlightPicture, setHighlightPicture] = useState(false);

  function handleClick(e) {
    e.stopPropagation();
    if (e.target.tagName === "IMG") {
      if (isHighlightPicture) {
        return;
      }
    } else {
      if (!isHighlightPicture) {
        return;
      }
    }
    setHighlightPicture(!isHighlightPicture);
  }

  return (
    <div
      className={`background ${
        !isHighlightPicture ? "background--active" : ""
      }`}
      onClick={handleClick}
    >
      <img
        className={`picture ${isHighlightPicture ? "picture--active" : ""}`}
        alt="Rainbow houses in Kampung Pelangi, Indonesia"
        src="https://i.imgur.com/5qwVYb1.jpeg"
      />
    </div>
  );
}
