import React from "react";

export default function Content() {
  return (
    <main>
      <form className="add-ingredient-form">
        <input
          type="text"
          placeholder="e.g. pepper"
          aria-label="Add ingredient"
        />
        <button>Add ingredient</button>
      </form>
    </main>
  );
}
