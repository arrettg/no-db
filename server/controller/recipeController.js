const getFavorites = async (req, res) => {
  const user_id = req.session.user.id;
  let recipes = await req.app.get("db").get_favorites([user_id]);
  return res.json(recipes);
};

const getRecipes = async (req, res) => {
  let rec = await req.app.get("db").get_all_recipes();
  return res.json(rec);
};

const addRecipe = async (req, res) => {
  const { dish, ing, dir, img, comment } = req.body;
  if (!dish || !ing || !dir || !comment || !img) {
    return res.status(404).json("All Fields Required");
  }
  const newRecipe = req.app
    .get("db")
    .add_new_recipe([dish, ing, dir, img, comment]);
  res.status(200).json(newRecipe);
};
const editComment = (req, res) => {
  const { comment } = req.body;
  const updateDish = req.params.dish;
  const recipeIndex = recipes.findIndex(recipe => recipe.dish == updateDish);
  let recipe = recipes[recipeIndex];

  recipes[recipeIndex] = {
    dish: recipe.dish,
    ing: recipe.ing,
    dir: recipe.dir,
    comment: comment || recipe.comment,
    img: recipe.img
  };

  res.json(recipes);
};

const removeFavorite = (req, res) => {
  const addDish = req.params.dish;
  const recipeIndex = favorites.findIndex(recipe => recipe.dish == addDish);
  let recipe = favorites[recipeIndex];

  favorites.splice(recipe, 1);

  res.json(favorites);
};

const addFavorite = async (req, res) => {
  console.log(req.params);
  const recipe_id = req.params.id;
  const user_id = req.session.user.id;
  await req.app.get("db").add_to_favorites([user_id, recipe_id]);
  res.sendStatus(200);
};

module.exports = {
  getRecipes,
  addRecipe,
  editComment,
  addFavorite,
  getFavorites,
  removeFavorite
};
