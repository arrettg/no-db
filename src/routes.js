import React from "react";
import { Switch, Route } from "react-router-dom";
import Recipes from "./Components/Recipes";
import FavoritesList from "./Components/FavoritesList";
import NewRecipe from "./Components/NewRecipe";
import Login from "./Components/Login";

export default (
  <Switch>
    <Route component={Login} exact path="/" />
    <Route component={Recipes} path="/recipes" />
    <Route component={FavoritesList} path="/favorites" />
    <Route component={NewRecipe} path="/add-recipe" />
  </Switch>
);
