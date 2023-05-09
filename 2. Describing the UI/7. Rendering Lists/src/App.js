import React from "react";
import { recipes } from "./data.js";

export default function RecipeList() {
  const list = recipes.map((recipe) => {
    const ingredientsList = recipe.ingredients.map((ingredient) => {
      return <li>{ingredient}</li>;
    });
    return (
      <li key={recipe.id}>
        <h2>{recipe.name}</h2>
        <ul>{ingredientsList}</ul>
      </li>
    );
  });

  return (
    <div>
      <h1>Recipes</h1>
      <ul>{list}</ul>
    </div>
  );
}
