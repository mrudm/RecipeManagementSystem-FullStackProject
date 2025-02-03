import React, { useEffect, useState } from "react";
import CategoryList from "./CategoryList";
import "./Recipes.css";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Beverage", "Appetizer", "Maincourse", "Dessert"];

  useEffect(() => {
    const fetchUrl =
      activeCategory === "All"
        ? "http://localhost:8080/recipes/allrecipes"
        : `http://localhost:8080/recipes/category/${activeCategory}`;

    fetch(fetchUrl)
      .then((response) => response.json())
      .then((data) => {
        if (data.data) {
          setRecipes(data.data);
        }
      })
      .catch((error) => console.error("Error fetching recipes:", error));
  }, [activeCategory]);

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  return (
    <div>
      <CategoryList
        categories={categories}
        onCategoryClick={handleCategoryClick}
        activeCategory={activeCategory}
      />
      <div className="recipes-container">
        {recipes.map((recipe) => (
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
        ))}
      </div>
    </div>
  );
};

export default Recipes;
