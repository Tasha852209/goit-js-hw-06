const categoriesEl = document.getElementById(`categories`);
const elItems = categoriesEl.querySelectorAll("li.item");
const countEl = elItems.length;
console.log("Number of categories: ", countEl);
elItems.forEach((element) => {
  const elTitle = element.querySelector("h2");
  const countElItems = element.querySelectorAll(`li`);
  console.log("Category: ", elTitle.textContent);
  console.log("Elements: ", countElItems.length);
});
console.log(elItems);
