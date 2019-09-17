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
const editComment = async (req, res) => {
  const { comment } = req.body;
  const updateDish = req.params.id;
  await req.app.get("db").edit_comment([comment, updateDish]);
  res.sendStatus(200);
};

const removeFavorite = async (req, res) => {
  const Dish = req.params.id;
  const user = req.session.user.id;
  await req.app.get("db").remove_favorite([Dish, user]);

  res.sendStatus(200);
};

const addFavorite = async (req, res) => {
  //   console.log(req.params);
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
