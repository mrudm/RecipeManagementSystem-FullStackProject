import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Recipes from './components/Recipes/Recipes';
import Navbar from './components/Navbar/Navbar';
import UpdateRecipeForm from './components/Recipes/UpdateRecipeForm';
import AddRecipe from './components/Recipes/AddRecipe';


const routes = createBrowserRouter(
  [
  {
  path:"/",
  element:<div><Navbar/><Recipes/></div>
  },
{
  path:`/updaterecipe/:id`,
  element:<UpdateRecipeForm/>
},
{
  path:'/addrecipes',
  element:<AddRecipe/>
}
  

  ]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={routes}>
    <App />
  </RouterProvider>
);


