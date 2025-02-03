import React, { useState } from "react";

 const RecipeForm = ({ onSubmit, initialData, isUpdate }) => {
   const [formData, setFormData] = useState(
     initialData || {
       id: "",
       category: "",
       foodName: "",
       description: "",
       ingredients: "",
       steps: "",
       imagepath: "",
     }
   );

   const handleChange = (e) => {
     setFormData({ ...formData, [e.target.name]: e.target.value });
   };

   const handleSubmit = (e) => {
     e.preventDefault();
     onSubmit(formData);
     setFormData({
       id: "",
       category: "",
       foodName: "",
       description: "",
       ingredients: "",
       steps: "",
       imagepath: "",
     });
   };

   return (
     <form onSubmit={handleSubmit}>
       <h2>{isUpdate ? "Update Recipe" : "Add Recipe"}</h2>
       {isUpdate && (
         <input
           type="text"
           name="id"
           value={formData.id}
           onChange={handleChange}
           readOnly
         />
       )}
       <input
         type="text"
         name="category"
         placeholder="Category"
         value={formData.category}
         onChange={handleChange}
         required
       />
       <input
         type="text"
         name="foodName"
         placeholder="Food Name"
         value={formData.foodName}
         onChange={handleChange}
         required
       />
       <textarea
         name="description"
         placeholder="Description"
         value={formData.description}
         onChange={handleChange}
         required
       />
       <textarea
         name="ingredients"
         placeholder="Ingredients"
         value={formData.ingredients}
         onChange={handleChange}
         required
       />
       <textarea
         name="steps"
         placeholder="Steps"
         value={formData.steps}
         onChange={handleChange}
         required
       />
       <input
         type="text"
         name="imagepath"
         placeholder="Image Path"
         value={formData.imagepath}
         onChange={handleChange}
       />
       <button type="submit">{isUpdate ? "Update Recipe" : "Add Recipe"}</button>
     </form>
   );
 };

 export default RecipeForm;
