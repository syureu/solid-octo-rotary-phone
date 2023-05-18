import React from "react";

export default function FeedbackForm() {
  function handleClick() {
    let name = prompt("What is your name?");
    alert(`Hello, ${name}!`);
  }

  return <button onClick={handleClick}>Greet</button>;
}
