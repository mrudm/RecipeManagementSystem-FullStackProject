import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./Recipes.css";

const Search = () => {
  const [recipes, setRecipes] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  

  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const searchTerm = query.get("search") || ""; 

  useEffect(() => {
    fetch("http://localhost:8080/recipes/allrecipes")
      .then((response) => response.json())
      .then((data) => {
        if (data.data) {
          setRecipes(data.data);

        
          const filtered = data.data.filter((recipe) =>
            recipe.foodName.toLowerCase().includes(searchTerm.toLowerCase())
          );
          setFilteredRecipes(filtered);
        }
      })
      .catch((error) => console.error("Error fetching recipes:", error));
  }, [searchTerm]);

  return (
    <div className="search-results">
      <h2>Search Results for "{searchTerm}"</h2>
      <div className="recipes-container">
        {filteredRecipes.length > 0 ? (
          filteredRecipes.map((recipe) => (
            <div key={recipe.id} className="recipe-card">
              <div className="recipe-image-container">
                <img
                  src={recipe.imagepath}
                  alt={recipe.foodName}
                  className="recipe-image"
                />
              </div>
              <div className="recipe-content">
                <h2 className="recipe-title">{recipe.foodName}</h2>
                <p className="recipe-category">{recipe.category}</p>
                <p className="recipe-description">{recipe.description}</p>
                <div className="recipe-details">
                  <h4>Ingredients:</h4>
                  <p>{recipe.ingredients}</p>
                  <h4>Steps:</h4>
                  <p>{recipe.steps}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No recipes found for "{searchTerm}".</p>
        )}
      </div>
    </div>
  );
};

export default Search;
