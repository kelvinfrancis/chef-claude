import React from "react";
import ClaudeRecipe from "./ClaudeRecipe";
import IngredientsList from "./IngredientsList";

export default function Content() {
  const [ingredients, setIngredients] = React.useState([
    "tomatoes",
    "pepper",
    "chicken",
    "onions",
  ]);
  const [recipeShown, setRecipeShown] = React.useState(false);

  const ingredientsListItems = ingredients.map((ingredient) => (
    <li key={ingredient}>{ingredient}</li>
  ));

  function addIngredient(formData) {
    const newIngredient = formData.get("ingredient");
    setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
  }

  function toggleRecipeShown() {
    setRecipeShown((preRecipeStatus) => !preRecipeStatus);
  }

  return (
    <main>
      <form action={addIngredient} className="add-ingredient-form">
        <input
          type="text"
          placeholder="e.g. pepper"
          aria-label="Add ingredient"
          id="ingredientInput"
          name="ingredient"
        />
        <button>Add ingredient</button>
      </form>
      {ingredients.length > 0 && (
        <IngredientsList ingredients={ingredients} ingredientsListItems={ingredientsListItems} toggleButton={toggleRecipeShown} />
      )}
      {recipeShown && (
        <ClaudeRecipe />
      )}
    </main>
  );
}
