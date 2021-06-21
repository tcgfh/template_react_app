import React, { createContext } from 'react';
import PropTypes from 'prop-types';

function getDefaultRecipe() {
  return ({
    metadata: {
      version: 1,
    },
    data: {
      ingredients: ['flour', 'water', 'yeast'],
      directions: ['Combine flour, water, and yeast and stir', 'let sit 20 minutes', 'knead for 5 minutes', 'cover and let rise', 'bake for 30 minutes'],
      title: [],
    },
  });
}

export const RecipeContext = createContext();

export function RecipeProvider({ children }) {
  return (
    <RecipeContext value={getDefaultRecipe()}>
      {children}
    </RecipeContext>
  );
}

RecipeProvider.propTypes = {
  children: PropTypes.node,
};

RecipeProvider.defaultProps = {
  children: null,
};
