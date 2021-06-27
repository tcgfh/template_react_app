import React, { useContext } from 'react';
import { RecipeContext } from './RecipeProvider';

export default function RecipeView() {
  const recipe = useContext(RecipeContext);
  return (
    <>
      <h1>{recipe.data.title}</h1>
      <ul>{recipe.data.ingredients.map((_) => (<li>{_}</li>))}</ul>
      <ul>{recipe.data.directions.map((_) => (<li>{_}</li>))}</ul>
    </>
  );
}
