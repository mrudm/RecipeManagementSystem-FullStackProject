import React from "react";
import "./CategoryList.css";

const CategoryList = ({ categories, onCategoryClick, activeCategory }) => {
  return (
    <div className="category-list">
      {categories.map((category) => (
        <button
          key={category}
          className={`category-button ${
            activeCategory === category ? "active" : ""
          }`}
          onClick={() => onCategoryClick(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryList;
