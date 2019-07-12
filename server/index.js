const express = require("express")
const recipeController = require("./controller/recipeController");
const favoritesController = require('./controller/favoritesController')
const app = express()


app.use(express.json())

app.get("/api/recipes", recipeController.getRecipes)
app.post("/api/recipes", recipeController.addRecipe)
app.put("/api/recipes/:dish", recipeController.editComment)
app.get('/api/favorites', favoritesController.getFavorites)
app.put('/api/favorites/:dish', recipeController.addFavorite)
const PORT = 4040
app.listen(PORT, () => console.log(`Listening on ${PORT}`))