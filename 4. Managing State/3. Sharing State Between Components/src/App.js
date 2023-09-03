import React, { useState } from "react";

import { foods, filterItems } from "./data.js";

export default function FilterableList() {
  let [query, setQuery] = useState("");
  let filteredFoods = filterItems(foods, query);

  function handleChange(e) {
    setQuery(e.target.value);
  }

  return (
    <React.Fragment>
      <SearchBar query={query} onChange={handleChange} />
      <hr />
      <List items={filteredFoods} />
    </React.Fragment>
  );
}

function SearchBar({ query, onChange }) {
  return (
    <label>
      Search: <input value={query} onChange={onChange} />
    </label>
  );
}

function List({ items }) {
  return (
    <table>
      <tbody>
        {items.map((food) => (
          <tr key={food.id}>
            <td>{food.name}</td>
            <td>{food.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
