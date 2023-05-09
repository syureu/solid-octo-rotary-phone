import React from "react";
import { people } from "./data.js";
import { getImageUrl } from "./utils.js";

export default function List() {
  const listMapFunction = (person) => (
    <li key={person.id}>
      <img src={getImageUrl(person)} alt={person.name} />
      <p>
        <b>{person.name}:</b>
        {" " + person.profession + " "}
        known for {person.accomplishment}
      </p>
    </li>
  );
  const chemists = people
    .filter((person) => person.profession === "chemist")
    .map(listMapFunction);
  const everyoneElse = people
    .filter((person) => person.profession !== "chemist")
    .map(listMapFunction);
  return (
    <article>
      <h1>Scientists</h1>
      <h2>Chemists</h2>
      <ul>{chemists}</ul>
      <h2>Else</h2>
      <ul>{everyoneElse}</ul>
    </article>
  );
}
