import React from "react";

export default function Content() {
  const ingredients = ["Chicken", "Oregano", "Tomatoes"];

  const addIngredient = () => {
    const newIngredient = document.getElementById("ingredientInput");
    ingredients.push(newIngredient.value);
  };

  const ingredientsListItems = ingredients.map((ingredient) => {
    return <li key={ingredient}>{ingredient}</li>;
  });

  function handleSubmit() {
    console.log("Form submited!");
  }

  return (
    <main>
      <form onSubmit={handleSubmit} className="add-ingredient-form">
        <input
          type="text"
          placeholder="e.g. pepper"
          aria-label="Add ingredient"
          id="ingredientInput"
        />
        <button onClick={addIngredient}>Add ingredient</button>
      </form>
      <ul className="ingredient-list">{ingredientsListItems}</ul>
    </main>
  );
}
