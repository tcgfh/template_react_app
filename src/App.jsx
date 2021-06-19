import React, { useContext } from 'react';
import './App.css';
import * as rec from './RecipeProvider';

/**
* Entry point of the app
* @return {object} react component representing the main app
*/
function App() {
  const recipe = useContext(rec.RecipeContext);
  return (
    <rec.RecipeProvider>
      <div className="App">
        <h1 className="recipeName">{recipe.data.name}</h1>
        <h2 className="ingredients">Ingredients</h2>
        <ul>
          {recipe.data.ingredients.map((_) => (<li>{_}</li>))}
        </ul>
        <h2 className="steps">Steps</h2>
        <ul>
          {recipe.data.steps.map((_) => (<li>{_}</li>))}
        </ul>
      </div>
    </rec.RecipeProvider>
  );
}

export default App;
