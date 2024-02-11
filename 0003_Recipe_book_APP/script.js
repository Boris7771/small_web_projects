const APY_KEY = "302e1da73aa94a64bb18e7af109bca04";

function displayRecipes(recipes) {
  const recipeListEl = document.getElementById("recipe-list");
  recipeListEl.innerHTML = "";
  recipes.forEach((recipe) => {
    const recipeItemEl = document.createElement("li");
    recipeItemEl.classList.add("recipe");

    recipeImageEl = document.createElement("img");
    recipeImageEl.src = recipe.image;
    recipeImageEl.alt = recipe.title;
    recipeItemEl.appendChild(recipeImageEl);

    // recipeTitleEl = document.createElement("h2");
    // recipeTitleEl.textContent = recipe.title;
    // recipeItemEl.appendChild(recipeTitleEl);
    recipeTitleEl = `<h2>${recipe.title}</h2>`;
    recipeItemEl.innerHTML += recipeTitleEl;
    recipeIngredientsEl = document.createElement("p");
    recipeIngredientsEl.innerHTML += `<strong>Ingredients:</strong> ${recipe.extendedIngredients
      .map((ingredient) => ingredient.original)
      .join(", ")}`;
    recipeItemEl.appendChild(recipeIngredientsEl);

    recipeLinkEl = document.createElement("a");
    recipeLinkEl.href = recipe.sourceUrl;
    recipeLinkEl.textContent = "View Recipe";
    recipeItemEl.appendChild(recipeLinkEl);
    recipeListEl.appendChild(recipeItemEl);
  });
}
async function getRecipes() {
  const response = await fetch(
    `https://api.spoonacular.com/recipes/random?number=5&apiKey=${APY_KEY}`
  );

  const data = await response.json();
  return data.recipes;
}

async function init() {
  const recipes = await getRecipes();
  displayRecipes(recipes);
}

init();
