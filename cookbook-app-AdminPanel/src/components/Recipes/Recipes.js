import React, { useEffect, useState } from 'react';
import RecipeCard from './RecipeCard';


export default function Recipes() {
  const [recipes, setRecipes] = useState([]);
  const [updateRecipe, setUpdateRecipe] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8080/recipes/allrecipes')
      .then(response => response.json())
      .then(data => setRecipes(data.data))
      .catch(error => console.error('Error fetching recipes:', error));
  }, []);

  const handleDelete = async (id) => {
    try {
      await fetch(`http://localhost:8080/recipes/deleterecipe/${id}`, {
        method: 'DELETE',
      });
      setRecipes(recipes.filter(recipe => recipe.id !== id));
    } catch (error) {
      console.error('Error deleting recipe:', error);
    }
  };

  return (
    <div>
      <h1>Recipes</h1>
      <div className="recipe-cards-container">
        {recipes.map(recipe => (
          <RecipeCard
            key={recipe.id}
            recipe={recipe}
            onDelete={handleDelete}
          />
        ))}
      </div>

     
    </div>
  );
}
