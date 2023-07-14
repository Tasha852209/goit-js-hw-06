const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ulIngredients = document.querySelector(`#ingredients`);

const createEls = (ingredients) => {
  return ingredients.map((el) => {
    const ingredient = document.createElement("li");
    ingredient.textContent = el;
    ingredient.classList.add("item");
    return ingredient;
  });
};
const items = createEls(ingredients);
ulIngredients.append(...items);
