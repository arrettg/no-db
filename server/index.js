require("dotenv").config();
const express = require("express");
const session = require("express-session");
const massive = require("massive");
const recipeController = require("./controller/recipeController");
const authCtrl = require("./controller/authController");

const PORT = 4040;

const { SESSION_SECRET, CONNECTION_STRING } = process.env;

const app = require("express")();

app.use(express.json());

massive(CONNECTION_STRING).then(db => {
  app.set("db", db);
  console.log("db connected");
});

app.use(
  session({
    resave: true,
    saveUninitialized: false,
    secret: SESSION_SECRET
  })
);

//auth
app.post("/auth/register", authCtrl.registerUser);
app.post("/auth/login", authCtrl.userLogin);

//recipes
app.get("/api/recipes", recipeController.getRecipes);
app.post("/api/recipes", recipeController.addRecipe);
app.put("/api/recipes/:dish", recipeController.editComment);
app.get("/api/favorites", recipeController.getFavorites);
app.post("/api/favorites/:id", recipeController.addFavorite);
app.delete("/api/favorites/:dish", recipeController.removeFavorite);

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
