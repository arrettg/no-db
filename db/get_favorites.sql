SELECT * FROM recipes
JOIN favorite_recipes ON recipes.recipe_id = favorite_recipes.recipe_id
WHERE favorite_recipes.user_id = $1