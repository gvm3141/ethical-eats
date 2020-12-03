const express = require("express");
const recipes_db = require("./recipes.json");
const alternatives_db = require("./alternatives.json");

const app = express();

// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 8080;

app.set("view engine", "pug");

// serve static files from the `public` folder
app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.render("index", {
    title: "Ethical Eats",
    recipes: recipes_db.recipe_cards
  });
});

app.get("/recipe_card", (req, res) => {
  const recipe = recipes_db.recipe_cards.find(p => p.id == req.query.id);
  res.render("recipe_card", {
    title: `Recipe: ${recipe.name}`,
    recipe,
    alternatives: alternatives_db.alternatives
  });
});

app.listen(port, function() {
  console.log('Our app is running on http://localhost:' + port);
});
