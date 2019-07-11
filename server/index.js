const express = require("express")
const recipeController = require("./controller/recipeController");
const app = express()


app.use(express.json())

app.get("/api/recipes", recipeController.getRecipes)

const PORT = 4040
app.listen(PORT, () => console.log(`Listening on ${PORT}`))