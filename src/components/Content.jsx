import React, { useState } from "react";

export default function Content() {
  const [ingredients, setIngredients] = useState([]);

  const ingredientsListItems = ingredients.map((ingredient) => (
    <li key={ingredient}>{ingredient}</li>
  ));

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const newIngredient = formData.get("ingredient");
    setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
  }

  return (
    <main>
      <form onSubmit={handleSubmit} className="add-ingredient-form">
        <input
          type="text"
          placeholder="e.g. pepper"
          aria-label="Add ingredient"
          id="ingredientInput"
          name="ingredient"
        />
        <button>Add ingredient</button>
      </form>
      <ul className="ingredient-list">{ingredientsListItems}</ul>
    </main>
  );
}
