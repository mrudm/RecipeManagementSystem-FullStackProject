import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Recipes from './components/Recipes/Recipes';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import Navbar from './components/Navbar/Navbar';
import Search from './components/Recipes/Search';
import Home from './components/Home/Home';

const routes = createBrowserRouter([
  {
  path:"/",
  element:<div><Navbar/><Home/></div>,
  },
  {
  path:"/recipes",
  element:<div><Navbar/><Recipes/></div>,
  },
  {
    path: "/search", 
    element: (
      <div>
        <Navbar />
        <Search />
      </div>
    ),
  },
]);


  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
  <RouterProvider router={routes}>
  <App/>
  </RouterProvider>
  );



