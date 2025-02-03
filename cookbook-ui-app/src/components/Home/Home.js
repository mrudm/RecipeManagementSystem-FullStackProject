import React, { useState, useEffect } from 'react';
import './Home.css'; // Custom styling for the page

const Home = () => {
  const [recipes, setRecipes] = useState([]);
  const [uniqueCategoryRecipes, setUniqueCategoryRecipes] = useState([]);
  const [heroImage, setHeroImage] = useState('');

  useEffect(() => {
    const data = {
      message: "following recipes found",
      data: [
        {
          id: 255,
          category: "Maincourse",
          foodName: "Margherita Pizza",
          description: "A classic Italian pizza topped with fresh tomatoes, mozzarella cheese, fresh basil, and olive oil.",
          imagepath: "/recipe.images/pizza.jpg"
        },
        {
          id: 256,
          category: "Beverage",
          foodName: "Iced Latte",
          description: "A chilled coffee drink with a shot of espresso and cold milk over ice.",
          imagepath: "/recipe.images/icedlatte.jpg"
        },
        {
          id: 257,
          category: "Dessert",
          foodName: "Chocolate Chunk Cookie",
          description: "A rich and chewy cookie loaded with chunks of chocolate.",
          imagepath: "/recipe.images/cookies.jpg"
        },
        {
          id: 258,
          category: "Appetizer",
          foodName: "Bruschetta",
          description: "A classic Italian starter featuring grilled bread topped with fresh tomatoes, basil, and olive oil.",
          imagepath: "/recipe.images/bruschetta.jpg"
        },
       
      
       
      ]
    };

    setRecipes(data.data);

   
    const uniqueCategories = {};
    const filteredRecipes = data.data.filter(recipe => {
      if (!uniqueCategories[recipe.category]) {
        uniqueCategories[recipe.category] = true;
        return true;
      }
      return false;
    });

    setUniqueCategoryRecipes(filteredRecipes);

   
    if (data.data.length > 0) {
      setHeroImage(data.data[0].imagepath);
    }
  }, []);

  return (
    <div className="home">
      <div className="hero" style={{ backgroundImage: `url(${heroImage})` }}>
        <h1 className="hero-title">Discover Your Next Favorite Recipe</h1>
        <p className="hero-subtitle">Delicious, easy-to-make meals and treats for every occasion.</p>
      </div>
      <div className="recipe-list">
  {uniqueCategoryRecipes.map((recipe) => (
    <div key={recipe.id} className="recipe-card">
      <img src={recipe.imagepath} alt={recipe.category} className="image" />
      <div className="recipe-info">
        <h3 className="recipe-category">{recipe.category}</h3>
      </div>
    </div>
  ))}
</div>
      </div>
   
  );
};

export default Home;
