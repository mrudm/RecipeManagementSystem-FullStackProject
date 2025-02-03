import React, { useEffect, useState } from 'react';
import { useParams, errors , useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

export default function UpdateRecipeForm() {
  const { id } = useParams();
  const navigateTo = useNavigate();
  const [recipe, setRecipe] = useState(null);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    fetch(`http://localhost:8080/recipes/${id}`)
      .then(response => response.json())
      .then(data => {
        setRecipe(data);
       
        setValue('foodName', data.foodName);
        setValue('description', data.description);
        setValue('category', data.category);
        setValue('ingredients', data.ingredients);
        setValue('steps', data.steps);
      })
      .catch(error => console.error('Error fetching recipe:', error));
  }, [id, setValue]);

  const onSubmit = async (updatedRecipe) => {
    try {
      await fetch(`http://localhost:8080/recipes/updaterecipe/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedRecipe),
      });
     
      navigateTo('/')
    } catch (error) {
      console.error('Error updating recipe:', error);
    }
  };

  if (!recipe) {
    return <div>Loading...</div>;  
  }

  return (
    <div className="update-form">
      <h2>Update Recipe</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Food Name:
          <input
            type="text"
            {...register('foodName')}
          />
        </label>
        <label>
          Description:
          <input
            type="text"
            {...register('description')}
          />
        </label>
        <label>
          Category:
          <input
            type="text"
            {...register('category')}
          />
        </label>
        <label>
          Ingredients:
          <input
            type="text"
            {...register('ingredients')}
          />
        </label>
        <label>
          Steps:
          <input
            type="text"
            {...register('steps')}
          />
        </label>
        <button type="submit">Save</button>
      </form>
    </div>
  );
}
