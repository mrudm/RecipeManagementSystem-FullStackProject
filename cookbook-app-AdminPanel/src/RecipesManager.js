import React, { useState, useEffect } from "react";
import RecipesPage from "./RecipesPage";
import RecipeForm from "./RecipeForm";

const RecipesManager = () => {
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [isUpdate, setIsUpdate] = useState(false);
  const [loading, setLoading] = useState(true);

  
  const fetchRecipes = async () => {
    try {
      const response = await fetch("http://localhost:8080/recipes/allrecipes");
      const data = await response.json();
      setRecipes(data.data || []); 
      setLoading(false);
    } catch (error) {
      console.error("Error fetching recipes:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  // Add or update recipe
  const handleAddOrUpdate = async (formData) => {
    const url = isUpdate
      ? `http://localhost:8080/recipes/updaterecipe/${formData.id}`
      : "http://localhost:8080/recipes/addrecipe";
    const method = isUpdate ? "PUT" : "POST";

    try {
      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert(isUpdate ? "Recipe updated successfully!" : "Recipe added successfully!");
        fetchRecipes(); 
        setSelectedRecipe(null);
        setIsUpdate(false);
      }
    } catch (error) {
      console.error(isUpdate ? "Error updating recipe:" : "Error adding recipe:", error);
    }
  };

  
  const handleDelete = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:8080/recipes/deleterecipe/${id}`,
        { method: "DELETE" }
      );

      if (response.ok) {
        alert("Recipe deleted successfully!");
        fetchRecipes(); 
      }
    } catch (error) {
      console.error("Error deleting recipe:", error);
    }
  };


  const handleUpdateClick = (recipe) => {
    setSelectedRecipe(recipe);
    setIsUpdate(true);
  };

  if (loading) {
    return <p>Loading recipes...</p>;
  }

  return (
    <div>
      <RecipeForm
        onSubmit={handleAddOrUpdate}
        initialData={selectedRecipe}
        isUpdate={isUpdate}
      />
      <div>
        <h2>Recipe Actions</h2>
        {recipes.map((recipe) => (
          <div key={recipe.id} style={{ border: "1px solid #ccc", padding: "10px", margin: "10px" }}>
            <h3>{recipe.foodName}</h3>
            <p>{recipe.description}</p>
            <button onClick={() => handleUpdateClick(recipe)}>Update</button>
            <button onClick={() => handleDelete(recipe.id)}>Delete</button>
          </div>
        ))}
      </div>
      <RecipesPage recipes={recipes} loading={loading} />
    </div>
  );
};

export default RecipesManager;


