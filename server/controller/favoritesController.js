const favorites = []

const getFavorites = (req, res) => {
    res.json(favorites)
}
// const addFavorite = (req, res) => {
//     const { dish, ing, dir, comment, img } = req.body
//     const addDish = req.params.dish
//     const recipeIndex = recipes.findIndex(recipe => recipe.dish == addDish)
//     let recipe = recipes[recipeIndex]

//     res.json([...favorites, recipe])
// }

module.exports = {
    getFavorites,
    addFavorite
}