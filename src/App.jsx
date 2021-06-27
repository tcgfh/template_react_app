import React from 'react';
import './App.css';
import { RecipeProvider } from './RecipeProvider';
import RecipeView from './RecipeView';

/**
* Entry point of the app
* @return {object} react component representing the main app
*/
function App() {
  return (
    <div className="App">
      <RecipeProvider>
        <RecipeView />
      </RecipeProvider>
    </div>
  );
}

export default App;
