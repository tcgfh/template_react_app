import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

function getDefaultRecipe() {
  return {
    metadata: {
      version: '1.0.0',
    },
    data: {
      ingredients: ['flour', 'water', 'yeast'],
      steps: ['Add flour, water, and yeast to a bowl', 'stir', 'backe at 350c for 30 minutes'],
      name: ['Bread'],
    },
  };
}

export const RecipeContext = createContext();

export function RecipeProvider({ children }) {
  const [recipe] = useState(getDefaultRecipe());
  return (
    <RecipeContext.Provider value={recipe}>
      {children}
    </RecipeContext.Provider>
  );
}

RecipeProvider.defaultProps = {
  children: undefined,
};

RecipeProvider.propTypes = {
  children: PropTypes.node,
};
