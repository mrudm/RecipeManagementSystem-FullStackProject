import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {

  
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-fixed">
        <div className="container-fluid">
          <div className="navbar-nav">
          </div>
          <div className="ml-auto">
            <Link to="/addrecipes" className="btn btn-primary" >Add Recipe</Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
