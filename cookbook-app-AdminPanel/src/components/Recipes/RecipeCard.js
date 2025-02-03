import React from 'react';
import './RecipeCard.css';
import { useNavigate } from 'react-router-dom';

export default function RecipeCard({ recipe, onDelete }) {

    const navigateTo=useNavigate();

  return (
    <div className="recipe-card">
      <img src={recipe.imagepath} alt={recipe.foodName} />
      <h3>{recipe.foodName}</h3>
      <p>{recipe.description}</p>
      <p>Category: {recipe.category}</p>
      <div className="button-group">
        <button className="update-btn" onClick={() => navigateTo(`/updaterecipe/${recipe.id}`)}>Update</button>
        <button className="delete-btn" onClick={() => onDelete(recipe.id)}>Delete</button>
      </div>
    </div>
  );
}
