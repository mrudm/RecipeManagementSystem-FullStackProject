import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

export default function AddRecipe() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      await fetch('http://localhost:8080/recipes/addrecipe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
     
      navigate('/');
    } catch (error) {
      console.error('Error adding recipe:', error);
    }
  };

  return (
    <div className="add-recipe-form">
      <h2>Add New Recipe</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Food Name:
          <input
            type="text"
            {...register('foodName', { required: true })}
          />
          {errors.foodName && <span>This field is required</span>}
        </label>

        <label>
          Description:
          <input
            type="text"
            {...register('description', { required: true })}
          />
          {errors.description && <span>This field is required</span>}
        </label>

        <label>
          Category:
          <input
            type="text"
            {...register('category', { required: true })}
          />
          {errors.category && <span>This field is required</span>}
        </label>

        <label>
          Ingredients:
          <input
            type="text"
            {...register('ingredients', { required: true })}
          />
          {errors.ingredients && <span>This field is required</span>}
        </label>

        <label>
          Steps:
          <input
            type="text"
            {...register('steps', { required: true })}
          />
          {errors.steps && <span>This field is required</span>}
        </label>

        <label>
          Image Path:
          <input
            type="text"
            {...register('imagepath', { required: true })}
          />
          {errors.imagepath && <span>This field is required</span>}
        </label>

        <button type="submit">Add Recipe</button>
      </form>
    </div>
  );
}
