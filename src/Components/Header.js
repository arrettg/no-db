import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/auth.css";

function Header() {
  return (
    <div className="head">
      <header className="nav">
        <h1> Family Recipes</h1>
      </header>
      <nav className="button-wrapper">
        <Link to="/add-recipe">
          <button id="nav-button">Add Recipe</button>
        </Link>
        <Link to="/recipes">
          <button id="nav-button">Home</button>
        </Link>
        <Link to="/favorites">
          <button id="nav-button">Favorites</button>
        </Link>
      </nav>
    </div>
  );
}

export default Header;
