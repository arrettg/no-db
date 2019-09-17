INSERT INTO recipe_users
( email, password)
VALUES
($1,$2)
returning *;